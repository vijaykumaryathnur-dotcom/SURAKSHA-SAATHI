import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with required User-Agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `You are Suraksha Saathi (सुरक्षा साथी), an urgent cyber fraud first-response counselor and emergency advisor for Indian citizens.
Your mission is to provide calm, reassuring, and immediate step-by-step guidance to victims of cyber financial fraud, impersonation, digital arrest threats, sextortion, phishing, UPI scams, and device takeovers.

Core Behavioral Principles:
1. EMOTIONAL CALM & NO VICTIM BLAMING:
   - Citizens reaching out are terrified, panicked, and ashamed.
   - Never blame them for clicking a link or sharing information.
   - Validate that cybercriminals use sophisticated psychological manipulation, urgency, and fear.
   - Assure them: "Take a deep breath. You are not alone, and there are concrete steps we can take right now to secure your money and accounts."

2. IMMEDIATE ACTIONS BY SCENARIO:
   - Money Lost within the last 1-2 hours (UPI / NetBanking / Debit Card):
     * Emphasize the "Golden 1-Hour Window".
     * Urge them to call the National Cyber Crime Helpline at 1930 immediately.
     * Tell them to call their bank's 24x7 emergency helpline to freeze their debit card, net banking, or UPI ID.
     * Explain that 1930 coordinates with the Citizen Financial Cyber Fraud Reporting & Management System (CFCFRMS) to freeze the fraudster's mule account before funds are withdrawn.
   - Fake Police / CBI / Customs / "Digital Arrest" Video Call:
     * Declare clearly and emphatically: "There is NO legal concept of 'Digital Arrest' under Indian law. Indian police, CBI, ED, and courts NEVER conduct trials, issue warrants, or demand money transfers over Skype, WhatsApp, or video calls."
     * Tell them to hang up immediately, block the number, and dial 1930 or 112.
   - Malicious App or Screen Sharing (AnyDesk, TeamViewer, suspicious APK):
     * Step 1: Turn ON Airplane Mode immediately to sever the remote attacker's link.
     * Step 2: Uninstall the suspicious app or APK.
     * Step 3: From a different, clean device, change passwords for your bank accounts and email.
   - Phishing SMS / Fake Electricity Bill / Challan / KYC:
     * Tell them never to click the link or call numbers in the SMS.
     * Instruct them to report the fraudulent message on DoT's Chakshu portal at sancharsaathi.gov.in.

3. PRESERVE CRITICAL EVIDENCE:
   - Remind them NOT to delete chat messages, call records, SMS, scammer phone numbers, UPI reference IDs (UTR number - 12 digits), or bank transaction slips.
   - Guide them to take screenshots with timestamps.

4. OFFICIAL HELPLINES & CHANNELS:
   - National Helpline: 1930
   - Emergency Police: 112
   - Cybercrime Portal: https://cybercrime.gov.in
   - Telecom Chakshu (for reporting fraud calls/SMS): https://sancharsaathi.gov.in
   - National Consumer Helpline: 1915

5. FORMATTING & TONE:
   - Respond in the language of the user (support English, Hindi, Telugu, or mixed Hinglish/script).
   - Use structured bullet points, short clear sentences, and bold key numbers (like **1930**).
   - Keep answers focused, practical, and action-oriented.`;

