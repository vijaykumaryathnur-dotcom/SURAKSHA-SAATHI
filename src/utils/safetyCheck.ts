/**
 * Pure domain logic for Suraksha Saathi:
 * - Warning signs risk evaluation
 * - Family alert message generation
 * - Incident evidence formatting
 * - Recommended scenario triage
 */

export interface WarningSign {
  id: string;
  titleKey: string;
  category: 'urgency' | 'credential' | 'coercion' | 'remote_access' | 'greed';
}

export const WARNING_SIGNS: WarningSign[] = [
  { id: 'urgency', titleKey: 'warning_urgency', category: 'urgency' },
  { id: 'credential', titleKey: 'warning_credential', category: 'credential' },
  { id: 'coercion', titleKey: 'warning_coercion', category: 'coercion' },
  { id: 'remote_access', titleKey: 'warning_remote', category: 'remote_access' },
  { id: 'greed', titleKey: 'warning_greed', category: 'greed' },
];

export interface RiskEvaluation {
  count: number;
  total: number;
  level: 'minimal' | 'moderate' | 'elevated' | 'critical';
  summaryEn: string;
  recommendedActionScenario: string;
}

export function evaluateWarningSigns(selectedIds: string[]): RiskEvaluation {
  const count = selectedIds.length;
  const total = WARNING_SIGNS.length;

  let level: RiskEvaluation['level'] = 'minimal';
  let summaryEn = 'No obvious classic warning signs selected, but remain vigilant.';
  let recommendedActionScenario = 'suspicious_message';

  if (count >= 3) {
    level = 'critical';
    summaryEn = 'Multiple red flags detected. High probability of fraudulent social engineering.';
  } else if (count >= 2) {
    level = 'elevated';
    summaryEn = 'Substantial warning indicators present. Exercise extreme caution.';
  } else if (count === 1) {
    level = 'moderate';
    summaryEn = 'At least one classic pressure tactic or anomaly detected.';
  }

  // Triage scenario recommendation based on specific high-impact signals
  if (selectedIds.includes('credential')) {
    recommendedActionScenario = 'credential_leak';
  } else if (selectedIds.includes('remote_access')) {
    recommendedActionScenario = 'malicious_app';
  } else if (selectedIds.includes('coercion')) {
    recommendedActionScenario = 'blackmail_threat';
  } else if (selectedIds.includes('urgency') || selectedIds.includes('greed')) {
    recommendedActionScenario = 'money_sent';
  }

  return {
    count,
    total,
    level,
    summaryEn,
    recommendedActionScenario,
  };
}

export interface FamilyAlertParams {
  language: 'en' | 'hi' | 'te';
  relation?: string;
  incidentType?: string;
  customNote?: string;
}

export function generateFamilyAlertText(params: FamilyAlertParams): string {
  const { language, relation = 'Family', incidentType, customNote } = params;

  if (language === 'hi') {
    let msg = `[जरूरी सूचना - कृपया पढ़ें]\n\nप्रिय ${relation},\n\nमुझे संदेह है कि मेरे साथ एक ऑनलाइन साइबर धोखाधड़ी की कोशिश हुई है। मैं अपने बैंक खाते और पासवर्ड सुरक्षित करने तथा 1930/साइबर सेल पर रिपोर्ट दर्ज कराने के कदम उठा रहा हूँ।\n\nमहत्वपूर्ण: कृपया मेरे नाम से पैसे, यूपीआई ट्रांसफर या ओटीपी मांगने वाले किसी भी अचानक संदेश या कॉल पर बिल्कुल भरोसा न करें।`;
    if (customNote && customNote.trim()) {
      msg += `\n\nअतिरिक्त नोट: ${customNote.trim()}`;
    }
    msg += `\n\nकोई भी कदम उठाने से पहले कृपया मेरे सामान्य नंबर पर सीधे कॉल करके मुझसे पुष्टि करें।\n— सुरक्षा साथी (नागरिक प्राथमिक प्रतिक्रिया)`;
    return msg;
  }

  if (language === 'te') {
    let msg = `[ముఖ్యమైన హెచ్చరిక - దయచేసి చదవండి]\n\nప్రియమైన ${relation},\n\nనాకు ఆన్‌లైన్ సైబర్ మోసం జరిగి ఉండే అవకాశం ఉందని అనుమానిస్తున్నాను. నేను నా బ్యాంక్ ఖాతాలు, పాస్‌వర్డ్‌లను భద్రపరచడానికి మరియు 1930 / సైబర్ క్రైమ్ పోర్టల్‌లో ఫిర్యాదు చేయడానికి తక్షణ చర్యలు తీసుకుంటున్నాను.\n\nముఖ్య గమనిక: దయచేసి నా పేరుతో డబ్బు లేదా ఓటీపీ (OTP) అడిగే అనుకోని సందేశాలు లేదా కాల్స్‌ను నమ్మవద్దు.`;
    if (customNote && customNote.trim()) {
      msg += `\n\nఅదనపు సమాచారం: ${customNote.trim()}`;
    }
    msg += `\n\nఏదైనా చేసే ముందు దయచేసి నా సాధారణ ఫోన్ నంబర్‌కు నేరుగా కాల్ చేసి నన్ను సంప్రదించండి.\n— సురక్షా సాథి (సైబర్ రక్షణ సహాయం)`;
    return msg;
  }

  // English default
  let msg = `[Urgent Safety Alert - Please Read]\n\nDear ${relation},\n\nI may have encountered a cyber scam or security incident. I am currently taking immediate steps to secure my accounts, freeze affected credentials, and report it through official channels (1930 / cybercrime.gov.in).\n\nCRITICAL: Please do not trust any unexpected requests for money, UPI transfers, or OTPs sent in my name or from my accounts.`;
  if (incidentType) {
    msg += `\nIncident note: ${incidentType}.`;
  }
  if (customNote && customNote.trim()) {
    msg += `\n\nPersonal note: ${customNote.trim()}`;
  }
  msg += `\n\nAlways call me directly on my verified phone number before taking any action.\n— Generated via Suraksha Saathi`;
  return msg;
}

