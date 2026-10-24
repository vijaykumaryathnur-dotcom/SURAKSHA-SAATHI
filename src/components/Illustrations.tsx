import React from 'react';

// Common visual styling tokens
const FOREST_GREEN = '#174C3C';
const SAGE_GREEN = '#DCE6DC';
const WARM_IVORY = '#F7F5EF';
const WARM_CARD = '#FAF8F3';
const VERMILION = '#C94B35';
const CHARCOAL = '#20231F';

/**
 * 1. Money Lost Illustration:
 * A person holding their phone looking concerned at an outgoing debit alert.
 */
export const IllustrationMoneyLost: React.FC<{ className?: string }> = ({ className = 'w-full h-40' }) => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of a person realizing money has been transferred to a scammer"
  >
    {/* Soft background glow */}
    <rect x="10" y="10" width="240" height="140" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />
    
    {/* Person Head & Torso */}
    <circle cx="85" cy="55" r="18" fill="#E8DCC9" stroke={FOREST_GREEN} strokeWidth="1.5" />
    {/* Hair/Head contour */}
    <path d="M70 50 C70 38, 100 38, 100 50" fill={FOREST_GREEN} />
    {/* Expressive eyebrow / eye showing concern */}
    <path d="M80 54 Q85 52 88 54" stroke={CHARCOAL} strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="82" cy="58" r="1.5" fill={CHARCOAL} />
    <circle cx="90" cy="58" r="1.5" fill={CHARCOAL} />

    {/* Torso */}
    <path d="M60 120 C60 90, 72 82, 85 82 C98 82, 110 90, 110 120 Z" fill="#EBE7DC" stroke={FOREST_GREEN} strokeWidth="1.5" />
    
    {/* Arms holding phone */}
    <path d="M72 95 L95 105" stroke={FOREST_GREEN} strokeWidth="4" strokeLinecap="round" />
    <path d="M102 95 L108 108" stroke={FOREST_GREEN} strokeWidth="4" strokeLinecap="round" />

    {/* Smartphone in hand */}
    <rect x="96" y="80" width="32" height="52" rx="4" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.5" />
    <rect x="100" y="86" width="24" height="34" rx="2" fill="#FDF0EE" />
    <circle cx="112" cy="126" r="2" fill={FOREST_GREEN} />

    {/* Money transfer debit notification on screen */}
    <path d="M104 94 H120" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M104 100 H114" stroke={CHARCOAL} strokeWidth="1" strokeLinecap="round" />
    <text x="112" y="112" textAnchor="middle" fill={VERMILION} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
      - ₹
    </text>

    {/* Outward transfer arrow & dashed wave */}
    <path d="M135 100 C150 90, 165 75, 185 75" stroke={VERMILION} strokeWidth="2" strokeDasharray="3 3" />
    <polygon points="190,75 180,70 182,80" fill={VERMILION} />

    {/* Scammer / Unknown recipient node */}
    <circle cx="210" cy="75" r="20" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1.5" />
    <circle cx="210" cy="68" r="7" fill={VERMILION} fillOpacity="0.3" stroke={VERMILION} strokeWidth="1" />
    <path d="M200 87 C200 80, 220 80, 220 87" fill={VERMILION} fillOpacity="0.3" stroke={VERMILION} strokeWidth="1" />
    <path d="M217 60 L223 54" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M221 66 L228 64" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" />

    {/* Immediate guidance pill indicator */}
    <rect x="145" y="120" width="95" height="22" rx="4" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1" />
    <text x="192" y="135" textAnchor="middle" fill={FOREST_GREEN} fontSize="9" fontWeight="bold" fontFamily="sans-serif">
      Call 1930 & Freeze
    </text>
  </svg>
);

/**
 * 2. Account / Credentials Compromised Illustration:
 * A device being secured with a padlock and shield protecting credentials.
 */
export const IllustrationAccountSecurity: React.FC<{ className?: string }> = ({ className = 'w-full h-40' }) => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of securing accounts and changing passwords"
  >
    <rect x="10" y="10" width="240" height="140" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />
    
    {/* Smartphone Frame */}
    <rect x="65" y="32" width="60" height="100" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="2" />
    <rect x="72" y="44" width="46" height="74" rx="2" fill={WARM_IVORY} />
    <circle cx="95" cy="124" r="3" fill={FOREST_GREEN} />

    {/* Password dots on screen */}
    <rect x="76" y="60" width="38" height="14" rx="2" fill="#EBE7DC" stroke="#C5BCAE" strokeWidth="0.8" />
    <circle cx="82" cy="67" r="2" fill={FOREST_GREEN} />
    <circle cx="88" cy="67" r="2" fill={FOREST_GREEN} />
    <circle cx="94" cy="67" r="2" fill={FOREST_GREEN} />
    <circle cx="100" cy="67" r="2" fill={FOREST_GREEN} />
    <circle cx="106" cy="67" r="2" fill={FOREST_GREEN} />

    {/* Reset Arrow around Lock */}
    <path d="M78 88 A15 15 0 1 1 105 100" stroke={FOREST_GREEN} strokeWidth="1.5" strokeLinecap="round" />
    <polygon points="107,95 108,103 100,101" fill={FOREST_GREEN} />

    {/* Large Sturdy Protective Shield (Right) */}
    <path
      d="M165 42 L198 52 V84 C198 106 182 120 165 128 C148 120 132 106 132 84 V52 Z"
      fill={FOREST_GREEN}
      stroke="#10362B"
      strokeWidth="2"
    />
    {/* Shield inner decorative rim */}
    <path
      d="M165 48 L192 56 V82 C192 100 178 112 165 119 C152 112 138 100 138 82 V56 Z"
      fill="#1A5745"
    />

    {/* Golden/Ivory Padlock inside shield */}
    <rect x="156" y="80" width="18" height="16" rx="2" fill="#E8DCC9" stroke="#FFFFFF" strokeWidth="1" />
    <path d="M160 80 V72 C160 69, 170 69, 170 72 V80" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
    <circle cx="165" cy="87" r="1.8" fill={FOREST_GREEN} />
    <path d="M165 89 V92" stroke={FOREST_GREEN} strokeWidth="1.2" strokeLinecap="round" />

    {/* Checkmark of security */}
    <circle cx="205" cy="48" r="12" fill="#2E7D32" stroke="#FFFFFF" strokeWidth="2" />
    <path d="M199 48 L203 52 L211 44" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 3. Suspicious Call or Link Illustration:
 * An incoming call alert with warning signals and digital inspection.
 */
