import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { industries } from '../data/industries';
import { SEOHead } from '../components/common/SEOHead';
import { 
  Rocket, ShoppingBag, Code2, Factory, Stethoscope, 
  Building, Briefcase, Globe2, ArrowRight, ShieldCheck 
} from 'lucide-react';

const iconMap = {
  Rocket,
  ShoppingBag,
  Code2,
  Factory,
  Stethoscope,
  Building,
  Briefcase,
  Globe2
};

export const IndustriesPage = () => {
  const { openConsultation } = useOutletContext();

  return (
    <>
      <SEOHead
        title="Industry Practices & Sector Advisory"
        description="Specialized regulatory, direct tax, and GST consulting frameworks tailored for startups, e-commerce, IT/SaaS, manufacturing, and healthcare sectors."
        canonicalPath="/industries"
      />

      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              Industry Verticals
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Sector-Specific Compliance & Tax Advisory
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Every industry faces distinct regulatory hurdles—from marketplace TCS reconciliation in D2C to Section 80-IAC tax exemptions in Tech startups. We build tailored workflows for your business model.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Catalog */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Briefcase;
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-950 mb-2">
                      <Link to={`/industries/${ind.slug}`} className="hover:text-brand-700 transition-colors">
                        {ind.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {ind.shortDescription}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Typical Challenges:
                      </span>
                      {ind.keyChallenges?.slice(0, 2).map((c, i) => (
                        <p key={i} className="text-[11px] text-slate-600 line-clamp-1">
                          • {c}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="text-xs font-bold text-brand-700 hover:text-brand-800 inline-flex items-center"
                    >
                      Explore Practice <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                    <button
                      onClick={() => openConsultation(null)}
                      className="text-xs font-semibold text-slate-500 hover:text-navy-950"
                    >
                      Consult →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
