import React, { useState, useMemo } from 'react';
import { 
  serviceCategories, services 
} from '../../data/services';
import { ServiceCard } from '../services/ServiceCard';
import { 
  Receipt, FileText, Building2, Award, TrendingUp, 
  Calculator, FileCheck2, ShieldCheck, LayoutGrid, Info, ArrowRight 
} from 'lucide-react';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';
import { Link } from 'react-router-dom';

const iconMap = {
  LayoutGrid,
  Receipt,
  FileText,
  Building2,
  Award,
  TrendingUp,
  Calculator,
  FileCheck2,
  ShieldCheck
};

export const ServiceCategorySection = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const handleTabChange = (categoryId) => {
    setActiveCategory(categoryId);
    trackEvent(analyticsEvents.CATEGORY_SELECTED, { categoryId });
  };

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            PRACTICE DISCIPLINES & SERVICES
          </span>
          <h2 className="fluid-h2 font-extrabold text-navy-950 mt-4 tracking-tight leading-tight">
            Comprehensive Tax, Legal & Advisory Services
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Select a specialized practice area below to explore deliverables, statutory prerequisites, and transparent starting fees.
          </p>
        </div>

        {/* Category Filter Tabs with horizontal swipe on mobile */}
        <div className="relative mb-8 sm:mb-10">
          <div 
            className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 no-scrollbar gap-2 px-1 scroll-smooth"
            role="tablist"
            aria-label="Service Category Tabs"
          >
            {serviceCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || LayoutGrid;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabChange(cat.id)}
                  className={`touch-target flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-navy-950 text-white border-navy-950 shadow-md'
                      : 'bg-white text-slate-700 hover:text-navy-950 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards Responsive Grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Pricing Transparency Disclaimer */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5 text-xs text-slate-600 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-navy-950 block text-xs sm:text-sm">Pricing Transparency Policy:</span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Prices mentioned are baseline starting fees for standard transaction profiles. Final formal quotes are provided in writing based on document volume, statutory scope, and multi-state complexity before any billing occurs.
            </p>
          </div>
        </div>

        {/* Full Directory Link */}
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-xs sm:text-sm font-bold text-navy-950 hover:text-amber-600 border-b-2 border-navy-950 hover:border-amber-500 pb-0.5 transition-colors gap-1.5"
          >
            <span>Explore Complete 20+ Service Directory & Document Checklists</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
