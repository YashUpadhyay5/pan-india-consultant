import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackEvent(analyticsEvents.WHATSAPP_CLICKED, { source: 'floating_desktop_widget' });
    openWhatsApp(null, "Hello, I would like to speak with a consultant regarding my compliance/tax requirements.");
  };

  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-40">
      <div className="relative flex items-center">
        {showTooltip && (
          <div className="mr-3 bg-white text-slate-800 text-xs py-2 px-3 rounded-xl shadow-xl border border-slate-200 flex items-center space-x-2 animate-fadeIn">
            <div>
              <p className="font-bold text-navy-950">Questions?</p>
              <p className="text-[11px] text-slate-500">Chat with Senior Advisory Desk</p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <button
          onClick={handleClick}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-elevated hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-200"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};
