export const serviceCategories = [
  { id: "all", label: "All Practices", icon: "LayoutGrid" },
  { id: "taxation", label: "Income Tax", icon: "Receipt" },
  { id: "gst", label: "GST Compliance", icon: "FileText" },
  { id: "company-law", label: "Corporate & MCA", icon: "Building2" },
  { id: "certifications", label: "Certifications & Attestation", icon: "Award" },
  { id: "advisory", label: "Advisory & Accounting", icon: "TrendingUp" }
];

export const services = [
  // ==========================================
  // 1. INCOME TAX SERVICES (Sheet 1)
  // ==========================================
  {
    id: "itr-salaried-house-property",
    slug: "itr-salaried-house-property",
    category: "taxation",
    categoryLabel: "Income Tax",
    title: "ITR-1 / ITR-2 (Salaried & House Property)",
    shortDescription: "Form 16, 26AS/AIS reconciliation, capital gains and other income computation with deduction optimization.",
    fullDescription: "Accurate filing of Income Tax Return Form 1 rolls and 2 for individuals, salaried employees, NRI income earners, and property owners. We reconcile multiple Form 16s, match tax deductions against AIS/TIS and Form 26AS, compute capital gains from mutual funds and equities, and optimize Chapter VI-A deductions.",
    scopeOfWork: "Form 16, 26AS/AIS reconciliation, capital gains/other income calculation, deduction optimization and electronic ITR filing.",
    startingPrice: 1000,
    priceDisplay: "₹1,000 – ₹2,500+",
    priceType: "Per Assessment Year",
    popular: true,
    ctaType: "book",
    timeline: "24 – 48 Hours",
    deliverables: [
      "26AS, AIS & TIS line-by-line mismatch analysis",
      "Salary, house property, and other income tax calculation",
      "Capital gains computation for stocks and mutual funds",
      "ITR-1 / ITR-2 electronic filing on IT portal",
      "ITR-V acknowledgment receipt & verification support"
    ],
    documentsRequired: [
      "Form 16 from all employers during the FY",
      "PAN Card & Aadhaar Card",
      "Bank statements of all active bank accounts",
      "Capital gains broker summary (Zerodha/Groww/CAMS/KFintech)",
      "Home loan interest / rent payment receipts"
    ],
    faqItems: [
      { q: "What is the difference between ITR-1 and ITR-2?", a: "ITR-1 (Sahaj) is for salaried individuals with income up to ₹50 Lakhs and one house property. ITR-2 applies if you have capital gains from shares/property, foreign assets, or income exceeding ₹50 Lakhs." }
    ]
  },
  {
    id: "itr-business-professionals",
    slug: "itr-business-professionals",
    category: "taxation",
    categoryLabel: "Income Tax",
    title: "ITR-3 / ITR-4 (Business & Professionals)",
    shortDescription: "Presumptive taxation (Section 44AD / 44ADA) or regular P&L and Balance Sheet computation for proprietors and freelance consultants.",
    fullDescription: "Custom direct tax filing for doctors, lawyers, IT consultants, software freelancers, digital creators, traders, and small business owners. We evaluate optimal tax savings between Presumptive Taxation (44AD/44ADA) vs. maintaining detailed books of accounts.",
    scopeOfWork: "Presumptive taxation (44AD/44ADA) or regular P&L and balance sheet computation, gross turnover verification, and ITR-3/4 filing.",
    startingPrice: 2000,
    priceDisplay: "₹2,000 – ₹4,000+",
    priceType: "Per Assessment Year",
    popular: true,
    ctaType: "book",
    timeline: "2 – 3 Business Days",
    deliverables: [
      "Eligibility review under Section 44AD (Business) / 44ADA (Professionals)",
      "Computation of gross receipts and eligible business expense deductions",
      "Depreciation scheduling and asset ledger verification",
      "Advance tax schedule and final liability calculation",
      "ITR-3 / ITR-4 electronic portal submission"
    ],
    documentsRequired: [
      "Bank statements for the entire financial year",
      "Sales ledger / client invoice summary",
      "Form 26AS, AIS, and TIS reports",
      "Expense vouchers and investment proofs"
    ],
    faqItems: [
      { q: "Who qualifies for Section 44ADA 50% presumptive taxation?", a: "Specified professionals (engineers, doctors, lawyers, accountants, technical consultants, interior designers) with gross receipts up to ₹75 Lakhs (if cash receipts ≤ 5%)." }
    ]
  },
  {
    id: "itr-firms-llps-companies",
    slug: "itr-firms-llps-companies",
    category: "taxation",
    categoryLabel: "Income Tax",
    title: "ITR-5 / ITR-6 (Firms, LLPs, Companies)",
    shortDescription: "Financials audit readiness, MAT calculation, Section 115BAA concessional tax regime evaluation, and corporate tax return filing.",
    fullDescription: "Specialized corporate tax return filing for Partnership Firms, LLPs, Private Limited Companies, and Public Limited entities. We compute Minimum Alternate Tax (MAT), evaluate Section 115BAA 22% corporate tax regime, account for brought-forward business losses, and file ITR-5 / ITR-6 with digital signatures.",
    scopeOfWork: "Financials audit readiness, MAT calculation, corporate tax return filing, and electronic portal submission.",
    startingPrice: 3500,
    priceDisplay: "₹3,500 – ₹6,000+",
    priceType: "Per Financial Year",
    popular: true,
    ctaType: "book",
    timeline: "3 – 5 Business Days",
    deliverables: [
      "Review of audited/provisional Balance Sheet and P&L Statement",
      "Computation of total corporate income & MAT under Section 115JB",
      "Tax provisioning and Advance Tax reconciliation",
      "Preparation and electronic submission of ITR-5 (LLP/Firm) or ITR-6 (Company)",
      "Digital Signature Certificate (DSC) verification on portal"
    ],
    documentsRequired: [
      "Audited financial statements with statutory audit report",
      "Trial balance and fixed asset schedule",
      "Form 26AS, AIS, and previous year tax returns",
      "Partner / Director KYC and DSC tokens"
    ],
    faqItems: [
      { q: "When is the ITR filing due date for corporate entities?", a: "For companies requiring statutory tax audit, the due date is typically October 31st of the relevant assessment year." }
    ]
  },
  {
    id: "tax-audit-section-44ab",
    slug: "tax-audit-section-44ab",
    category: "taxation",
    categoryLabel: "Income Tax",
    title: "Tax Audit u/s 44AB",
    shortDescription: "Form 3CA / 3CB and Form 3CD preparation, verification, vouching, and electronic uploading by practicing Chartered Accountants.",
    fullDescription: "Comprehensive statutory direct tax audit mandated under Section 44AB of the Income Tax Act. We perform thorough vouching, verify TDS compliance on contractor/professional payouts, check Section 40A(3) cash restrictions, review Section 43B(h) MSME compliance, and certify Form 3CA/3CB and Form 3CD with valid UDIN.",
    scopeOfWork: "Form 3CA/3CB and 3CD preparation, verification, ledger vouching, UDIN generation, and uploading.",
    startingPrice: 15000,
    priceDisplay: "₹15,000 – ₹25,000+",
    priceType: "Per Financial Year",
    popular: false,
    ctaType: "quote",
    timeline: "7 – 15 Business Days",
    deliverables: [
      "Detailed general ledger verification and vouching",
      "Compilation of Form 3CD with all 44 mandatory clauses",
      "Verification of TDS/TCS deductions, EPF/ESI deposits, and Section 43B dues",
      "Issue of Audit Report in Form 3CA (Companies) or Form 3CB (Non-Companies)",
      "ICAI UDIN generation and e-filing on Income Tax Portal"
    ],
    documentsRequired: [
      "Final Trial Balance, Balance Sheet, and P&L",
      "Bank statements with month-end reconciliation sheets",
      "Fixed asset register with depreciation workpapers",
      "TDS returns (24Q/26Q) and monthly challans"
    ],
    faqItems: [
      { q: "What is the turnover threshold for a Tax Audit u/s 44AB?", a: "Mandatory if business turnover exceeds ₹1 Crore (or ₹10 Crores if cash transactions are ≤ 5% of total receipts/payments); or professional receipts exceed ₹50 Lakhs (₹75 Lakhs under 44ADA)." }
    ]
  },
  {
    id: "tds-tcs-compliance",
    slug: "tds-tcs-compliance",
    category: "taxation",
    categoryLabel: "Income Tax",
    title: "TDS / TCS Compliance",
    shortDescription: "Quarterly returns (Form 24Q, 26Q, 27Q), challan payments, default justification reports, and Form 16/16A generation.",
    fullDescription: "Complete withholding tax management. We verify deduction rates under Sections 194C, 194J, 194I, 194Q, 195, file quarterly returns on TRACES, resolve short-deduction default notices, and generate digitally signed Form 16 (Salary) and Form 16A (Non-Salary).",
    scopeOfWork: "Quarterly returns (24Q, 26Q, 27Q), challan payments, TRACES correction filings, Form 16/16A generation.",
    startingPrice: 1500,
    priceDisplay: "₹1,500 – ₹3,500 / quarter",
    priceType: "Per Quarter",
    popular: false,
    ctaType: "book",
    timeline: "2 – 4 Business Days",
    deliverables: [
      "Verification of TAN challans and BSR codes",
      "Preparation of FVU return files for Form 24Q, 26Q, and 27Q",
      "Upload on NSDL / Income Tax Portal with token generation",
      "TRACES default justification analysis and correction statements",
      "Bulk generation of Form 16 and Form 16A certificates"
    ],
    documentsRequired: [
      "TAN registration and TRACES portal login credentials",
      "Salary register and contractor/vendor payment ledgers",
      "Challan details (BSR code, date, serial number)"
    ],
    faqItems: [
      { q: "What is the penalty for late filing of TDS returns?", a: "A statutory late fee of ₹200 per day under Section 234E applies until the return is submitted, capped at the total TDS amount." }
    ]
  },
  {
    id: "scrutiny-assessment-handling",
    slug: "scrutiny-assessment-handling",
    category: "taxation",
    categoryLabel: "Income Tax",
    title: "Scrutiny & Assessment Handling",
    shortDescription: "Professional legal drafting and representation for notices u/s 143(1), 143(2), 148, and Faceless Appeal representation.",
    fullDescription: "Senior tax representation before the National Faceless Assessment Centre (NFAC). We analyze notice grounds, examine cash deposits or high-value transactions flagged in SFT, collate corroborating evidence, draft detailed legal submissions, and attend video hearings.",
    scopeOfWork: "Replying to notices (u/s 143(1), 143(2), 148), faceless appeal representation, and documentation compilation.",
    startingPrice: 5000,
    priceDisplay: "₹5,000 – ₹20,000 / matter",
    priceType: "Per Matter / Case Complexity",
    popular: false,
    ctaType: "quote",
    timeline: "Urgent handling prior to notice due date",
    deliverables: [
      "Comprehensive scrutiny notice grounds and DIN verification",
      "Factual and legal reply drafting citing landmark judicial precedents",
      "Collation and indexing of bank statements and source vouchers",
      "Filing response on e-Proceedings IT portal",
      "Preparation for faceless video conference hearings if requested by NFAC"
    ],
    documentsRequired: [
      "Copy of notice received with Document Identification Number (DIN)",
      "Original ITR acknowledgment and computation sheet for the AY",
      "Bank statements, loan agreements, or investment records questioned"
    ],
    faqItems: [
      { q: "Is personal appearance needed for income tax scrutiny?", a: "No. India's Faceless Assessment Scheme conducts 100% of assessments, communications, and hearings electronically through the portal." }
    ]
  },

  // ==========================================
  // 2. GST SERVICES (Sheet 1)
  // ==========================================
  {
    id: "gst-registration",
    slug: "gst-registration",
    category: "gst",
    categoryLabel: "GST Compliance",
    title: "GST Registration",
    shortDescription: "New GSTIN application, jurisdiction determination, document verification, and query resolution for businesses.",
    fullDescription: "End-to-end procurement of Goods and Services Tax Identification Number (GSTIN) for proprietorships, partnerships, LLPs, Private Limited companies, and e-commerce sellers. Includes Aadhaar authentication and replying to officer clarification notices.",
    scopeOfWork: "New application, document verification, Aadhaar authentication, and officer query resolution.",
    startingPrice: 1500,
    priceDisplay: "₹1,500",
    priceType: "One-Time All-Inclusive",
    popular: true,
    ctaType: "book",
    timeline: "3 – 7 Working Days",
    deliverables: [
      "Jurisdiction identification and HSN/SAC code selection",
      "Application preparation and ARN generation on GST Portal",
      "Aadhaar biometric authentication facilitation",
      "Drafting response to Show Cause / Clarification notices",
      "Delivery of official GST Certificate (Form REG-06)"
    ],
    documentsRequired: [
      "PAN Card & Aadhaar of Proprietor / Partners / Directors",
      "Principal Place of Business Proof (Electricity bill + Rent Agreement/NOC)",
      "Bank proof (Cancelled cheque or Bank Statement with name & IFSC)",
      "Partnership Deed / Incorporation Certificate (if applicable)"
    ],
    faqItems: [
      { q: "When is GST registration mandatory?", a: "Mandatory for goods businesses with turnover above ₹40 Lakhs (₹20 Lakhs in special states), services businesses above ₹20 Lakhs, and for all inter-state suppliers and e-commerce sellers." }
    ]
  },
  {
    id: "monthly-quarterly-gst-filing",
    slug: "monthly-quarterly-gst-filing",
    category: "gst",
    categoryLabel: "GST Compliance",
    title: "Monthly/Quarterly Filing (GSTR-1 & 3B)",
    shortDescription: "Sales invoice upload, Input Tax Credit (ITC) reconciliation (GSTR-2B vs Books), challan payment, and timely return filing.",
    fullDescription: "Continuous monthly/quarterly indirect tax compliance. We match purchase ledgers against auto-drafted GSTR-2B, prevent ITC loss from defaulting vendors, verify reverse charge mechanisms (RCM), and file GSTR-1 and GSTR-3B before due dates.",
    scopeOfWork: "Invoice upload, ITC reconciliation (GSTR-2B vs Books), challan payment, and monthly return filing.",
    startingPrice: 1500,
    priceDisplay: "₹1,500 – ₹3,500 / month",
    priceType: "Per Month Retainer",
    popular: true,
    ctaType: "book",
    timeline: "Filed before 11th & 20th of each month",
    deliverables: [
      "Outward B2B and B2C sales invoice categorization",
      "Automated monthly GSTR-2B vs. Books purchase reconciliation",
      "Unmatched vendor list to follow up on missing ITC credits",
      "Filing of GSTR-1 (Outward Supplies) & GSTR-3B (Summary Return)",
      "Monthly GST tax liability challan (PMT-06) generation"
    ],
    documentsRequired: [
      "Sales register with HSN codes, invoice dates, and taxable values",
      "Purchase register / vendor invoices",
      "Bank statement of the filing month"
    ],
    faqItems: [
      { q: "Can we claim ITC if the supplier has not filed their return?", a: "Under Rule 36(4), Input Tax Credit can only be claimed if it is reflected in your GSTR-2B. We provide real-time vendor mismatch reports." }
    ]
  },
  {
    id: "gst-annual-return-gstr9-9c",
    slug: "gst-annual-return-gstr9-9c",
    category: "gst",
    categoryLabel: "GST Compliance",
    title: "GST Annual Return (GSTR-9 & 9C)",
    shortDescription: "Annual turnover reconciliation, ITC mismatch analysis, audit reconciliation, and differential liability settlement.",
    fullDescription: "Statutory annual reconciliation between audited books of accounts and filed monthly GST returns. We detect turnover leakages, correct omitted outward supplies, adjust unclaimed ITC, compute DRC-03 differential payments, and file GSTR-9 and GSTR-9C.",
    scopeOfWork: "Annual turnover reconciliation, ITC mismatch analysis, audit reconciliation, and GSTR-9/9C filing.",
    startingPrice: 8000,
    priceDisplay: "₹8,000 – ₹15,000",
    priceType: "Per Financial Year",
    popular: false,
    ctaType: "quote",
    timeline: "5 – 10 Business Days",
    deliverables: [
      "Line-by-line financial audit vs GSTR-1 and GSTR-3B variance sheet",
      "HSN-wise inward and outward summary compilation",
      "DRC-03 tax liability computation and payment guidance",
      "Preparation and electronic submission of Form GSTR-9",
      "Preparation of reconciliation statement in Form GSTR-9C"
    ],
    documentsRequired: [
      "Audited Financial Statements (Balance Sheet, P&L, Trial Balance)",
      "Full financial year GSTR-1, GSTR-3B, and GSTR-2A/2B reports",
      "State-wise branch turnover distribution (for multi-state firms)"
    ],
    faqItems: [
      { q: "Who is required to file GSTR-9 and GSTR-9C?", a: "GSTR-9 is mandatory for taxpayers with annual turnover > ₹2 Crores; GSTR-9C self-certified reconciliation is required if turnover > ₹5 Crores." }
    ]
  },
  {
    id: "gst-refund-filing",
    slug: "gst-refund-filing",
    category: "gst",
    categoryLabel: "GST Compliance",
    title: "GST Refund Filing",
    shortDescription: "Export refunds (with/without LUT), inverted duty structure refunds, and excess cash ledger balances.",
    fullDescription: "End-to-end processing of GST refunds under Section 54. We prepare Form RFD-01, link Electronic Bank Realization Certificates (BRC/FIRC) for exporters, compute inverted duty refund formulas for manufacturers, and follow up until the sanction order is issued.",
    scopeOfWork: "Export refunds (with/without LUT), inverted duty structure refunds, document linking, and RFD-01 processing.",
    startingPrice: 5000,
    priceDisplay: "₹5,000 – ₹15,000 (or % based)",
    priceType: "Per Application / Case Scope",
    popular: false,
    ctaType: "quote",
    timeline: "Expedited filing within 5 days",
    deliverables: [
      "Refund eligibility and formula calculation",
      "Collation of shipping bills, export invoices, and FIRC/e-BRCs",
      "Filing of Form RFD-01 on GST Common Portal with statement attachments",
      "Replying to RFD-08 Deficiency Memos or Show Cause notices",
      "Tracking till RFD-06 Refund Sanction Order and bank credit"
    ],
    documentsRequired: [
      "Export invoices, Shipping Bills / Bills of Export",
      "Bank Realization Certificates (e-BRC / FIRC)",
      "Statement of invoices showing inverted duty structure (if applicable)"
    ],
    faqItems: [
      { q: "What is an inverted duty structure?", a: "When the tax rate on raw material inputs is higher than the tax rate on output supplies, resulting in unutilized accumulated ITC eligible for cash refund." }
    ]
  },
  {
    id: "gst-notice-advisory",
    slug: "gst-notice-advisory",
    category: "gst",
    categoryLabel: "GST Compliance",
    title: "GST Notice & Advisory",
    shortDescription: "DRC-01, ASMT-10 scrutiny response drafting, departmental audit assistance, and input tax credit dispute defense.",
    fullDescription: "Legal representation and drafting for GST disputes. We address mismatch notices (ASMT-10), Show Cause Notices (DRC-01 / DRC-01A), blocked ITC under Section 17(5), and provide on-site or digital assistance during departmental audits.",
    scopeOfWork: "DRC-01, ASMT-10 response drafting, departmental audit assistance, and dispute resolution.",
    startingPrice: 3500,
    priceDisplay: "₹3,500 – ₹15,000 / case",
    priceType: "Per Case / Notice Scope",
    popular: false,
    ctaType: "quote",
    timeline: "Fast-track reply management",
    deliverables: [
      "Detailed factual and legal review of notice allegations",
      "Preparation of clause-wise legal reply in Form ASMT-11 / DRC-06",
      "Reconciliation workpapers with invoice and e-Way bill proofs",
      "Submission on the GST Portal dispute resolution desk",
      "Guidance for personal hearings before the Proper Officer"
    ],
    documentsRequired: [
      "Copy of notice received (ASMT-10, DRC-01, or Audit Notice Form ADT-01)",
      "Relevant sales/purchase invoices, e-Way bills, and payment records",
      "Previous return filings and monthly ITC summaries"
    ],
    faqItems: [
      { q: "What should I do upon receiving an ASMT-10 scrutiny notice?", a: "ASMT-10 must be replied to within 30 days in Form ASMT-11. We reconcile the variance to explain discrepancies before a formal demand (DRC-01) is issued." }
    ]
  },

  // ==========================================
  // 3. CORPORATE & MCA SERVICES (Sheet 1)
  // ==========================================
  {
    id: "company-incorporation-pvt-ltd-section8",
    slug: "company-incorporation-pvt-ltd-section8",
    category: "company-law",
    categoryLabel: "Corporate & MCA",
    title: "Company Incorporation (Pvt Ltd / Section 8)",
    shortDescription: "Name approval (RUN), DSC, SPICe+ filing, customized MOA/AOA, PAN, TAN, and Bank Current Account opening.",
    fullDescription: "Complete registration of Private Limited Companies and Section 8 Non-Profit Companies under the Companies Act 2013. Package includes name reservation, Class 3 DSC for 2 directors, DIN allotment, tailored MOA/AOA drafting, EPFO/ESIC/PT registration, and bank account setup.",
    scopeOfWork: "Name approval (RUN), DSC, SPICe+ filing, MOA/AOA, PAN, TAN, Bank A/c, and Certificate of Incorporation.",
    startingPrice: 4000,
    priceDisplay: "₹4,000 – ₹6,000 (govt fees extra)",
    priceType: "Professional Package Fee",
    popular: true,
    ctaType: "book",
    timeline: "5 – 10 Business Days",
    deliverables: [
      "Name approval under SPICe+ Part A",
      "Class 3 Digital Signature Certificates (DSC) for 2 Directors",
      "Drafting of Memorandum & Articles of Association (MOA & AOA)",
      "Certificate of Incorporation (COI) with CIN allotment",
      "Company PAN, TAN, EPFO, ESIC, and Professional Tax registrations",
      "Assistance with Bank Current Account opening resolution"
    ],
    documentsRequired: [
      "PAN & Aadhaar of all proposed Directors and Shareholders",
      "Identity Proof (Passport / Voter ID / Driving License)",
      "Address Proof (Bank Statement / Electricity Bill < 2 months old)",
      "Registered office electricity bill + NOC from property owner"
    ],
    faqItems: [
      { q: "What is the minimum capital required to incorporate a Private Limited Company?", a: "There is no minimum paid-up capital requirement under the Companies Act 2013." }
    ]
  },
  {
    id: "llp-incorporation",
    slug: "llp-incorporation",
    category: "company-law",
    categoryLabel: "Corporate & MCA",
    title: "LLP Incorporation",
    shortDescription: "Name reservation (RUN-LLP), FiLLiP portal filing, customized LLP Agreement drafting, and Form 3 submission.",
    fullDescription: "Full registration process for Limited Liability Partnerships. Combines the benefits of corporate limited liability with partnership operational flexibility. Includes DSC, DPIN allotment, certificate of incorporation, and drafting of customized LLP Agreements protecting partner equity.",
    scopeOfWork: "Name reservation, FiLLiP filing, LLP Agreement drafting & Form 3 filing.",
    startingPrice: 4000,
    priceDisplay: "₹4,000 – ₹7,000 (govt fees extra)",
    priceType: "Professional Package Fee",
    popular: false,
    ctaType: "book",
    timeline: "7 – 12 Business Days",
    deliverables: [
      "LLP Name reservation via RUN-LLP",
      "Class 3 DSC for 2 Designated Partners",
      "Certificate of Incorporation issued by Registrar of Companies (ROC)",
      "PAN and TAN of the LLP",
      "Drafting and filing of customized LLP Agreement (Form 3)"
    ],
    documentsRequired: [
      "PAN & Aadhaar of all Designated Partners",
      "Identity and residential address proofs of partners",
      "Registered office address proof & Utility bill",
      "Profit sharing ratio and contribution details"
    ],
    faqItems: [
      { q: "Is an audit mandatory for all LLPs in India?", a: "Audit is mandatory only if annual turnover exceeds ₹40 Lakhs or partner contribution exceeds ₹25 Lakhs." }
    ]
  },
  {
    id: "annual-mca-filings",
    slug: "annual-mca-filings",
    category: "company-law",
    categoryLabel: "Corporate & MCA",
    title: "Annual MCA Filings",
    shortDescription: "AOC-4 (Financial Statements), MGT-7 (Annual Return), and Directors' Annual KYC (DIR-3 KYC) for company legal standing.",
    fullDescription: "Ensure your company maintains active legal status with the Ministry of Corporate Affairs. We prepare AGM notices, Directors' Reports, convert financial statements for Form AOC-4, file annual returns in Form MGT-7/7A, and complete annual DIR-3 KYC to prevent director disqualifications.",
    scopeOfWork: "AOC-4 (Financials), MGT-7 (Annual Return), Directors' KYC (DIR-3 KYC), AGM documentation.",
    startingPrice: 5000,
    priceDisplay: "₹5,000 – ₹15,000 / year",
    priceType: "Annual Compliance Package",
    popular: true,
    ctaType: "book",
    timeline: "Managed before MCA statutory due dates",
    deliverables: [
      "Drafting of AGM Notice, Board Resolutions & Directors' Report",
      "Filing of Form AOC-4 (Financial Statements & Balance Sheet)",
      "Filing of Form MGT-7 / MGT-7A (Annual Return)",
      "DIR-3 KYC verification for all active DIN holders",
      "Maintenance of Statutory Registers & Secretarial Records"
    ],
    documentsRequired: [
      "Audited Financial Statements with Independent Auditor's Report",
      "Active DSC tokens of authorized directors",
      "List of shareholders and share transfers during the year (if any)"
    ],
    faqItems: [
      { q: "What is the penalty for late filing of Form AOC-4 or MGT-7?", a: "MCA levies a severe late fee of ₹100 per day per form with no upper ceiling. Timely filing is critical to avoid director disqualification." }
    ]
  },
  {
    id: "statutory-secretarial-changes",
    slug: "statutory-secretarial-changes",
    category: "company-law",
    categoryLabel: "Corporate & MCA",
    title: "Statutory & Secretarial Changes",
    shortDescription: "Director appointment/resignation (DIR-12), Registered office shift (INC-22), and Share capital increase (SH-7).",
    fullDescription: "Corporate secretarial changes under the Companies Act 2013. We draft board and shareholder resolutions, calculate state stamp duties, and file forms for Director changes (DIR-12), registered office changes (INC-22/INC-23), authorized capital increase (SH-7), and share allotments (PAS-3).",
    scopeOfWork: "Director add/remove, Registered office shift, Share capital increase, Share allotment, and MCA master data updates.",
    startingPrice: 2500,
    priceDisplay: "₹2,500 – ₹6,000 / event",
    priceType: "Per Event / Scope",
    popular: false,
    ctaType: "quote",
    timeline: "3 – 7 Business Days",
    deliverables: [
      "Drafting Board Resolutions, EGM Notices, and Explanatory Statements",
      "Filing relevant MCA e-forms (DIR-12, INC-22, SH-7, PAS-3)",
      "Payment of applicable state stamp duties",
      "Updated MCA Master Data and Certificate of Change"
    ],
    documentsRequired: [
      "Director KYC and DSC of authorized signatory",
      "Proof of proposed changes (lease deed, resignation letter, new director KYC)",
      "Existing constitutional documents (MOA/AOA)"
    ],
    faqItems: [
      { q: "How long does it take to update director details on MCA portal?", a: "Standard director appointment/resignation forms (DIR-12) process under Straight Through Processing (STP) within 24 to 48 hours." }
    ]
  },
  {
    id: "company-strike-off-closure",
    slug: "company-strike-off-closure",
    category: "company-law",
    categoryLabel: "Corporate & MCA",
    title: "Company Strike-Off / Closure",
    shortDescription: "Form STK-2 filing, indemnity bond, affidavit drafting, and formal closure of defunct Private Limited companies or LLPs.",
    fullDescription: "Hassle-free voluntary closure of inoperative companies under Section 248 of the Companies Act 2013. We settle pending liabilities, prepare Nil asset/liability statements certified by a Chartered Accountant, draft indemnity bonds (STK-3) and affidavits (STK-4), and file Form STK-2.",
    scopeOfWork: "Form STK-2 filing, indemnity bond, affidavit drafting, CA statement certification, and ROC closure tracking.",
    startingPrice: 8000,
    priceDisplay: "₹8,000 – ₹15,000",
    priceType: "One-Time Mandate Fee",
    popular: false,
    ctaType: "quote",
    timeline: "15 – 30 Working Days (Subject to ROC Gazette approval)",
    deliverables: [
      "Drafting Board Resolutions and Special Resolution for closure",
      "Preparation of Statement of Accounts (Form STK-8) certified by CA",
      "Drafting Indemnity Bond (Form STK-3) & Affidavits (Form STK-4)",
      "Electronic filing of Form STK-2 on MCA Portal",
      "Tracking till publication in Official Gazette and strike-off notice"
    ],
    documentsRequired: [
      "Latest bank statement showing zero balance and closure proof",
      "PAN and Aadhaar of all Directors",
      "Indemnity bond signed on non-judicial stamp paper"
    ],
    faqItems: [
      { q: "Can an active company apply for strike-off directly?", a: "A company can apply for strike-off under STK-2 only if it has extinguished all its liabilities and has not carried on any business for the preceding 2 financial years." }
    ]
  },

  // ==========================================
  // 4. CERTIFICATION & ATTESTATION SERVICES (Sheet 1)
  // ==========================================
  {
    id: "net-worth-certificate",
    slug: "net-worth-certificate",
    category: "certifications",
    categoryLabel: "Certifications & Attestation",
    title: "Net Worth Certificate",
    shortDescription: "Chartered Accountant certified net worth statement with official UDIN for visa/immigration, bank credit, or government tenders.",
    fullDescription: "Issuance of formal Net Worth Statement certified by a practicing Chartered Accountant. We verify immovable property titles, bank balances, mutual funds, equity portfolios, and business assets against liabilities. Every certificate carries a verifiable UDIN as per ICAI mandates.",
    scopeOfWork: "Asset & liability valuation, Net Worth statement compilation, UDIN generation, and CA attestation.",
    startingPrice: 2000,
    priceDisplay: "₹2,000 – ₹5,000",
    priceType: "Per Certificate",
    popular: true,
    ctaType: "book",
    timeline: "24 – 48 Hours",
    deliverables: [
      "Verification of asset ownership and encumbrance records",
      "Preparation of Net Worth Statement as per bank/embassy prescribed format",
      "Generation of Unique Document Identification Number (UDIN) on ICAI portal",
      "Digitally signed and physically stamped CA certificate"
    ],
    documentsRequired: [
      "Property valuation reports / Registry deeds",
      "Bank statements, Fixed Deposit receipts, Mutual fund CAS statements",
      "Gold valuation certificate / shareholding proofs",
      "Loan liability statements (if any)"
    ],
    faqItems: [
      { q: "Is a CA Net Worth Certificate accepted by foreign embassies for student/business visas?", a: "Yes, our Net Worth certificates with official ICAI UDIN verification are globally accepted by US, UK, Canada, Australia, and Schengen embassies." }
    ]
  },
  {
    id: "form-15ca-15cb-certification",
    slug: "form-15ca-15cb-certification",
    category: "certifications",
    categoryLabel: "Certifications & Attestation",
    title: "Form 15CA / 15CB",
    shortDescription: "Foreign remittance certification, DTAA tax treaty analysis, tax withholding determination, and IT portal upload.",
    fullDescription: "Mandatory certification under Section 195 for cross-border remittances to overseas vendors, cloud services (AWS, Google, Microsoft), royalty payouts, or software licenses. We review Tax Residency Certificates (TRC), Form 10F, compute withholding rates under DTAA, and issue Form 15CB with matching 15CA filings.",
    scopeOfWork: "Foreign remittance certification, DTAA analysis, tax withholding calculation, and Form 15CA/CB filing.",
    startingPrice: 3000,
    priceDisplay: "₹3,000 – ₹7,500 / remittance",
    priceType: "Per Remittance / Certificate",
    popular: true,
    ctaType: "book",
    timeline: "24 – 48 Hours",
    deliverables: [
      "Review of foreign vendor invoice and commercial agreement",
      "DTAA Double Taxation Avoidance Agreement benefit analysis",
      "Chartered Accountant certification in Form 15CB with UDIN",
      "Filing and generation of Form 15CA acknowledgment on IT portal",
      "Coordination with Authorized Dealer (AD) Bank for wire release"
    ],
    documentsRequired: [
      "Foreign Vendor Invoice and Bank details",
      "Tax Residency Certificate (TRC) & Form 10F of foreign payee",
      "Remitter Indian Bank Account details and A2 declaration"
    ],
    faqItems: [
      { q: "When is Form 15CB mandatory for foreign payments?", a: "Form 15CB from a CA is mandatory if the payment exceeds ₹5 Lakhs in a financial year and the remittance is taxable under the Income Tax Act." }
    ]
  },
  {
    id: "turnover-working-capital-certificate",
    slug: "turnover-working-capital-certificate",
    category: "certifications",
    categoryLabel: "Certifications & Attestation",
    title: "Turnover / Working Capital Certificate",
    shortDescription: "Bank credit appraisal, loan facility renewal, and government tender eligibility validation certified with UDIN.",
    fullDescription: "Official CA certification of historical or provisional business turnover, liquidity ratios, and working capital limits. Frequently required by public sector banks, financial institutions, and government procurement portals (GeM, state tenders).",
    scopeOfWork: "Bank credit appraisal, tender eligibility validation, turnover reconciliation, and CA attestation.",
    startingPrice: 2500,
    priceDisplay: "₹2,500 – ₹6,000",
    priceType: "Per Certificate",
    popular: false,
    ctaType: "book",
    timeline: "24 – 48 Hours",
    deliverables: [
      "Reconciliation of sales ledgers with GSTR-1 and bank credits",
      "Working capital computation (Current Assets vs Current Liabilities)",
      "Issue of CA certificate with official ICAI UDIN",
      "Digitally signed PDF ready for GeM or tender submission"
    ],
    documentsRequired: [
      "Audited financial statements / latest Trial balance",
      "GSTR-1 and GSTR-3B filings of the relevant period",
      "Specific tender format or bank requisition letter"
    ],
    faqItems: [
      { q: "Can you issue certificates on specific bank or government tender formats?", a: "Yes, we customize the certification text to match the exact format required by the tendering authority or lending institution." }
    ]
  },
  {
    id: "statutory-regulatory-certificates",
    slug: "statutory-regulatory-certificates",
    category: "certifications",
    categoryLabel: "Certifications & Attestation",
    title: "Statutory / Regulatory Certificates",
    shortDescription: "RERA project certificates (Form 3), CSR & grant utilization certificates (UC), and regulatory compliance attestations.",
    fullDescription: "Specialized statutory certifications required under specific legislative acts. Includes Real Estate Regulatory Authority (RERA) Form 3 Chartered Accountant withdrawal certificates, Utilization Certificates (UC) for government grants/subsidies, and CSR expenditure attestations.",
    scopeOfWork: "RERA certificates, utilization certificates for grants/subsidies, CSR audit certificates, and regulatory attestations.",
    startingPrice: 5000,
    priceDisplay: "₹5,000 – ₹15,000",
    priceType: "Per Certificate / Project",
    popular: false,
    ctaType: "quote",
    timeline: "2 – 4 Business Days",
    deliverables: [
      "On-site/documentary verification of project cost and funds utilization",
      "Preparation of certificate in statutory prescribed format (RERA / Ministry UC)",
      "Generation of official UDIN on ICAI portal",
      "Chartered Accountant sealed and signed certificate"
    ],
    documentsRequired: [
      "Sanction letter of grant/scheme or RERA registration certificate",
      "Project expenditure ledgers, architect certificates, and bank statements",
      "Previous utilization reports (if recurring project)"
    ],
    faqItems: [
      { q: "What is a RERA Form 3 certificate?", a: "It is a mandatory certificate issued by a Chartered Accountant to verify project cost incurred and determine allowable fund withdrawals from the RERA 70% designated bank account." }
    ]
  },

  // ==========================================
  // 5. BUSINESS & ADVISORY SERVICES (Sheet 1)
  // ==========================================
  {
    id: "project-reports-cma-data",
    slug: "project-reports-cma-data",
    category: "advisory",
    categoryLabel: "Advisory & Accounting",
    title: "Project Reports & CMA Data",
    shortDescription: "Projected Balance Sheet, P&L, DSCR, cash flows, and Credit Monitoring Arrangement (CMA) data for bank term loans/OD/CC.",
    fullDescription: "Professional financial modeling and CMA report preparation for securing bank credit limits, Cash Credit (CC), Overdraft (OD), Bank Guarantees (BG), or Term Loans. We prepare 5-to-7 year projected financials, Debt Service Coverage Ratios (DSCR), Break-Even Analysis, and sensitivity models.",
    scopeOfWork: "Projected balance sheet, P&L, DSCR, cash flows for bank term loans/OD/CC, and comprehensive CMA data.",
    startingPrice: 5000,
    priceDisplay: "₹5,000 – ₹15,000",
    priceType: "Per Project / Loan Quantum",
    popular: true,
    ctaType: "quote",
    timeline: "3 – 6 Business Days",
    deliverables: [
      "Credit Monitoring Arrangement (CMA) 7-statement format compilation",
      "5-Year projected Balance Sheet, Profit & Loss, and Cash Flow Statements",
      "Ratio Analysis: DSCR, Current Ratio, ISCR, Debt-Equity Ratio",
      "Detailed Project Viability Report with industry benchmarking",
      "Support during bank credit officer review meetings"
    ],
    documentsRequired: [
      "Past 3 years audited financials and current year provisional statements",
      "Proposed loan amount, asset quotation, and promoter contribution details",
      "Sanction terms or bank checklist"
    ],
    faqItems: [
      { q: "What is CMA Data?", a: "CMA (Credit Monitoring Arrangement) is a standard financial presentation required by all Indian banks to assess working capital and term loan requirements of a business." }
    ]
  },
  {
    id: "bookkeeping-accounting-monthly",
    slug: "bookkeeping-accounting-monthly",
    category: "advisory",
    categoryLabel: "Advisory & Accounting",
    title: "Bookkeeping & Accounting (Monthly)",
    shortDescription: "Day-to-day accounting in Tally Prime, Zoho Books, or QuickBooks, monthly bank reconciliation, and management MIS reports.",
    fullDescription: "Reliable monthly cloud accounting service tailored for growing Indian businesses. We manage purchase and sales entries, bank feeds reconciliation, vendor aging analysis, debtor follow-ups, payroll disbursement entries, and monthly P&L/Balance Sheet packs.",
    scopeOfWork: "Day-to-day accounting in Tally/Zoho/QuickBooks, bank rec, monthly MIS, and ledger maintenance.",
    startingPrice: 3000,
    priceDisplay: "₹3,000 – ₹10,000 / month",
    priceType: "Monthly Retainer",
    popular: true,
    ctaType: "book",
    timeline: "Continuous monthly accounting cycle",
    deliverables: [
      "Weekly transaction posting and expense categorization",
      "Monthly bank, credit card, and payment gateway reconciliation",
      "Accounts Payable (AP) and Accounts Receivable (AR) aging schedules",
      "Monthly Management Information System (MIS) reporting pack",
      "Preparation of trial balance and schedules for statutory auditors"
    ],
    documentsRequired: [
      "Accounting software login (Tally/Zoho/QuickBooks)",
      "Bank statements (PDF or direct API bank feed)",
      "Sales invoices, purchase bills, and payment vouchers"
    ],
    faqItems: [
      { q: "Do you support Tally Prime with remote synchronization?", a: "Yes, we support Tally Prime, Zoho Books, QuickBooks Online, SAP Business One, and custom ERP systems." }
    ]
  },
  {
    id: "business-registrations-msme-iec-fssai",
    slug: "business-registrations-msme-iec-fssai",
    category: "advisory",
    categoryLabel: "Advisory & Accounting",
    title: "Business Registrations",
    shortDescription: "MSME / Udyam Registration, Startup India (DPIIT) certification, Import-Export Code (IEC), and FSSAI Food License.",
    fullDescription: "Fast-track procurement of fundamental government business licenses. Udyam enables priority bank lending and Section 43B(h) payment protections; Startup India unlocks 80-IAC tax exemptions; IEC enables international trade; and FSSAI covers food business operations.",
    scopeOfWork: "MSME/Udyam, Startup India (DPIIT), Import-Export Code (IEC), FSSAI, and statutory licenses.",
    startingPrice: 1000,
    priceDisplay: "₹1,000 – ₹3,500 / registration",
    priceType: "Per Registration (+ Govt fees if any)",
    popular: false,
    ctaType: "book",
    timeline: "24 – 72 Hours",
    deliverables: [
      "Preparation and online submission on respective government portals",
      "MSME Udyam Registration Certificate with official QR code",
      "DGFT electronic Import-Export Code (IEC) Certificate",
      "DPIIT Startup India Certificate of Recognition",
      "FSSAI Registration / State Food License certificate"
    ],
    documentsRequired: [
      "PAN Card and Aadhaar of Proprietor / Partners / Directors",
      "Business address proof and bank account details",
      "Product description, turnover category, and promoter details"
    ],
    faqItems: [
      { q: "Is Udyam registration free from the government?", a: "Yes, the government does not charge a fee for Udyam; our fee covers documentation drafting, NIC code classification, and filing verification." }
    ]
  },
  {
    id: "virtual-cfo-advisory",
    slug: "virtual-cfo-advisory",
    category: "advisory",
    categoryLabel: "Advisory & Accounting",
    title: "Virtual CFO / Advisory",
    shortDescription: "Strategic cash-flow review, budgeting, investor reporting, unit economics modeling, and corporate tax planning.",
    fullDescription: "Executive-level financial leadership for high-growth enterprises and funded startups. Our Virtual CFO service guides cash runway management, financial modeling for fundraising, investor pitch deck metric verification, board meeting presentations, and internal financial controls.",
    scopeOfWork: "Strategic cash-flow review, budgeting, investor reporting, tax planning, unit economics, and board advisory.",
    startingPrice: 20000,
    priceDisplay: "₹20,000 – ₹50,000+ / month",
    priceType: "Monthly Executive Retainer",
    popular: true,
    ctaType: "quote",
    timeline: "Dedicated ongoing retainer engagement",
    deliverables: [
      "13-Week rolling cash flow forecast and burn rate model",
      "Monthly Board Review pack and investor financial deck",
      "Unit economics and gross contribution margin analysis",
      "Budget vs. Actual variance tracking and cost optimization",
      "Direct weekly senior CFO meetings with founders and leadership"
    ],
    documentsRequired: [
      "Accounting software access and past 2 years financial statements",
      "Cap table details, revenue projections, and operational headcount plan"
    ],
    faqItems: [
      { q: "How does a Virtual CFO differ from an in-house accountant?", a: "While an accountant records historical transactions, a Virtual CFO provides forward-looking financial strategy, fundraising metrics, cash flow optimization, and investor governance." }
    ]
  }
];

