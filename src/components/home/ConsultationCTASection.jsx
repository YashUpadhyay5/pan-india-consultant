import React from 'react';
import { ArrowRight, ShieldCheck, PhoneCall, MessageCircle, Lock } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { siteConfig } from '../../data/siteConfig';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';

export const ConsultationCTASection = ({ onOpenConsultation }) => {
  const handleConsultation = () => {
    trackEvent(analyticsEvents.CONSULTATION_CLICKED, { source: 'homepage_bottom_cta' });
    onOpenConsultation();
  };

  const handleWhatsApp = () => {
    trackEvent(analyticsEvents.WHATSAPP_CLICKED, { source: 'homepage_bottom_cta' });
    openWhatsApp(null, "Hello, I would like to book a consultation regarding our tax and compliance needs.");
  };

  return (
    <section className="py-16 sm:py-20 bg-navy-950 text-white relative overflow-hidden border-t border-navy-900">
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-navy-900 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 border border-navy-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                PAN-INDIA CORPORATE & TAX ENGAGEMENTS
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ready to Secure Your Tax & Regulatory Compliance?
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Schedule a confidential consultation with our senior advisory team. We provide upfront clarity on deliverables, statutory deadlines, and transparent fee structures.
              </p>

              <div className="pt-2 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-400">
                <span className="flex items-center">
                  <Lock className="w-3.5 h-3.5 mr-1.5 text-amber-400" /> Strict Non-Disclosure
                </span>
                <span className="flex items-center">
                  <PhoneCall className="w-3.5 h-3.5 mr-1.5 text-amber-400" /> 4-Hour Response SLA
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={handleConsultation}
                className="w-full btn-accent py-3.5 px-6 text-xs tracking-wider uppercase font-bold justify-center shadow-lg"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Connect on WhatsApp
              </button>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="text-center text-xs text-slate-400 hover:text-white transition-colors mt-2"
              >
                Or Call Direct: <span className="text-slate-200 font-semibold">{siteConfig.contact.phone}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
