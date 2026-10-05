import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { SEOHead } from '../components/common/SEOHead';
import { CheckCircle2, MapPin, ArrowRight, Shield } from 'lucide-react';

export const CaseStudiesPage = () => {
  const { openConsultation } = useOutletContext();

  return (
    <>
      <SEOHead
        title="Advisory Case Studies & Compliance Impact"
        description="Review structured advisory case studies across D2C multi-state GST, cross-border SaaS tax structuring, and manufacturing tax optimization."
        canonicalPath="/case-studies"
      />

      <section className="bg-navy-950 text-white py-14 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              Demonstrated Impact
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Advisory Case Studies & Regulatory Frameworks
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Explore how our direct tax, indirect tax, and corporate governance solutions have unblocked statutory risks for Indian and cross-border businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-card hover:shadow-card-hover transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
                    {study.industry}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-950 mt-2">
                    {study.clientProfile}
                  </h2>
                </div>
                <div className="flex items-center text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  <span>{study.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                  <span className="text-xs font-bold text-red-700 uppercase tracking-wider block mb-2">
                    1. The Operational Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80">
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider block mb-2">
                    2. Advisory Strategy & Filing
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {study.advisoryAction}
                  </p>
                </div>

                <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200/80">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-2 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-1 text-emerald-600" />
                    3. Measurable Outcome
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
                    {study.outcome}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Practice Category: <strong className="text-slate-600">{study.serviceCategory}</strong>
                </span>
                <button
                  onClick={() => openConsultation(null)}
                  className="btn-primary text-xs py-2 px-4"
                >
                  Discuss Your Requirement
                </button>
              </div>
            </div>
          ))}

          <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 max-w-2xl mx-auto">
            <p className="text-xs font-bold text-navy-950">
              Need assistance with a complex or non-standard compliance situation?
            </p>
            <p className="text-xs text-slate-500">
              Our partners evaluate custom M&A transactions, complex faceless assessment appeals, and foreign holding company restructurings.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openConsultation(null)}
                className="btn-accent text-xs py-2.5 px-5"
              >
                Schedule Partner Briefing Call
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
