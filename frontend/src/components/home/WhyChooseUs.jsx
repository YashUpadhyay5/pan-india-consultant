import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { 
  BadgePercent, UserCheck, Globe, Lock, 
  CalendarClock, LifeBuoy, ArrowRight 
} from 'lucide-react';

const iconMap = {
  "transparent-pricing": BadgePercent,
  "deep-expertise": UserCheck,
  "pan-india": Globe,
  "strict-confidentiality": Lock,
  "proactive-alerts": CalendarClock,
  "end-to-end": LifeBuoy
};

export const WhyChooseUs = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Professional Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 tracking-tight">
            Why Discerning Businesses Rely On Us
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            A consulting framework grounded in technical accuracy, senior oversight, and dependable statutory adherence.
          </p>
        </div>

        {/* 6 Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.trustPillars.map((pillar) => {
            const Icon = iconMap[pillar.id] || UserCheck;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-navy-950 mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Under Trust Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-brand-700 underline"
          >
            Speak with an Advisory Partner regarding your compliance needs →
          </button>
        </div>

      </div>
    </section>
  );
};
