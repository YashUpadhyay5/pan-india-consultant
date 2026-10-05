import React from 'react';
import { Globe, Briefcase, Award, TrendingUp } from 'lucide-react';

export const TrustBadgeBar = () => {
  const items = [
    {
      icon: Globe,
      title: "World-class services",
      desc: "PAN-India 100% digital execution"
    },
    {
      icon: Briefcase,
      title: "Experience strategy",
      desc: "Senior partner oversight on every case"
    },
    {
      icon: Award,
      title: "Award winning agency",
      desc: "Certified national compliance practice"
    },
    {
      icon: TrendingUp,
      title: "Grow your business",
      desc: "From incorporation to Virtual CFO"
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-6 shadow-sm relative z-20">
      <div className="site-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-3.5 p-2 group border-r border-slate-100 last:border-r-0">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 group-hover:bg-[#16222d] group-hover:text-amber-400 transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight font-display m-0">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 m-0 mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