export const IllustrationSuspiciousCall: React.FC<{ className?: string }> = ({ className = 'w-full h-40' }) => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of a suspicious incoming call and phishing message"
  >
    <rect x="10" y="10" width="240" height="140" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Central Phone */}
    <rect x="100" y="24" width="60" height="106" rx="8" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="2" />
    <rect x="106" y="36" width="48" height="80" rx="3" fill="#FAF0EE" />
    <circle cx="130" cy="124" r="2.5" fill={FOREST_GREEN} />

    {/* Caller Icon with Warning */}
    <circle cx="130" cy="56" r="13" fill="#FDF0EE" stroke={VERMILION} strokeWidth="1.5" />
    <path d="M130 50 V57" stroke={VERMILION} strokeWidth="2" strokeLinecap="round" />
    <circle cx="130" cy="62" r="1.2" fill={VERMILION} />

    <text x="130" y="77" textAnchor="middle" fill={VERMILION} fontSize="7" fontWeight="bold" fontFamily="sans-serif">
      UNKNOWN CALL
    </text>
    <text x="130" y="86" textAnchor="middle" fill={CHARCOAL} fontSize="6" fontFamily="sans-serif">
      "Police / Digital Arrest"
    </text>

    {/* Reject Button (Vermilion) & Block Button */}
    <rect x="110" y="93" width="40" height="14" rx="3" fill={VERMILION} />
    <text x="130" y="103" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
      DO NOT COMPLY
    </text>

    {/* Signal Waves on Left (Alert) */}
    <path d="M85 45 C78 55, 78 75, 85 85" stroke={VERMILION} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
    <path d="M75 38 C65 52, 65 88, 75 102" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />

    {/* DoT Chakshu reporting bubble on Right */}
    <g transform="translate(172, 45)">
      <rect x="0" y="0" width="70" height="42" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1" />
      <path d="M0 24 L-6 20 L0 16 Z" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1" />
      <rect x="0" y="21" width="2" height="6" fill="#FFFFFF" />
      <text x="35" y="15" textAnchor="middle" fill={FOREST_GREEN} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
        Report on
      </text>
      <text x="35" y="26" textAnchor="middle" fill={FOREST_GREEN} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
        Chakshu Portal
      </text>
      <text x="35" y="35" textAnchor="middle" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif">
        sancharsaathi.gov.in
      </text>
    </g>
  </svg>
);

/**
 * 4. Family Member Helping a Scam Victim Illustration:
 * Two figures side by side supporting each other and reviewing official steps.
 */
export const IllustrationFamilyHelp: React.FC<{ className?: string }> = ({ className = 'w-full h-40' }) => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of a supportive family member helping a victim"
  >
    <rect x="10" y="10" width="240" height="140" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Person 1: Victim (Relieved / Listening) */}
    <circle cx="85" cy="58" r="16" fill="#E8DCC9" stroke={FOREST_GREEN} strokeWidth="1.5" />
    <path d="M72 52 C72 40, 98 40, 98 52" fill={FOREST_GREEN} />
    <circle cx="81" cy="60" r="1.5" fill={CHARCOAL} />
    <circle cx="89" cy="60" r="1.5" fill={CHARCOAL} />
    <path d="M82 66 Q85 68 88 66" stroke={CHARCOAL} strokeWidth="1" strokeLinecap="round" />
    {/* Body */}
    <path d="M62 125 C62 95, 75 86, 85 86 C95 86, 108 95, 108 125 Z" fill="#FAF4E6" stroke={FOREST_GREEN} strokeWidth="1.5" />

    {/* Person 2: Supportive Family Helper (Caring gesture) */}
    <circle cx="145" cy="54" r="17" fill="#E8DCC9" stroke={FOREST_GREEN} strokeWidth="1.5" />
    <path d="M130 48 C130 35, 160 35, 160 48" fill="#1A5745" />
    <circle cx="141" cy="56" r="1.5" fill={CHARCOAL} />
    <circle cx="149" cy="56" r="1.5" fill={CHARCOAL} />
    <path d="M141 63 Q145 66 149 63" stroke={CHARCOAL} strokeWidth="1.2" strokeLinecap="round" />
    {/* Body */}
    <path d="M122 125 C122 92, 134 82, 145 82 C156 82, 168 92, 168 125 Z" fill={FOREST_GREEN} stroke="#10362B" strokeWidth="1.5" />

    {/* Supportive arm around shoulder */}
    <path d="M136 86 C120 78, 105 84, 98 90" stroke={FOREST_GREEN} strokeWidth="4.5" strokeLinecap="round" />

    {/* Shared Tablet / Dossier between them */}
    <rect x="98" y="98" width="45" height="30" rx="3" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.5" />
    <rect x="103" y="104" width="35" height="4" rx="1" fill={SAGE_GREEN} />
    <rect x="103" y="112" width="22" height="3" rx="1" fill="#EBE7DC" />
    <circle cx="132" cy="118" r="3" fill="#2E7D32" />

    {/* Empathy speech badge */}
    <g transform="translate(160, 30)">
      <rect x="0" y="0" width="80" height="32" rx="5" fill="#FFFFFF" stroke={SAGE_GREEN} strokeWidth="1" />
      <text x="40" y="14" textAnchor="middle" fill={FOREST_GREEN} fontSize="7" fontWeight="bold" fontFamily="sans-serif">
        "Stay calm, I'm here."
      </text>
      <text x="40" y="24" textAnchor="middle" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif">
        We'll report together.
      </text>
    </g>
  </svg>
);

/**
 * 5. Evidence Folder & Dossier Illustration:
 * An organized dossier with receipts, chats, and official verification stamp.
 */
