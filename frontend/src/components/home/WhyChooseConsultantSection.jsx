import React from 'react';
import { Link } from 'react-router-dom';

export const WhyChooseConsultantSection = ({ onOpenConsultation }) => {
  const serviceCards = [
    {
      title: "Business Growth",
      serviceSlug: "itr-business-professionals",
      desc: "Maximize your tax benefits with our proactive planning and hassle-free filing services.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      title: "Capital Markets",
      serviceSlug: "project-reports-cma-data",
      desc: "Stay organized and focused on growth while we handle your day financial record.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      )
    },
    {
      title: "Business Planning",
      serviceSlug: "company-incorporation-pvt-ltd-section8",
      desc: "Incorporate Pvt Ltd companies, LLPs, and structure joint ventures with complete statutory secretarial backing.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      )
    },
    {
      title: "Financial Planning",
      serviceSlug: "virtual-cfo-advisory",
      desc: "We specialize in helping small businesses thrive by providing expert guidance in growth strategy.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )
    },
    {
      title: "Investment Planning",
      serviceSlug: "monthly-quarterly-gst-filing",
      desc: "End-to-end statutory reconciliation, tax planning, and strategic wealth architecture.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#ecf0f4] via-[#f4f7f9] to-white border-b border-slate-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Consultant Portrait (matches 00:20 of video) */}
          <div className="hidden xl:block xl:col-span-3 text-center">
            <div className="relative inline-block">
              <img
                src="/images/demo-1/about-02.png"
                alt="Senior Managing Consultant"
                className="max-h-[520px] object-contain drop-shadow-xl mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Heading + 6 Cards Grid (matches 00:20 - 00:29 of video) */}
          <div className="xl:col-span-9">
            
            <div className="mb-10">
              <div className="inline-block bg-[#ecf0f4] text-[#16222d] font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded mb-3 border border-slate-300/60">
                OUR SERVICES
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16222d] tracking-tight leading-tight font-display">
                Why choose us as your accountant consultant?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* 5 Service Cards */}
              {serviceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group hover:border-amber-400"
                >
                  <div>
                    <div className="text-[#16222d] group-hover:text-amber-500 transition-colors mb-5">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#16222d] font-display mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <Link
                      to={`/services/${card.serviceSlug}`}
                      className="inline-flex items-center text-xs font-bold text-[#16222d] group-hover:text-amber-600 transition-colors"
                    >
                      <span>Read More</span>
                      <span className="ml-1.5 group-hover:translate-x-1 transition-transform">➔</span>
                    </Link>
                  </div>
                </div>
              ))}

              {/* 6th Card: Callout Card (matches 00:27 of video) */}
              <div className="bg-[#16222d] text-white rounded-xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden group border border-[#223344]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2 font-display">
                    Full Spectrum
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display leading-snug mb-4">
                    Explore our all expertises we offers
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Comprehensive compliance, corporate law, direct tax structuring, and Virtual CFO mandates.
                  </p>
                </div>

                <div>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-3 w-full bg-amber-400 hover:bg-amber-500 text-[#16222d] text-xs font-bold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300 shadow-md group"
                  >
                    <span>View All Services</span>
                    <span className="w-5 h-5 rounded-full bg-[#16222d]/10 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                      ➔
                    </span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
