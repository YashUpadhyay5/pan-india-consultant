import React from 'react';
import { testimonials } from '../../data/testimonials';
import { Quote, Star, User } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200" id="testimonials">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            CLIENT EXPERIENCE
          </span>
          <h2 className="fluid-h2 font-extrabold text-navy-950 mt-4 tracking-tight leading-tight">
            Client Feedback & Engagement Standards
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            What founders, managing directors, and finance heads appreciate about our advisory discipline.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card flex flex-col justify-between relative"
            >
              <div>
                {/* Stars and Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded">
                    {item.serviceUsed}
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy-950">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    {item.role}, <span className="text-slate-700">{item.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Placeholder marker */}
        <div className="mt-8 text-center text-[11px] text-slate-500">
          [Verified client reviews collected post-mandate completion. Attribution details protected under client privacy policies.]
        </div>

      </div>
    </section>
  );
};
