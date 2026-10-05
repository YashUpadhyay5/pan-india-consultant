import React from 'react';

export const MarqueeTickerStrip = () => {
  const keywords = [
    "Financial Projections",
    "Business Planning",
    "Investment Management",
    "Insurance Consulting",
    "Business Planning",
    "Audit & Assurance",
    "Direct Tax Planning",
    "GST Compliance"
  ];

  return (
    <section className="bg-[#ecab23] py-5 overflow-hidden whitespace-nowrap relative z-10 border-y border-[#d89b1c]">
      <style>{`
        @keyframes gudfinMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .gudfin-marquee-track {
          display: inline-flex;
          animation: gudfinMarquee 26s linear infinite;
        }
        .gudfin-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="gudfin-marquee-track flex items-center gap-10">
        {[...keywords, ...keywords, ...keywords, ...keywords].map((item, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-4 text-xl sm:text-2xl font-black text-[#16222d] uppercase tracking-wide font-display select-none"
          >
            <span className="text-lg opacity-80">✱</span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </section>
  );
};
