import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export const AccountingStatisticsSection = ({ onOpenConsultation }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Budget', 'Saving', 'Analytic'],
        datasets: [
          {
            label: 'Element 1',
            data: [135, 120, 100],
            backgroundColor: '#16222d',
            borderRadius: 4,
            barPercentage: 0.6
          },
          {
            label: 'Element 2',
            data: [95, 90, 65],
            backgroundColor: '#ecf0f4',
            borderRadius: 4,
            barPercentage: 0.6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#16222d',
            titleFont: { size: 12, weight: 'bold' },
            bodyFont: { size: 11 },
            padding: 10,
            cornerRadius: 4
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 150,
            ticks: { stepSize: 30 }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <section className="py-24 bg-white border-b border-slate-200" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Chart + Copy (matches 00:34 of video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dual Bar Chart */}
          <div className="lg:col-span-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h5 className="font-extrabold text-[#16222d] text-base sm:text-lg font-display m-0">
                  Performance Overview
                </h5>
                <div className="flex gap-4 text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-[#16222d]">
                    <span className="w-3 h-3 bg-[#16222d] inline-block rounded-xs"></span> Element 1
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="w-3 h-3 bg-[#ecf0f4] border border-slate-300 inline-block rounded-xs"></span> Element 2
                  </span>
                </div>
              </div>
              <div className="h-[280px] w-full relative">
                <canvas ref={canvasRef}></canvas>
              </div>
            </div>
          </div>

          {/* Right: Copy & 3 Gold Checkmark Bullets */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-[#ecf0f4] text-[#16222d] font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded">
              WHY CHOOSE US
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#16222d] tracking-tight leading-tight font-display">
              Amazing accounting statistics show the power of numbers.
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Our firm is built on a foundation of responsiveness. We understand that in a fast-paced business world, a timely answer is a competitive advantage.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#ecab23] flex items-center justify-center text-[#16222d] text-xs font-black flex-shrink-0 shadow-xs">
                  ✓
                </span>
                <span className="font-bold text-[#16222d] text-sm sm:text-base">
                  Social security and pension optimization
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#ecab23] flex items-center justify-center text-[#16222d] text-xs font-black flex-shrink-0 shadow-xs">
                  ✓
                </span>
                <span className="font-bold text-[#16222d] text-sm sm:text-base">
                  GST, TDS, and income tax filings
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#ecab23] flex items-center justify-center text-[#16222d] text-xs font-black flex-shrink-0 shadow-xs">
                  ✓
                </span>
                <span className="font-bold text-[#16222d] text-sm sm:text-base">
                  Tax deductions & exemptions guidance
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom: 3 Static Feature Cards (matches 00:36 of video) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-6" id="portfolio">
          
          {/* Card 1: Market Research Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center min-h-[260px] group hover:border-amber-400">
            <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">
              <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#16222d] font-display mb-2">
              Market Research
            </h3>
            <p className="text-sm text-slate-500 m-0 leading-relaxed">
              Businesses that partner with us gain a strategic advantage
            </p>
          </div>

          {/* Card 2: Strategic Planning Image */}
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[260px] group">
            <img
              src="/images/demo-1/static-box/static-box-02.jpg"
              alt="Strategic Planning"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Card 3: Financial Modeling Image */}
          <div className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 min-h-[260px] group">
            <img
              src="/images/demo-1/static-box/static-box-03.jpg"
              alt="Financial Modeling"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
