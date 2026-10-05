import React from 'react';
import { caseStudies } from '../../data/caseStudies';
import { ArrowRight, CheckCircle2, FileText, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CaseStudiesSection = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="case-studies">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            ADVISORY FRAMEWORKS
          </span>
          <h2 className="fluid-h2 font-extrabold text-navy-950 mt-4 tracking-tight leading-tight">
            Case Studies: Complex Compliance Challenges Solved
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Representative case summaries demonstrating how our tax and corporate governance frameworks resolve operational and statutory bottlenecks.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-brand-800 bg-brand-100/60 px-2 py-0.5 rounded text-[11px]">
                    {study.industry}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center">
                    <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                    {study.location.split('(')[0]}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-950 mb-4">
                  {study.clientProfile}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider block mb-1">
                    The Challenge:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-navy-900 uppercase tracking-wider block mb-1">
                    Advisory Strategy:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-200/80">
                    {study.advisoryAction}
                  </p>
                </div>

                {/* Outcome */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1 flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                    Measurable Outcome:
                  </span>
                  <p className="text-xs text-emerald-950 font-medium leading-relaxed bg-emerald-50/80 p-3 rounded-lg border border-emerald-200/80">
                    {study.outcome}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 italic">Representative Case Framework</span>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-navy-900 hover:text-brand-700 underline"
                >
                  Discuss Similar Scope →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer for authenticity */}
        <div className="mt-8 text-center text-xs text-slate-500">
          Note: Specific client names and proprietary transaction figures are sanitized for client confidentiality under standard NDAs.
        </div>

      </div>
    </section>
  );
};
