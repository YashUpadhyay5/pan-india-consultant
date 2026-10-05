import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { SEOHead } from '../components/common/SEOHead';
import { 
  ShieldCheck, Award, Users, Scale, Target, 
  Lightbulb, Compass, ArrowRight, CheckCircle2 
} from 'lucide-react';

export const AboutPage = () => {
  const { openConsultation } = useOutletContext();

  const values = [
    {
      title: "Technical Rigor & Accuracy",
      desc: "Zero tolerance for inaccurate computations. Every tax computation, audit report, and MCA filing is backed by verified legal working sheets.",
      icon: Scale
    },
    {
      title: "Complete Price Transparency",
      desc: "Upfront disclosure of consulting fees, out-of-pocket expenses, and statutory government challans before commencing any work.",
      icon: ShieldCheck
    },
    {
      title: "Client Data Confidentiality",
      desc: "Bank-grade data encryption, non-disclosure agreements, and restricted credential handling protocols for all financial documents.",
      icon: Award
    },
    {
      title: "Long-Term Advisory Relationship",
      desc: "We serve as an enduring strategic partner for your business lifecycle, not merely a transactional filing agency.",
      icon: Users
    }
  ];

  const leadership = [
    {
      name: "CA Rajeshwar Verma",
      role: "Managing Partner — Direct Taxation & M&A",
      qualifications: "FCA, DISA (ICAI), Registered Valuer",
      focus: "Cross-border tax structuring, Section 148 faceless scrutiny defense, corporate mergers, and transfer pricing advisory with over 16 years of practice."
    },
    {
      name: "Adv. Meenakshi Sundaram",
      role: "Partner — Indirect Taxes (GST) & Litigation",
      qualifications: "B.Com, LL.B., Certified GST Specialist",
      focus: "Multi-state GST supply chain structuring, anti-profiteering advisory, Input Tax Credit reconciliation, and High Court writ representations."
    },
    {
      name: "CS Anand Kulkarni",
      role: "Partner — MCA Corporate Governance & FEMA",
      qualifications: "FCS, Insolvency Professional (IBBI)",
      focus: "Private Limited incorporation, FDI reporting, Section 8 foundations, capital allotment, board governance, and statutory secretarial audits."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Our Firm — PAN-India Advisory & Corporate Practice"
        description="Learn about Bharat Advisory Partners, our technical standards, senior partner oversight, and mission to deliver transparent compliance across India."
        canonicalPath="/about"
      />

      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 border-b border-navy-900">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-3">
              INSTITUTIONAL HERITAGE & ETHICS
            </span>
            <h1 className="fluid-h1 font-extrabold tracking-tight">
              About {siteConfig.name}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              A premier Indian consulting and advisory practice established to deliver uncompromising technical precision, transparent pricing, and dependable statutory governance across all 28 states.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
                OUR STATUTORY MISSION
              </span>
              <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight leading-tight">
                Democratizing institutional financial architecture for Indian enterprise.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                For over a decade, Indian businesses have had to choose between impersonal digital filing portals that offer zero accountability and ultra-expensive Big 4 retainers that remain out of reach.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Bharat Advisory Partners bridges this divide by pairing deep domain expertise (Chartered Accountants, Company Secretaries, and Corporate Lawyers) with transparent milestone-based pricing and proactive digital delivery.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>100% Digitized Workflows</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                  <span>Senior Partner Accountability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl bg-navy-950 text-amber-400 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-navy-950 mb-2 font-display">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Senior Leadership Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200" id="team">
        <div className="site-container">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
              SENIOR PRACTICE DIRECTORS
            </span>
            <h2 className="fluid-h2 font-extrabold text-navy-950 mt-4 tracking-tight leading-tight">
              Experienced professionals guiding your business mandate.
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-2.5 leading-relaxed">
              Every client engagement is directed by seasoned practitioners with specialized knowledge in taxation, litigation defense, and corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-700 font-black text-xl flex items-center justify-center mb-4 font-display">
                    {leader.name.split(' ')[1]?.[0] || 'CA'}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-1 font-display">
                    {leader.name}
                  </h3>
                  <span className="text-xs font-bold text-amber-700 block mb-1">
                    {leader.role}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 block mb-3 font-mono">
                    {leader.qualifications}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {leader.focus}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => openConsultation(null)}
                    className="text-xs font-bold text-navy-900 hover:text-amber-600 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-950 text-white">
        <div className="site-container text-center max-w-3xl mx-auto">
          <h2 className="fluid-h2 font-bold mb-4 font-display">
            Ready to partner with a trusted advisory firm?
          </h2>
          <p className="text-sm text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
            Speak directly with our senior consultants regarding direct tax planning, multi-state GST filing, or company registration.
          </p>
          <button
            type="button"
            onClick={() => openConsultation(null)}
            className="btn-gold text-sm py-3 px-8 shadow-xl"
          >
            <span>Book Consultation Now</span>
            <span className="ml-2">➔</span>
          </button>
        </div>
      </section>
    </>
  );
};
