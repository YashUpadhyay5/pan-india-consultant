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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-elevated px-3 py-2">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors border border-emerald-200 text-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold leading-tight">WhatsApp</span>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          onClick={handlePhone}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors border border-slate-200 text-center"
        >
          <Phone className="w-4 h-4 text-slate-600 mb-0.5" />
          <span className="text-[10px] font-bold leading-tight">Call Now</span>
        </a>

        {/* Book Consultation Button */}
        <button
          onClick={handleConsultation}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-navy-900 text-white hover:bg-navy-800 transition-colors shadow-sm text-center"
        >
          <CalendarCheck className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-bold leading-tight">Consult</span>
        </button>
      </div>
    </div>
  );
};
