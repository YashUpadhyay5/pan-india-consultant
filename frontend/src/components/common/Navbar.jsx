import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ArrowRight, Menu, X, ChevronDown, ShieldCheck, MessageCircle } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { openWhatsApp } from '../../utils/whatsapp';

export const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  // Close drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Sticky header transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock & Escape key listener for Mobile Drawer
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-slate-200 text-slate-900'
            : 'bg-navy-950/80 backdrop-blur-sm py-3.5 sm:py-4 border-b border-white/10 text-white'
        }`}
      >
        <div className="site-container">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Left: Brand Identity Logo */}
            <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 group" aria-label="Bharat Advisory Partners Home">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-navy-950 font-black text-lg sm:text-xl shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
                  B
                </div>
                <div className="flex flex-col">
                  <span className={`text-base sm:text-lg font-extrabold tracking-tight font-display leading-tight ${
                    isScrolled ? 'text-navy-950' : 'text-white'
                  }`}>
                    Bharat Advisory
                  </span>
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${
                    isScrolled ? 'text-amber-600' : 'text-amber-400'
                  }`}>
                    PAN-India Advisory
                  </span>
                </div>
              </Link>

              {/* Direct Partner Desk Phone (Desktop only) */}
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className={`hidden xl:inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  isScrolled
                    ? 'border-slate-200 text-slate-700 hover:border-amber-500 hover:text-amber-600 bg-slate-50'
                    : 'border-white/20 text-slate-200 hover:border-amber-400 hover:text-amber-400 bg-white/5'
                }`}
                title="Direct Phone Line"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span className="font-mono">{siteConfig.contact.phone}</span>
              </a>
            </div>

            {/* Center: Desktop Navigation Bar (Laptops & Desktops) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                Industries
              </NavLink>

              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                Pricing
              </NavLink>

              <NavLink
                to="/case-studies"
                className={({ isActive }) =>
                  `hidden xl:inline-block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                Case Studies
              </NavLink>

              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `hidden xl:inline-block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                Calendar
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'text-amber-500'
                      : isScrolled
                      ? 'text-slate-800 hover:text-amber-600 hover:bg-slate-100/60'
                      : 'text-slate-200 hover:text-amber-400 hover:bg-white/5'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Right: Actions & Mobile Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              
              {/* Admin Portal Indicator */}
              <Link
                to="/admin"
                className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                  isScrolled
                    ? 'border-slate-300 text-slate-800 hover:border-amber-500 hover:text-amber-600 bg-slate-100/80'
                    : 'border-white/20 text-slate-200 hover:border-amber-400 hover:text-amber-400 bg-white/10'
                }`}
                title="Executive Admin Portal (PIN Protected)"
              >
                <span>Admin</span>
                <span className="text-[11px]">🔒</span>
              </Link>

              {/* Primary Consultation Action Button */}
              <button
                type="button"
                onClick={() => onOpenConsultation(null)}
                className="btn-gold hidden sm:inline-flex text-xs md:text-sm py-2 px-4 md:py-2.5 md:px-5 shadow-md"
              >
                <span>Consultation</span>
                <span className="ml-2 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  ➔
                </span>
              </button>

              {/* Mobile Quick Consult Button for small screens */}
              <button
                type="button"
                onClick={() => onOpenConsultation(null)}
                className="sm:hidden touch-target px-3 py-1.5 rounded-full bg-amber-500 text-navy-950 font-bold text-xs shadow-sm"
              >
                Book
              </button>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className={`lg:hidden touch-target p-2 rounded-xl transition-colors ${
                  isScrolled
                    ? 'text-slate-900 hover:bg-slate-100'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Open Navigation Menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Premium Full-Height Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-navy-950/75 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel Sliding in from Right */}
          <div
            ref={drawerRef}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy-950 text-white shadow-2xl flex flex-col justify-between border-l border-white/10 animate-slideInRight"
            style={{
              paddingTop: 'max(1.5rem, env(safe-area-inset-top))',
              paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom))'
            }}
          >
            {/* Drawer Header */}
            <div className="px-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-navy-950 font-black text-sm">
                  B
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white font-display">Bharat Advisory</h3>
                  <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">PAN-India Desk</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="touch-target p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="px-6 py-6 overflow-y-auto flex-1 space-y-1">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>Home</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <NavLink
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>Practice Areas (20+)</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <NavLink
                to="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>Industry Sectors</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <NavLink
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>Pricing & Retainers</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <NavLink
                to="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>Case Studies</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <NavLink
                to="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>Compliance Calendar</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>About Firm</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-bold transition-all ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-200 hover:bg-white/5'
                  }`
                }
              >
                <span>Contact Desk</span>
                <span className="text-xs text-slate-500">➔</span>
              </NavLink>

              <div className="pt-2 border-t border-white/10 mt-3">
                <Link
                  to="/admin"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3.5 rounded-xl text-xs font-bold text-amber-300 bg-white/5 hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <span>Executive Staff Portal</span>
                    <span className="text-xs">🔒</span>
                  </span>
                  <span className="text-slate-400">Login</span>
                </Link>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-white/10 bg-black/20 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation(null);
                }}
                className="w-full btn-gold py-3 text-sm font-extrabold justify-center shadow-lg"
              >
                Book Advisory Consultation
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openWhatsApp(null, "Hello, I want to consult with a senior advisor.");
                  }}
                  className="touch-target py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>

                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="touch-target py-2 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold flex items-center justify-center gap-1.5 transition-colors text-center"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
