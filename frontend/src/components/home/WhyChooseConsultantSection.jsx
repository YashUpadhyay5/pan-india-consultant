import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Building2, Scale, Calculator, FileCheck, ArrowRight } from 'lucide-react';

export const WhyChooseConsultantSection = ({ onOpenConsultation }) => {
  const pillars = [
    {
      title: "Direct Tax & Scrutiny Defense",
      slug: "income-tax-scrutiny-appeal-advisory",
      desc: "Proactive tax planning, faceless assessment replies, Section 148 notices, and High Court / ITAT appeal drafting.",
      icon: Scale
    },
    {
      title: "Multi-State GST Compliance",
      slug: "monthly-quarterly-gst-filing",
      desc: "End-to-end 2B reconciliation, Input Tax Credit maximization, refund applications, and anti-evasion departmental audits.",
      icon: Calculator
    },
    {
      title: "Corporate Law & MCA Filings",
      slug: "company-incorporation-pvt-ltd-section8",
      desc: "Private Limited incorporation, Director KYC, annual AOC-4/MGT-7 filings, and secretarial legal audits.",
      icon: Building2
    },
    {
      title: "Virtual CFO & Growth Strategy",
      slug: "virtual-cfo-advisory",
      desc: "Bespoke financial controller oversight, MIS reporting, working capital management, and board-level financial strategy.",
      icon: TrendingUp
    },
    {
      title: "CMA & Bank Loan Documentation",
      slug: "project-reports-cma-data",
      desc: "Comprehensive CMA project data preparation, DSCR assessment, and bank loan sanction advisory for commercial borrowers.",
      icon: FileCheck
    },
    {
      title: "UDIN Verified Certifications",
      slug: "turnover-networth-certificate-ca-udin",
      desc: "Net worth certificates, turnover verification, visa financial appraisals, and statutory tenders compliance.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200" id="practice-pillars">
      <div className="site-container">
        
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            WHY BHARAT ADVISORY PARTNERS
          </span>
          <h2 className="fluid-h2 font-extrabold text-navy-950 mt-4 tracking-tight leading-tight">
            Institutional corporate advisory tailored for Indian market complexity.
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-3 leading-relaxed">
            Eliminating statutory blindspots with transparent fees, senior partner oversight, and zero-penalty track record across India.
          </p>
        </div>

        {/* 6-Card Responsive Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-card hover:shadow-card-hover hover:border-brand-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-amber-400 group-hover:text-navy-950 transition-all">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-2 font-display group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${item.slug}`}
                    className="text-xs font-bold text-navy-900 hover:text-amber-600 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inspect Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    type="button"
                    onClick={onOpenConsultation}
                    className="text-[11px] font-bold text-slate-400 hover:text-slate-700"
                  >
                    Book Call
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="btn-gold text-xs sm:text-sm py-3 px-8 shadow-md"
          >
            <span>Schedule a Confidential Partner Call</span>
            <span className="ml-2">➔</span>
          </button>
        </div>

      </div>
    </section>
  );
};
