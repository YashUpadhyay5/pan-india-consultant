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
      desc: "Zero tolerance for inaccurate computations. Every tax return and MCA filing is backed by detailed working sheets.",
      icon: Scale
    },
    {
      title: "Complete Price Transparency",
      desc: "Upfront disclosure of consulting fees, out-of-pocket expenses, and statutory government dues before commencing work.",
      icon: ShieldCheck
    },
    {
      title: "Client Data Confidentiality",
      desc: "Bank-grade data encryption, non-disclosure agreements, and restricted credential handling protocols.",
      icon: Award
    },
    {
      title: "Long-Term Advisory Relationship",
      desc: "We serve as an enduring strategic partner for your business lifecycle, not merely a transactional filing agency.",
      icon: Users
    }
  ];

  const teamPlaceholders = [
    {
      role: "Managing Partner — Direct Taxation & M&A",
      qualifications: "[Senior Chartered Accountant / Corporate Tax Specialist]",
      focus: "Cross-border taxation, faceless scrutiny defense, corporate restructuring."
    },
    {
      role: "Partner — Indirect Taxes (GST) & Litigation",
      qualifications: "[Indirect Tax Consultant / LLB / GST Practitioner]",
      focus: "Multi-state GST supply chain structuring, input tax credit optimization, departmental audits."
    },
    {
      role: "Partner — MCA Secretarial & Corporate Governance",
      qualifications: "[Practicing Company Secretary / Corporate Legal Advisor]",
      focus: "Private limited incorporation, FDI FEMA compliances, capital allotment, board governance."
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
      <section className="bg-navy-950 text-white py-14 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              Institutional Heritage & Philosophy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              About {siteConfig.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              A premier Indian consulting and advisory firm established to deliver uncompromising technical precision, transparent pricing, and dependable statutory governance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                Core Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Empowering Indian Enterprises Through Accurate Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                As India's commercial regulatory ecosystem evolves toward total digitization, businesses require agile, technologically sophisticated, and deeply knowledgeable advisory partners.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We combine senior professional experience with modern digital workflows to ensure your direct tax, indirect tax, and corporate secretarial obligations are met with zero-penalty accuracy.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openConsultation(null)}
                  className="btn-primary text-xs py-3 px-6 shadow-sm"
                >
                  Schedule Initial Consultation
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Our Mission</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To eliminate compliance friction and tax unpredictability for businesses across India through proactive governance and transparent advisory.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950">Our Vision</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To become India's most trusted, digitally-enabled corporate advisory partner for high-growth enterprises and ambitious entrepreneurs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Foundational Values
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 tracking-tight">
              The Principles That Guide Our Advisory Practice
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-navy-950 mb-2">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Professional Leadership Structure */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
              Practice Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 tracking-tight">
              Senior Professional Oversight Across Practice Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every mandate is supervised by qualified senior professionals with domain specialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPlaceholders.map((member, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-12 h-12 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-sm">
                  P{idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-950">{member.role}</h3>
                  <p className="text-xs text-brand-700 font-medium mt-0.5">{member.qualifications}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200">
                  <strong>Domain Focus:</strong> {member.focus}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[11px] text-slate-400">
            [Specific partner profiles, ICAI/ICSI registration numbers, and bio details available in formal client mandate documentation.]
          </div>

        </div>
      </section>
    </>
  );
};
