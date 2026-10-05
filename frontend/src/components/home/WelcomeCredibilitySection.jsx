import React from 'react';
import { ArrowRight, Star, Award, ShieldCheck } from 'lucide-react';

export const WelcomeCredibilitySection = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden" id="about">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Dual Photography Composition + Trust Badge */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 items-center">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-slate-100">
                <img
                  src="/images/demo-1/about-01.jpg"
                  alt="Corporate Tax Advisory Partners"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/4] bg-slate-100 mt-6 sm:mt-8">
                <img
                  src="/images/demo-1/about-02.png"
                  alt="Senior Regulatory Consultant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:left-4 bg-navy-950 text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-navy-800 flex items-center gap-3.5 z-10 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-xs sm:text-sm leading-tight font-display m-0">
                  2,500+ Retainer Clients
                </h4>
                <div className="text-amber-400 text-xs tracking-wider mt-1 flex items-center gap-1">
                  <span>★ ★ ★ ★ ★</span>
                  <span className="text-[10px] text-slate-300 font-bold ml-1">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative + Experience Highlight */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            
            <div className="inline-block bg-brand-50 text-brand-800 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-brand-200">
              NATIONAL ADVISORY LEADERSHIP
            </div>

            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight leading-tight">
              Strategic fiscal architecture for growing enterprises across India.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We specialize in assisting Indian corporates, venture-backed startups, and MSMEs navigate complex multi-jurisdiction tax laws, statutory audit requirements, and corporate legal compliance with absolute certainty.
            </p>

            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              
              {/* Stat Callout */}
              <div className="pr-6 sm:border-r sm:border-slate-200 flex-shrink-0">
                <div className="text-4xl sm:text-5xl font-black text-navy-950 leading-none font-display">
                  12<span className="text-amber-500">+</span>
                </div>
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mt-2">
                  Years of Institutional<br />Advisory Practice
                </div>
              </div>

              {/* Text & Button */}
              <div className="space-y-3 flex-1">
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Every advisory memo, scrutiny reply, and audit file is reviewed by practicing Chartered Accountants and Company Secretaries.
                </p>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="btn-primary text-xs sm:text-sm py-2.5 px-5 shadow-sm inline-flex items-center gap-2"
                >
                  <span>Explore Practice Mandates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
