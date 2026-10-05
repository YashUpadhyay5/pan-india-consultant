import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, MapPin, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { footerNavigation } from '../../data/navigation';
import { openWhatsApp } from '../../utils/whatsapp';

export const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-900 pt-16 pb-24 lg:pb-12 text-sm relative" id="contact">
      <div className="site-container">
        
        {/* Top Grid: 1-col mobile, 2-col tablet, 5-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-900">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-navy-950 font-black text-xl shadow-md">
                B
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight font-display text-white">
                  {siteConfig.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400">
                  PAN-India Consulting & Advisory
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Bharat Advisory Partners is a premier Indian professional consulting firm providing bespoke direct tax defense, multi-state GST compliance, MCA company incorporation, and Virtual CFO advisory across India.
            </p>

            <div className="p-3.5 bg-navy-900/90 rounded-xl border border-navy-800 text-xs text-slate-300 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-white block font-semibold">National Delivery Model:</strong>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                  Serving clients across all 28 states via secure digital data vaults, UDIN verified certifications & official Income Tax and MCA portals.
                </p>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => openWhatsApp(null, "Hello, I would like to consult with your advisory team.")}
                className="touch-target inline-flex items-center text-xs font-bold px-3.5 py-2 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-800/80 hover:bg-emerald-900 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 text-emerald-400" />
                WhatsApp Helpdesk
              </button>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="touch-target inline-flex items-center text-xs font-bold px-3.5 py-2 rounded-xl bg-navy-900 text-slate-200 border border-navy-800 hover:bg-navy-850 transition-colors"
              >
                <Mail className="w-4 h-4 mr-1.5 text-amber-400" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Tax & GST Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2 font-display">
              Tax & GST Practice
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.servicesCol1.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-amber-400 transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Advisory */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2 font-display">
              Corporate & Advisory
            </h4>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.servicesCol2.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-amber-400 transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-navy-800 pb-2 font-display">
              Statutory Bulletin
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Get our weekly GST, Income Tax notifications, and MCA circular summaries.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-950 text-emerald-300 rounded-xl text-xs flex items-center gap-2 border border-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-navy-900 border border-navy-800 text-white text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:border-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full touch-target bg-amber-500 hover:bg-amber-400 text-navy-950 text-xs font-bold py-2 px-3 rounded-xl transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            <h4 className="text-xs font-bold text-white uppercase tracking-wider mt-6 mb-2 border-b border-navy-800 pb-1 font-display">
              Legal & Compliance
            </h4>
            <ul className="space-y-1.5 text-xs">
              {footerNavigation.legal.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-slate-200 transition-colors block py-0.5">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Representative Desk Hubs */}
        <div className="py-6 border-b border-navy-900 text-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-start sm:items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5 sm:mt-0" />
              <span><strong>National Consultation Network:</strong> New Delhi • Mumbai • Bengaluru • Hyderabad • Pune • Ahmedabad • Chennai • Kolkata</span>
            </div>
            <div>
              <span>Operating Hours: {siteConfig.contact.businessHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-[11px] max-w-2xl leading-relaxed text-slate-400">
            <strong>Professional Disclaimer:</strong> The content provided on this website is for informational and educational purposes only and does not constitute formal legal, accounting, or tax advice. Engagement of services is subject to execution of a formal scope document.
          </p>
          <div className="text-right text-xs text-slate-400 whitespace-nowrap flex flex-wrap items-center gap-3 justify-end">
            <span>© 2026 <strong>Bharat Advisory Partners LLP</strong>. All Rights Reserved.</span>
            <span className="text-slate-700">•</span>
            <Link 
              to="/admin" 
              className="bg-navy-900 text-amber-400 border border-navy-800 hover:bg-amber-400 hover:text-navy-950 px-3 py-1.5 rounded-lg transition-all inline-flex items-center gap-1.5 font-bold shadow-xs text-xs"
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