export const IllustrationEvidence: React.FC<{ className?: string }> = ({ className = 'w-full h-40' }) => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of organized evidence preparation and transaction receipts"
  >
    <rect x="10" y="10" width="240" height="140" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Manila Folder Base */}
    <path
      d="M50 125 L50 55 C50 50, 54 46, 60 46 L95 46 L108 55 L190 55 C196 55, 200 59, 200 64 L200 125 Z"
      fill="#EBE5D8"
      stroke="#C5BCAE"
      strokeWidth="1.5"
    />

    {/* Primary Document Sheet protruding */}
    <g transform="rotate(-3 115 50)">
      <rect x="75" y="38" width="80" height="85" rx="3" fill="#FFFFFF" stroke="#D1C7B7" strokeWidth="1" />
      <rect x="83" y="46" width="30" height="4" rx="1" fill={FOREST_GREEN} />
      <rect x="83" y="54" width="55" height="2" rx="0.5" fill="#C5BCAE" />
      <rect x="83" y="60" width="45" height="2" rx="0.5" fill="#C5BCAE" />
      <rect x="83" y="66" width="50" height="2" rx="0.5" fill="#C5BCAE" />
      
      {/* Checkmarks on document */}
      <circle cx="86" cy="76" r="2.5" fill="#DCE6DC" />
      <path d="M84.5 76 L85.5 77 L87.5 75" stroke={FOREST_GREEN} strokeWidth="0.8" strokeLinecap="round" />
      <rect x="92" y="75" width="40" height="2" rx="0.5" fill={CHARCOAL} />

      <circle cx="86" cy="85" r="2.5" fill="#DCE6DC" />
      <path d="M84.5 85 L85.5 86 L87.5 84" stroke={FOREST_GREEN} strokeWidth="0.8" strokeLinecap="round" />
      <rect x="92" y="84" width="35" height="2" rx="0.5" fill={CHARCOAL} />

      {/* UTR Stamp */}
      <rect x="83" y="94" width="60" height="12" rx="2" fill="#FAF8F3" stroke={FOREST_GREEN} strokeWidth="0.8" />
      <text x="113" y="103" textAnchor="middle" fill={FOREST_GREEN} fontSize="6" fontWeight="bold" fontFamily="monospace">
        UTR: 12-DIGIT RECORDED
      </text>
    </g>

    {/* Front flap of folder */}
    <path
      d="M45 130 L55 72 C56 68, 60 65, 65 65 L205 65 C210 65, 214 68, 215 72 L225 130 Z"
      fill="#F3ECE0"
      stroke="#C5BCAE"
      strokeWidth="1.5"
    />

    {/* Label Tab on Folder */}
    <rect x="70" y="80" width="85" height="20" rx="3" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1" />
    <text x="112" y="93" textAnchor="middle" fill={FOREST_GREEN} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
      INCIDENT DOSSIER
    </text>

    {/* Confidential / Client-Side Stamp */}
    <circle cx="180" cy="100" r="16" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1.5" strokeDasharray="3 2" />
    <text x="180" y="98" textAnchor="middle" fill={VERMILION} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
      LOCAL
    </text>
    <text x="180" y="107" textAnchor="middle" fill={VERMILION} fontSize="6" fontFamily="sans-serif">
      MEMORY
    </text>
  </svg>
);

/**
 * 6A. Hero Illustrated Sequence (3 Connected Steps):
 * 1. A person receives a suspicious message or realizes money may have been lost.
 * 2. They select what happened on Suraksha Saathi.
 * 3. They follow clear safety steps and connect with official support.
 */
