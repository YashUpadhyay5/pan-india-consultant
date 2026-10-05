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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Practice Disciplines
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 tracking-tight">
            Comprehensive Tax, Legal & Advisory Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Select a specialized category below to explore deliverables, statutory prerequisites, and transparent starting fees.
          </p>
        </div>

        {/* Category Filter Tabs with horizontal scroll on mobile */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 no-scrollbar gap-2 px-1">
          {serviceCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || LayoutGrid;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleTabChange(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 border ${
                  isActive
                    ? 'bg-navy-900 text-white border-navy-900 shadow-md transform scale-[1.02]'
                    : 'bg-white text-slate-700 hover:text-navy-900 border-slate-200 hover:border-slate-300 hover:bg-slate-100/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3 text-xs text-slate-600 max-w-4xl mx-auto">
          <Info className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold text-slate-900">Pricing Transparency Notice:</span>
            <p className="text-[11px] text-slate-500 leading-normal">
              Prices mentioned are baseline starting fees for standard transaction profiles. Final formal quotes are provided in writing based on document volume, statutory scope, and multi-state complexity before any billing occurs.
            </p>
          </div>
        </div>

        {/* Catalog Link */}
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center text-xs font-bold text-navy-900 hover:text-brand-700 border-b border-navy-900 hover:border-brand-700 pb-0.5 transition-colors"
          >
            Explore Complete Service Directory & Document Checklists <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};
