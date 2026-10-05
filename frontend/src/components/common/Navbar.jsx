import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Phone, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const Navbar = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`transition-all duration-300 z-40 ${
      isScrolled 
        ? 'fixed top-0 left-0 w-full bg-white/98 backdrop-blur-md shadow-md py-2 border-b border-slate-200' 
        : 'absolute top-0 left-0 w-full bg-[#16222d]/50 backdrop-blur-sm py-3 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Logo & Book a call pill */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <img 
                src={isScrolled ? "/images/logo-dark.svg" : "/images/logo-white.svg"} 
                alt="Gudfin Logo" 
                className="h-10 w-auto transition-all"
              />
            </Link>

            <a
              href="tel:14408488222"
              className="hidden lg:inline-flex items-center space-x-2 text-sm text-slate-300 hover:text-white transition-colors"
            >
              <span className={`text-xs ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>Book a call</span>
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className={`font-bold font-mono ${isScrolled ? 'text-slate-900' : 'text-white'}`}>14408488222</span>
            </a>
          </div>

          {/* Center: Desktop Navigation with 3D Dropdowns */}
          <nav className="hidden xl:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isActive ? 'text-amber-400' : isScrolled ? 'text-slate-900 hover:text-amber-500' : 'text-white hover:text-amber-400'
                }`
              }
            >
              Home
            </NavLink>

            {/* Pages Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isScrolled ? 'text-slate-900 group-hover:text-amber-500' : 'text-white group-hover:text-amber-400'
                }`}
              >
                <span>Pages</span>
              </button>
              <ul className="absolute top-full left-0 min-w-[230px] bg-white rounded-lg shadow-xl border-t-3 border-amber-400 py-3 list-unstyled m-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform perspective-500 -rotate-x-12 group-hover:rotate-x-0 origin-top pointer-events-none group-hover:pointer-events-auto">
                <li><Link to="/about" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">About Us</Link></li>
                <li><Link to="/about#team" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Our Team</Link></li>
                <li><Link to="/about#team" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Team Member Detail</Link></li>
                <li><Link to="/resources" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Faq</Link></li>
                <li><Link to="/about" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Our History</Link></li>
              </ul>
            </div>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isScrolled ? 'text-slate-900 group-hover:text-amber-500' : 'text-white group-hover:text-amber-400'
                }`}
              >
                <span>Services</span>
              </button>
              <ul className="absolute top-full left-0 min-w-[230px] bg-white rounded-lg shadow-xl border-t-3 border-amber-400 py-3 list-unstyled m-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform perspective-500 -rotate-x-12 group-hover:rotate-x-0 origin-top pointer-events-none group-hover:pointer-events-auto">
                <li><Link to="/services" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Services</Link></li>
                <li><Link to="/services" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Service Detail</Link></li>
              </ul>
            </div>

            {/* Portfolio Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isScrolled ? 'text-slate-900 group-hover:text-amber-500' : 'text-white group-hover:text-amber-400'
                }`}
              >
                <span>Portfolio</span>
              </button>
              <ul className="absolute top-full left-0 min-w-[230px] bg-white rounded-lg shadow-xl border-t-3 border-amber-400 py-3 list-unstyled m-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform perspective-500 -rotate-x-12 group-hover:rotate-x-0 origin-top pointer-events-none group-hover:pointer-events-auto">
                <li><Link to="/case-studies" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Masonry View</Link></li>
                <li><Link to="/case-studies" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Grid View</Link></li>
                <li><Link to="/case-studies" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Sortable View</Link></li>
                <li><Link to="/case-studies" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Single Detail Style</Link></li>
              </ul>
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isScrolled ? 'text-slate-900 group-hover:text-amber-500' : 'text-white group-hover:text-amber-400'
                }`}
              >
                <span>Blog</span>
              </button>
              <ul className="absolute top-full left-0 min-w-[230px] bg-white rounded-lg shadow-xl border-t-3 border-amber-400 py-3 list-unstyled m-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform perspective-500 -rotate-x-12 group-hover:rotate-x-0 origin-top pointer-events-none group-hover:pointer-events-auto">
                <li><Link to="/resources" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Masonry View</Link></li>
                <li><Link to="/resources" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Grid View</Link></li>
                <li><Link to="/resources" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Blog Classic</Link></li>
                <li><Link to="/resources" className="block px-6 py-2 text-xs font-bold text-slate-900 uppercase tracking-wider hover:text-amber-500 hover:pl-7 transition-all">Blog Single Details</Link></li>
              </ul>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isActive ? 'text-amber-400' : isScrolled ? 'text-slate-900 hover:text-amber-500' : 'text-white hover:text-amber-400'
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Right: Admin Portal + Search + Get In Touch Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link
              to="/admin"
              className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                isScrolled
                  ? 'border-slate-300 text-slate-800 hover:border-amber-500 hover:text-amber-600 bg-slate-50'
                  : 'border-white/30 text-white hover:border-amber-400 hover:text-amber-400 bg-white/10'
              }`}
              title="Admin Portal"
            >
              <span>Admin</span>
              <span className="text-[11px]">🔒</span>
            </Link>

            <button
              type="button"
              onClick={onOpenConsultation}
              className={`p-2 transition-colors ${isScrolled ? 'text-slate-900 hover:text-amber-500' : 'text-white hover:text-amber-400'}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2.2]" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm px-6 py-2.5 rounded-full shadow-md transition-all group hover:scale-[1.02]"
            >
              <span>Get In Touch</span>
              <span className="w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center ml-2.5 text-xs group-hover:translate-x-1 transition-transform">
                ➔
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 ${isScrolled ? 'text-slate-900' : 'text-white'}`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-navy-950 text-white p-6 border-t border-navy-800">
          <ul className="space-y-4 list-unstyled">
            <li><Link to="/" className="block text-base font-bold text-amber-400">Home</Link></li>
            <li><Link to="/about" className="block text-base font-bold text-slate-200">About Us</Link></li>
            <li><Link to="/services" className="block text-base font-bold text-slate-200">Services</Link></li>
            <li><Link to="/case-studies" className="block text-base font-bold text-slate-200">Portfolio</Link></li>
            <li><Link to="/resources" className="block text-base font-bold text-slate-200">Blog</Link></li>
            <li><Link to="/contact" className="block text-base font-bold text-slate-200">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};