export const IllustrationHeroSequence: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg
    viewBox="0 0 540 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustrated three-step sequence: receiving a suspicious alert, selecting what happened on Suraksha Saathi, and following clear safety steps to official support"
  >
    {/* Soft paper base frame */}
    <rect x="8" y="8" width="524" height="304" rx="16" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1.2" />

    {/* Stage 1: Suspicious Message / Money Lost realization */}
    <g transform="translate(24, 28)">
      {/* Container Card */}
      <rect x="0" y="0" width="148" height="236" rx="10" fill="#FFFFFF" stroke="#EBE7DC" strokeWidth="1" />
      
      {/* Alert Header Band */}
      <rect x="0" y="0" width="148" height="34" rx="10" fill="#FAF0EE" />
      <rect x="0" y="24" width="148" height="10" fill="#FAF0EE" />
      <circle cx="20" cy="17" r="7" fill={VERMILION} />
      <text x="20" y="21" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">!</text>
      <text x="34" y="21" fill={VERMILION} fontSize="9" fontWeight="bold" fontFamily="sans-serif">
        Suspicious Alert
      </text>

      {/* Person Realizing Threat */}
      <g transform="translate(14, 46)">
        {/* Person Head */}
        <circle cx="36" cy="30" r="16" fill="#E8DCC9" stroke={FOREST_GREEN} strokeWidth="1.5" />
        <path d="M22 24 C22 14, 50 14, 50 24" fill={FOREST_GREEN} />
        {/* Concerned facial expression */}
        <circle cx="31" cy="30" r="1.5" fill={CHARCOAL} />
        <circle cx="41" cy="30" r="1.5" fill={CHARCOAL} />
        <path d="M32 37 Q36 34 40 37" stroke={CHARCOAL} strokeWidth="1.2" strokeLinecap="round" />
        {/* Body */}
        <path d="M14 96 C14 68, 26 60, 36 60 C46 60, 58 68, 58 96 Z" fill="#FAF4E6" stroke={FOREST_GREEN} strokeWidth="1.5" />

        {/* Smartphone with incoming debit / fake CBI call */}
        <rect x="52" y="44" width="48" height="80" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.5" />
        <rect x="56" y="50" width="40" height="60" rx="3" fill="#FAF0EE" />
        {/* Message bubble on phone */}
        <rect x="60" y="56" width="32" height="16" rx="3" fill="#FDF0EE" stroke={VERMILION} strokeWidth="0.8" />
        <text x="76" y="66" textAnchor="middle" fill={VERMILION} fontSize="6" fontWeight="bold" fontFamily="sans-serif">
          - ₹25,000 DEBIT
        </text>
        <path d="M60 76 H92" stroke={CHARCOAL} strokeWidth="1" strokeLinecap="round" />
        <path d="M60 82 H84" stroke={CHARCOAL} strokeWidth="1" strokeLinecap="round" strokeOpacity="0.6" />
        <circle cx="76" cy="116" r="2.5" fill={FOREST_GREEN} />
      </g>

      {/* Stage 1 Bottom Step Indicator */}
      <rect x="12" y="196" width="124" height="28" rx="6" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1" />
      <text x="74" y="209" textAnchor="middle" fill={VERMILION} fontSize="9" fontWeight="bold" fontFamily="sans-serif">
        1. Threat or Debit
      </text>
      <text x="74" y="219" textAnchor="middle" fill={CHARCOAL} fontSize="7.5" fontFamily="sans-serif">
        Suspicious call or money sent
      </text>
    </g>

    {/* Connecting Arrow 1 -> 2 */}
    <g transform="translate(178, 130)">
      <path d="M 0 0 C 8 -10, 14 -10, 20 0" stroke={FOREST_GREEN} strokeWidth="2.5" strokeDasharray="3 3" />
      <polygon points="22,0 16,-4 16,6" fill={FOREST_GREEN} />
    </g>

    {/* Stage 2: Citizen Selects What Happened on Suraksha Saathi */}
    <g transform="translate(196, 28)">
      {/* Container Card */}
      <rect x="0" y="0" width="148" height="236" rx="10" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.5" />
      
      {/* Suraksha Saathi Brand Banner */}
      <rect x="0" y="0" width="148" height="34" rx="10" fill="#174C3C" />
      <rect x="0" y="24" width="148" height="10" fill="#174C3C" />
      <circle cx="18" cy="17" r="7" fill="#E8DCC9" />
      <path d="M18 13 L21 15 V19 C21 21 19 22 18 22 C17 22 15 21 15 19 V15 Z" fill={FOREST_GREEN} />
      <text x="32" y="21" fill="#FFFFFF" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        Suraksha Saathi
      </text>

      {/* Triage Selector UI representation */}
      <g transform="translate(12, 46)">
        <text x="62" y="10" textAnchor="middle" fill={FOREST_GREEN} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
          SELECT WHAT HAPPENED:
        </text>

        {/* Choice Option 1: Money Lost (Active/Selected) */}
        <rect x="0" y="18" width="124" height="36" rx="5" fill="#FAF4E6" stroke={FOREST_GREEN} strokeWidth="1.5" />
        <rect x="6" y="24" width="22" height="24" rx="3" fill="#FAF0EE" />
        <text x="17" y="38" textAnchor="middle" fill={VERMILION} fontSize="9" fontWeight="bold">₹</text>
        <text x="34" y="32" fill={FOREST_GREEN} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
          Money Lost
        </text>
        <text x="34" y="42" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif">
          Unauthorized transfer
        </text>
        <circle cx="114" cy="36" r="5" fill={FOREST_GREEN} />
        <path d="M112 36 L113.5 37.5 L116 34.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

        {/* Choice Option 2: Account at Risk */}
        <rect x="0" y="60" width="124" height="32" rx="5" fill="#FFFFFF" stroke="#EBE7DC" strokeWidth="1" />
        <rect x="6" y="66" width="20" height="20" rx="3" fill="#FAF8F3" />
        <text x="16" y="79" textAnchor="middle" fill={FOREST_GREEN} fontSize="8">🛡</text>
        <text x="32" y="76" fill={CHARCOAL} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
          Account at Risk
        </text>
        <text x="32" y="86" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif" fillOpacity="0.7">
          OTP / Password shared
        </text>

        {/* Choice Option 3: Suspicious Contact */}
        <rect x="0" y="98" width="124" height="32" rx="5" fill="#FFFFFF" stroke="#EBE7DC" strokeWidth="1" />
        <rect x="6" y="104" width="20" height="20" rx="3" fill="#FAF8F3" />
        <text x="16" y="117" textAnchor="middle" fill="#A66E14" fontSize="8">📞</text>
        <text x="32" y="114" fill={CHARCOAL} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
          Suspicious Call
        </text>
        <text x="32" y="124" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif" fillOpacity="0.7">
          "Digital arrest" / Phishing
        </text>
      </g>

      {/* Stage 2 Bottom Step Indicator */}
      <rect x="12" y="196" width="124" height="28" rx="6" fill="#DCE6DC" stroke={FOREST_GREEN} strokeWidth="1" />
      <text x="74" y="209" textAnchor="middle" fill={FOREST_GREEN} fontSize="9" fontWeight="bold" fontFamily="sans-serif">
        2. Choose Situation
      </text>
      <text x="74" y="219" textAnchor="middle" fill={CHARCOAL} fontSize="7.5" fontFamily="sans-serif">
        Tailored emergency plan
      </text>
    </g>

    {/* Connecting Arrow 2 -> 3 */}
    <g transform="translate(350, 130)">
      <path d="M 0 0 C 8 -10, 14 -10, 20 0" stroke={FOREST_GREEN} strokeWidth="2.5" strokeDasharray="3 3" />
      <polygon points="22,0 16,-4 16,6" fill={FOREST_GREEN} />
    </g>

    {/* Stage 3: Follow Steps & Connect with Official Help */}
    <g transform="translate(368, 28)">
      {/* Container Card */}
      <rect x="0" y="0" width="148" height="236" rx="10" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1" />
      
      {/* Official Help Header Band */}
      <rect x="0" y="0" width="148" height="34" rx="10" fill="#E8F5E9" />
      <rect x="0" y="24" width="148" height="10" fill="#E8F5E9" />
      <circle cx="18" cy="17" r="7" fill="#2E7D32" />
      <path d="M15 17 L17 19 L21 15" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="32" y="21" fill="#2E7D32" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        Official Protection
      </text>

      {/* Official Actions & Sturdy Shield */}
      <g transform="translate(12, 44)">
        {/* Large Institutional Shield */}
        <g transform="translate(34, 4)">
          <path
            d="M28 2 L48 9 V26 C48 40 38 49 28 53 C18 49 8 40 8 26 V9 Z"
            fill={FOREST_GREEN}
            stroke="#10362B"
            strokeWidth="1.5"
          />
          <path d="M28 7 L44 13 V25 C44 37 36 44 28 47 C20 44 12 37 12 25 V13 Z" fill="#1A5745" />
          <path d="M22 26 L26 30 L35 21" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* 1930 Helpline Tile */}
        <g transform="translate(0, 64)">
          <rect x="0" y="0" width="124" height="36" rx="5" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1" />
          <circle cx="16" cy="18" r="9" fill={VERMILION} />
          <text x="16" y="22" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">☎</text>
          <text x="32" y="15" fill={VERMILION} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
            1930 National Helpline
          </text>
          <text x="32" y="26" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif">
            CFCFRMS Rapid Freeze
          </text>
        </g>

        {/* cybercrime.gov.in Tile */}
        <g transform="translate(0, 106)">
          <rect x="0" y="0" width="124" height="32" rx="5" fill="#F4F8F5" stroke={FOREST_GREEN} strokeWidth="1" />
          <circle cx="16" cy="16" r="9" fill={FOREST_GREEN} />
          <text x="16" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">🌐</text>
          <text x="32" y="14" fill={FOREST_GREEN} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
            cybercrime.gov.in
          </text>
          <text x="32" y="24" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif">
            Official FIR Registration
          </text>
        </g>
      </g>

      {/* Stage 3 Bottom Step Indicator */}
      <rect x="12" y="196" width="124" height="28" rx="6" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="1" />
      <text x="74" y="209" textAnchor="middle" fill="#2E7D32" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
        3. Official Support
      </text>
      <text x="74" y="219" textAnchor="middle" fill={CHARCOAL} fontSize="7.5" fontFamily="sans-serif">
        1930 & Police Protection
      </text>
    </g>

    {/* Bottom Narrative Anchor Bar */}
    <rect x="24" y="276" width="492" height="28" rx="6" fill="#FFFFFF" stroke={SAGE_GREEN} strokeWidth="1" />
    <text x="270" y="294" textAnchor="middle" fill={FOREST_GREEN} fontSize="9.5" fontWeight="bold" fontFamily="sans-serif">
      A Credible, Calm First-Response Path: From Initial Shock to Official Resolution
    </text>
  </svg>
);

/**
 * 6. Journey from Confusion to Clarity & Protection Illustration:
 * An empathetic 3-milestone sequence showing the citizen moving forward.
 */