// POST /api/chat - Multi-turn conversational guidance with Google Search Grounding
app.post('/api/chat', async (req, res) => {
  try {
    const { messages = [], query, language = 'en' } = req.body;

    if (!query && (!messages || messages.length === 0)) {
      return res.status(400).json({ error: 'Query or messages history is required' });
    }

    const lastMessage = query || messages[messages.length - 1]?.text || '';

    // Convert previous messages to Gemini format (user / model)
    const geminiContents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    // Include recent history (up to last 10 turns to avoid exceeding context)
    const historySlice = messages.slice(-10);
    for (const msg of historySlice) {
      if (msg.text && (msg.role === 'user' || msg.role === 'model')) {
        geminiContents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }],
        });
      }
    }

    // If query was passed separately and wasn't the last message
    if (query && (!historySlice.length || historySlice[historySlice.length - 1]?.text !== query)) {
      geminiContents.push({
        role: 'user',
        parts: [{ text: `[Language preference: ${language}] ${query}` }],
      });
    }

    // Call Gemini 3.8 Flash with Google Search grounding
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: geminiContents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ googleSearch: {} }],
      },
    });

    const responseText = response.text || 'I am here to help you secure your account. Please dial 1930 immediately if money was transferred.';

    // Extract search grounding metadata and chunks
    const sources: Array<{ title: string; url: string }> = [];
    const searchQueries: string[] = [];

    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    if (groundingMetadata?.groundingChunks && Array.isArray(groundingMetadata.groundingChunks)) {
      for (const chunk of groundingMetadata.groundingChunks) {
        if (chunk.web?.uri) {
          const url = chunk.web.uri;
          let title = chunk.web.title;
          if (!title) {
            try {
              title = new URL(url).hostname.replace(/^www\./, '');
            } catch {
              title = 'Official Source';
            }
          }
          // Avoid duplicate URLs
          if (!sources.some((s) => s.url === url)) {
            sources.push({ title, url });
          }
        }
      }
    }

    if (groundingMetadata?.webSearchQueries && Array.isArray(groundingMetadata.webSearchQueries)) {
      searchQueries.push(...groundingMetadata.webSearchQueries);
    }

    return res.json({
      text: responseText,
      sources,
      searchQueries,
    });
  } catch (error: any) {
    console.error('Error or rate limit in /api/chat:', error?.message || error);

    // Provide emergency first-responder guidance so citizens are NEVER stranded during quota or network issues
    const { query = '', language = 'en' } = req.body || {};
    const q = (query || '').toLowerCase();

    let emergencyText = '';
    const fallbackSources = [
      { title: 'National Cyber Crime Reporting Portal (MHA)', url: 'https://cybercrime.gov.in' },
      { title: 'Sanchar Saathi Chakshu Fraud Reporting (DoT)', url: 'https://sancharsaathi.gov.in' },
      { title: 'RBI Cyber Security & Consumer Education', url: 'https://rbi.org.in' }
    ];

    if (q.includes('cbi') || q.includes('arrest') || q.includes('police') || q.includes('skype') || q.includes('video') || q.includes('customs')) {
      emergencyText = language === 'hi'
        ? `**अत्यंत महत्वपूर्ण चेतावनी: डिजिटल अरेस्ट एक स्कैम है!**\n\n• **कॉल तुरंत काट दें**: भारतीय कानून में 'डिजिटल अरेस्ट' का कोई प्रावधान नहीं है। CBI, पुलिस या कस्टम कभी भी स्काइप या व्हाट्सएप वीडियो कॉल पर पूछताछ या गिरफ्तारी नहीं करते।\n• **पैसे कभी ट्रांसफर न करें**: कोई भी 'सिक्योरिटी डिपॉजिट' या 'सत्यापन खाता' पूरी तरह फर्जी है।\n• **तुरंत रिपोर्ट करें**: राष्ट्रीय साइबर हेल्पलाइन **1930** या पुलिस **112** पर कॉल करें और **cybercrime.gov.in** पर शिकायत दर्ज करें।`
        : language === 'te'
        ? `**ముఖ్యమైన హెచ్చరిక: డిజిటల్ అరెస్ట్ అనేది మోసం!**\n\n• **వెంటనే కాల్ కట్ చేయండి**: భారత చట్టంలో 'డిజిటల్ అరెస్ట్' అనే విధానం లేదు. CBI, పోలీసులు లేదా కస్టమ్స్ అధికారులు స్కైప్ లేదా వాట్సాప్ వీడియో కాల్ ద్వారా విచారణ చేయరు.\n• **డబ్బు పంపవద్దు**: ఎటువంటి 'ధృవీకరణ ఖాతా' లేదా 'సెక్యూరిటీ డిపాజిట్' కు డబ్బు బదిలీ చేయవద్దు.\n• **వెంటనే ఫిర్యాదు చేయండి**: జాతీయ సైబర్ హెల్ప్‌లైన్ **1930** లేదా **112** కు కాల్ చేయండి మరియు **cybercrime.gov.in** లో నమోదు చేయండి.`
        : `**CRITICAL WARNING: "Digital Arrest" is 100% a Scam!**\n\n• **Hang up immediately**: There is NO legal provision for "Digital Arrest" under Indian law. Police, CBI, ED, and Judges NEVER conduct trials, interrogate, or issue warrants over Skype, WhatsApp, or video calls.\n• **Do NOT transfer any money**: Any demand to transfer funds to a "Supreme Court verification account" or "RBI clearance account" is fraudulent.\n• **Report right now**: Dial National Cyber Helpline **1930** or Police Emergency **112**, and file an official complaint on **cybercrime.gov.in**.\n• **Preserve Evidence**: Take screenshots of the phone number, WhatsApp profile, and video call logs without deleting them.`;
    } else if (q.includes('money') || q.includes('upi') || q.includes('bank') || q.includes('transfer') || q.includes('debit') || q.includes('रुपये') || q.includes('डబ్బు')) {
      emergencyText = language === 'hi'
        ? `**गोल्डन आवर (पहले 60 मिनट) में तुरंत कार्रवाई करें:**\n\n1. **तुरंत 1930 पर कॉल करें**: नेशनल साइबर हेल्पलाइन 1930 आपके बैंक के साथ मिलकर जालसाज के खाते में फंड फ्रीज कराने की प्रक्रिया शुरू करती है।\n2. **बैंक हेल्पलाइन पर कार्ड और UPI ब्लॉक करें**: अपने बैंक के 24x7 इमरजेंसी नंबर पर कॉल करके तुरंत अपने डेबिट कार्ड और नेट बैंकिंग को ब्लॉक कराएं।\n3. **12 अंकों का UTR नंबर नोट रखें**: बैंक से मिले SMS में 12-अंकों का UPI UTR/ट्रांजेक्शन रेफरेंस नंबर नोट कर लें।\n4. **cybercrime.gov.in पर रिपोर्ट दर्ज करें**: औपचारिक पावती (acknowledgement) सुरक्षित रखें।`
        : `**CRITICAL ACTION (Golden 1-Hour Window):**\n\n1. **Call 1930 IMMEDIATELY**: The National Cyber Crime Helpline connects to the CFCFRMS portal to coordinate with banks to freeze recipient mule accounts before the scammer withdraws the money.\n2. **Call your Bank's 24x7 Fraud Desk**: Immediately block your debit/credit card, UPI ID, and internet banking.\n3. **Locate your 12-digit UTR Number**: Check your bank SMS or UPI transaction receipt for the 12-digit Reference/UTR number.\n4. **Register formal complaint on cybercrime.gov.in**: Download and print the acknowledgment number for police records.`;
    } else if (q.includes('apk') || q.includes('app') || q.includes('download') || q.includes('anydesk') || q.includes('teamviewer')) {
      emergencyText = `**EMERGENCY DEVICE DEFENSE:**\n\n1. **Turn ON Airplane Mode IMMEDIATELY**: Disconnect Wi-Fi and mobile data so the attacker loses remote control of your device.\n2. **Uninstall the Malicious Application**: Go to Settings > Apps > find the suspicious APK, AnyDesk, or TeamViewer and click "Uninstall".\n3. **Change Banking Passwords from a DIFFERENT Device**: Use a family member's clean phone or computer to reset your net-banking password, email, and UPI PIN.\n4. **Check SMS forwarding permissions**: Ensure no unauthorized apps have SMS read permissions.`;
    } else if (q.includes('sms') || q.includes('electricity') || q.includes('bill') || q.includes('link') || q.includes('challan')) {
      emergencyText = `**PHISHING & FRAUD SMS ADVISORY:**\n\n1. **Do NOT click the link or call the number in the SMS**: Electricity boards and traffic departments never send disconnection or court notices from personal 10-digit mobile numbers.\n2. **Report on DoT Chakshu**: Open **sancharsaathi.gov.in** and click on "Chakshu - Report Suspected Fraud Communication" to have the spammer's SIM disconnected.\n3. **Block the sender**: Mark the message as spam in your phone's SMS app.\n4. **Verify only on official portals**: If you have actual electricity bills, check only on your official state discom app or electricity board website.`;
    } else {
      emergencyText = `**Suraksha Saathi Emergency Response:**\n\n• If financial fraud occurred: Dial **1930** immediately to report the transaction within the golden window.\n• If you are receiving threats or fake legal notices: Hang up, block the number, and dial **112**.\n• Official cybercrime reporting portal: **cybercrime.gov.in**.\n• Report spam SMS and calls on the Chakshu portal: **sancharsaathi.gov.in**.`;
    }

    return res.json({
      text: emergencyText,
      sources: fallbackSources,
      searchQueries: [query || 'Cybercrime Helpline 1930 India official guidance'],
      isEmergencyProtocol: true,
    });
  }
});

// Setup Vite middleware in development or static serving in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Suraksha Saathi server running on http://0.0.0.0:${PORT} (env: ${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
