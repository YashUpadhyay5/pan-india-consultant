import React from 'react';
import { Link } from 'react-router-dom';
import { industries } from '../../data/industries';
import { 
  Rocket, ShoppingBag, Code2, Factory, Stethoscope, 
  Building, Briefcase, Globe2, ArrowRight 
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

export const IndustriesSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Sector Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 tracking-tight">
            Industries We Advise & Support Across India
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Tailored tax strategies, regulatory approvals, and statutory workflows customized for your industry's operating model.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Briefcase;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center mb-4 group-hover:bg-navy-900 group-hover:text-amber-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-navy-950 group-hover:text-brand-700 transition-colors mb-2">
                    <Link to={`/industries/${ind.slug}`}>
                      {ind.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {ind.shortDescription}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="text-[11px] font-bold text-brand-700 hover:text-brand-800 inline-flex items-center"
                  >
                    View Industry Practice <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full directory link */}
        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-brand-700 underline"
          >
            Explore All Industry Practice Verticals & Custom Frameworks →
          </Link>
        </div>

      </div>
    </section>
  );
};
