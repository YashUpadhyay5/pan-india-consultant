import React from 'react';
import { useParams, Link, useOutletContext, Navigate } from 'react-router-dom';
import { industries } from '../data/industries';
import { SEOHead } from '../components/common/SEOHead';
import { LeadForm } from '../components/lead/LeadForm';
import { 
  CheckCircle2, ArrowRight, ChevronRight, ShieldCheck, 
  AlertCircle, MessageSquare, Layers, Building2 
} from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const IndustryDetailPage = () => {
  const { slug } = useParams();
  const { openConsultation } = useOutletContext();

  const industry = industries.find(i => i.slug === slug || i.id === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <SEOHead
        title={`${industry.title} — Sector Compliance & Tax Practice`}
        description={industry.shortDescription}
        canonicalPath={`/industries/${industry.slug}`}
      />

      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-12 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/industries" className="hover:text-white">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-medium">{industry.title}</span>
          </nav>

          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              Dedicated Industry Vertical
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {industry.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {industry.targetDescription || industry.shortDescription}
            </p>
          </div>

        </div>
      </section>

      {/* Main Grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Body */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Specialized Services & Fee Schedule from Sheet 2 */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block">
                      Sector Fee Schedule
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-navy-950">
                      Specialized Services for {industry.title}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">
                    {industry.specializedServices?.length} Services
                  </span>
                </div>

                {/* Service List */}
                <div className="space-y-4">
                  {industry.specializedServices?.map((srv, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:bg-slate-100/50 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                        <h4 className="text-sm font-bold text-navy-950">{srv.name}</h4>
                        <span className="text-xs font-extrabold text-navy-900 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-xs whitespace-nowrap">
                          {srv.indicativeFee}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        <strong>Scope:</strong> {srv.scope}
                      </p>
                      {srv.deliverables && (
                        <p className="text-[11px] text-slate-500 pt-1 border-t border-slate-200/60">
                          <strong>Deliverables:</strong> {srv.deliverables}
                        </p>
                      )}
                      <div className="pt-1 flex items-center justify-end">
                        <button
                          onClick={() => openConsultation(null)}
                          className="btn-primary text-xs py-1 px-3"
                        >
                          Book Service Scope
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Challenges */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
                <h3 className="text-base font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                  Primary Compliance & Tax Bottlenecks
                </h3>
                <ul className="space-y-3">
                  {industry.keyChallenges?.map((challenge, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 bg-red-50/50 p-3 rounded-xl border border-red-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 mr-3 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tailored Solutions */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
                <h3 className="text-base font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" />
                  How Our Advisory Framework Resolves These Bottlenecks
                </h3>
                <ul className="space-y-3">
                  {industry.tailoredSolutions?.map((sol, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2.5 flex-shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Sticky Lead Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <LeadForm 
                defaultService={`Sector Advisory: ${industry.title}`}
                sourceTag={`industry_page_${industry.slug}`}
                title={`Consult With a ${industry.title} Specialist`}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
