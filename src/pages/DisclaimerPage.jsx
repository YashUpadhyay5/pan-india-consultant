import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { siteConfig } from '../data/siteConfig';

export const DisclaimerPage = () => {
  return (
    <>
      <SEOHead
        title="Professional & Legal Disclaimer"
        description="Statutory disclaimer regarding informational content and regulatory compliance."
        canonicalPath="/disclaimer"
      />

      <section className="bg-navy-950 text-white py-12 border-b border-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-1">
            Statutory Notice
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Professional & Regulatory Disclaimer
          </h1>
          <p className="text-xs text-slate-400 mt-2">
            Important regulatory disclosures regarding website contents and guidance notes.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
          
          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">1. Informational Purpose Only</h2>
            <p>
              The articles, compliance calendars, service guides, fee overviews, and answers published on this website are provided strictly for general informational and educational purposes. They do not constitute formal legal, accounting, tax, or investment advice and should not be relied upon as a substitute for individualized professional consultation.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">2. Dynamic Tax & Regulatory Amendments</h2>
            <p>
              Indian tax laws, GST notifications, and Ministry of Corporate Affairs (MCA) circulars are subject to frequent statutory amendments. While {siteConfig.name} makes reasonable efforts to keep information updated, we do not warrant the continuous timeliness or completeness of all published materials.
            </p>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-bold text-navy-950 mb-2">3. Professional Council Regulations</h2>
            <p>
              This website is designed in strict adherence with professional code-of-conduct guidelines and does not intend to solicit clients, advertise unfairly, or make unverified claims.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};
