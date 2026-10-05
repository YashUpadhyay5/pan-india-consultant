import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  {
    id: "01",
    titleLine1: "Business",
    titleLine2: "Advisor",
    bgImage: "/images/banner-slider-img/slider1-01.jpg",
    buttonText: "Discover More"
  },
  {
    id: "02",
    titleLine1: "Financial",
    titleLine2: "Expert",
    bgImage: "/images/banner-slider-img/slider1-02.jpg",
    buttonText: "Discover More"
  },
  {
    id: "03",
    titleLine1: "Financial",
    titleLine2: "Advisor",
    bgImage: "/images/banner-slider-img/slider1-03.jpg",
    buttonText: "Discover More"
  }
];

export const Hero = ({ onOpenConsultation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#16222d] text-white min-h-[860px] overflow-hidden">
      
      {/* Background Slides with Strict Isolation (Zero Text Superposition) */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            currentSlideIndex === idx ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          {/* Deep dark gradient mask on left, gentle fade on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#16222d] via-[#16222d]/85 to-transparent z-10" />

          {/* Slide Content */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20 pt-48 pb-28">
            <div className="max-w-3xl">
              <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-black text-white font-display leading-[0.92] tracking-[-3.5px] m-0 drop-shadow-sm select-none">
                <span className="block">{slide.titleLine1}</span>
                <span className="block">{slide.titleLine2}</span>
              </h1>

              <div className="pt-10">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-[15px] px-8 py-3.5 rounded-full shadow-lg transition-all group hover:scale-[1.02]"
                >
                  <span>{slide.buttonText}</span>
                  <span className="w-7 h-7 rounded-full bg-white text-slate-900 flex items-center justify-center ml-3 text-xs group-hover:translate-x-1 transition-transform">
                    ➔
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Pagination Tabs (01 —— 02  03) */}
      <div className="absolute bottom-12 left-6 sm:left-16 lg:left-24 z-30 flex items-center space-x-6">
        {heroSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlideIndex(idx)}
            className={`flex items-center space-x-3 text-base font-bold transition-colors ${
              currentSlideIndex === idx ? 'text-white' : 'text-white/50 hover:text-white'
            }`}
          >
            <span>{slide.id}</span>
            <span
              className={`h-[2px] bg-white transition-all duration-300 ${
                currentSlideIndex === idx ? 'w-12 opacity-100' : 'w-0 opacity-0'
              }`}
            />
          </button>
        ))}
      </div>

    </section>
  );
};
