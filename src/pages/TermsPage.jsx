import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { siteConfig } from '../data/siteConfig';

export const TermsPage = () => {
  return (
    <>
      <SEOHead
        title="Terms of Engagement & Service Conditions"
        description="Standard terms of engagement, scope boundaries, and billing conditions of Bharat Advisory Partners LLP."
        canonicalPath="/terms"
      />

      <section className="bg-navy-950 text-white py-12 border-b border-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
            Terms of Service
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Terms & Conditions of Professional Engagement
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Governing website usage, consultation bookings, and professional service mandates.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
          
          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">1. Scope of Engagement</h2>
            <p>
              Use of this website or submission of an inquiry form does not, in itself, establish a binding advisor-client relationship. A formal engagement commences only upon mutual execution of a written Engagement Letter or Scope Mandate detailing deliverables, timelines, and fees.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">2. Accuracy of Client Information</h2>
            <p>
              Statutory filings, computations, and certifications depend entirely on the authenticity and completeness of the financial records, vouchers, and statements supplied by the client. The client remains responsible for ensuring the accuracy of source records provided to the firm.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">3. Statutory Government Fees</h2>
            <p>
              All government fees, ROC challans, filing surcharges, stamp duties, and trademark registry costs are statutory charges payable directly to respective authorities and are distinct from professional advisory fees.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">4. Limitation of Liability</h2>
            <p>
              The firm shall perform services with professional skill and diligence. However, the firm is not liable for statutory penalties resulting from delay, omission, or inaccuracies in client-provided source data.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">5. Governing Law & Jurisdiction</h2>
            <p>
              These terms and any professional engagements resulting therefrom shall be governed by and construed in accordance with the laws of India.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};
