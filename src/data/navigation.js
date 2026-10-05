export const mainNavigation = [
  { label: "Home", path: "/" },
  { 
    label: "Services", 
    path: "/services",
    hasMegaMenu: true,
    categories: [
      { name: "Income Tax Services", slug: "taxation", count: "6 services" },
      { name: "GST Compliance", slug: "gst", count: "5 services" },
      { name: "Corporate & MCA Services", slug: "company-law", count: "5 services" },
      { name: "Certification & Attestation", slug: "certifications", count: "4 services" },
      { name: "Business & Advisory", slug: "advisory", count: "4 services" }
    ]
  },
  { label: "Industries", path: "/industries" },
  { label: "Pricing", path: "/pricing" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Resources", path: "/resources" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" }
];

export const footerNavigation = {
  servicesCol1: [
    { label: "ITR-1 / ITR-2 (Salaried)", path: "/services/itr-salaried-house-property" },
    { label: "ITR-3 / ITR-4 (Business & Prof.)", path: "/services/itr-business-professionals" },
    { label: "Corporate Tax Return (ITR-5/6)", path: "/services/itr-firms-llps-companies" },
    { label: "Tax Audit u/s 44AB", path: "/services/tax-audit-section-44ab" },
    { label: "GST Registration", path: "/services/gst-registration" },
    { label: "Monthly GSTR-1 & 3B Filing", path: "/services/monthly-quarterly-gst-filing" },
    { label: "GST Annual Return (9 & 9C)", path: "/services/gst-annual-return-gstr9-9c" }
  ],
  servicesCol2: [
    { label: "Company Incorporation (Pvt Ltd)", path: "/services/company-incorporation-pvt-ltd-section8" },
    { label: "LLP Incorporation", path: "/services/llp-incorporation" },
    { label: "Annual MCA Filings (AOC-4/MGT-7)", path: "/services/annual-mca-filings" },
    { label: "Net Worth Certificate (UDIN)", path: "/services/net-worth-certificate" },
    { label: "Form 15CA / 15CB Certification", path: "/services/form-15ca-15cb-certification" },
    { label: "Project Reports & CMA Data", path: "/services/project-reports-cma-data" },
    { label: "Virtual CFO / Advisory", path: "/services/virtual-cfo-advisory" }
  ],
  company: [
    { label: "About Our Firm", path: "/about" },
    { label: "Industries & Sector Practices", path: "/industries" },
    { label: "Complete Pricing Directory", path: "/pricing" },
    { label: "Advisory Case Studies", path: "/case-studies" },
    { label: "Compliance Calendar & Due Dates", path: "/resources" },
    { label: "Contact Advisory Team", path: "/contact" }
  ],
  legal: [
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Professional Disclaimer", path: "/disclaimer" }
  ]
};
