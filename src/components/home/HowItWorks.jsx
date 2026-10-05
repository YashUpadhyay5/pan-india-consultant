import React from 'react';
import { ArrowRight, FileCheck2, UserCheck, Calculator, CheckCircle2, ShieldAlert } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Tell Us Your Requirement",
    description: "Submit our short inquiry form or message our desk with your entity type and desired service.",
    icon: FileCheck2
  },
  {
    step: "02",
    title: "Speak With an Expert",
    description: "A senior domain consultant reviews your scenario on a direct phone/video consultation call.",
    icon: UserCheck
  },
  {
    step: "03",
    title: "Receive Plan & Quote",
    description: "Get a transparent, itemized scope breakdown, document checklist, and upfront timeline in writing.",
    icon: Calculator
  },
  {
    step: "04",
    title: "Get Work Completed",
    description: "We handle drafting, statutory reconciliation, and electronic filings with portal acknowledgment proofs.",
    icon: CheckCircle2
  },
  {
    step: "05",
    title: "Ongoing Support",
    description: "Receive proactive compliance calendar alerts and dedicated WhatsApp desk assistance for future queries.",
    icon: ShieldAlert
  }
];

export const HowItWorks = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Streamlined Execution
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 tracking-tight">
            How Our Consultation & Filing Workflow Operates
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            From initial requirement mapping to final statutory verification, our 5-step process ensures transparency and speed.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between relative group hover:bg-brand-50/40 hover:border-brand-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-serif text-brand-800/80">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-navy-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-brand-700">
                  Step {index + 1} of 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="btn-primary text-xs py-3 px-6 shadow-sm"
          >
            <span>Start Step 01: Submit Your Requirement</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
