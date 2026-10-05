import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

const heroSlides = [
  {
    id: "01",
    badge: "PAN-INDIA STATUTORY PRACTICE",
    titleLine1: "Corporate Tax &",
    titleLine2: "Business Advisory",
    description: "End-to-end Income Tax scrutiny defense, multi-state GST audit, and MCA corporate restructuring delivered with senior partner oversight across all 28 states.",
    bgImage: "/images/banner-slider-img/slider1-01.jpg",
    buttonText: "Schedule Consultation"
  },
  {
    id: "02",
    badge: "ENTERPRISE AUDIT & GOVERNANCE",
    titleLine1: "Virtual CFO &",
    titleLine2: "Financial Strategy",
    description: "Institutional financial architecture, capital structuring, CMA credit reports, and UDIN-verified certifications for high-growth enterprises and venture-backed startups.",
    bgImage: "/images/banner-slider-img/slider1-02.jpg",
    buttonText: "Explore Advisory Desk"
  },
  {
    id: "03",
    badge: "ZERO-PENALTY COMPLIANCE SLA",
    titleLine1: "MCA Secretarial &",
    titleLine2: "Company Law Desk",
    description: "Frictionless Private Limited incorporation, LLP governance, annual ROC filings, and cross-border FDI FEMA compliance with guaranteed turnaround timelines.",
    bgImage: "/images/banner-slider-img/slider1-03.jpg",
    buttonText: "Book Partner Session"
  }
];

export const Hero = ({ onOpenConsultation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides every 6 seconds, pausing on hover or focus
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeSlide = heroSlides[currentSlideIndex];

  return (
    <section 
      className="relative bg-navy-950 text-white min-h-[100svh] lg:min-h-[820px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
    >
      {/* Background Slides with Isolation */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentSlideIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
          aria-hidden={currentSlideIndex !== idx}
        >
          {/* Multi-stage dark gradient overlays for maximum contrast and legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60 z-10" />
        </div>
      ))}

      {/* Main Slide Content */}
      <div className="site-container relative z-20 pt-28 sm:pt-32 pb-24 sm:pb-28 w-full">
        <div className="max-w-3xl">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6 animate-fadeIn">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{activeSlide.badge}</span>
          </div>

          {/* Fluid Headline */}
          <h1 className="fluid-hero font-extrabold text-white leading-[0.98] tracking-tight drop-shadow-md select-none mb-6">
            <span className="block">{activeSlide.titleLine1}</span>
            <span className="block text-amber-400">{activeSlide.titleLine2}</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8 drop-shadow-sm font-normal">
            {activeSlide.description}
          </p>

          {/* Dual CTAs for High-Conversion */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="btn-gold text-sm sm:text-base py-3.5 px-7 shadow-xl group"
            >
              <span>{activeSlide.buttonText}</span>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center ml-2.5 text-xs group-hover:translate-x-1 transition-transform">
                ➔
              </span>
            </button>

            <button
              type="button"
              onClick={() => openWhatsApp(null, "Hello, I would like to schedule a PAN-India consultation.")}
              className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/30 text-sm sm:text-base py-3.5 px-6 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Instant WhatsApp Desk</span>
            </button>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="pt-8 mt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>Zero-Penalty Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>UDIN Verified Filings</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>4-Hour SLA Response</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Pagination & Navigation Tabs */}
      <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 md:left-12 z-30 flex items-center gap-4 sm:gap-6 bg-navy-950/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlideIndex(idx)}
            className={`touch-target flex items-center gap-2 text-xs sm:text-sm font-bold transition-all ${
              currentSlideIndex === idx ? 'text-amber-400' : 'text-slate-400 hover:text-white'
            }`}
            aria-label={`Go to slide ${slide.id}: ${slide.titleLine1}`}
          >
            <span>{slide.id}</span>
            <span
              className={`h-[2px] bg-amber-400 transition-all duration-300 ${
                currentSlideIndex === idx ? 'w-8 sm:w-12 opacity-100' : 'w-0 opacity-0'
              }`}
            />
          </button>
        ))}
      </div>

    </section>
  );
};
