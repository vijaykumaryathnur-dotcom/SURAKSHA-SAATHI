import test from 'node:test';
import assert from 'node:assert/strict';
import {
  evaluateWarningSigns,
  generateFamilyAlertText,
  formatEvidenceSummary,
} from './safetyCheck';

test('evaluateWarningSigns calculates counts, levels, and scenario triage correctly', () => {
  // Empty
  const res0 = evaluateWarningSigns([]);
  assert.equal(res0.count, 0);
  assert.equal(res0.level, 'minimal');

  // Single warning sign
  const res1 = evaluateWarningSigns(['credential']);
  assert.equal(res1.count, 1);
  assert.equal(res1.level, 'moderate');
  assert.equal(res1.recommendedActionScenario, 'credential_leak');

  // Remote access sign
  const resRemote = evaluateWarningSigns(['remote_access']);
  assert.equal(resRemote.recommendedActionScenario, 'malicious_app');

  // Coercion sign
  const resCoercion = evaluateWarningSigns(['coercion']);
  assert.equal(resCoercion.recommendedActionScenario, 'blackmail_threat');

  // 3+ warning signs -> critical
  const res3 = evaluateWarningSigns(['urgency', 'credential', 'greed']);
  assert.equal(res3.count, 3);
  assert.equal(res3.level, 'critical');
});

test('generateFamilyAlertText produces proper multilingual alerts without requiring personal identifiers', () => {
  const enMsg = generateFamilyAlertText({
    language: 'en',
    relation: 'Dad',
    customNote: 'My WhatsApp was cloned',
  });
  assert.match(enMsg, /Dear Dad/);
  assert.match(enMsg, /1930/);
  assert.match(enMsg, /My WhatsApp was cloned/);

  const hiMsg = generateFamilyAlertText({
    language: 'hi',
    relation: 'माताजी',
  });
  assert.match(hiMsg, /प्रिय माताजी/);
  assert.match(hiMsg, /1930/);

  const teMsg = generateFamilyAlertText({
    language: 'te',
    relation: 'కుటుంబ సభ్యులు',
  });
  assert.match(teMsg, /ప్రియమైన కుటుంబ సభ్యులు/);
});

test('formatEvidenceSummary generates printable dossier and preserves voluntary fields', () => {
  const summary = formatEvidenceSummary({
    scenarioTitle: 'Money Sent to Scammer',
    incidentDate: '2026-10-23',
    incidentTime: '14:30 IST',
    amountLost: '25,000',
    transactionRef: 'UPI/3294829482',
    paymentAppOrBank: 'Google Pay / HDFC',
    suspectNumberOrHandle: '+91 98765 43210',
    suspectPlatform: 'Telegram',
    completedSteps: ['Called Bank HDFC helpline', 'Dialed 1930'],
    evidenceChecklist: {
      'Transaction SMS': true,
      'Chat transcript': false,
    },
    notes: 'Scammer claimed to be courier customs officer.',
  });

  assert.match(summary, /SURAKSHA SAATHI/);
  assert.match(summary, /25,000/);
  assert.match(summary, /UPI\/3294829482/);
  assert.match(summary, /Dialed 1930/);
  assert.match(summary, /\[X\] Transaction SMS/);
  assert.match(summary, /\[ \] Chat transcript/);
  assert.match(summary, /https:\/\/cybercrime\.gov\.in/);
});
