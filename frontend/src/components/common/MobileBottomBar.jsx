import React from 'react';
import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { openWhatsApp } from '../../utils/whatsapp';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';

export const MobileBottomBar = ({ onOpenConsultation }) => {
  const handleConsultation = () => {
    trackEvent(analyticsEvents.CONSULTATION_CLICKED, { source: 'mobile_sticky_bottom_bar' });
    onOpenConsultation();
  };

  const handleWhatsApp = () => {
    trackEvent(analyticsEvents.WHATSAPP_CLICKED, { source: 'mobile_sticky_bottom_bar' });
    openWhatsApp(null, "Hello, I want to book a consultation regarding your consulting services.");
  };

  const handlePhone = () => {
    trackEvent(analyticsEvents.PHONE_CLICKED, { source: 'mobile_sticky_bottom_bar' });
  };

  return (
    <aside 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-elevated px-3 pt-2 safe-bottom-bar"
      aria-label="Mobile Quick Actions"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="touch-target flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors border border-emerald-200 text-center"
          aria-label="Instant WhatsApp Chat"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          onClick={handlePhone}
          className="touch-target flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors border border-slate-200 text-center"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-slate-700 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight">Call Desk</span>
        </a>

        {/* Book Consultation Button */}
        <button
          type="button"
          onClick={handleConsultation}
          className="touch-target flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-navy-950 text-white hover:bg-navy-900 transition-colors shadow-sm text-center"
          aria-label="Book Advisory Consultation"
        >
          <CalendarCheck className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-bold leading-tight text-amber-300">Consult</span>
        </button>
      </div>
    </aside>
  );
};
