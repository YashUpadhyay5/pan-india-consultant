export const complianceDeadlines = [
  {
    category: "GST",
    event: "GSTR-1 (Monthly Outward Supplies)",
    frequency: "Monthly",
    dueDateText: "11th of every month",
    targetAudience: "Regular Taxpayers (> ₹5 Cr or monthly filers)",
    importance: "High (Affects buyer's GSTR-2B Input Tax Credit)"
  },
  {
    category: "GST",
    event: "GSTR-3B (Summary Return & Tax Payment)",
    frequency: "Monthly",
    dueDateText: "20th of every month",
    targetAudience: "All Monthly GST Filers",
    importance: "Critical (Late fee ₹50/day + 18% interest)"
  },
  {
    category: "Direct Tax",
    event: "Monthly TDS & TCS Challan Payment",
    frequency: "Monthly",
    dueDateText: "7th of every month (30th April for March)",
    targetAudience: "All deductors / corporate entities",
    importance: "Critical (Interest of 1.5% per month for late payment)"
  },
  {
    category: "Direct Tax",
    event: "Quarterly TDS Return Filing (24Q / 26Q / 27Q)",
    frequency: "Quarterly",
    dueDateText: "31st of July, Oct, Jan, May",
    targetAudience: "All corporate & TAN registered entities",
    importance: "High (Late fee ₹200/day under Sec 234E)"
  },
  {
    category: "Direct Tax",
    event: "Advance Tax Installments (15%, 45%, 75%, 100%)",
    frequency: "Quarterly",
    dueDateText: "15th of June, Sept, Dec, March",
    targetAudience: "All taxpayers with tax liability > ₹10,000",
    importance: "High (Avoids interest under Section 234B & 234C)"
  },
  {
    category: "MCA / ROC",
    event: "Director Annual e-KYC (DIR-3 KYC / Web)",
    frequency: "Annual",
    dueDateText: "30th September every year",
    targetAudience: "All active DIN holders in India",
    importance: "Critical (Penalty ₹5,000 per DIN deactivation)"
  },
  {
    category: "MCA / ROC",
    event: "Form AOC-4 (Financial Statements with MCA)",
    frequency: "Annual",
    dueDateText: "Within 30 days of AGM (Typically 29th Oct)",
    targetAudience: "All Private Limited Companies & OPCs",
    importance: "Critical (Late fee ₹100/day per company without ceiling)"
  },
  {
    category: "MCA / ROC",
    event: "Form MGT-7 / 7A (Annual Return with MCA)",
    frequency: "Annual",
    dueDateText: "Within 60 days of AGM (Typically 29th Nov)",
    targetAudience: "All Registered Companies",
    importance: "Critical (Late fee ₹100/day)"
  }
];
