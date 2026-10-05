import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';

export const ServiceCard = ({ service, onSelectService }) => {
  const isQuoteType = service.ctaType === 'quote';

  const handleCTAClick = () => {
    trackEvent(
      isQuoteType ? analyticsEvents.QUOTE_CLICKED : analyticsEvents.CONSULTATION_CLICKED,
      { serviceId: service.id, serviceName: service.title }
    );
    onSelectService(service.id);
  };

  const handleWhatsAppClick = (e) => {
    e.stopPropagation();
    trackEvent(analyticsEvents.WHATSAPP_CLICKED, { serviceId: service.id, serviceName: service.title });
    openWhatsApp(service.title);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group relative">
      
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 right-5 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
          High Demand
        </div>
      )}

      <div>
        {/* Category Label & Timeline */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <span className="font-semibold text-brand-800 bg-brand-50 px-2.5 py-0.5 rounded-md text-[11px] border border-brand-100">
            {service.categoryLabel}
          </span>
          {service.timeline && (
            <span className="flex items-center text-[11px] text-slate-500 font-medium">
              <Clock className="w-3 h-3 mr-1 text-amber-500" />
              {service.timeline}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-navy-950 group-hover:text-brand-700 transition-colors tracking-tight mb-2 font-display">
          <Link to={`/services/${service.slug}`} className="hover:underline">
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {service.shortDescription}
        </p>

        {/* Key Deliverables Highlights */}
        {service.deliverables && (
          <div className="space-y-1.5 mb-5 pb-4 border-b border-slate-100">
            {service.deliverables.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pricing & CTA Section */}
      <div className="pt-2">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">Baseline Starting Fee</span>
            <span className="text-base sm:text-lg font-black text-navy-950">
              {service.priceDisplay}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium text-right">
            {service.priceType}
          </span>
        </div>

        {/* Dual Actions with Responsive Touch Sizing */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleCTAClick}
            className={`touch-target py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center ${
              isQuoteType
                ? 'bg-navy-950 text-white hover:bg-navy-900 shadow-sm'
                : 'bg-navy-950 text-white hover:bg-navy-900 shadow-sm'
            }`}
          >
            {isQuoteType ? 'Request Quote' : 'Consult Now'}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="touch-target py-2 px-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span>WhatsApp</span>
          </button>
        </div>

        <div className="mt-3 text-center">
          <Link
            to={`/services/${service.slug}`}
            className="text-[11px] font-semibold text-slate-500 hover:text-amber-600 inline-flex items-center transition-colors"
          >
            <span>Required documents & process checklist</span>
            <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>

    </div>
  );
};