export const IllustrationJourney: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <svg
    viewBox="0 0 380 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Visual journey: Confusion to taking action to reaching official protection"
  >
    {/* Milestone 1: Confused / Anxious */}
    <g transform="translate(15, 20)">
      <circle cx="45" cy="40" r="32" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="45" cy="30" r="11" fill="#E8DCC9" stroke={VERMILION} strokeWidth="1" />
      <path d="M36 46 C36 40, 54 40, 54 46" fill="#FAF0EE" />
      <path d="M39 28 L43 28M47 28 L51 28" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M41 36 Q45 33 49 36" stroke={VERMILION} strokeWidth="1.2" strokeLinecap="round" />
      {/* Stormy confusion marks */}
      <path d="M22 15 Q26 10 32 16 T42 12" stroke={VERMILION} strokeWidth="1" strokeLinecap="round" />
      <text x="45" y="90" textAnchor="middle" fill={VERMILION} fontSize="10" fontWeight="bold" fontFamily="sans-serif">
        1. Fraud Happened
      </text>
      <text x="45" y="103" textAnchor="middle" fill={CHARCOAL} fontSize="8" fontFamily="sans-serif">
        Shock & Panic
      </text>
    </g>

    {/* Connecting Arrow 1 */}
    <path d="M100 60 C120 50, 130 50, 145 60" stroke={FOREST_GREEN} strokeWidth="2" strokeDasharray="3 3" />
    <polygon points="150,60 142,55 143,65" fill={FOREST_GREEN} />

    {/* Milestone 2: Immediate Practical Steps */}
    <g transform="translate(145, 20)">
      <circle cx="45" cy="40" r="32" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.5" />
      {/* Phone in action */}
      <rect x="36" y="24" width="18" height="32" rx="3" fill={WARM_IVORY} stroke={FOREST_GREEN} strokeWidth="1.2" />
      <path d="M41 33 H49" stroke={FOREST_GREEN} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M41 38 H46" stroke={FOREST_GREEN} strokeWidth="1" strokeLinecap="round" />
      <circle cx="45" cy="50" r="1.5" fill={FOREST_GREEN} />
      {/* Action checkmark badge */}
      <circle cx="56" cy="24" r="7" fill={FOREST_GREEN} />
      <path d="M53 24 L55 26 L59 22" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="45" y="90" textAnchor="middle" fill={FOREST_GREEN} fontSize="10" fontWeight="bold" fontFamily="sans-serif">
        2. Simple Steps
      </text>
      <text x="45" y="103" textAnchor="middle" fill={CHARCOAL} fontSize="8" fontFamily="sans-serif">
        Freeze & Secure
      </text>
    </g>

    {/* Connecting Arrow 2 */}
    <path d="M230 60 C250 50, 260 50, 275 60" stroke={FOREST_GREEN} strokeWidth="2" strokeDasharray="3 3" />
    <polygon points="280,60 272,55 273,65" fill={FOREST_GREEN} />

    {/* Milestone 3: Official Help & Protection */}
    <g transform="translate(275, 20)">
      <circle cx="45" cy="40" r="32" fill="#FAF8F3" stroke="#2E7D32" strokeWidth="2" />
      {/* Sturdy Shield */}
      <path
        d="M45 22 L60 27 V42 C60 52 53 58 45 61 C37 58 30 52 30 42 V27 Z"
        fill={FOREST_GREEN}
      />
      <path d="M41 42 L44 45 L50 37" stroke="#DCE6DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="45" y="90" textAnchor="middle" fill="#2E7D32" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
        3. Official Help
      </text>
      <text x="45" y="103" textAnchor="middle" fill={CHARCOAL} fontSize="8" fontFamily="sans-serif">
        1930 & cybercrime.gov.in
      </text>
    </g>
  </svg>
);

/**
 * 7. First Hour Golden Window Illustration:
 * Shows the urgent timeline (0-15m Freeze, 15-60m 1930 Helpline, Day 1+ Evidence).
 */
export const IllustrationFirstHour: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <svg
    viewBox="0 0 280 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of the first hour golden window timeline for cyber fraud response"
  >
    <rect x="8" y="8" width="264" height="144" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Analogue Stopwatch Base */}
    <g transform="translate(70, 78)">
      {/* Outer rim */}
      <circle cx="0" cy="0" r="48" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="3" />
      {/* Stopwatch top buttons */}
      <rect x="-6" y="-56" width="12" height="8" rx="2" fill={FOREST_GREEN} />
      <rect x="-10" y="-60" width="20" height="4" rx="1.5" fill={FOREST_GREEN} />
      <path d="M28 -38 L36 -46" stroke={FOREST_GREEN} strokeWidth="3" strokeLinecap="round" />

      {/* Golden Window Sector 0-15 mins (Urgent Freeze) */}
      <path
        d="M 0 0 L 0 -42 A 42 42 0 0 1 42 0 Z"
        fill={VERMILION}
        fillOpacity="0.22"
        stroke={VERMILION}
        strokeWidth="1.5"
      />

      {/* Stage 2 Sector 15-60 mins (1930 & Portal) */}
      <path
        d="M 0 0 L 42 0 A 42 42 0 1 1 0 -42 Z"
        fill={SAGE_GREEN}
        fillOpacity="0.45"
        stroke={FOREST_GREEN}
        strokeWidth="1"
      />

      {/* Clock ticks */}
      <line x1="0" y1="-44" x2="0" y2="-38" stroke={FOREST_GREEN} strokeWidth="2" />
      <line x1="44" y1="0" x2="38" y2="0" stroke={FOREST_GREEN} strokeWidth="2" />
      <line x1="0" y1="44" x2="0" y2="38" stroke={FOREST_GREEN} strokeWidth="2" />
      <line x1="-44" y1="0" x2="-38" y2="0" stroke={FOREST_GREEN} strokeWidth="2" />

      {/* Stopwatch hands pointing to 15m window */}
      <line x1="0" y1="0" x2="26" y2="-12" stroke={VERMILION} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="0" cy="0" r="4" fill={FOREST_GREEN} />

      {/* Inner Label */}
      <text x="0" y="24" textAnchor="middle" fill={FOREST_GREEN} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
        1 HOUR
      </text>
    </g>

    {/* Timeline Milestones on Right */}
    <g transform="translate(138, 22)">
      {/* Stage 1 Card */}
      <rect x="0" y="0" width="124" height="34" rx="6" fill="#FFFFFF" stroke={VERMILION} strokeWidth="1.2" />
      <circle cx="14" cy="17" r="7" fill="#FDF0EE" />
      <text x="14" y="20" textAnchor="middle" fill={VERMILION} fontSize="7.5" fontWeight="bold">1</text>
      <text x="27" y="14" fill={VERMILION} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
        0 – 15 Mins
      </text>
      <text x="27" y="26" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Freeze Bank Account
      </text>

      {/* Connecting Dotted Line */}
      <line x1="14" y1="34" x2="14" y2="44" stroke={FOREST_GREEN} strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Stage 2 Card */}
      <rect x="0" y="44" width="124" height="34" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.2" />
      <circle cx="14" cy="61" r="7" fill={SAGE_GREEN} />
      <text x="14" y="64" textAnchor="middle" fill={FOREST_GREEN} fontSize="7.5" fontWeight="bold">2</text>
      <text x="27" y="58" fill={FOREST_GREEN} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
        15 – 60 Mins
      </text>
      <text x="27" y="70" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Dial 1930 Helpline
      </text>

      {/* Connecting Dotted Line */}
      <line x1="14" y1="78" x2="14" y2="88" stroke={FOREST_GREEN} strokeWidth="1.5" strokeDasharray="2 2" />

      {/* Stage 3 Card */}
      <rect x="0" y="88" width="124" height="34" rx="6" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.2" />
      <circle cx="14" cy="105" r="7" fill="#E8F5E9" />
      <text x="14" y="108" textAnchor="middle" fill="#2E7D32" fontSize="7.5" fontWeight="bold">3</text>
      <text x="27" y="102" fill="#2E7D32" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
        Day 1 Onward
      </text>
      <text x="27" y="114" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Preserve Evidence Dossier
      </text>
    </g>
  </svg>
);

