import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'bharat_advisory_cookie_consent_v1';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }));
      setIsVisible(false);
    } catch {
      setIsVisible(false);
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ accepted: false, date: new Date().toISOString() }));
      setIsVisible(false);
    } catch {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-navy-950 text-slate-200 p-4 rounded-xl shadow-2xl border border-navy-800 text-xs animate-fadeIn">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start space-x-2.5">
          <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-white">Privacy & Cookie Preferences</p>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              We use necessary cookies and anonymous analytics to improve service discovery and consultation scheduling in compliance with the Digital Personal Data Protection (DPDP) Act.
            </p>
            <div className="pt-1 flex items-center space-x-3">
              <Link to="/privacy-policy" className="text-[11px] text-amber-400 hover:underline">
                Privacy Policy
              </Link>
              <span className="text-slate-600">•</span>
              <Link to="/disclaimer" className="text-[11px] text-slate-400 hover:underline">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
        <button 
          onClick={handleDecline}
          className="text-slate-400 hover:text-white"
          aria-label="Close notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 pt-2 border-t border-navy-800/80 flex items-center justify-end space-x-2">
        <button
          onClick={handleDecline}
          className="px-3 py-1 rounded text-[11px] text-slate-300 hover:bg-navy-900 border border-navy-700"
        >
          Essential Only
        </button>
        <button
          onClick={handleAccept}
          className="px-3 py-1 rounded text-[11px] font-semibold bg-amber-500 hover:bg-amber-400 text-navy-950 shadow-sm"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
