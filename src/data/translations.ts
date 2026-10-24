export type Language = 'en' | 'hi' | 'te';

export interface ScenarioStep {
  id: string;
  title: string;
  instruction: string;
  priority: 'critical' | 'high' | 'normal';
  tip?: string;
  actionUrl?: string;
  actionLabel?: string;
  phoneCall?: string;
}

export interface ScenarioDefinition {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  steps: ScenarioStep[];
  evidenceKeys: string[];
}

export interface TranslationDictionary {
  brandName: string;
  tagline: string;
  nav: {
    home: string;
    getHelp: string;
    timeline: string;
    scamCheck: string;
    familyAlert: string;
    evidence: string;
    officialHelp: string;
    // Backwards compatibility aliases
    howItWorks?: string;
    realityCheck?: string;
    resources?: string;
    getHelpNow?: string;
  };
  hero: {
    badge: string;
    headline: string;
    supporting: string;
    getHelpBtn: string;
    guideBtn: string;
    trustText: string;
    urgentBannerTitle: string;
    urgentBannerBody: string;
    call1930: string;
    openPortal: string;
  };
  immediateStrip: {
    heading: string;
    subheading: string;
    action1Title: string;
    action1Desc: string;
    action2Title: string;
    action2Desc: string;
    action3Title: string;
    action3Desc: string;
  };
  howItWorks: {
    sectionTitle: string;
    sectionSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    whyMattersTitle: string;
    whyMattersDesc: string;
  };
  timeline: {
    sectionTitle: string;
    sectionSubtitle: string;
    stage1Badge: string;
    stage1Title: string;
    stage1Desc: string;
    stage1Points: string[];
    stage2Badge: string;
    stage2Title: string;
    stage2Desc: string;
    stage2Points: string[];
    stage3Badge: string;
    stage3Title: string;
    stage3Desc: string;
    stage3Points: string[];
    disclaimer: string;
  };
  realityCheck: {
    sectionTitle: string;
    sectionSubtitle: string;
    intro: string;
    questions: {
      id: string;
      label: string;
      description: string;
    }[];
    resultTitle: string;
    zeroSignals: string;
    oneSignal: string;
    multiSignals: string;
    riskIndicatorNote: string;
    takeActionBtn: string;
    resetBtn: string;
  };
  familyAlert: {
    sectionTitle: string;
    sectionSubtitle: string;
    instructions: string;
    recipientLabel: string;
    recipients: { id: string; label: string }[];
    customNotePlaceholder: string;
    previewLabel: string;
    copyBtn: string;
    copiedNotice: string;
    whatsappBtn: string;
    privacyNotice: string;
  };
  evidenceAssistant: {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    selectScenarioLabel: string;
    checklistTitle: string;
    voluntaryFormTitle: string;
    formNotice: string;
    dateLabel: string;
    timeLabel: string;
    amountLabel: string;
    bankLabel: string;
    utrLabel: string;
    suspectContactLabel: string;
    platformLabel: string;
    notesLabel: string;
    downloadBtn: string;
    printBtn: string;
    resetBtn: string;
    items: { [key: string]: string };
  };
  resources: {
    sectionTitle: string;
    sectionSubtitle: string;
    disclaimer: string;
    items: {
      title: string;
      role: string;
      contact: string;
      description: string;
      url?: string;
      isPhone?: boolean;
      priorityTag: string;
    }[];
  };
  responseModal: {
    stepOf: string;
    backBtn: string;
    nextBtn: string;
    restartBtn: string;
    closeBtn: string;
    completedLabel: string;
    markDone: string;
    readAloud: string;
    stopAudio: string;
    warningHeader: string;
    needOfficialAssistance: string;
    chooseScenarioTitle: string;
    chooseScenarioSubtitle: string;
  };
  scenarios: { [key: string]: ScenarioDefinition };
  footer: {
    independentNotice: string;
    prototypeDisclaimer: string;
    privacyCommitment: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    brandName: 'Suraksha Saathi',
    tagline: 'The right help, when every second matters.',
    nav: {
      home: 'Home',
      getHelp: 'Get Help',
      timeline: 'First Hour',
      scamCheck: 'Scam Check',
      familyAlert: 'Family Alert',
      evidence: 'Evidence',
      officialHelp: 'Official Help',
      // Aliases
      howItWorks: 'How It Works',
      realityCheck: 'Scam Check',
      resources: 'Official Help',
      getHelpNow: 'I Need Help',
    },
    hero: {
      badge: 'Public Assistance Tool',
      headline: "Think you've been scammed? Let's figure out what to do next.",
      supporting: 'Choose what happened. Follow simple steps. Find the right help.',
      getHelpBtn: 'I Need Help',
      guideBtn: 'Learn How to Stay Safe',
      trustText: 'No account required · No personal credentials collected · 100% Client-side privacy',
      urgentBannerTitle: 'Critical Emergency Helplines (India)',
      urgentBannerBody: 'If money was transferred recently, calling 1930 immediately gives the best chance to freeze bank transactions.',
      call1930: 'Dial 1930 (Cybercrime Helpline)',
      openPortal: 'Visit cybercrime.gov.in',
    },
    immediateStrip: {
      heading: 'Choose what happened',
      subheading: 'Select the situation that best matches to get immediate step-by-step guidance:',
      action1Title: 'Money Lost',
      action1Desc: 'I sent money and think it was a scam.',
      action2Title: 'Account at Risk',
      action2Desc: 'I shared an OTP, password, or account details.',
      action3Title: 'Suspicious Contact',
      action3Desc: 'Someone called, messaged, or sent me a suspicious link.',
    },
    howItWorks: {
      sectionTitle: 'A Structured Path From Confusion to Control',
      sectionSubtitle: 'When online fraud occurs, panic is the scammer’s greatest tool. Suraksha Saathi restores calm through structured first response.',
      step1Title: '01. Tell us what happened',
      step1Desc: 'Select your exact situation from 6 recognized cyber fraud categories. No personal credentials needed.',
      step2Title: '02. Follow your immediate action plan',
      step2Desc: 'Get a prioritized, step-by-step checklist to cut off unauthorized access and prevent secondary fraud.',
      step3Title: '03. Connect with official channels',
      step3Desc: 'Prepare clean evidence and directly route complaints to 1930, your bank branch, and cybercrime.gov.in.',
      whyMattersTitle: 'Why rapid first response matters',
      whyMattersDesc: 'Banks and payment intermediaries operate fraud-freeze rails within the first few golden hours. Quick action limits further damage, although full financial recovery can never be guaranteed by any system.',
    },
    timeline: {
      sectionTitle: 'The First Hour: Crucial Response Window',
      sectionSubtitle: 'Practical priorities for the critical moments following an incident. These are operational recommendations, not guarantees.',
      stage1Badge: 'Stage 1',
      stage1Title: 'Act Now (0 to 15 Minutes)',
      stage1Desc: 'Sever ongoing financial access and stop unauthorized activity.',
      stage1Points: [
        'Call your bank or card provider customer support to freeze the account/card.',
        'If an app is suspicious, turn on Airplane mode or disconnect Wi-Fi and mobile data.',
        'Do NOT send any "verification fee" or "recovery fee" to anyone.',
      ],
      stage2Badge: 'Stage 2',
      stage2Title: 'Report and Secure (15 to 60 Minutes)',
      stage2Desc: 'Formalize official reporting on national infrastructure.',
      stage2Points: [
        'Dial 1930 immediately to log financial cyber fraud in the National Cyber Crime Reporting Portal.',
        'Submit the formal incident complaint on https://cybercrime.gov.in/.',
        'Note down your National Cybercrime complaint acknowledgment number.',
      ],
      stage3Badge: 'Stage 3',
      stage3Title: 'Follow Up (Day 1 Onward)',
      stage3Desc: 'Preserve evidence, audit credentials, and protect family.',
      stage3Points: [
        'Export transaction statements, SMS logs, WhatsApp chats, and recipient UPI handles.',
        'Change master passwords and enable biometric MFA from a verified secure device.',
        'Warn family and close friends that your credentials may have been impersonated.',
      ],
      disclaimer: 'Notice: These priorities represent practical security guidance. No platform can guarantee fund recovery or reverse executed blockchain/cash transactions.',
    },
    realityCheck: {
      sectionTitle: 'Five-Question Scam Reality Check',
      sectionSubtitle: 'Unsure if an interaction was legitimate? Check the universal hallmarks of cyber social engineering.',
      intro: 'Tick any statement that describes your recent conversation, message, or app interaction:',
      questions: [
        {
          id: 'urgency',
          label: 'Extreme Pressure to Act Immediately',
          description: 'The caller or message demanded urgent action within minutes, warning that your bank account or phone number will be blocked immediately.',
        },
        {
          id: 'credential',
          label: 'Request for OTP, PIN, Password, or Test Transfer',
          description: 'They asked you to share a one-time password, type your UPI PIN to "receive money", or scan a QR code.',
        },
        {
          id: 'coercion',
          label: 'Threat of Arrest or Legal Action ("Digital Arrest")',
          description: 'They claimed to be Police, CBI, Customs, or ED on video call demanding you stay online, inspect bank balances, or deposit security funds.',
        },
        {
          id: 'remote_access',
          label: 'Request to Install Remote Control Software',
          description: 'They instructed you to install AnyDesk, TeamViewer, QuickSupport, or download an APK file from outside Google Play Store.',
        },
        {
          id: 'greed',
          label: 'Promise of Guaranteed Profits, Refunds, or Fund Recovery',
          description: 'They offered guaranteed stock returns, high-paying YouTube like tasks, or claimed an agent can recover your stolen money for an upfront fee.',
        },
      ],
      resultTitle: 'Warning Assessment',
      zeroSignals: 'No common fraud patterns selected. Still, always verify bank communications through numbers printed on the back of your physical card.',
      oneSignal: '1 Warning Sign Detected: Legitimate organizations never apply arbitrary deadlines or request one-time passwords.',
      multiSignals: 'Multiple High-Risk Indicators Detected: This strongly resembles active social engineering and financial deception.',
      riskIndicatorNote: 'Warning signs indicate behavioral risk, not definitive legal proof. If credentials were exchanged, treat as compromised.',
      takeActionBtn: 'Open Tailored Response Plan',
      resetBtn: 'Clear Checklist',
    },
    familyAlert: {
      sectionTitle: 'Family & Contacts Safety Alert Generator',
      sectionSubtitle: 'Prevent secondary scams. Fraudsters often impersonate victims to borrow emergency funds from relatives.',
      instructions: 'Choose recipient type, customize if desired, and copy the alert to your messaging app. No contacts or personal information are collected.',
      recipientLabel: 'Select Recipient / Audience:',
      recipients: [
        { id: 'family', label: 'Parents / Immediate Family' },
        { id: 'group', label: 'Family WhatsApp Group' },
        { id: 'friend', label: 'Close Friend / Colleague' },
      ],
      customNotePlaceholder: 'Optional: Add brief detail (e.g. "My SIM was swapped" or "Ignore requests for ₹5,000")',
      previewLabel: 'Ready-to-Share Safety Message:',
      copyBtn: 'Copy Message to Clipboard',
      copiedNotice: 'Copied to clipboard!',
      whatsappBtn: 'Share via WhatsApp',
      privacyNotice: '100% Client-Side: Generated entirely inside your browser. Never transmitted to external servers.',
    },
    evidenceAssistant: {
      sectionTitle: 'Evidence Preparation Assistant',
      sectionSubtitle: 'Assemble clean, structured records before submitting to your bank or cybercrime.gov.in.',
      description: 'Having precise timestamps, UTR references, and suspect handles increases the efficiency of bank and police investigators.',
      selectScenarioLabel: 'Incident Context:',
      checklistTitle: 'Essential Evidence Checklist (Tick what you have gathered):',
      voluntaryFormTitle: 'Incident Details (All fields optional - stored locally in memory only):',
      formNotice: 'Never enter full bank account passwords, ATM PINs, or confidential credentials.',
      dateLabel: 'Date of Incident',
      timeLabel: 'Approximate Time',
      amountLabel: 'Amount Involved (₹)',
      bankLabel: 'Your Bank / Payment App',
      utrLabel: 'Transaction Reference / UPI UTR / Ref No.',
      suspectContactLabel: 'Suspect Phone / Handle / UPI ID',
      platformLabel: 'Platform (e.g. WhatsApp, Telegram, Call, Website)',
      notesLabel: 'Brief Incident Sequence Notes',
      downloadBtn: 'Download Incident Summary (.txt)',
      printBtn: 'Print / Save Official-Ready Dossier',
      resetBtn: 'Clear All Fields',
      items: {
        item_bank_sms: 'Bank debit SMS with timestamp and account reference',
        item_upi_utr: '12-digit UPI UTR number or bank transaction reference ID',
        item_chat_history: 'Complete chat screenshots showing suspect demands or instructions',
        item_phone_number: 'Suspect phone number, caller ID screenshot, or Truecaller details',
        item_fraud_account: 'Suspect beneficiary account number, IFSC, or UPI VPA handle',
        item_app_link: 'Link of phishing website or name of remote access app installed',
        item_fir_ack: 'Complaint acknowledgment number received from 1930 / cybercrime portal',
      },
    },
    resources: {
      sectionTitle: 'Official Government & Regulatory Resources',
      sectionSubtitle: 'Always verify URLs before clicking. Bookmark and use these official Indian portals.',
      disclaimer: 'Suraksha Saathi is an independent civic safety prototype. We are not officially affiliated with or endorsed by government agencies.',
      items: [
        {
          title: 'National Cyber Crime Reporting Portal',
          role: 'Primary Government Portal',
          contact: 'cybercrime.gov.in',
          description: 'Official Ministry of Home Affairs (MHA) portal to lodge complaints for all cyber crimes, financial fraud, and cyber harassment.',
          url: 'https://cybercrime.gov.in/',
          priorityTag: 'Official Filing',
        },
        {
          title: 'National Cybercrime Helpline',
          role: 'Immediate Financial Fraud Line',
          contact: '1930',
          description: 'Citizen Financial Cyber Fraud Reporting and Management System (CFCFRMS). Call within 2 hours for high-probability account freezes.',
          url: 'tel:1930',
          isPhone: true,
          priorityTag: '24x7 Toll-Free',
        },
        {
          title: 'Sanchar Saathi & Chakshu',
          role: 'Department of Telecommunications (DoT)',
          contact: 'sancharsaathi.gov.in',
          description: 'Report suspected fraudulent calls, SMS, WhatsApp messages, or check mobile connections registered in your name (TAFCOP).',
          url: 'https://www.sancharsaathi.gov.in/',
          priorityTag: 'Telecom Safety',
        },
        {
          title: 'RBI Sachet Portal',
          role: 'Reserve Bank of India',
          contact: 'sachet.rbi.org.in',
          description: 'Report illegal deposit-taking schemes, unauthorized lending apps, and unregistered financial entities.',
          url: 'https://sachet.rbi.org.in/',
          priorityTag: 'Banking & Lending',
        },
      ],
    },
    responseModal: {
      stepOf: 'Step {current} of {total}',
      backBtn: 'Previous Step',
      nextBtn: 'Next Step',
      restartBtn: 'Start Over',
      closeBtn: 'Exit to Overview',
      completedLabel: 'Step Complete',
      markDone: 'Mark this step as completed',
      readAloud: 'Read Step Aloud',
      stopAudio: 'Stop Audio',
      warningHeader: 'Safety Alert',
      needOfficialAssistance: 'Official Reporting Gateway',
      chooseScenarioTitle: 'What happened?',
      chooseScenarioSubtitle: 'Select the statement that best describes the situation to receive an immediate response sequence:',
    },
    scenarios: {
      money_sent: {
        id: 'money_sent',
        title: 'I sent money to a suspected scammer',
        shortDesc: 'Unauthorized UPI, IMPS, NEFT, or card transaction occurred.',
        iconName: 'CreditCard',
        evidenceKeys: ['item_bank_sms', 'item_upi_utr', 'item_fraud_account', 'item_chat_history'],
        steps: [
          {
            id: 'bank_alert',
            title: 'Contact your bank or payment service immediately',
            instruction: 'Call the official customer helpline of your bank or UPI app immediately (Google Pay, PhonePe, Paytm, BHIM). Request that the transaction be disputed, report it as fraudulent, and ask them to place a temporary freeze on your net banking credentials to prevent subsequent debits.',
            priority: 'critical',
            tip: 'Use numbers printed on the physical back of your ATM card or in your official mobile banking application. Never search Google for "bank customer care numbers" as fake sponsor ads often lead to scammers.',
          },
          {
            id: 'call_1930',
            title: 'Dial 1930 Cybercrime Helpline (India)',
            instruction: 'In India, dial 1930 as quickly as possible. This connects to the National Cybercrime Citizen Financial Reporting system. Provide the transaction amount, your bank account number, the scammer’s UPI ID/bank account, and the 12-digit UTR reference.',
            priority: 'critical',
            phoneCall: '1930',
            actionLabel: 'Call 1930 Helpline',
            tip: 'The first 2 to 3 hours are known as the "golden window" where interbank freeze requests can stop the money before it is withdrawn from an ATM.',
          },
          {
            id: 'cybercrime_portal',
            title: 'File a formal report on cybercrime.gov.in',
            instruction: 'Visit the official National Cyber Crime Reporting Portal. Register under "Report Financial Fraud", enter incident details, attach transaction statements and chat screenshots, and obtain a formal acknowledgment number.',
            priority: 'high',
            actionUrl: 'https://cybercrime.gov.in/',
            actionLabel: 'Open Cybercrime.gov.in',
            tip: 'Keep your acknowledgment number safe. Your bank branch manager will require it when you submit a written dispute letter.',
          },
          {
            id: 'preserve_records',
            title: 'Preserve comprehensive transaction evidence',
            instruction: 'Export bank mini-statements, save original SMS notifications, take full unedited screenshots of UPI receipts with UTR visible, and save WhatsApp/Telegram message threads and caller numbers.',
            priority: 'high',
            tip: 'Do not delete chat threads or block the scammer yet if keeping the conversation open helps identify their ongoing accounts for authorities.',
          },
          {
            id: 'beware_recovery_scam',
            title: 'CRITICAL: Never pay anyone promising "guaranteed recovery"',
            instruction: 'Be vigilant against recovery scammers who post on Instagram, X (Twitter), or Google claiming to be "ethical hackers" or "cyber lawyers" who can retrieve your lost money for an advance fee. These are secondary scams designed to victimize you twice.',
            priority: 'critical',
            tip: 'No legitimate agency, police officer, or bank ever asks for an advance fee or cryptocurrency payment to retrieve stolen money.',
          },
        ],
      },
      credential_leak: {
        id: 'credential_leak',
        title: 'I shared an OTP, password, or banking details',
        shortDesc: 'Confidential PIN, banking password, or verification code was divulged.',
        iconName: 'Key',
        evidenceKeys: ['item_bank_sms', 'item_phone_number', 'item_chat_history'],
        steps: [
          {
            id: 'freeze_banking',
            title: 'Immediately freeze affected net banking and cards',
            instruction: 'If debit/credit card numbers or CVV were given, block the card immediately via your bank’s official mobile app or SMS blocking service. If net banking password or OTP was shared, request an immediate freeze on net banking login.',
            priority: 'critical',
            tip: 'Most Indian banks support immediate SMS blocking (e.g. sending "BLOCK" to their designated shortcode).',
          },
          {
            id: 'change_passwords',
            title: 'Change password from a verified, trusted device',
            instruction: 'From a secure device (not one where an unknown APK or screen-sharing app was installed), change passwords for your primary email, banking portal, and password managers. Use a strong, unique 14+ character password.',
            priority: 'critical',
            tip: 'Never reuse the leaked password on any other account.',
          },
          {
            id: 'revoke_sessions',
            title: 'Log out of all existing sessions & enable MFA',
            instruction: 'Go to your Google Account, Apple ID, WhatsApp, and banking security settings. Select "Log out of all other sessions / devices". Enable Multi-Factor Authentication (MFA) using an authenticator app rather than SMS where supported.',
            priority: 'high',
            tip: 'Review linked devices in WhatsApp Settings > Linked Devices and immediately log out any unfamiliar computers.',
          },
          {
            id: 'sim_swap_vigilance',
            title: 'Check mobile network status (SIM Swap check)',
            instruction: 'If your mobile network signal suddenly drops to "No Service" unexpectedly, contact your telecom operator immediately from another phone. Scammers sometimes forge identity documents to initiate unauthorized SIM swaps.',
            priority: 'high',
            tip: 'Telecom operators in India (Airtel, Jio, Vi) have 24/7 helplines to block SIM swapping attempts.',
          },
          {
            id: 'report_leak',
            title: 'Report credential compromise officially',
            instruction: 'Log an incident on cybercrime.gov.in under identity theft or unauthorized account access to establish an official paper trail.',
            priority: 'normal',
            actionUrl: 'https://cybercrime.gov.in/',
            actionLabel: 'Report on Cybercrime Portal',
          },
        ],
      },
      malicious_app: {
        id: 'malicious_app',
        title: 'I clicked a suspicious link or installed an unfamiliar app',
        shortDesc: 'Downloaded an APK, installed remote screen-share, or clicked phishing URL.',
        iconName: 'Smartphone',
        evidenceKeys: ['item_app_link', 'item_phone_number', 'item_chat_history'],
        steps: [
          {
            id: 'disconnect_network',
            title: 'Immediately disconnect device from the internet',
            instruction: 'Turn on Airplane Mode immediately or turn off Wi-Fi and mobile data. This severs the remote attacker’s connection and stops them from transmitting your screen, keystrokes, or SMS OTPs.',
            priority: 'critical',
            tip: 'Do not power off until you verify whether key data needs offline backup, but keep wireless radios disabled.',
          },
          {
            id: 'secure_from_secondary',
            title: 'Use another clean phone or computer to secure accounts',
            instruction: 'Do NOT use the infected phone to log into your bank or change passwords. Use a family member’s trusted device or separate PC to change your email and banking passwords and freeze payment access.',
            priority: 'critical',
            tip: 'Assume the infected device’s screen and keystrokes may have been visible to the scammer.',
          },
          {
            id: 'audit_apps_permissions',
            title: 'Audit Accessibility and Device Admin permissions',
            instruction: 'On Android, check Settings > Accessibility and Settings > Security > Device Admin Apps. Look for suspicious apps (often disguised as "Govt Support", "Electricity Update", "APK", or remote tools like AnyDesk). Revoke permissions and uninstall.',
            priority: 'high',
            tip: 'If an app prevents uninstallation or hides its icon, boot your phone into Safe Mode to remove it.',
          },
          {
            id: 'factory_reset_consideration',
            title: 'Consider a clean factory reset if deep malware was installed',
            instruction: 'If the app requested root privileges, installed malicious configuration profiles, or continues showing unauthorized popups, perform a full device factory data reset after backing up personal photos.',
            priority: 'high',
            tip: 'Ensure you know your Google/Apple account password before resetting to complete setup afterwards.',
          },
          {
            id: 'report_chakshu',
            title: 'Report malicious link on Chakshu portal',
            instruction: 'Submit the malicious URL, SMS sender ID, or phone number to the Department of Telecommunications Chakshu facility on Sanchar Saathi.',
            priority: 'normal',
            actionUrl: 'https://www.sancharsaathi.gov.in/',
            actionLabel: 'Report on Chakshu',
          },
        ],
      },
      blackmail_threat: {
        id: 'blackmail_threat',
        title: 'Someone is threatening me or demanding money',
        shortDesc: 'Fake police threat ("Digital Arrest"), extortion, or video blackmail.',
        iconName: 'ShieldAlert',
        evidenceKeys: ['item_phone_number', 'item_chat_history', 'item_fraud_account'],
        steps: [
          {
            id: 'stop_payment',
            title: 'DO NOT send money or agree to payment demands',
            instruction: 'Scammers will never stop once paid. Yielding to demands or paying a "fine" or "bail money" only prompts them to demand larger amounts.',
            priority: 'critical',
            tip: 'Take a deep breath. You are dealing with organized extortionists who manipulate fear and panic.',
          },
          {
            id: 'digital_arrest_myth',
            title: 'Understand: "Digital Arrest" DOES NOT EXIST in Indian Law',
            instruction: 'No Indian law enforcement agency (Police, CBI, Enforcement Directorate, Customs, or Supreme Court) ever conducts interrogations, trials, or "digital arrests" via Skype, WhatsApp video, or phone calls. No agency demands transfer of funds to "verification accounts".',
            priority: 'critical',
            tip: 'Scammers frequently wear fake police uniforms and display counterfeit letterheads. Do not be intimidated by their backdrop.',
          },
          {
            id: 'confide_in_trusted',
            title: 'Immediately confide in a trusted family member or mentor',
            instruction: 'Isolation is the scammer’s weapon. They will order you not to tell your spouse, parents, or friends. Break their isolation tactic immediately by talking to someone you trust.',
            priority: 'high',
            tip: 'Sharing the burden with a calm third party instantly helps puncture the illusion of authority.',
          },
          {
            id: 'preserve_threats',
            title: 'Quietly preserve records of calls and demands',
            instruction: 'Screenshot threat messages, record caller phone numbers, take note of payment bank accounts provided, and save call logs.',
            priority: 'high',
            tip: 'If intimate image blackmail (sextortion) is involved, do not delete the evidence before filing an official report.',
          },
          {
            id: 'contact_authorities',
            title: 'Report to 1930 / cybercrime.gov.in and local police',
            instruction: 'File an immediate complaint on cybercrime.gov.in under Women/Child safety or Cyber Blackmail. If there is immediate threat to your physical safety, call emergency 112.',
            priority: 'critical',
            actionUrl: 'https://cybercrime.gov.in/',
            actionLabel: 'Report Cyber Extortion',
            phoneCall: '112',
          },
        ],
      },
      suspicious_message: {
        id: 'suspicious_message',
        title: 'I received a suspicious call, message, or email',
        shortDesc: 'Lottery claim, courier parcel alert, job offer, or bank KYC notice.',
        iconName: 'AlertTriangle',
        evidenceKeys: ['item_phone_number', 'item_app_link', 'item_chat_history'],
        steps: [
          {
            id: 'do_not_engage',
            title: 'Do not click links, download files, or respond',
            instruction: 'Avoid clicking links or replying to suspicious messages. Even responding with "Stop" confirms that your mobile number is active to automated spam engines.',
            priority: 'critical',
            tip: 'Banks will never send links asking you to update PAN, Aadhaar, or KYC details on third-party domains.',
          },
          {
            id: 'verify_independently',
            title: 'Verify claims through verified official channels',
            instruction: 'If the caller claims your electricity will be disconnected or an unpaid package is held, look up the official utility or courier website independently and check your account status.',
            priority: 'high',
            tip: 'Never call back the number that sent the alert or use the phone numbers embedded inside the suspicious SMS.',
          },
          {
            id: 'report_chakshu_dot',
            title: 'Report the number on Chakshu (Sanchar Saathi)',
            instruction: 'The Department of Telecommunications allows citizens to report suspected fraud communications on Chakshu. This helps block the scammer’s SIM cards and handset IMEIs across all telecom networks in India.',
            priority: 'high',
            actionUrl: 'https://www.sancharsaathi.gov.in/',
            actionLabel: 'Report on Chakshu Portal',
          },
          {
            id: 'block_and_flag',
            title: 'Block and report on your messaging platform',
            instruction: 'Use the native "Block & Report Spam" feature in WhatsApp, Truecaller, or your phone’s default dialer.',
            priority: 'normal',
            tip: 'If you already shared financial information or sent funds, immediately switch to the "Money sent" response flow.',
          },
        ],
      },
      helping_someone: {
        id: 'helping_someone',
        title: 'I am helping a friend or family member',
        shortDesc: 'A loved one or colleague has been targeted and needs supportive guidance.',
        iconName: 'Users',
        evidenceKeys: ['item_bank_sms', 'item_upi_utr', 'item_chat_history'],
        steps: [
          {
            id: 'reassure_and_calm',
            title: 'Stay calm and avoid blame or shaming',
            instruction: 'Victims of cyber scams experience intense shame, guilt, and shock. Blaming them ("How could you believe that?") causes withdrawal and delays critical reporting. Reassure them that highly sophisticated syndicates deceive thousands of educated people every day.',
            priority: 'critical',
            tip: 'Your empathetic, composed support is the single most valuable asset right now.',
          },
          {
            id: 'assist_immediate_banking',
            title: 'Help them contact their bank and dial 1930',
            instruction: 'Sit with them, open their bank’s official emergency line, and help them report unauthorized transactions. If within 2 hours, help them dial 1930 and state the exact transaction details.',
            priority: 'critical',
            phoneCall: '1930',
            actionLabel: 'Call 1930 With Them',
          },
          {
            id: 'gather_evidence_together',
            title: 'Help them gather and organize incident evidence',
            instruction: 'Work together through the Evidence Preparation Assistant on this portal to document timestamps, UPI UTR numbers, suspect phone numbers, and chat screenshots without altering or deleting anything.',
            priority: 'high',
          },
          {
            id: 'secure_family_circle',
            title: 'Alert close family members to prevent secondary scams',
            instruction: 'Use the Family Alert Generator to notify relatives so nobody falls for follow-up impersonation requests or emergency transfer pleas made in the victim’s name.',
            priority: 'high',
          },
          {
            id: 'support_official_complaint',
            title: 'Guide them through filing on cybercrime.gov.in',
            instruction: 'Help them complete the official form on cybercrime.gov.in and print the acknowledgment receipt for submission to their bank branch and local cyber police station.',
            priority: 'normal',
            actionUrl: 'https://cybercrime.gov.in/',
            actionLabel: 'Assist Portal Filing',
          },
        ],
      },
    },
    footer: {
      independentNotice: 'Independent Civic Safety Prototype: Developed as an educational digital first-response platform for demonstration purposes. Not an official government department, banking gateway, or law enforcement agency.',
      prototypeDisclaimer: 'No Warranties: While guidance reflects standard cybersecurity best practices and Indian cyber regulations, fund recovery cannot be guaranteed. Always confirm procedures with your official bank branch and local authorities.',
      privacyCommitment: 'Privacy By Design: No personal accounts required. All form inputs and evidence fields are processed in your browser memory and never uploaded to any remote server.',
      copyright: 'Suraksha Saathi — Empowering Citizens in Critical First Moments.',
    },
  },
  hi: {
    brandName: 'सुरक्षा साथी',
    tagline: 'सही सहायता, जब हर सेकंड महत्वपूर्ण हो।',
    nav: {
      home: 'होम',
      getHelp: 'मदद पाएं',
      timeline: 'प्रथम घंटा',
      scamCheck: 'स्कैम जांच',
      familyAlert: 'परिवार अलर्ट',
      evidence: 'साक्ष्य',
      officialHelp: 'आधिकारिक मदद',
      // Aliases
      howItWorks: 'कार्यविधि',
      realityCheck: 'स्कैम जांच',
      resources: 'आधिकारिक मदद',
      getHelpNow: 'मुझे मदद चाहिए',
    },
    hero: {
      badge: 'नागरिक सहायता सेवा',
      headline: 'क्या आपको लगता है कि आपके साथ ठगी हुई है? आइए जानें आगे क्या करना है।',
      supporting: 'चुनें क्या हुआ था। आसान कदमों का पालन करें। सही सहायता पाएं।',
      getHelpBtn: 'मुझे मदद चाहिए',
      guideBtn: 'सुरक्षित रहने के तरीके सीखें',
      trustText: 'कोई खाता आवश्यक नहीं · कोई पासवर्ड या पिन न दें · संपूर्ण गोपनीयता',
      urgentBannerTitle: 'आपातकालीन राष्ट्रीय साइबर हेल्पलाइन (1930)',
      urgentBannerBody: 'यदि हाल ही में पैसे कटे हैं, तो तुरंत 1930 पर कॉल करने से बैंक स्तर पर लेनदेन रोकने की संभावना सबसे अधिक होती है।',
      call1930: '1930 डायल करें',
      openPortal: 'cybercrime.gov.in खोलें',
    },
    immediateStrip: {
      heading: 'चुनें क्या हुआ था',
      subheading: 'तुरंत कदम-दर-कदम मार्गदर्शन शुरू करने के लिए अपनी स्थिति चुनें:',
      action1Title: 'पैसे खो गए (Money Lost)',
      action1Desc: 'मैंने पैसे भेजे और मुझे लगता है कि यह एक स्कैम था।',
      action2Title: 'खाता खतरे में (Account at Risk)',
      action2Desc: 'मैंने OTP, पासवर्ड या खाते की जानकारी साझा कर दी।',
      action3Title: 'संदिग्ध संपर्क (Suspicious Contact)',
      action3Desc: 'किसी ने कॉल किया, मैसेज भेजा या संदिग्ध लिंक भेजा।',
    },
    howItWorks: {
      sectionTitle: 'घबराहट से समाधान तक एक व्यवस्थित मार्ग',
      sectionSubtitle: 'साइबर धोखाधड़ी में घबराहट ही धोखेबाजों का सबसे बड़ा हथियार है। सुरक्षा साथी आपको शांत रहकर सही कदम उठाने में मदद करता है।',
      step1Title: '01. बताएं क्या हुआ',
      step1Desc: 'बिना कोई निजी जानकारी दिए, 6 प्रमुख श्रेणियों में से अपनी स्थिति चुनें।',
      step2Title: '02. तुरंत कार्ययोजना का पालन करें',
      step2Desc: 'अपने पैसे और खातों को बचाने के लिए प्राथमिकता अनुसार कदम उठाएं।',
      step3Title: '03. आधिकारिक चैनलों से संपर्क करें',
      step3Desc: 'सबूत तैयार कर 1930, बैंक और cybercrime.gov.in पर त्वरित रिपोर्ट दर्ज करें।',
      whyMattersTitle: 'त्वरित कार्रवाई क्यों जरूरी है',
      whyMattersDesc: 'शुरुआती "गोल्डन आवर्स" में बैंक स्तर पर पैसे फ्रीज करने की संभावना सबसे अधिक होती है, हालांकि पैसे की पूर्ण वापसी की कोई गारंटी नहीं दी जा सकती।',
    },
    timeline: {
      sectionTitle: 'प्रथम घंटा: महत्वपूर्ण प्रतिक्रिया अवधि',
      sectionSubtitle: 'धोखाधड़ी के तुरंत बाद प्राथमिकताओं का क्रम। ये व्यावहारिक सुरक्षा सुझाव हैं, कोई कानूनी गारंटी नहीं।',
      stage1Badge: 'चरण 1',
      stage1Title: 'Act Now - तुरंत कदम उठाएं (0 से 15 मिनट)',
      stage1Desc: 'अनधिकृत पहुंच को तुरंत रोकें और नुकसान सीमित करें।',
      stage1Points: [
        'अपने बैंक या कार्ड जारीकर्ता को तुरंत फोन कर खाता/कार्ड ब्लॉक कराएं।',
        'यदि कोई अनजान ऐप इंस्टॉल हुआ है, तो तुरंत फोन को एयरप्लेन मोड पर डालें।',
        'पैसे वापस दिलाने का दावा करने वाले किसी भी व्यक्ति को कोई शुल्क न दें।',
      ],
      stage2Badge: 'चरण 2',
      stage2Title: 'Report & Secure - रिपोर्ट व सुरक्षा (15 से 60 मिनट)',
      stage2Desc: 'आधिकारिक राष्ट्रीय प्रणाली पर औपचारिक शिकायत दर्ज करें।',
      stage2Points: [
        'तुरंत 1930 साइबर हेल्पलाइन पर कॉल कर वित्तीय धोखाधड़ी की सूचना दें।',
        'आधिकारिक पोर्टल https://cybercrime.gov.in/ पर अपनी शिकायत दर्ज करें।',
        'शिकायत पावती (Acknowledgment Number) सुरक्षित नोट कर लें।',
      ],
      stage3Badge: 'चरण 3',
      stage3Title: 'Follow Up - अनुवर्ती कार्रवाई (दिन 1 उपरांत)',
      stage3Desc: 'सबूत जुटाएं, पासवर्ड बदलें और परिवार को सतर्क करें।',
      stage3Points: [
        'बैंक विवरण, एसएमएस, व्हाट्सएप चैट और फोन नंबर के स्क्रीनशॉट सहेजें।',
        'सुरक्षित डिवाइस से अपने ईमेल और बैंक के पासवर्ड बदलें।',
        'परिवार को सूचित करें ताकि आपके नाम पर कोई और धोखा न खा सके।',
      ],
      disclaimer: 'सूचना: यह केवल सुरक्षा मार्गदर्शन है। कोई भी मंच पैसे की पूर्ण वापसी की गारंटी नहीं दे सकता।',
    },
    realityCheck: {
      sectionTitle: 'पांच-प्रश्नों की वास्तविकता जांच',
      sectionSubtitle: 'क्या हालिया कॉल या संदेश संदिग्ध लगा? साइबर ठगी के सामान्य लक्षणों की जांच करें।',
      intro: 'जो भी बातें आपके हालिया अनुभव से मेल खाती हैं, उन पर टिक करें:',
      questions: [
        {
          id: 'urgency',
          label: 'तुरंत कार्रवाई करने का अत्यधिक दबाव',
          description: 'कॉल करने वाले ने कुछ ही मिनटों में फैसला लेने को कहा, या सिम/खाता तुरंत ब्लॉक होने की धमकी दी।',
        },
        {
          id: 'credential',
          label: 'ओटीपी, पिन, पासवर्ड या टेस्ट ट्रांसफर की मांग',
          description: 'पैसे प्राप्त करने के लिए यूपीआई पिन डालने या गोपनीय ओटीपी साझा करने को कहा गया।',
        },
        {
          id: 'coercion',
          label: 'डिजिटल अरेस्ट या कानूनी कार्रवाई की धमकी',
          description: 'पुलिस, सीबीआई या कस्टम्स का नाम लेकर वीडियो कॉल पर रहने और पैसे जमा करने का दबाव डाला।',
        },
        {
          id: 'remote_access',
          label: 'स्क्रीन शेयरिंग या रिमोट ऐप इंस्टॉल करने का निर्देश',
          description: 'AnyDesk, TeamViewer या व्हाट्सएप पर भेजी गई अज्ञात APK फाइल डाउनलोड करने को कहा।',
        },
        {
          id: 'greed',
          label: 'गारंटीड मुनाफे, लॉटरी या पैसे वापस कराने का वादा',
          description: 'घर बैठे टास्क से भारी कमाई, लॉटरी या एडवांस फीस लेकर डूबा पैसा वापस कराने का लालच दिया।',
        },
      ],
      resultTitle: 'जोखिम मूल्यांकन',
      zeroSignals: 'कोई सामान्य ठगी का लक्षण नहीं चुना गया। फिर भी बैंक संबंधी जानकारी हमेशा अपने कार्ड के पीछे लिखे नंबर से ही सत्यापित करें।',
      oneSignal: '1 चेतावनी संकेत पाया गया: कोई भी वैध बैंक या सरकारी एजेंसी अचानक समय सीमा या पासवर्ड नहीं मांगती।',
      multiSignals: 'गंभीर चेतावनी संकेत: यह स्पष्ट रूप से संगठित साइबर ठगी और सामाजिक छल का प्रयास है। तुरंत सतर्क रहें।',
      riskIndicatorNote: 'चेतावनी संकेत जोखिम दर्शाते हैं, यह कानूनी सबूत नहीं हैं। यदि आपने जानकारी साझा की है, तो तुरंत सुरक्षा कदम उठाएं।',
      takeActionBtn: 'संबंधित प्रतिक्रिया योजना खोलें',
      resetBtn: 'जांच रीसेट करें',
    },
    familyAlert: {
      sectionTitle: 'परिवार एवं मित्रों के लिए सुरक्षा अलर्ट संदेश',
      sectionSubtitle: 'द्वितीयक ठगी से बचाएं। धोखेबाज अक्सर पीड़ितों के रिश्तेदारों से उनके नाम पर पैसे मांगते हैं।',
      instructions: 'प्राप्तकर्ता चुनें, संदेश कॉपी करें और अपने मैसेजिंग ऐप में भेजें। कोई निजी डेटा स्टोर नहीं किया जाता।',
      recipientLabel: 'संदेश किसके लिए है:',
      recipients: [
        { id: 'family', label: 'माता-पिता / करीबी परिवार' },
        { id: 'group', label: 'पारिवारिक व्हाट्सएप ग्रुप' },
        { id: 'friend', label: 'मित्र / सहकर्मी' },
      ],
      customNotePlaceholder: 'वैकल्पिक: संक्षिप्त जानकारी जोड़ें (जैसे "मेरा सिम या व्हाट्सएप हैक हुआ")',
      previewLabel: 'साझा करने हेतु तैयार संदेश:',
      copyBtn: 'संदेश कॉपी करें',
      copiedNotice: 'संदेश क्लिपबोर्ड पर कॉपी हो गया!',
      whatsappBtn: 'व्हाट्सएप पर भेजें',
      privacyNotice: 'पूर्णतः निजी: यह संदेश आपके ब्राउज़र में बना है और किसी सर्वर पर नहीं भेजा जाता।',
    },
    evidenceAssistant: {
      sectionTitle: 'साक्ष्य तैयारी सहायक (Evidence Dossier)',
      sectionSubtitle: 'बैंक और cybercrime.gov.in पर रिपोर्ट करने से पहले सभी तथ्य व्यवस्थित करें।',
      description: 'सटीक समय, यूटीआर (UTR) नंबर और धोखेबाज के विवरण से जांचकर्ताओं को कार्रवाई में आसानी होती है।',
      selectScenarioLabel: 'घटना का प्रकार:',
      checklistTitle: 'आवश्यक साक्ष्य चेकलिस्ट (जो आपके पास उपलब्ध हो, टिक करें):',
      voluntaryFormTitle: 'घटना का विवरण (सभी फील्ड वैकल्पिक - केवल आपके ब्राउज़र में सुरक्षित):',
      formNotice: 'कृपया कभी भी असली बैंक पासवर्ड या एटीएम पिन यहां दर्ज न करें।',
      dateLabel: 'घटना की तारीख',
      timeLabel: 'अनुमानित समय',
      amountLabel: 'हस्तांतरित राशि (₹)',
      bankLabel: 'आपका बैंक / पेमेंट ऐप',
      utrLabel: 'लेनदेन संख्या / यूपीआई UTR नंबर',
      suspectContactLabel: 'धोखेबाज का फोन नंबर / यूपीआई आईडी',
      platformLabel: 'माध्यम (जैसे व्हाट्सएप, कॉल, टेलीग्राम)',
      notesLabel: 'संक्षिप्त घटना विवरण',
      downloadBtn: 'घटना सारांश डाउनलोड करें (.txt)',
      printBtn: 'दस्तावेज़ प्रिंट करें / पीडीएफ बनाएं',
      resetBtn: 'सभी फ़ील्ड साफ़ करें',
      items: {
        item_bank_sms: 'पैसे कटने का बैंक एसएमएस (समय और संदर्भ सहित)',
        item_upi_utr: '12 अंकों का यूपीआई UTR नंबर या बैंक ट्रांजैक्शन आईडी',
        item_chat_history: 'धोखेबाज की चैट और मांगों के पूरे स्क्रीनशॉट',
        item_phone_number: 'कॉल करने वाले का फोन नंबर या ट्रूकॉलर विवरण',
        item_fraud_account: 'धोखेबाज का बैंक खाता नंबर या यूपीआई पता',
        item_app_link: 'संदिग्ध वेबसाइट लिंक या डाउनलोड करवाए गए ऐप का नाम',
        item_fir_ack: '1930 या पोर्टल से प्राप्त शिकायत पावती संख्या',
      },
    },
    resources: {
      sectionTitle: 'आधिकारिक सरकारी एवं नियामक संसाधन',
      sectionSubtitle: 'हमेशा आधिकारिक पोर्टल ही खोलें। इन सत्यापित भारतीय संसाधनों का उपयोग करें।',
      disclaimer: 'सुरक्षा साथी एक स्वतंत्र नागरिक सुरक्षा प्रोटोटाइप है और किसी सरकारी संस्था से संबद्ध नहीं है।',
      items: [
        {
          title: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल',
          role: 'प्रमुख सरकारी पोर्टल',
          contact: 'cybercrime.gov.in',
          description: 'गृह मंत्रालय का आधिकारिक पोर्टल जहां सभी प्रकार के साइबर अपराध और वित्तीय धोखाधड़ी की शिकायत दर्ज की जाती है।',
          url: 'https://cybercrime.gov.in/',
          priorityTag: 'आधिकारिक रिपोर्ट',
        },
        {
          title: 'राष्ट्रीय साइबर अपराध हेल्पलाइन',
          role: 'तत्काल वित्तीय सहायता लाइन',
          contact: '1930',
          description: 'वित्तीय साइबर धोखाधड़ी के मामलों में तत्काल खाता फ्रीज कराने के लिए 2 घंटे के भीतर डायल करें।',
          url: 'tel:1930',
          isPhone: true,
          priorityTag: '24x7 टोल-फ्री',
        },
        {
          title: 'संचार साथी और चक्षु (Chakshu)',
          role: 'दूरसंचार विभाग (DoT)',
          contact: 'sancharsaathi.gov.in',
          description: 'संदिग्ध कॉल, फर्जी एसएमएस या धोखाधड़ी वाले मोबाइल नंबरों की शिकायत करें।',
          url: 'https://www.sancharsaathi.gov.in/',
          priorityTag: 'दूरसंचार सुरक्षा',
        },
        {
          title: 'आरबीआई सचेत पोर्टल (Sachet)',
          role: 'भारतीय रिज़र्व बैंक',
          contact: 'sachet.rbi.org.in',
          description: 'अवैध ऋण ऐप्स और अनधिकृत वित्तीय कंपनियों के विरुद्ध शिकायत दर्ज करें।',
          url: 'https://sachet.rbi.org.in/',
          priorityTag: 'बैंकिंग सुरक्षा',
        },
      ],
    },
    responseModal: {
      stepOf: 'कदम {current} / {total}',
      backBtn: 'पिछला कदम',
      nextBtn: 'अगला कदम',
      restartBtn: 'पुनः प्रारंभ करें',
      closeBtn: 'बंद करें',
      completedLabel: 'कदम पूरा हुआ',
      markDone: 'इस कदम को पूर्ण चिह्नित करें',
      readAloud: 'कदम को बोलकर सुनें',
      stopAudio: 'आवाज रोकें',
      warningHeader: 'सुरक्षा चेतावनी',
      needOfficialAssistance: 'आधिकारिक रिपोर्टिंग चैनल',
      chooseScenarioTitle: 'क्या हुआ था?',
      chooseScenarioSubtitle: 'अपनी स्थिति से मेल खाने वाला विकल्प चुनें ताकि त्वरित कदम दिखाए जा सकें:',
    },
    scenarios: {
      money_sent: {
        id: 'money_sent',
        title: 'मैंने संदिग्ध व्यक्ति को पैसे भेज दिए',
        shortDesc: 'यूपीआई, बैंक ट्रांसफर या कार्ड से पैसे कट गए हैं।',
        iconName: 'CreditCard',
        evidenceKeys: ['item_bank_sms', 'item_upi_utr', 'item_fraud_account', 'item_chat_history'],
        steps: [
          {
            id: 'bank_alert',
            title: 'तुरंत अपने बैंक या पेमेंट ऐप से संपर्क करें',
            instruction: 'अपने बैंक या पेमेंट ऐप (GPay, PhonePe, Paytm) के आधिकारिक कस्टमर केयर पर तुरंत कॉल करें। अनधिकृत लेनदेन पर आपत्ति दर्ज कराएं और आगे के लेनदेन रोकने के लिए खाता अस्थायी रूप से फ्रीज करने का अनुरोध करें।',
            priority: 'critical',
            tip: 'हमेशा अपने एटीएम कार्ड के पीछे लिखे नंबर या ऐप के अंदर से ही कॉल करें। गूगल पर "बैंक कस्टमर केयर" सर्च न करें, क्योंकि फर्जी नंबर भी हो सकते हैं।',
          },
          {
            id: 'call_1930',
            title: '1930 साइबर हेल्पलाइन पर तुरंत कॉल करें',
            instruction: 'भारत में जितनी जल्दी हो सके 1930 पर कॉल करें। लेनदेन की राशि, बैंक खाता, धोखेबाज की यूपीआई आईडी और 12 अंकों का यूटीआर नंबर स्पष्ट बताएं।',
            priority: 'critical',
            phoneCall: '1930',
            actionLabel: '1930 पर कॉल करें',
            tip: 'शुरुआती 2 से 3 घंटे "गोल्डन आवर्स" माने जाते हैं जिनमें पैसे को एटीएम से निकालने से पहले रोका जा सकता है।',
          },
          {
            id: 'cybercrime_portal',
            title: 'cybercrime.gov.in पर औपचारिक शिकायत दर्ज करें',
            instruction: 'आधिकारिक पोर्टल पर जाकर "Report Financial Fraud" चुनें, विवरण भरें, बैंक स्टेटमेंट और स्क्रीनशॉट संलग्न करें और पावती संख्या (Acknowledgment Number) प्राप्त करें।',
            priority: 'high',
            actionUrl: 'https://cybercrime.gov.in/',
            actionLabel: 'cybercrime.gov.in खोलें',
            tip: 'यह पावती संख्या संभाल कर रखें, बैंक शाखा में लिखित आवेदन देते समय इसकी आवश्यकता होगी।',
          },
          {
            id: 'preserve_records',
            title: 'सभी लेनदेन साक्ष्य सुरक्षित रखें',
            instruction: 'बैंक एसएमएस, यूटीआर नंबर वाले स्क्रीनशॉट और व्हाट्सएप चैट को सुरक्षित रखें। किसी भी चैट को अभी डिलीट न करें।',
            priority: 'high',
          },
          {
            id: 'beware_recovery_scam',
            title: 'सावधान: डूबे पैसे वापस कराने का दावा करने वालों को कोई फीस न दें',
            instruction: 'सोशल मीडिया पर "साइबर वकील" या "हैकर" बनकर पैसे वापस दिलाने का दावा करने वाले लोग अक्सर फर्जी होते हैं और दोबारा ठगी करते हैं।',
            priority: 'critical',
            tip: 'कोई भी वास्तविक पुलिस अधिकारी या बैंक पैसे वापस दिलाने के लिए अग्रिम शुल्क नहीं मांगता।',
          },
        ],
      },
      credential_leak: {
        id: 'credential_leak',
        title: 'मैंने ओटीपी, पासवर्ड या बैंक विवरण साझा कर दिया',
        shortDesc: 'गोपनीय कोड या नेट बैंकिंग पासवर्ड किसी को बता दिया।',
        iconName: 'Key',
        evidenceKeys: ['item_bank_sms', 'item_phone_number', 'item_chat_history'],
        steps: [
          {
            id: 'freeze_banking',
            title: 'प्रभावित बैंक खाते और कार्ड को तुरंत ब्लॉक करें',
            instruction: 'कार्ड नंबर या सीवीवी लीक होने पर तुरंत बैंक ऐप या एसएमएस द्वारा कार्ड ब्लॉक करें। नेट बैंकिंग का पासवर्ड साझा हुआ हो तो नेट बैंकिंग लॉगिन लॉक कराएं।',
            priority: 'critical',
          },
          {
            id: 'change_passwords',
            title: 'सुरक्षित डिवाइस से तुरंत पासवर्ड बदलें',
            instruction: 'किसी सुरक्षित मोबाइल या कंप्यूटर से अपने ईमेल, बैंक और सोशल मीडिया का पासवर्ड बदलें। मजबूत और नया पासवर्ड रखें।',
            priority: 'critical',
          },
          {
            id: 'revoke_sessions',
            title: 'सभी पुराने डिवाइस से लॉग आउट करें और MFA चालू करें',
            instruction: 'Google और WhatsApp में "Linked Devices" या सुरक्षा सेटिंग्स में जाकर सभी अनजान डिवाइस को लॉगआउट करें।',
            priority: 'high',
          },
          {
            id: 'sim_swap_vigilance',
            title: 'सिम सिग्नल पर नज़र रखें',
            instruction: 'यदि मोबाइल पर अचानक नेटवर्क चला जाए, तो तुरंत अपने ऑपरेटर को दूसरे फोन से कॉल करें ताकि अनधिकृत सिम स्वैप रोका जा सके।',
            priority: 'high',
          },
          {
            id: 'report_leak',
            title: 'साइबर पोर्टल पर घटना की सूचना दें',
            instruction: 'cybercrime.gov.in पर अनधिकृत पहुंच या पहचान की चोरी की रिपोर्ट दर्ज कराएं।',
            priority: 'normal',
            actionUrl: 'https://cybercrime.gov.in/',
            actionLabel: 'साइबर पोर्टल पर जाएं',
          },
        ],
      },
      malicious_app: {
        id: 'malicious_app',
        title: 'मैंने संदिग्ध लिंक पर क्लिक किया या अनजान ऐप डाउनलोड किया',
        shortDesc: 'एपीके (APK) फाइल इंस्टॉल की या स्क्रीन शेयरिंग चालू की।',
        iconName: 'Smartphone',
        evidenceKeys: ['item_app_link', 'item_phone_number', 'item_chat_history'],
        steps: [
          {
            id: 'disconnect_network',
            title: 'तुरंत इंटरनेट और वाई-फाई बंद करें',
            instruction: 'फोन को तुरंत एयरप्लेन मोड में डालें ताकि धोखेबाज आपके फोन की स्क्रीन या ओटीपी न देख सके।',
            priority: 'critical',
          },
          {
            id: 'secure_from_secondary',
            title: 'दूसरे सुरक्षित फोन से अपने बैंक खाते सुरक्षित करें',
            instruction: 'संक्रमित फोन का इस्तेमाल बैंक लॉगिन के लिए न करें। परिवार के किसी अन्य फोन से बैंक और ईमेल के पासवर्ड बदलें।',
            priority: 'critical',
          },
          {
            id: 'audit_apps_permissions',
            title: 'अनजान ऐप को हटाएं और परमिशन रद्द करें',
            instruction: 'फोन की Settings में जाकर हाल ही में डाउनलोड किए गए अनजान ऐप्स (AnyDesk, QuickSupport या अनजान APK) को तुरंत अनइंस्टॉल करें।',
            priority: 'high',
          },
          {
            id: 'factory_reset_consideration',
            title: 'आवश्यक होने पर फोन को फ़ैक्टरी रीसेट करें',
            instruction: 'यदि संदिग्ध गतिविधि जारी रहे, तो जरूरी फोटो का बैकअप लेकर फोन को पूरी तरह रीसेट करें।',
            priority: 'high',
          },
          {
            id: 'report_chakshu',
            title: 'चक्षु पोर्टल पर लिंक की शिकायत करें',
            instruction: 'संदिग्ध लिंक और एसएमएस की शिकायत Sanchar Saathi के Chakshu पोर्टल पर दर्ज करें।',
            priority: 'normal',
            actionUrl: 'https://www.sancharsaathi.gov.in/',
            actionLabel: 'चक्षु पोर्टल खोलें',
          },
        ],
      },
      blackmail_threat: {
        id: 'blackmail_threat',
        title: 'कोई मुझे धमका रहा है या पैसे मांग रहा है',
        shortDesc: 'डिजिटल अरेस्ट, पुलिस का डर या वीडियो ब्लैकमेलिंग।',
        iconName: 'ShieldAlert',
        evidenceKeys: ['item_phone_number', 'item_chat_history', 'item_fraud_account'],
        steps: [
          {
            id: 'stop_payment',
            title: 'बिल्कुल भी पैसे न भेजें और डरें नहीं',
            instruction: 'धमकी के दबाव में पैसे भेजने पर धोखेबाज और अधिक पैसे मांगते हैं। कोई भी भुगतान न करें।',
            priority: 'critical',
          },
          {
            id: 'digital_arrest_myth',
            title: 'याद रखें: कानून में "डिजिटल अरेस्ट" जैसा कोई प्रावधान नहीं है',
            instruction: 'भारत की कोई भी पुलिस, सीबीआई, या कोर्ट व्हाट्सएप वीडियो कॉल पर पूछताछ या गिरफ्तारी नहीं करती और न ही पैसे ट्रांसफर करने को कहती है।',
            priority: 'critical',
            tip: 'धोखेबाज फर्जी वर्दी और बैकग्राउंड दिखाकर डराते हैं। कॉल तुरंत काट दें।',
          },
          {
            id: 'confide_in_trusted',
            title: 'तुरंत परिवार या किसी मित्र को पूरी बात बताएं',
            instruction: 'धोखेबाज आपको किसी से बात न करने का दबाव डालते हैं। इस डर को तोड़ने के लिए तुरंत किसी भरोसेमंद व्यक्ति को बताएं।',
            priority: 'high',
          },
          {
            id: 'preserve_threats',
            title: 'धमकी वाले संदेशों और नंबरों का रिकॉर्ड रखें',
            instruction: 'कॉल रिकॉर्ड, मैसेज के स्क्रीनशॉट और बताए गए बैंक खातों का विवरण सुरक्षित रखें।',
            priority: 'high',
          },
          {
            id: 'contact_authorities',
            title: '1930, 112 या cybercrime.gov.in पर रिपोर्ट करें',
            instruction: 'साइबर पोर्टल पर साइबर ब्लैकमेलिंग की शिकायत दर्ज करें। यदि शारीरिक सुरक्षा को खतरा हो तो तुरंत 112 डायल करें।',
            priority: 'critical',
            phoneCall: '112',
          },
        ],
      },
      suspicious_message: {
        id: 'suspicious_message',
        title: 'मुझे संदिग्ध कॉल, मैसेज या ईमेल मिला है',
        shortDesc: 'बिजली कटने का मैसेज, लॉटरी या संदिग्ध कूरियर पार्सल कॉल।',
        iconName: 'AlertTriangle',
        evidenceKeys: ['item_phone_number', 'item_app_link', 'item_chat_history'],
        steps: [
          {
            id: 'do_not_engage',
            title: 'किसी लिंक पर क्लिक न करें और जवाब न दें',
            instruction: 'संदिग्ध संदेश का उत्तर न दें और न ही उसमें दिए गए लिंक को खोलें।',
            priority: 'critical',
          },
          {
            id: 'verify_independently',
            title: 'आधिकारिक संस्था से सीधे जांच करें',
            instruction: 'यदि बिजली या बैंक का संदेश हो, तो उनके आधिकारिक बिल या कार्ड के पीछे दिए नंबर पर ही फोन करें।',
            priority: 'high',
          },
          {
            id: 'report_chakshu_dot',
            title: 'संचार साथी के चक्षु पोर्टल पर रिपोर्ट करें',
            instruction: 'धोखाधड़ी वाले नंबरों और एसएमएस को Chakshu पोर्टल पर रिपोर्ट करें ताकि उनका सिम ब्लॉक हो सके।',
            priority: 'high',
            actionUrl: 'https://www.sancharsaathi.gov.in/',
            actionLabel: 'चक्षु पर रिपोर्ट करें',
          },
          {
            id: 'block_and_flag',
            title: 'नंबर को ब्लॉक करें और स्पैम मार्क करें',
            instruction: 'व्हाट्सएप या अपने फोन में उस नंबर को ब्लॉक और रिपोर्ट करें।',
            priority: 'normal',
          },
        ],
      },
      helping_someone: {
        id: 'helping_someone',
        title: 'मैं किसी मित्र या रिश्तेदार की मदद कर रहा हूँ',
        shortDesc: 'कोई परिचित ठगी का शिकार हुआ है और मार्गदर्शन चाहता है।',
        iconName: 'Users',
        evidenceKeys: ['item_bank_sms', 'item_upi_utr', 'item_chat_history'],
        steps: [
          {
            id: 'reassure_and_calm',
            title: 'शांत रहें और उन्हें दोष न दें',
            instruction: 'पीड़ित पहले से सदमे और शर्म में होता है। उन्हें भरोसा दिलाएं कि यह संगठित अपराध है और तुरंत सही कदम उठाएं।',
            priority: 'critical',
          },
          {
            id: 'assist_immediate_banking',
            title: 'उनके साथ बैठकर 1930 डायल कराएं और बैंक सूचित करें',
            instruction: 'लेनदेन के 2 घंटे के भीतर उनके साथ 1930 पर कॉल करवाएं और बैंक में शिकायत दर्ज कराएं।',
            priority: 'critical',
            phoneCall: '1930',
          },
          {
            id: 'gather_evidence_together',
            title: 'सबूत और लेनदेन विवरण व्यवस्थित करें',
            instruction: 'यूटीआर नंबर, बैंक स्टेटमेंट और स्क्रीनशॉट इकट्ठा करने में उनकी मदद करें।',
            priority: 'high',
          },
          {
            id: 'secure_family_circle',
            title: 'परिवार को सचेत करें ताकि और कोई न फंसे',
            instruction: 'परिवार के बाकी सदस्यों को अलर्ट भेजें ताकि उनके नाम पर और किसी से पैसे न मांगे जा सकें।',
            priority: 'high',
          },
          {
            id: 'support_official_complaint',
            title: 'cybercrime.gov.in पर रिपोर्ट पूरी कराएं',
            instruction: 'आधिकारिक पोर्टल पर शिकायत दर्ज कराकर पावती रसीद प्रिंट करने में सहयोग करें।',
            priority: 'normal',
            actionUrl: 'https://cybercrime.gov.in/',
          },
        ],
      },
    },
    footer: {
      independentNotice: 'स्वतंत्र नागरिक सुरक्षा प्रोटोटाइप: यह एक शैक्षिक डिजिटल प्राथमिक प्रतिक्रिया मंच है। यह कोई सरकारी विभाग या बैंक नहीं है।',
      prototypeDisclaimer: 'कोई वारंटी नहीं: सुझाव मानक साइबर सुरक्षा नियमों पर आधारित हैं, लेकिन पैसे की पूर्ण वापसी की गारंटी नहीं दी जा सकती।',
      privacyCommitment: 'गोपनीयता प्राथमिकता: कोई व्यक्तिगत खाता आवश्यक नहीं है। सभी डेटा आपके ब्राउज़र में ही रहता है।',
      copyright: 'सुरक्षा साथी — संकट के पलों में नागरिकों का सच्चा मार्गदर्शक।',
    },
  },
  te: {
    brandName: 'సురక్షా సాథి',
    tagline: 'సరైన సహాయం, ప్రతి సెకను విలువైంది అయినప్పుడు.',
    nav: {
      home: 'హోమ్',
      getHelp: 'సహాయం పొందండి',
      timeline: 'మొదటి గంట',
      scamCheck: 'స్కామ్ చెక్',
      familyAlert: 'కుటుంబ అలర్ట్',
      evidence: 'సాక్ష్యాధారాలు',
      officialHelp: 'అధికారిక సహాయం',
      // Aliases
      howItWorks: 'ఎలా పనిచేస్తుంది',
      realityCheck: 'స్కామ్ చెక్',
      resources: 'అధికారిక సహాయం',
      getHelpNow: 'నాకు సహాయం కావాలి',
    },
    hero: {
      badge: 'పౌర రక్షణ సేవ',
      headline: 'మీరు మోసపోయారని భావిస్తున్నారా? తర్వాత ఏమి చేయాలో తెలుసుకుందాం.',
      supporting: 'ఏమి జరిగిందో ఎంచుకోండి. సులభమైన దశలను అనుసరించండి. సరైన సహాయం పొందండి.',
      getHelpBtn: 'నాకు సహాయం కావాలి',
      guideBtn: 'సురక్షితంగా ఎలా ఉండాలో తెలుసుకోండి',
      trustText: 'ఖాతా అవసరం లేదు · పాస్‌వర్డ్‌లు అడగబడవు · బ్రౌజర్‌లోనే గోప్యత',
      urgentBannerTitle: 'జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్ (1930)',
      urgentBannerBody: 'ఇటీవల డబ్బు కట్ అయినట్లయితే, వెంటనే 1930కి కాల్ చేయడం ద్వారా బ్యాంక్ స్థాయిలో లావాదేవీని నిలిపివేసే అవకాశం ఎక్కువగా ఉంటుంది.',
      call1930: '1930కి కాల్ చేయండి',
      openPortal: 'cybercrime.gov.in కి వెళ్ళండి',
    },
    immediateStrip: {
      heading: 'ఏమి జరిగిందో ఎంచుకోండి',
      subheading: 'తక్షణ దశల వారీ మార్గదర్శకత్వాన్ని ప్రారంభించడానికి మీ పరిస్థితిని ఎంచుకోండి:',
      action1Title: 'డబ్బు పోయింది (Money Lost)',
      action1Desc: 'నేను డబ్బు పంపాను, అది మోసమని భావిస్తున్నాను.',
      action2Title: 'ఖాతా ప్రమాదంలో ఉంది (Account at Risk)',
      action2Desc: 'నేను OTP, పాస్‌వర్డ్ లేదా ఖాతా వివరాలను పంచుకున్నాను.',
      action3Title: 'అనుమానాస్పద సంప్రదింపు (Suspicious Contact)',
      action3Desc: 'ఎవరైనా కాల్ చేశారు, మెసేజ్ పంపారు లేదా అనుమానాస్పద లింక్ పంపారు.',
    },
    howItWorks: {
      sectionTitle: 'గందరగోళం నుండి నియంత్రణ వైపు స్పష్టమైన మార్గం',
      sectionSubtitle: 'ఆన్‌లైన్ మోసం జరిగినప్పుడు ఆందోళన చెందడం మోసగాళ్లకు మరింత అనుకూలంగా మారుతుంది. సురక్షా సాథి సమర్థవంతమైన ప్రథమ స్పందనను అందిస్తుంది.',
      step1Title: '01. ఏమి జరిగిందో చెప్పండి',
      step1Desc: 'ఎటువంటి వ్యక్తిగత సమాచారం ఇవ్వకుండా, 6 ప్రధాన విభాగాల నుండి మీ పరిస్థితిని ఎంచుకోండి.',
      step2Title: '02. తక్షణ కార్యాచరణ ప్రణాళికను పాటించండి',
      step2Desc: 'మీ ఖాతాలు మరియు డబ్బును రక్షించుకోవడానికి ప్రాధాన్యతా సూచికలను అనుసరించండి.',
      step3Title: '03. అధికారిక సహాయాన్ని సంప్రదించండి',
      step3Desc: 'సాక్ష్యాలను సిద్ధం చేసుకుని 1930, మీ బ్యాంక్ మరియు cybercrime.gov.in లో అధికారిక ఫిర్యాదు నమోదు చేయండి.',
      whyMattersTitle: 'త్వరిత ప్రతిస్పందన ఎందుకు ముఖ్యం',
      whyMattersDesc: 'మోసం జరిగిన మొదటి కొన్ని గంటల్లో బ్యాంకులు నిధులను ఫ్రీజ్ చేసే అవకాశం ఉంటుంది. అయితే ఏ వ్యవస్థ కూడా నగదు పూర్తి వాపసుకు హామీ ఇవ్వలేదు.',
    },
    timeline: {
      sectionTitle: 'మొదటి గంట: కీలక ప్రతిస్పందన సమయం',
      sectionSubtitle: 'మోసం జరిగిన వెంటనే తీసుకోవాల్సిన అత్యవసర ప్రాధాన్యతలు.',
      stage1Badge: 'దశ 1',
      stage1Title: 'Act Now - వెంటనే చర్య తీసుకోండి (0 నుండి 15 నిమిషాలు)',
      stage1Desc: 'అనధికార యాక్సెస్‌ను వెంటనే నిలిపివేసి నష్టాన్ని అరికట్టండి.',
      stage1Points: [
        'మీ బ్యాంక్ లేదా కార్డు జారీదారుని సంప్రదించి ఖాతా/కార్డును తక్షణమే బ్లాక్ చేయించండి.',
        'ఏదైనా అనుమానాస్పద యాప్ ఇన్‌స్టాల్ అయితే, ఫోన్‌ను వెంటనే ఏరోప్లేన్ మోడ్‌లో ఉంచండి.',
        'డబ్బు రికవరీ చేస్తామని నమ్మించే ఎవరికీ ఎటువంటి ఫీజు చెల్లించవద్దు.',
      ],
      stage2Badge: 'దశ 2',
      stage2Title: 'Report & Secure - నివేదించండి & రక్షించండి (15 నుండి 60 నిమిషాలు)',
      stage2Desc: 'జాతీయ పోర్టల్‌లో అధికారికంగా ఫిర్యాదు చేయండి.',
      stage2Points: [
        'వెంటనే 1930 సైబర్ హెల్ప్‌లైన్‌కు కాల్ చేసి మోసం గురించి సమాచారం ఇవ్వండి.',
        'అధికారిక పోర్టల్ https://cybercrime.gov.in/ లో ఫిర్యాదు నమోదు చేయండి.',
        'ఫిర్యాదు అక్నాలెడ్జ్‌మెంట్ నంబర్‌ను భద్రంగా రాసిపెట్టుకోండి.',
      ],
      stage3Badge: 'దశ 3',
      stage3Title: 'Follow Up - అనుసరణ చర్యలు (మొదటి రోజు)',
      stage3Desc: 'సాక్ష్యాలను భద్రపరచండి, పాస్‌వర్డ్‌లను మార్చండి మరియు కుటుంబాన్ని అప్రమత్తం చేయండి.',
      stage3Points: [
        'బ్యాంక్ స్టేట్‌మెంట్లు, SMSలు, వాట్సాప్ చాట్‌లు మరియు ఫోన్ నంబర్ల స్క్రీన్‌షాట్‌లు తీసుకోండి.',
        'సురక్షితమైన పరికరం నుండి మీ ఈమెయిల్ మరియు బ్యాంక్ పాస్‌వర్డ్‌లను మార్చండి.',
        'మీ పేరుతో ఇతరులను మోసం చేయకుండా కుటుంబ సభ్యులకు హెచ్చరిక పంపండి.',
      ],
      disclaimer: 'గమనిక: ఇవి ప్రాథమిక భద్రతా సూచనలు మాత్రమే. ఎవరూ కూడా పోగొట్టుకున్న డబ్బుకు పూర్తి గ్యారెంటీ ఇవ్వలేరు.',
    },
    realityCheck: {
      sectionTitle: 'ఐదు ప్రశ్నల నిజనిర్ధారణ పరీక్ష',
      sectionSubtitle: 'మీరు ఎదుర్కొన్న కాల్ లేదా మెసేజ్ మోసపూరితమైనదా? ప్రధాన హెచ్చరిక సంకేతాలను తనిఖీ చేయండి.',
      intro: 'మీ ఇటీవలి అనుభవానికి సరిపోయే అంశాలను ఎంచుకోండి:',
      questions: [
        {
          id: 'urgency',
          label: 'వెంటనే నిర్ణయం తీసుకోవాలని తీవ్ర ఒత్తిడి',
          description: 'కొద్ది నిమిషాల్లో స్పందించాలని లేదా బ్యాంక్ ఖాతా/సిమ్ వెంటనే బ్లాక్ అవుతుందని బెదిరించడం.',
        },
        {
          id: 'credential',
          label: 'OTP, PIN, పాస్‌వర్డ్ లేదా టెస్ట్ మనీ డిమాండ్',
          description: 'డబ్బు అందుకోవడానికి UPI పిన్ ఎంటర్ చేయాలని లేదా రహస్య OTP చెప్పాలని అడగడం.',
        },
        {
          id: 'coercion',
          label: 'డిజిటల్ అరెస్ట్ లేదా చట్టపరమైన బెదిరింపులు',
          description: 'పోలీస్ లేదా సీబీఐ అధికారులమని వీడియో కాల్‌లో భయపెట్టి నిధులు బదిలీ చేయాలని కోరడం.',
        },
        {
          id: 'remote_access',
          label: 'రిమోట్ కంట్రోల్ సాఫ్ట్‌వేర్ లేదా APK ఇన్‌స్టాల్ చేయమనడం',
          description: 'AnyDesk, TeamViewer లేదా తెలియని APK ఫైల్‌ను డౌన్‌లోడ్ చేయమని బలవంతం చేయడం.',
        },
        {
          id: 'greed',
          label: 'గ్యారెంటీ లాభాలు లేదా రికవరీ హామీలు',
          description: 'టాస్క్‌లతో భారీ ఆదాయం వస్తుందని లేదా ముందస్తు ఫీజు చెల్లిస్తే పోయిన డబ్బు తెప్పిస్తామని ఆశ చూపడం.',
        },
      ],
      resultTitle: 'ప్రమాద తీవ్రత అంచనా',
      zeroSignals: 'ఎటువంటి సాధారణ మోసపూరిత లక్షణాలు కనిపించలేదు. అయినప్పటికీ అధికారిక నంబర్ల ద్వారా మాత్రమే సమాచారాన్ని ధృవీకరించుకోండి.',
      oneSignal: '1 హెచ్చరిక సంకేతం కనుగొనబడింది: నిజమైన బ్యాంకులు లేదా అధికారులు ఎప్పుడూ అత్యవసర గడువులు లేదా పాస్‌వర్డ్‌లను అడగరు.',
      multiSignals: 'తీవ్రమైన హెచ్చరిక సంకేతాలు: ఇది సైబర్ నేరగాళ్ల పథకం కావచ్చు. వెంటనే జాగ్రత్త వహించండి.',
      riskIndicatorNote: 'ఈ హెచ్చరిక సంకేతాలు ముప్పును సూచిస్తాయి, ఇది తుది న్యాయపరమైన రుజువు కాదు.',
      takeActionBtn: 'కార్యాచరణ ప్రణాళికను తెరవండి',
      resetBtn: 'రీసెట్ చేయండి',
    },
    familyAlert: {
      sectionTitle: 'కుటుంబం & స్నేహితుల భద్రతా హెచ్చరిక మెసేజ్',
      sectionSubtitle: 'ద్వితీయ మోసాలను నివారించండి. బాధితుల పేరుతో బంధువులను డబ్బు అడిగే ప్రమాదం ఉంది.',
      instructions: 'గ్రహీతను ఎంచుకుని, మెసేజ్ కాపీ చేసి మీ మెసేజింగ్ యాప్‌లో పంపండి. వ్యక్తిగత సమాచారం ఏదీ సేకరించబడదు.',
      recipientLabel: 'సందేశం ఎవరి కోసం:',
      recipients: [
        { id: 'family', label: 'తల్లిదండ్రులు / కుటుంబ సభ్యులు' },
        { id: 'group', label: 'కుటుంబ వాట్సాప్ గ్రూప్' },
        { id: 'friend', label: 'స్నేహితులు / సహోద్యోగులు' },
      ],
      customNotePlaceholder: 'ఐచ్ఛికం: క్లుప్త వివరాలు జోడించండి (ఉదా: "నా వాట్సాప్ హ్యాక్ అయింది")',
      previewLabel: 'పంపడానికి సిద్ధంగా ఉన్న సందేశం:',
      copyBtn: 'సందేశాన్ని కాపీ చేయండి',
      copiedNotice: 'సందేశం క్లిప్‌బోర్డ్‌కు కాపీ అయింది!',
      whatsappBtn: 'వాట్సాప్‌లో పంపండి',
      privacyNotice: '100% ప్రైవేట్: ఈ సందేశం మీ బ్రౌజర్‌లోనే తయారవుతుంది, ఎటువంటి సర్వర్‌కు పంపబడదు.',
    },
    evidenceAssistant: {
      sectionTitle: 'సాక్ష్యాధారాల నివేదిక సహాయకుడు (Evidence Dossier)',
      sectionSubtitle: 'బ్యాంక్ మరియు cybercrime.gov.in లో ఫిర్యాదు చేయడానికి ముందు పూర్తి వివరాలను సిద్ధం చేసుకోండి.',
      description: 'ఖచ్చితమైన సమయం, UTR నంబర్ మరియు మోసగాడి వివరాలు దర్యాప్తుకు చాలా ఉపయోగపడతాయి.',
      selectScenarioLabel: 'ఘటన నేపథ్యం:',
      checklistTitle: 'ముఖ్యమైన సాక్ష్యాధారాల చెక్‌లిస్ట్ (మీ వద్ద ఉన్నవాటిని ఎంచుకోండి):',
      voluntaryFormTitle: 'ఘటన వివరాలు (అన్నీ ఐచ్ఛికం - మీ బ్రౌజర్ మెమరీలోనే ఉంటాయి):',
      formNotice: 'దయచేసి అసలు బ్యాంక్ పాస్‌వర్డ్ లేదా ATM పిన్‌లను ఇక్కడ నమోదు చేయవద్దు.',
      dateLabel: 'ఘటన జరిగిన తేదీ',
      timeLabel: 'సుమారు సమయం',
      amountLabel: 'కోల్పోయిన మొత్తం (₹)',
      bankLabel: 'మీ బ్యాంక్ / పేమెంట్ యాప్',
      utrLabel: 'లావాదేవీ సంఖ్య / UPI UTR నంబర్',
      suspectContactLabel: 'మోసగాడి ఫోన్ నంబర్ / UPI ID',
      platformLabel: 'ప్లాట్‌ఫామ్ (ఉదా: వాట్సాప్, కాల్, టెలిగ్రామ్)',
      notesLabel: 'సంక్షిప్త వివరణ',
      downloadBtn: 'సారాంశాన్ని డౌన్‌లోడ్ చేయండి (.txt)',
      printBtn: 'ప్రింట్ చేయండి / PDF గా భద్రపరచండి',
      resetBtn: 'అన్ని వివరాలను క్లియర్ చేయండి',
      items: {
        item_bank_sms: 'డబ్బు డెబిట్ అయిన బ్యాంక్ SMS',
        item_upi_utr: '12 అంకెల UPI UTR నంబర్ లేదా బ్యాంక్ లావాదేవీ సంఖ్య',
        item_chat_history: 'మోసగాడి చాట్ మరియు డిమాండ్ల స్క్రీన్‌షాట్‌లు',
        item_phone_number: 'కాల్ చేసిన ఫోన్ నంబర్ లేదా ట్రూకాలర్ వివరాలు',
        item_fraud_account: 'మోసగాడి బ్యాంక్ ఖాతా లేదా UPI ID',
        item_app_link: 'అనుమానాస్పద వెబ్‌సైట్ లింక్ లేదా యాప్ పేరు',
        item_fir_ack: '1930 లేదా పోర్టల్ నుండి అందిన ఫిర్యాదు రసీదు నంబర్',
      },
    },
    resources: {
      sectionTitle: 'అధికారిక ప్రభుత్వ & నియంత్రణ వనరులు',
      sectionSubtitle: 'ఎల్లప్పుడూ అధికారిక పోర్టల్స్‌ను మాత్రమే ఉపయోగించండి.',
      disclaimer: 'సురక్షా సాథి ఒక స్వతంత్ర పౌర భద్రతా నమూనా మరియు ప్రభుత్వ ఏజెన్సీలతో ప్రత్యక్ష సంబంధం లేదు.',
      items: [
        {
          title: 'జాతీయ సైబర్ క్రైమ్ రిపోర్టింగ్ పోర్టల్',
          role: 'ప్రధాన ప్రభుత్వ పోర్టల్',
          contact: 'cybercrime.gov.in',
          description: 'అన్ని రకాల సైబర్ నేరాలు మరియు ఆర్థిక మోసాలపై ఫిర్యాదు చేయడానికి కేంద్ర హోం మంత్రిత్వ శాఖ అధికారిక పోర్టల్.',
          url: 'https://cybercrime.gov.in/',
          priorityTag: 'అధికారిక పోర్టల్',
        },
        {
          title: 'జాతీయ సైబర్ క్రైమ్ హెల్ప్‌లైన్',
          role: 'తక్షణ ఆర్థిక మోసాల సహాయం',
          contact: '1930',
          description: 'ఆర్థిక సైబర్ మోసాలలో ఖాతాలను వెంటనే స్తంభింపజేయడానికి 2 గంటల్లోపు కాల్ చేయండి.',
          url: 'tel:1930',
          isPhone: true,
          priorityTag: '24x7 ఉచిత కాల్',
        },
        {
          title: 'సంచార్ సాథి & చక్షు (Chakshu)',
          role: 'టెలికమ్యూనికేషన్స్ విభాగం (DoT)',
          contact: 'sancharsaathi.gov.in',
          description: 'అనుమానాస్పద కాల్స్, మోసపూరిత SMS లు మరియు సిమ్ దుర్వినియోగంపై ఫిర్యాదు చేయండి.',
          url: 'https://www.sancharsaathi.gov.in/',
          priorityTag: 'టెలికాం భద్రత',
        },
        {
          title: 'ఆర్బీఐ సచేత్ పోర్టల్ (Sachet)',
          role: 'రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా',
          contact: 'sachet.rbi.org.in',
          description: 'చట్టవిరుద్ధ డిపాజిట్లు మరియు అనధికార లోన్ యాప్‌లపై ఫిర్యాదు చేయండి.',
          url: 'https://sachet.rbi.org.in/',
          priorityTag: 'బ్యాంకింగ్ భద్రత',
        },
      ],
    },
    responseModal: {
      stepOf: 'దశ {current} / {total}',
      backBtn: 'మునుపటి దశ',
      nextBtn: 'తదుపరి దశ',
      restartBtn: 'మళ్లీ ప్రారంభించండి',
      closeBtn: 'మూసివేయండి',
      completedLabel: 'పూర్తయింది',
      markDone: 'ఈ దశను పూర్తయినట్లు గుర్తించండి',
      readAloud: 'వాయిస్ ద్వారా వినండి',
      stopAudio: 'వాయిస్ ఆపండి',
      warningHeader: 'భద్రతా హెచ్చరిక',
      needOfficialAssistance: 'అధికారిక ఫిర్యాదు లింక్స్',
      chooseScenarioTitle: 'ఏమి జరిగింది?',
      chooseScenarioSubtitle: 'సరైన మార్గదర్శకాలను పొందడానికి మీ పరిస్థితికి సరిపోయేదాన్ని ఎంచుకోండి:',
    },
    scenarios: {
      money_sent: {
        id: 'money_sent',
        title: 'నేను అనుమానితుడికి డబ్బు పంపాను',
        shortDesc: 'అనధికార UPI, బ్యాంక్ బదిలీ లేదా కార్డు ద్వారా నగదు కట్ అయింది.',
        iconName: 'CreditCard',
        evidenceKeys: ['item_bank_sms', 'item_upi_utr', 'item_fraud_account', 'item_chat_history'],
        steps: [
          {
            id: 'bank_alert',
            title: 'వెంటనే మీ బ్యాంక్ లేదా పేమెంట్ యాప్‌ను సంప్రదించండి',
            instruction: 'మీ బ్యాంక్ లేదా Google Pay, PhonePe అధికారిక హెల్ప్‌లైన్‌కు కాల్ చేయండి. లావాదేవీని వివాదాస్పదం చేసి, ఖాతాను వెంటనే తాత్కాలికంగా ఫ్రీజ్ చేయమని కోరండి.',
            priority: 'critical',
            tip: 'ఎల్లప్పుడూ మీ ATM కార్డు వెనుక ఉన్న నంబర్ లేదా బ్యాంక్ అధికారిక యాప్ ద్వారానే సంప్రదించండి. గూగుల్‌లో నంబర్లను వెతకవద్దు.',
          },
          {
            id: 'call_1930',
            title: '1930 సైబర్ హెల్ప్‌లైన్‌కు వెంటనే కాల్ చేయండి',
            instruction: 'భారతదేశంలో వీలైనంత త్వరగా 1930కి కాల్ చేసి వివరాలు చెప్పండి. లావాదేవీ మొత్తం, మోసగాడి UPI ID మరియు 12 అంకెల UTR నంబర్ అందించండి.',
            priority: 'critical',
            phoneCall: '1930',
            actionLabel: '1930కి కాల్ చేయండి',
          },
          {
            id: 'cybercrime_portal',
            title: 'cybercrime.gov.in లో అధికారిక ఫిర్యాదు నమోదు చేయండి',
            instruction: 'పోర్టల్‌లో "Report Financial Fraud" ఎంచుకుని, లావాదేవీల రసీదులు మరియు చాట్ స్క్రీన్‌షాట్‌లను జతచేసి రసీదు నంబర్ పొందండి.',
            priority: 'high',
            actionUrl: 'https://cybercrime.gov.in/',
            actionLabel: 'పోర్టల్ తెరవండి',
          },
          {
            id: 'preserve_records',
            title: 'అన్ని లావాదేవీల సాక్ష్యాలను భద్రపరచండి',
            instruction: 'బ్యాంక్ SMS, UTR నంబర్ ఉన్న స్క్రీన్‌షాట్‌లు మరియు చాట్‌లను భద్రపరచండి. ఎటువంటి వివరాలనూ తొలగించవద్దు.',
            priority: 'high',
          },
          {
            id: 'beware_recovery_scam',
            title: 'హెచ్చరిక: డబ్బు రికవరీ చేస్తామనే మోసగాళ్లకు ఫీజు చెల్లించవద్దు',
            instruction: 'సోషల్ మీడియాలో పోయిన డబ్బును ఇప్పిస్తామని ఫీజులు అడిగే నకిలీ హ్యాకర్లను ఎట్టిపరిస్థితుల్లోనూ నమ్మవద్దు.',
            priority: 'critical',
          },
        ],
      },
      credential_leak: {
        id: 'credential_leak',
        title: 'నేను OTP, పాస్‌వర్డ్ లేదా బ్యాంక్ వివరాలను పంచుకున్నాను',
        shortDesc: 'రహస్య వివరాలు లీక్ అయ్యాయి లేదా మోసగాడికి ఇవ్వబడ్డాయి.',
        iconName: 'Key',
        evidenceKeys: ['item_bank_sms', 'item_phone_number', 'item_chat_history'],
        steps: [
          {
            id: 'freeze_banking',
            title: 'వెంటనే మీ బ్యాంక్ కార్డులు మరియు నెట్ బ్యాంకింగ్‌ను బ్లాక్ చేయండి',
            instruction: 'కార్డు వివరాలు లేదా OTP ఇచ్చి ఉంటే, వెంటనే కార్డును బ్లాక్ చేయించండి మరియు నెట్ బ్యాంకింగ్ లాగిన్‌ను స్తంభింపజేయండి.',
            priority: 'critical',
          },
          {
            id: 'change_passwords',
            title: 'సురక్షితమైన ఫోన్ నుండి పాస్‌వర్డ్‌లను మార్చండి',
            instruction: 'మరొక సురక్షితమైన పరికరం ద్వారా మీ ఈమెయిల్ మరియు బ్యాంక్ పాస్‌వర్డ్‌లను తక్షణమే మార్చండి.',
            priority: 'critical',
          },
          {
            id: 'revoke_sessions',
            title: 'అన్ని పరికరాల నుండి లాగౌట్ చేసి MFA ఆన్ చేయండి',
            instruction: 'వాట్సాప్ మరియు గూగుల్ ఖాతాలో అనుమానాస్పద పరికరాలను తొలగించి, రెండు-అంచెల రక్షణను (MFA) ప్రారంభించండి.',
            priority: 'high',
          },
          {
            id: 'sim_swap_vigilance',
            title: 'సిమ్ సిగ్నల్ కోల్పోకుండా చూసుకోండి',
            instruction: 'ఫోన్ నెట్‌వర్క్ అకస్మాత్తుగా పోతే, సిమ్ స్వాప్ జరగకుండా వెంటనే మీ టెలికాం ఆపరేటర్‌ను సంప్రదించండి.',
            priority: 'high',
          },
          {
            id: 'report_leak',
            title: 'సైబర్ పోర్టల్‌లో రిపోర్ట్ చేయండి',
            instruction: 'cybercrime.gov.in లో అనధికారిక ప్రవేశం కింద ఫిర్యాదు నమోదు చేయండి.',
            priority: 'normal',
            actionUrl: 'https://cybercrime.gov.in/',
          },
        ],
      },
      malicious_app: {
        id: 'malicious_app',
        title: 'నేను అనుమానాస్పద లింక్ క్లిక్ చేశాను లేదా యాప్ ఇన్‌స్టాల్ చేశాను',
        shortDesc: 'APK డౌన్‌లోడ్ లేదా రిమోట్ స్క్రీన్ షేరింగ్ అనుమతించబడింది.',
        iconName: 'Smartphone',
        evidenceKeys: ['item_app_link', 'item_phone_number', 'item_chat_history'],
        steps: [
          {
            id: 'disconnect_network',
            title: 'వెంటనే ఇంటర్నెట్ మరియు వై-ఫై ఆఫ్ చేయండి',
            instruction: 'ఫోన్‌ను తక్షణమే ఏరోప్లేన్ మోడ్‌లో ఉంచండి. దీనివల్ల మోసగాడు మీ ఫోన్ స్క్రీన్ చూడటం ఆగిపోతుంది.',
            priority: 'critical',
          },
          {
            id: 'secure_from_secondary',
            title: 'వేరొక ఫోన్ నుండి మీ బ్యాంక్ ఖాతాలను భద్రపరచండి',
            instruction: 'వైరస్ సోకిన ఫోన్‌లో బ్యాంక్ లాగిన్ చేయవద్దు. వేరే పరికరం ద్వారా పాస్‌వర్డ్‌లు మార్చండి.',
            priority: 'critical',
          },
          {
            id: 'audit_apps_permissions',
            title: 'అనుమానాస్పద యాప్‌లను వెంటనే అన్‌ఇన్‌స్టాల్ చేయండి',
            instruction: 'ఫోన్ సెట్టింగ్స్‌లో తెలియని లేదా AnyDesk లాంటి రిమోట్ యాప్‌ల అనుమతులను రద్దు చేసి తీసివేయండి.',
            priority: 'high',
          },
          {
            id: 'factory_reset_consideration',
            title: 'అవసరమైతే ఫోన్‌ను ఫ్యాక్టరీ రీసెట్ చేయండి',
            instruction: 'అనుమానం ఉంటే ఫోన్ పూర్తిగా రీసెట్ చేయడం మంచిది.',
            priority: 'high',
          },
          {
            id: 'report_chakshu',
            title: 'చక్షు పోర్టల్‌లో లింక్‌ను నివేదించండి',
            instruction: 'Sanchar Saathi యొక్క Chakshu లో అనుమానాస్పద లింక్‌ను రిపోర్ట్ చేయండి.',
            priority: 'normal',
            actionUrl: 'https://www.sancharsaathi.gov.in/',
          },
        ],
      },
      blackmail_threat: {
        id: 'blackmail_threat',
        title: 'నన్ను ఎవరైనా బెదిరిస్తున్నారు లేదా డబ్బు అడుగుతున్నారు',
        shortDesc: 'డిజిటల్ అరెస్ట్, పోలీస్ పేరుతో భయం లేదా బ్లాక్‌మెయిల్.',
        iconName: 'ShieldAlert',
        evidenceKeys: ['item_phone_number', 'item_chat_history', 'item_fraud_account'],
        steps: [
          {
            id: 'stop_payment',
            title: 'ఎటువంటి డబ్బు పంపవద్దు మరియు భయపడవద్దు',
            instruction: 'భయంతో డబ్బు పంపితే మోసగాళ్లు మరింత వేధిస్తారు. ఎట్టి పరిస్థితుల్లోనూ డబ్బు బదిలీ చేయవద్దు.',
            priority: 'critical',
          },
          {
            id: 'digital_arrest_myth',
            title: 'గుర్తుంచుకోండి: చట్టంలో "డిజిటల్ అరెస్ట్" అనేది లేదు',
            instruction: 'భారతీయ పోలీసులు లేదా సీబీఐ వీడియో కాల్స్‌లో విచారణ చేయరు, ఎవరినీ డిజిటల్ అరెస్ట్ చేయరు మరియు డబ్బు బదిలీ చేయమని అడగరు.',
            priority: 'critical',
          },
          {
            id: 'confide_in_trusted',
            title: 'వెంటనే కుటుంబ సభ్యులకు లేదా స్నేహితులకు చెప్పండి',
            instruction: 'మోసగాళ్లు ఎవరికీ చెప్పవద్దని బెదిరిస్తారు. వెంటనే మీ వారికి విషయం చెప్పి భయాన్ని పోగొట్టుకోండి.',
            priority: 'high',
          },
          {
            id: 'preserve_threats',
            title: 'బెదిరింపు సందేశాలు మరియు నంబర్ల రికార్డు ఉంచండి',
            instruction: 'కాల్ రికార్డులు, స్క్రీన్‌షాట్‌లను జాగ్రత్తగా భద్రపరచండి.',
            priority: 'high',
          },
          {
            id: 'contact_authorities',
            title: '1930 లేదా 112 కి కాల్ చేసి ఫిర్యాదు చేయండి',
            instruction: 'సైబర్ పోర్టల్‌లో ఫిర్యాదు నమోదు చేయండి. తక్షణ ప్రమాదం ఉంటే 112కి కాల్ చేయండి.',
            priority: 'critical',
            phoneCall: '112',
          },
        ],
      },
      suspicious_message: {
        id: 'suspicious_message',
        title: 'నాకు అనుమానాస్పద కాల్ లేదా మెసేజ్ వచ్చింది',
        shortDesc: 'లాటరీ, కరెంట్ కట్ హెచ్చరిక లేదా కొరియర్ పార్సిల్ కాల్.',
        iconName: 'AlertTriangle',
        evidenceKeys: ['item_phone_number', 'item_app_link', 'item_chat_history'],
        steps: [
          {
            id: 'do_not_engage',
            title: 'లింక్‌లపై క్లిక్ చేయవద్దు మరియు సమాధానం ఇవ్వవద్దు',
            instruction: 'అనుమానాస్పద మెసేజ్‌లకు స్పందించకండి మరియు లింక్‌లను తెరవవద్దు.',
            priority: 'critical',
          },
          {
            id: 'verify_independently',
            title: 'అధికారిక సంస్థతో నేరుగా ధృవీకరించుకోండి',
            instruction: 'బ్యాంక్ లేదా విద్యుత్ శాఖ అధికారిక నంబర్ల ద్వారా మాత్రమే వాస్తవాలను తనిఖీ చేయండి.',
            priority: 'high',
          },
          {
            id: 'report_chakshu_dot',
            title: 'చక్షు పోర్టల్‌లో ఆ నంబర్‌ను రిపోర్ట్ చేయండి',
            instruction: 'Sanchar Saathi లో Chakshu ద్వారా ఆ నంబర్‌ను రిపోర్ట్ చేసి సిమ్ బ్లాక్ చేయించండి.',
            priority: 'high',
            actionUrl: 'https://www.sancharsaathi.gov.in/',
          },
          {
            id: 'block_and_flag',
            title: 'నంబర్‌ను బ్లాక్ చేసి స్పామ్‌గా మార్క్ చేయండి',
            instruction: 'మీ ఫోన్‌లో ఆ నంబర్‌ను వెంటనే బ్లాక్ చేయండి.',
            priority: 'normal',
          },
        ],
      },
      helping_someone: {
        id: 'helping_someone',
        title: 'నేను స్నేహితుడికి లేదా కుటుంబ సభ్యునికి సహాయం చేస్తున్నాను',
        shortDesc: 'ఎవరైనా మోసపోయి సహాయం కోరుతున్నారు.',
        iconName: 'Users',
        evidenceKeys: ['item_bank_sms', 'item_upi_utr', 'item_chat_history'],
        steps: [
          {
            id: 'reassure_and_calm',
            title: 'శాంతంగా ఉండండి మరియు వారిని నిందించవద్దు',
            instruction: 'బాధితులు తీవ్ర ఆందోళనలో ఉంటారు. వారికి ధైర్యం చెప్పి తక్షణ రక్షణ చర్యలు ప్రారంభించండి.',
            priority: 'critical',
          },
          {
            id: 'assist_immediate_banking',
            title: 'వారితో కలిసి 1930కి కాల్ చేసి బ్యాంక్‌ను సంప్రదించండి',
            instruction: 'మొదటి 2 గంటల్లోపు 1930కి కాల్ చేయించి ఖాతాను నిలిపివేయించండి.',
            priority: 'critical',
            phoneCall: '1930',
          },
          {
            id: 'gather_evidence_together',
            title: 'సాక్ష్యాలను మరియు UTR నంబర్లను సిద్ధం చేయండి',
            instruction: 'లావాదేవీ వివరాలు, బ్యాంక్ స్టేట్‌మెంట్లను సేకరించడంలో సహాయం చేయండి.',
            priority: 'high',
          },
          {
            id: 'secure_family_circle',
            title: 'కుటుంబాన్ని అప్రమత్తం చేయండి',
            instruction: 'వారి పేరుతో ఎవరైనా డబ్బు అడిగితే ఇవ్వవద్దని ఇతర బంధువులను హెచ్చరించండి.',
            priority: 'high',
          },
          {
            id: 'support_official_complaint',
            title: 'cybercrime.gov.in లో ఫిర్యాదు చేయించండి',
            instruction: 'అధికారిక పోర్టల్‌లో రిపోర్ట్ చేసి రసీదు తీసుకోవడంలో వారికి తోడ్పడండి.',
            priority: 'normal',
            actionUrl: 'https://cybercrime.gov.in/',
          },
        ],
      },
    },
    footer: {
      independentNotice: 'స్వతంత్ర పౌర భద్రతా నమూనా: ఇది ఒక విద్యాసంబంధ డిజిటల్ ప్రథమ స్పందన వేదిక. ఇది ఎటువంటి ప్రభుత్వ విభాగం లేదా బ్యాంక్ కాదు.',
      prototypeDisclaimer: 'హామీలు లేవు: సూచనలు ప్రామాణిక సైబర్ భద్రతా పద్ధతులపై ఆధారపడి ఉంటాయి, కానీ నగదు వాపసుకు పూర్తి హామీ ఇవ్వలేము.',
      privacyCommitment: 'గోపనీయత నిబద్ధత: వ్యక్తిగత ఖాతాలు అవసరం లేదు. డేటా మొత్తం మీ బ్రౌజర్‌లోనే భద్రంగా ఉంటుంది.',
      copyright: 'సురక్షా సాథి — క్లిష్ట సమయాల్లో పౌరులకు రక్షా కవచం.',
    },
  },
};