/**
 * 8. Five-Question Scam Reality Check Illustration:
 * Diagnostic magnifying glass and threat heuristic scanner.
 */
export const IllustrationScamCheck: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <svg
    viewBox="0 0 280 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of analyzing scam warning signs with diagnostic checklist and security filter"
  >
    <rect x="8" y="8" width="264" height="144" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Clipboard Checklist on Left */}
    <g transform="translate(32, 22)">
      {/* Clipboard board */}
      <rect x="0" y="8" width="96" height="114" rx="6" fill="#EBE5D8" stroke="#C5BCAE" strokeWidth="1.5" />
      {/* Top Clip */}
      <rect x="30" y="3" width="36" height="10" rx="3" fill={FOREST_GREEN} />
      {/* Paper sheet */}
      <rect x="8" y="16" width="80" height="98" rx="3" fill="#FFFFFF" />

      {/* Checklist items */}
      <rect x="16" y="28" width="10" height="10" rx="2" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1" />
      <path d="M19 33 L22 36 L27 30" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="32" y="31" width="46" height="4" rx="1" fill={CHARCOAL} fillOpacity="0.8" />

      <rect x="16" y="46" width="10" height="10" rx="2" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1" />
      <path d="M19 51 L22 54 L27 48" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="32" y="49" width="40" height="4" rx="1" fill={CHARCOAL} fillOpacity="0.8" />

      <rect x="16" y="64" width="10" height="10" rx="2" fill="#FAF0EE" stroke={VERMILION} strokeWidth="1" />
      <path d="M19 69 L22 72 L27 66" stroke={VERMILION} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="32" y="67" width="48" height="4" rx="1" fill={CHARCOAL} fillOpacity="0.8" />

      <rect x="16" y="82" width="10" height="10" rx="2" fill="#FAF8F3" stroke="#20231F" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="32" y="85" width="36" height="4" rx="1" fill="#20231F" fillOpacity="0.3" />

      <rect x="16" y="100" width="10" height="10" rx="2" fill="#FAF8F3" stroke="#20231F" strokeOpacity="0.3" strokeWidth="1" />
      <rect x="32" y="103" width="42" height="4" rx="1" fill="#20231F" fillOpacity="0.3" />
    </g>

    {/* Magnifying Glass examining threats */}
    <g transform="translate(150, 24)">
      {/* Outer lens shadow & rim */}
      <circle cx="50" cy="50" r="38" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="3" />
      {/* Inner glass tint */}
      <circle cx="50" cy="50" r="35" fill="#F4F8F5" fillOpacity="0.7" />

      {/* Detected warning badges inside lens */}
      <g transform="translate(26, 26)">
        <rect x="0" y="0" width="48" height="16" rx="3" fill="#FDF0EE" stroke={VERMILION} strokeWidth="0.8" />
        <text x="24" y="11" textAnchor="middle" fill={VERMILION} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
          ! RUSH / FEAR
        </text>

        <rect x="2" y="20" width="44" height="16" rx="3" fill="#FDF0EE" stroke={VERMILION} strokeWidth="0.8" />
        <text x="24" y="31" textAnchor="middle" fill={VERMILION} fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
          ! OTP DEMAND
        </text>
      </g>

      {/* Lens Reflection */}
      <path d="M26 32 A30 30 0 0 1 65 24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Magnifying Glass Handle */}
      <path d="M78 78 L104 104" stroke={FOREST_GREEN} strokeWidth="7" strokeLinecap="round" />
      <path d="M82 82 L100 100" stroke="#C5BCAE" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Evaluation badge */}
    <rect x="146" y="124" width="116" height="20" rx="4" fill={FOREST_GREEN} />
    <text x="204" y="137" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
      Heuristics Diagnosed
    </text>
  </svg>
);

/**
 * 9. Official Resources & Verified Infrastructure Illustration:
 * Shows the pillars of official Indian reporting portals.
 */