export interface EvidenceRecord {
  scenarioTitle: string;
  incidentDate: string;
  incidentTime: string;
  amountLost?: string;
  transactionRef?: string;
  paymentAppOrBank?: string;
  suspectNumberOrHandle?: string;
  suspectPlatform?: string;
  completedSteps: string[];
  evidenceChecklist: { [key: string]: boolean };
  notes?: string;
}

export function formatEvidenceSummary(record: EvidenceRecord): string {
  const lines: string[] = [
    '================================================================',
    ' SURAKSHA SAATHI — CITIZEN CYBER FRAUD INCIDENT PREPARATION SUMMARY',
    '================================================================',
    'NOTICE: This document is a self-generated citizen preparation dossier',
    'to assist you when contacting your bank or filing on cybercrime.gov.in.',
    'It is NOT an official police FIR or guaranteed recovery filing.',
    '----------------------------------------------------------------',
    `Report Type: ${record.scenarioTitle || 'Cyber Fraud Incident'}`,
    `Generated On: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    '----------------------------------------------------------------',
    '1. INCIDENT TIMELINE & FINANCIAL DETAILS',
    `   Date of Occurrence: ${record.incidentDate || '[Not specified]'}`,
    `   Approximate Time:   ${record.incidentTime || '[Not specified]'}`,
    `   Financial Loss:     ${record.amountLost ? '₹ ' + record.amountLost : 'None / Not recorded'}`,
    `   Bank / Payment App: ${record.paymentAppOrBank || '[Not specified]'}`,
    `   Transaction / UTR:  ${record.transactionRef || '[Not specified]'}`,
    '',
    '2. SUSPECT DETAILS',
    `   Suspect Phone / Handle: ${record.suspectNumberOrHandle || '[Not specified]'}`,
    `   Platform Encountered:   ${record.suspectPlatform || '[Not specified]'}`,
    '',
    '3. EVIDENCE PRESERVED BY CITIZEN',
  ];

  const checks = Object.entries(record.evidenceChecklist);
  if (checks.length > 0) {
    for (const [key, done] of checks) {
      lines.push(`   [${done ? 'X' : ' '}] ${key}`);
    }
  } else {
    lines.push('   (No checklist items recorded yet)');
  }

  lines.push('');
  lines.push('4. IMMEDIATE ACTIONS TAKEN');
  if (record.completedSteps.length > 0) {
    record.completedSteps.forEach((step, idx) => {
      lines.push(`   ${idx + 1}. ${step}`);
    });
  } else {
    lines.push('   (No steps logged as completed yet)');
  }

  if (record.notes && record.notes.trim()) {
    lines.push('');
    lines.push('5. ADDITIONAL CITIZEN NOTES');
    lines.push(`   ${record.notes.trim()}`);
  }

  lines.push('');
  lines.push('----------------------------------------------------------------');
  lines.push('NEXT OFFICIAL STEPS:');
  lines.push('• Call 1930 immediately (National Cybercrime Financial Helpline).');
  lines.push('• File an official report at: https://cybercrime.gov.in/');
  lines.push('• Contact your bank branch or official customer service.');
  lines.push('• For suspicious telecom communications, report on Chakshu: https://sancharsaathi.gov.in/');
  lines.push('================================================================');

  return lines.join('\n');
}
