import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

export const AccountingStatisticsSection = ({ onOpenConsultation }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Tax Efficiency', 'Audit Adherence', 'ROC Timeliness'],
        datasets: [
          {
            label: 'Bharat Advisory SLA (%)',
            data: [98.4, 99.8, 100.0],
            backgroundColor: '#0a193d',
            borderRadius: 6,
            barPercentage: 0.55
          },
          {
            label: 'Industry Average (%)',
            data: [72.0, 78.5, 69.2],
            backgroundColor: '#cbd5e1',
            borderRadius: 6,
            barPercentage: 0.55
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#0f172a',
            titleFont: { size: 12, weight: 'bold' },
            bodyFont: { size: 11 },
            padding: 10,
            cornerRadius: 6,
            callbacks: {
              label: (context) => ` ${context.dataset.label}: ${context.raw}%`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 110,
            ticks: {
              stepSize: 25,
              callback: (val) => `${val}%`,
              font: { size: 11 }
            },
            grid: { color: '#f1f5f9' }
          },
          x: {
            grid: { display: false },
            ticks: { font: { size: 11, weight: '600' } }
          }
        }
      }
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="performance-metrics">
      <div className="site-container">
        
        {/* Top: Chart + Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left: Dual Bar Chart */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-extrabold text-navy-950 text-base sm:text-lg font-display m-0">
                    Statutory SLA & Compliance Benchmarks
                  </h3>
                  <span className="text-xs text-slate-500">Comparative delivery benchmark across 2,400+ corporate filings</span>
                </div>
                <div className="flex flex-wrap gap-3 text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-navy-950">
                    <span className="w-3 h-3 bg-brand-950 inline-block rounded-xs"></span> Bharat Advisory
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="w-3 h-3 bg-slate-300 inline-block rounded-xs"></span> Standard Market
                  </span>
                </div>
              </div>
              
              <div className="h-[260px] sm:h-[300px] w-full relative">
                <canvas ref={canvasRef}></canvas>
              </div>
            </div>
          </div>

          {/* Right: Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block bg-brand-50 text-brand-800 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-brand-200">
              AUDITED PERFORMANCE DATA
            </div>

            <h2 className="fluid-h2 font-extrabold text-navy-950 tracking-tight leading-tight">
              Institutional precision backed by verifiable compliance metrics.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We eliminate regulatory risk through algorithmic multi-state GST reconciliation, two-tier partner audits for all Income Tax assessments, and strict adherence to statutory ROC MCA timelines.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>99.8% On-Time Statutory Filings:</strong> Eliminating interest under Section 234A/B/C and GST late fees.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>94.2% Faceless Scrutiny Resolution:</strong> Robust technical submissions before ITAT and National Faceless Assessment Centres.</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span><strong>100% UDIN Verification:</strong> Guaranteed authenticity on all net-worth and turnover certifications.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="btn-primary text-xs sm:text-sm py-3 px-6 shadow-md"
              >
                <span>Request Case Assessment</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