export const IllustrationOfficialHelp: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <svg
    viewBox="0 0 280 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of verified government cybercrime and financial fraud infrastructure"
  >
    <rect x="8" y="8" width="264" height="144" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Institutional Portico / Archway on Left */}
    <g transform="translate(24, 25)">
      {/* Pediment / Triangular roof */}
      <polygon points="46,6 4,26 88,26" fill={FOREST_GREEN} />
      <rect x="8" y="26" width="76" height="5" fill="#123B2E" />

      {/* 4 Stately Pillars */}
      <rect x="14" y="31" width="8" height="60" fill="#EBE7DC" stroke={FOREST_GREEN} strokeWidth="1" />
      <rect x="32" y="31" width="8" height="60" fill="#EBE7DC" stroke={FOREST_GREEN} strokeWidth="1" />
      <rect x="52" y="31" width="8" height="60" fill="#EBE7DC" stroke={FOREST_GREEN} strokeWidth="1" />
      <rect x="70" y="31" width="8" height="60" fill="#EBE7DC" stroke={FOREST_GREEN} strokeWidth="1" />

      {/* Base Foundation Steps */}
      <rect x="6" y="91" width="80" height="5" fill="#123B2E" />
      <rect x="2" y="96" width="88" height="6" fill={FOREST_GREEN} rx="1" />

      {/* Government Emblem Shield in Tympanum */}
      <circle cx="46" cy="18" r="6" fill="#DCE6DC" />
      <path d="M46 14 L49 16 V19 C49 21 47 22 46 23 C45 22 43 21 43 19 V16 Z" fill={FOREST_GREEN} />
    </g>

    {/* Verified Official Tiles on Right */}
    <g transform="translate(122, 22)">
      {/* 1930 Helpline Tile */}
      <rect x="0" y="0" width="140" height="34" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.2" />
      <rect x="6" y="6" width="22" height="22" rx="4" fill="#FDF0EE" />
      <text x="17" y="20" textAnchor="middle" fill={VERMILION} fontSize="9" fontWeight="bold">☎</text>
      <text x="36" y="15" fill={FOREST_GREEN} fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        1930 National Helpline
      </text>
      <text x="36" y="25" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Citizen Financial Cyber Fraud
      </text>

      {/* Cybercrime Portal Tile */}
      <rect x="0" y="40" width="140" height="34" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.2" />
      <rect x="6" y="46" width="22" height="22" rx="4" fill="#E8F5E9" />
      <text x="17" y="60" textAnchor="middle" fill="#2E7D32" fontSize="9" fontWeight="bold">🌐</text>
      <text x="36" y="55" fill={FOREST_GREEN} fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        cybercrime.gov.in
      </text>
      <text x="36" y="65" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Ministry of Home Affairs
      </text>

      {/* Telecom Chakshu Tile */}
      <rect x="0" y="80" width="140" height="34" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.2" />
      <rect x="6" y="86" width="22" height="22" rx="4" fill="#FAF4E6" />
      <text x="17" y="100" textAnchor="middle" fill="#A66E14" fontSize="9" fontWeight="bold">📱</text>
      <text x="36" y="95" fill={FOREST_GREEN} fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        Sanchar Saathi (Chakshu)
      </text>
      <text x="36" y="105" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Dept. of Telecommunications
      </text>
    </g>

    {/* Verified Official Seal */}
    <g transform="translate(70, 72)">
      <circle cx="16" cy="16" r="14" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="2" />
      <path d="M10 16 L14 20 L22 12" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

/**
 * 10. Device Takeover / Remote Access Removal Illustration:
 * Shows disconnecting phone network, uninstalling AnyDesk/malicious APKs.
 */
export const IllustrationDeviceSecurity: React.FC<{ className?: string }> = ({ className = 'w-full h-40' }) => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of disconnecting internet and removing remote access software"
  >
    <rect x="10" y="10" width="240" height="140" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Smartphone Frame */}
    <rect x="50" y="24" width="65" height="112" rx="8" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="2" />
    <rect x="56" y="36" width="53" height="86" rx="3" fill="#FAF0EE" />
    <circle cx="82.5" cy="128" r="2.5" fill={FOREST_GREEN} />

    {/* Airplane Mode Active Banner on Phone */}
    <rect x="60" y="42" width="45" height="16" rx="3" fill={FOREST_GREEN} />
    <text x="82.5" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
      ✈ AIRPLANE ON
    </text>

    {/* Malicious App with Red Crossout on screen */}
    <g transform="translate(68, 66)">
      <rect x="0" y="0" width="28" height="28" rx="5" fill="#FFFFFF" stroke={VERMILION} strokeWidth="1.5" />
      <text x="14" y="18" textAnchor="middle" fill={VERMILION} fontSize="12" fontWeight="bold">✕</text>
      <text x="14" y="36" textAnchor="middle" fill={VERMILION} fontSize="6" fontWeight="bold">UNINSTALL</text>
    </g>

    {/* Severed Connection Cable / Wireless Break */}
    <g transform="translate(130, 40)">
      <path d="M0 40 Q25 15 50 40" stroke={VERMILION} strokeWidth="2" strokeDasharray="3 3" />
      <text x="25" y="24" textAnchor="middle" fill={VERMILION} fontSize="14" fontWeight="bold">⚡</text>
      <line x1="18" y1="34" x2="32" y2="46" stroke={VERMILION} strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Clean Security Trash / Purge on Right */}
    <g transform="translate(180, 50)">
      <rect x="0" y="10" width="46" height="54" rx="4" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.5" />
      <rect x="-4" y="6" width="54" height="6" rx="2" fill={FOREST_GREEN} />
      {/* Trash lines */}
      <line x1="15" y1="22" x2="15" y2="52" stroke={SAGE_GREEN} strokeWidth="2" strokeLinecap="round" />
      <line x1="23" y1="22" x2="23" y2="52" stroke={SAGE_GREEN} strokeWidth="2" strokeLinecap="round" />
      <line x1="31" y1="22" x2="31" y2="52" stroke={SAGE_GREEN} strokeWidth="2" strokeLinecap="round" />
      {/* Purged APK icon */}
      <circle cx="23" cy="37" r="10" fill="#FDF0EE" />
      <text x="23" y="41" textAnchor="middle" fill={VERMILION} fontSize="9" fontWeight="bold">APK</text>
    </g>

    {/* Guidance label */}
    <rect x="135" y="118" width="105" height="22" rx="4" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1" />
    <text x="187" y="132" textAnchor="middle" fill={FOREST_GREEN} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
      Disconnect & Remove APKs
    </text>
  </svg>
);

/**
 * 11. Digital Arrest & Legal Coercion Illustration:
 * Shows citizen ending a threatening video call; clarifying digital arrest is a scam.
 */
