import React from 'react';
import { Phone, MessageCircle, Shield, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { openWhatsApp } from '../../utils/whatsapp';
import { Link } from 'react-router-dom';

export const AnnouncementBar = () => {
  return (
    <div className="bg-navy-950 text-slate-300 text-xs py-2 px-4 border-b border-navy-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-center sm:text-left">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-gold-600/30 text-amber-300 border border-amber-500/30">
            <Shield className="w-3 h-3 mr-1" /> PAN-INDIA DESK
          </span>
          <span className="text-slate-300 font-medium">
            Serving corporate entities, startups & professionals across 28 Indian States
          </span>
          <Link 
            to="/resources" 
            className="hidden md:inline-flex items-center text-amber-400 hover:text-amber-300 underline font-medium ml-2"
          >
            View Compliance Calendar <ArrowRight className="w-3 h-3 ml-0.5" />
          </Link>
        </div>

        <div className="flex items-center space-x-4 text-xs">
          <a 
            href={`tel:${siteConfig.contact.phoneRaw}`} 
            className="inline-flex items-center text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 mr-1 text-slate-400" />
            <span>{siteConfig.contact.phone}</span>
          </a>
          <span className="text-slate-700">|</span>
          <button 
            onClick={() => openWhatsApp(null, "Hello, I want to inquire about your PAN-India consulting services.")} 
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-400" />
            <span>WhatsApp Quick Desk</span>
          </button>
        </div>
      </div>
    </div>
  );
};
