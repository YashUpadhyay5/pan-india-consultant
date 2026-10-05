import React from 'react';

export const WelcomeCredibilitySection = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Double Photos + Floating 20K+ Customer Worldwide Badge */}
          <div className="lg:col-span-6 relative">
            <div className="flex gap-4 items-center">
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-[340px] sm:h-[420px]">
                <img
                  src="/images/demo-1/about-01.jpg"
                  alt="Financial Consultation Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg h-[340px] sm:h-[420px] bg-slate-50">
                <img
                  src="/images/demo-1/about-02.png"
                  alt="Managing Consultant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* 20K+ Customer World wide Badge (00:18 of video) */}
            <div className="absolute -bottom-6 left-4 sm:left-8 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 flex items-center gap-4 z-10 max-w-xs animate-fadeIn">
              <div className="text-amber-500 flex-shrink-0">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <h5 className="font-extrabold text-[#16222d] text-sm sm:text-base leading-tight font-display m-0">
                  20K+ Customer World wide
                </h5>
                <div className="text-amber-400 text-sm tracking-wider mt-1">
                  ★ ★ ★ ★ ★
                </div>
              </div>
            </div>
          </div>

          {/* Right: Welcome Description + 25+ Years Experience (00:19 of video) */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0 lg:pl-6">
            
            {/* Tag */}
            <div className="inline-block bg-[#ecf0f4] text-[#16222d] font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded">
              WELCOME
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16222d] tracking-tight leading-[1.15] font-display">
              Top strategies for achieving sustainable business
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We specialize in helping businesses and growing enterprises thrive by providing expert guidance in taxation, corporate compliance, and long-term financial growth strategy.
            </p>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              
              {/* Giant 25+ */}
              <div className="pr-6 sm:border-r sm:border-slate-200">
                <div className="text-5xl sm:text-6xl font-black text-[#16222d] leading-none font-display">
                  25<span className="text-amber-500">+</span>
                </div>
                <div className="text-xs font-bold text-[#16222d] uppercase tracking-wider mt-2 whitespace-nowrap">
                  Years of working<br />experience
                </div>
              </div>

              {/* Text & Button */}
              <div className="space-y-3.5 flex-1">
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  We help small and growing businesses cut compliance friction, boost statutory credibility, and move forward with confidence.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-3 bg-[#16222d] hover:bg-amber-500 text-white hover:text-[#16222d] text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-full transition-all duration-300 group shadow-md"
                >
                  <span>Discover More</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-[#16222d]/20 flex items-center justify-center text-xs transition-colors">
                    ➔
                  </span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