export const IllustrationDigitalArrestCoercion: React.FC<{ className?: string }> = ({ className = 'w-full h-40' }) => (
  <svg
    viewBox="0 0 260 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of firmly hanging up on fake video callers threatening digital arrest"
  >
    <rect x="10" y="10" width="240" height="140" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Video Call Screen with Impersonator */}
    <g transform="translate(30, 26)">
      <rect x="0" y="0" width="96" height="74" rx="6" fill="#20231F" stroke={VERMILION} strokeWidth="2" />
      {/* Fake police camera frame */}
      <rect x="6" y="6" width="84" height="62" rx="3" fill="#323630" />
      {/* Impersonator silhouette */}
      <circle cx="48" cy="30" r="14" fill="#52584F" />
      <path d="M28 58 C28 46, 68 46, 68 58 Z" fill="#52584F" />

      {/* Disconnect Red Overlay */}
      <rect x="10" y="16" width="76" height="30" rx="3" fill={VERMILION} fillOpacity="0.85" />
      <text x="48" y="28" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
        FAKE OFFICIAL
      </text>
      <text x="48" y="39" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">
        CALL DISCONNECTED
      </text>

      {/* Red Call End Button */}
      <circle cx="48" cy="84" r="11" fill={VERMILION} />
      <path d="M42 84 H54" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    {/* Citizen on Right - Calm & In Control */}
    <g transform="translate(145, 26)">
      <circle cx="45" cy="34" r="16" fill="#E8DCC9" stroke={FOREST_GREEN} strokeWidth="1.5" />
      <path d="M32 28 C32 16, 58 16, 58 28" fill={FOREST_GREEN} />
      <circle cx="41" cy="36" r="1.5" fill={CHARCOAL} />
      <circle cx="49" cy="36" r="1.5" fill={CHARCOAL} />
      <path d="M41 42 Q45 44 49 42" stroke={CHARCOAL} strokeWidth="1" strokeLinecap="round" />
      
      {/* Body */}
      <path d="M22 96 C22 66, 36 58, 45 58 C54 58, 68 66, 68 96 Z" fill="#EBE7DC" stroke={FOREST_GREEN} strokeWidth="1.5" />

      {/* Dialing 1930 / 112 phone in hand */}
      <rect x="52" y="66" width="24" height="38" rx="3" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.5" />
      <text x="64" y="82" textAnchor="middle" fill="#2E7D32" fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
        1930
      </text>
      <text x="64" y="94" textAnchor="middle" fill={FOREST_GREEN} fontSize="6" fontWeight="bold" fontFamily="sans-serif">
        POLICE
      </text>
    </g>

    {/* Legal Fact Banner */}
    <rect x="25" y="118" width="210" height="22" rx="4" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1" />
    <text x="130" y="132" textAnchor="middle" fill={FOREST_GREEN} fontSize="8" fontWeight="bold" fontFamily="sans-serif">
      Police & CBI never conduct "Digital Arrest" on video
    </text>
  </svg>
);

/**
 * 12. Get Help / Incident Navigation Illustration:
 * Shows first responder assistance desk with prioritized incident categories and step guides.
 */
export const IllustrationGetHelp: React.FC<{ className?: string }> = ({ className = 'w-full h-44' }) => (
  <svg
    viewBox="0 0 280 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Illustration of prioritized incident navigation and first-response action steps"
  >
    <rect x="8" y="8" width="264" height="144" rx="12" fill={WARM_CARD} stroke={SAGE_GREEN} strokeWidth="1" />

    {/* Left: First Responder Triage Compass / Guide */}
    <g transform="translate(24, 25)">
      {/* Compass / Shield Circle */}
      <circle cx="45" cy="45" r="38" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="2" />
      <circle cx="45" cy="45" r="32" fill="#F4F8F5" stroke={SAGE_GREEN} strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Inner Central Shield */}
      <path
        d="M45 28 L60 34 V50 C60 59 53 66 45 69 C37 66 30 59 30 50 V34 Z"
        fill={FOREST_GREEN}
      />
      {/* Checkmark inside shield */}
      <path d="M39 48 L43 52 L51 43" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* 4 Cardinal Guidance Dots */}
      <circle cx="45" cy="18" r="3" fill={VERMILION} />
      <circle cx="72" cy="45" r="3" fill={FOREST_GREEN} />
      <circle cx="45" cy="72" r="3" fill={FOREST_GREEN} />
      <circle cx="18" cy="45" r="3" fill={FOREST_GREEN} />

      {/* Subtitle below dial */}
      <text x="45" y="96" textAnchor="middle" fill={FOREST_GREEN} fontSize="7.5" fontWeight="bold" fontFamily="sans-serif">
        TRIAGE NAVIGATOR
      </text>
      <text x="45" y="106" textAnchor="middle" fill={CHARCOAL} fontSize="6.5" fontFamily="sans-serif">
        6 Incident Scenarios
      </text>
    </g>

    {/* Right: 3 Step Progress Cards */}
    <g transform="translate(125, 22)">
      {/* Step 1: Immediate Freeze */}
      <rect x="0" y="0" width="138" height="34" rx="6" fill="#FFFFFF" stroke={VERMILION} strokeWidth="1.2" />
      <rect x="6" y="6" width="22" height="22" rx="4" fill="#FDF0EE" />
      <text x="17" y="20" textAnchor="middle" fill={VERMILION} fontSize="9" fontWeight="bold">1</text>
      <text x="36" y="15" fill={VERMILION} fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        Select Your Situation
      </text>
      <text x="36" y="25" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Money, account, or suspicious call
      </text>

      {/* Step 2: Step-by-Step Defense */}
      <rect x="0" y="42" width="138" height="34" rx="6" fill="#FFFFFF" stroke={FOREST_GREEN} strokeWidth="1.2" />
      <rect x="6" y="48" width="22" height="22" rx="4" fill={SAGE_GREEN} />
      <text x="17" y="62" textAnchor="middle" fill={FOREST_GREEN} fontSize="9" fontWeight="bold">2</text>
      <text x="36" y="57" fill={FOREST_GREEN} fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        Follow Calming Steps
      </text>
      <text x="36" y="67" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        Clear guidance, audio narration & tips
      </text>

      {/* Step 3: Evidence & Reporting */}
      <rect x="0" y="84" width="138" height="34" rx="6" fill="#FFFFFF" stroke="#2E7D32" strokeWidth="1.2" />
      <rect x="6" y="90" width="22" height="22" rx="4" fill="#E8F5E9" />
      <text x="17" y="104" textAnchor="middle" fill="#2E7D32" fontSize="9" fontWeight="bold">3</text>
      <text x="36" y="99" fill="#2E7D32" fontSize="8.5" fontWeight="bold" fontFamily="sans-serif">
        Preserve Dossier & Report
      </text>
      <text x="36" y="109" fill={CHARCOAL} fontSize="7" fontFamily="sans-serif">
        1930 Helpline & cybercrime portal
      </text>
    </g>
  </svg>
);

/**
 * Helper to get the canonical SVG illustration for any scenario ID
 */
export const ScenarioIllustration: React.FC<{
  scenarioId: string;
  className?: string;
}> = ({ scenarioId, className = 'w-full h-40' }) => {
  switch (scenarioId) {
    case 'money_sent':
      return <IllustrationMoneyLost className={className} />;
    case 'credential_leak':
      return <IllustrationAccountSecurity className={className} />;
    case 'malicious_app':
    case 'device_takeover':
      return <IllustrationDeviceSecurity className={className} />;
    case 'blackmail_threat':
    case 'coercion_threat':
      return <IllustrationDigitalArrestCoercion className={className} />;
    case 'suspicious_message':
      return <IllustrationSuspiciousCall className={className} />;
    case 'helping_someone':
    case 'family_victim':
      return <IllustrationFamilyHelp className={className} />;
    default:
      return <IllustrationAccountSecurity className={className} />;
  }
};

