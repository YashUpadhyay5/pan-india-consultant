import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { complianceDeadlines } from '../data/complianceCalendar';
import { Calendar, AlertCircle, FileText, Download, CheckCircle, Clock, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ResourcesPage = () => {
  const { openConsultation } = useOutletContext();
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredCalendar = filterCategory === 'all'
    ? complianceDeadlines
    : complianceDeadlines.filter(d => d.category === filterCategory);

  return (
    <>
      <SEOHead
        title="Statutory Compliance Calendar & Business Knowledge Desk"
        description="Comprehensive Indian compliance calendar covering monthly GST due dates, TDS challan and return deadlines, Advance Tax installments, and MCA ROC filing timelines."
        canonicalPath="/resources"
      />

      {/* Hero */}
      <section className="bg-navy-950 text-white py-14 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              Statutory Knowledge & Deadlines
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Indian Business Compliance Calendar & Guides
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Stay ahead of mandatory due dates for GST, Income Tax, TDS, and MCA ROC annual filings. Prevent late filing fees and statutory penalty notices.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Calendar Table */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy-950 flex items-center">
                <Calendar className="w-6 h-6 text-brand-700 mr-2" />
                Statutory Compliance Timeline
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Standard recurring deadlines for corporate entities, LLPs, and regular GST taxpayers.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center space-x-2">
              {['all', 'GST', 'Direct Tax', 'MCA / ROC'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    filterCategory === cat
                      ? 'bg-navy-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat === 'all' ? 'All Deadlines' : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Calendar List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCalendar.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider ${
                      item.category === 'GST' 
                        ? 'bg-blue-100 text-blue-800' 
                        : item.category === 'Direct Tax' 
                        ? 'bg-amber-100 text-amber-900' 
                        : 'bg-purple-100 text-purple-900'
                    }`}>
                      {item.category} • {item.frequency}
                    </span>
                    <span className="text-xs font-extrabold text-brand-800 flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {item.dueDateText}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-navy-950 mb-2">
                    {item.event}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4">
                    <strong>Applicable To:</strong> {item.targetAudience}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-red-600 font-medium">
                    ⚠️ {item.importance}
                  </span>
                  <button
                    onClick={() => openConsultation(null)}
                    className="text-xs font-bold text-navy-900 hover:text-brand-700"
                  >
                    Get Filing Help →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Alert Subscription Banner */}
          <div className="mt-12 bg-navy-900 text-white p-8 rounded-2xl border border-navy-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-lg font-bold">Need Automated Compliance Alerts for Your Firm?</h3>
              <p className="text-xs text-slate-300">
                Our clients receive proactive WhatsApp & email notifications 7 days before every statutory deadline.
              </p>
            </div>
            <button
              onClick={() => openWhatsApp(null, "Hello, I would like to subscribe to your compliance calendar alerts.")}
              className="btn-accent text-xs py-3 px-6 whitespace-nowrap"
            >
              Subscribe via WhatsApp Desk
            </button>
          </div>

        </div>
      </section>
    </>
  );
};
