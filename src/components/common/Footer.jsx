import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, Shield } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { footerNavigation } from '../../data/navigation';
import { openWhatsApp } from '../../utils/whatsapp';

export const Footer = () => {
  return (
    <footer className="bg-[#16222d] text-slate-400 border-t border-[#223344] pt-16 pb-24 lg:pb-12 text-sm relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#223344]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo-white.svg"
                alt="Gudfin Advisory"
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Gudfin is an elite accounting and finance management consultancy providing bespoke wealth planning, audit governance, and PAN-India corporate tax architecture.
            </p>

            <div className="p-3 bg-[#111c25] rounded-lg border border-[#223344] text-xs text-slate-300 flex items-start space-x-2">
              <Shield className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white">PAN-India Delivery Model:</strong>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Assisting clients across all 28 states via secure digital data vaults, UDIN certification & MCA/Income Tax electronic portals.
                </p>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => openWhatsApp(null, "Hello, I would like to consult with your advisory team.")}
                className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                WhatsApp Helpdesk
              </button>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded bg-[#1c2a38] text-slate-200 border border-[#2a3c4e] hover:bg-[#253749] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Tax & GST Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-[#223344] pb-2 font-display">
              Tax & GST Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.servicesCol1.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Advisory */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-[#223344] pb-2 font-display">
              Corporate & Advisory
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.servicesCol2.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Newsletter */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-[#223344] pb-2 font-display">
              Newsletter
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Get our weekly statutory updates & financial intelligence directly in your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email..."
                className="bg-[#111c25] border border-[#223344] text-white text-xs px-3 py-2 rounded-lg flex-1 focus:outline-none focus:border-amber-400"
              />
              <button
                type="button"
                className="bg-amber-400 hover:bg-amber-500 text-[#16222d] text-xs font-bold px-3 py-2 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </div>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-6 mb-2 border-b border-[#223344] pb-1 font-display">
              Legal
            </h4>
            <ul className="space-y-1.5 text-xs">
              {footerNavigation.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-slate-200 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Representative Desk Hubs */}
        <div className="py-6 border-b border-[#223344] text-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-slate-400">
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span><strong>National Consultation Network:</strong> New Delhi • Mumbai • Bengaluru • Hyderabad • Pune • Ahmedabad • Chennai • Kolkata</span>
            </div>
            <div>
              <span>Working Hours: {siteConfig.contact.businessHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-[11px] max-w-2xl leading-normal text-slate-400">
            <strong>Professional Disclaimer:</strong> The content provided on this website is for informational and educational purposes only and does not constitute formal legal, accounting, or tax advice. Engagement of services is subject to execution of a formal engagement scope document.
          </p>
          <div className="text-right text-[11px] text-slate-400 whitespace-nowrap flex flex-wrap items-center gap-2 sm:gap-3 justify-end">
            <span>© 2026 <strong>Gudfin</strong> by PBM Infotech. All Rights Reserved.</span>
            <span className="text-slate-600">•</span>
            <Link 
              to="/admin" 
              className="bg-[#1c2a38] text-amber-400 border border-[#2e4256] hover:bg-amber-400 hover:text-slate-950 px-3 py-1 rounded-md transition-all inline-flex items-center gap-1.5 font-bold shadow-xs"
              title="Staff & Partner Admin Portal"
            >
              <span>Staff Portal</span>
              <span className="text-xs">🔒</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