export const pricingTiers = [
  {
    id: "essential",
    name: "Starter / Micro Entity",
    bestFor: "Proprietorships, Freelancers & Early-Stage Founders",
    startingFee: "₹1,000",
    billingCycle: "Per Service / Starting Base",
    highlight: false,
    description: "Core direct tax, basic GST, and business registrations to establish compliant operations.",
    features: [
      "ITR-1 / ITR-2 Filing (From ₹1,000)",
      "New GST Registration (₹1,500)",
      "MSME / Udyam / IEC Registration (From ₹1,000)",
      "Form 26AS and AIS Reconciliation",
      "Standard 48-hour query resolution"
    ],
    ctaText: "Book a Consultation",
    ctaType: "book"
  },
  {
    id: "growth",
    name: "Growth Enterprise Retainer",
    bestFor: "Private Limited Companies & LLPs (< ₹5 Cr Turnover)",
    startingFee: "₹4,000",
    billingCycle: "Per Month (Billed Quarterly)",
    highlight: true,
    badge: "Most Popular For Businesses",
    description: "Complete monthly compliance covering GSTR-1/3B, quarterly TDS returns, cloud bookkeeping, and MCA annual filings.",
    features: [
      "Monthly GSTR-1, 3B & 2B Purchase Reconciliation (From ₹1,500/mo)",
      "Quarterly TDS Returns (From ₹1,500/qtr)",
      "Monthly Bookkeeping & MIS Pack (From ₹3,000/mo)",
      "Annual MCA Filings (AOC-4 & MGT-7 from ₹5,000/yr)",
      "Dedicated Compliance Manager & WhatsApp Desk",
      "Advance Tax & Compliance Calendar Alerts"
    ],
    ctaText: "Request Retainer Quote",
    ctaType: "quote"
  },
  {
    id: "corporate",
    name: "Corporate & Advisory Suite",
    bestFor: "Funded Startups, Group Entities & Multi-State Firms",
    startingFee: "₹20,000",
    billingCycle: "Custom Monthly Scope",
    highlight: false,
    description: "High-level strategic support with Virtual CFO leadership, cross-border tax, and FEMA governance.",
    features: [
      "Virtual CFO Leadership & Cash Runway Modeling (From ₹20,000/mo)",
      "Form 15CA/15CB Foreign Remittance & DTAA Analysis",
      "GST Annual Return GSTR-9/9C Reconciliation",
      "Project Reports & Bank CMA Data Modeling",
      "Priority SLA: 4-Hour Response Guarantee",
      "Direct Senior Partner Access"
    ],
    ctaText: "Schedule Partner Call",
    ctaType: "quote"
  }
];
