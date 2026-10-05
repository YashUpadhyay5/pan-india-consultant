import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy & Data Protection"
        description="Privacy policy and personal data protection compliance of Bharat Advisory Partners LLP."
        canonicalPath="/privacy-policy"
      />

      <section className="bg-navy-950 text-white py-12 border-b border-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
            Legal & Data Protection
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Privacy Policy & Data Security
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Last Updated: [Current Financial Year] • Compliant with Indian Digital Personal Data Protection (DPDP) Act
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
          
          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">1. Overview & Commitment</h2>
            <p>
              {siteConfig.legalName} ("Firm", "we", "us") values the confidentiality and privacy of its clients, prospective clients, and visitors. This policy explains how we collect, handle, store, and protect information submitted through our website or during consultation engagements.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">2. Information We Collect</h2>
            <p>We collect information strictly necessary to process consultation inquiries and execute statutory assignments, including:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Contact details: Name, business email, mobile number, city.</li>
              <li>Entity data: Business constitution, turnover range, statutory registration numbers (PAN, GSTIN, CIN) provided for filing purposes.</li>
              <li>Technical logs: Anonymized IP addresses, browser user-agents, and UTM campaign parameters for attribution analysis.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">3. Use of Information</h2>
            <p>Information collected is utilized exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Scheduling professional consultations and scoping advisory proposals.</li>
              <li>Preparing and lodging returns on authorized government portals (Income Tax, MCA, GSTN, TRACES, RBI).</li>
              <li>Sending critical compliance calendar reminders and statutory due date alerts.</li>
            </ul>
            <p className="mt-2 font-medium">We never sell, rent, or trade client financial data or contact records to third-party marketing brokers.</p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">4. Data Security & Storage</h2>
            <p>
              All confidential client documents and ledgers are maintained in encrypted, role-restricted repositories. Staff access is strictly governed by professional non-disclosure agreements.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">5. Contact Our Privacy Officer</h2>
            <p>
              If you have any questions or wish to request data modification/deletion, please write to our compliance desk at <strong>{siteConfig.contact.email}</strong>.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};
