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
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 p-6 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group relative">
      
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-3 right-5 bg-gradient-to-r from-amber-600 to-gold-600 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
          Popular
        </div>
      )}

      <div>
        {/* Category Label & Timeline */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
          <span className="font-semibold text-brand-700 bg-brand-50 px-2 py-0.5 rounded text-[11px]">
            {service.categoryLabel}
          </span>
          {service.timeline && (
            <span className="flex items-center text-[11px] text-slate-500">
              <Clock className="w-3 h-3 mr-1 text-slate-400" />
              {service.timeline}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-navy-950 group-hover:text-brand-700 transition-colors tracking-tight mb-2">
          <Link to={`/services/${service.slug}`}>
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {service.shortDescription}
        </p>

        {/* Key Deliverables Highlights */}
        {service.deliverables && (
          <div className="space-y-1.5 mb-5 pb-4 border-b border-slate-100">
            {service.deliverables.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start text-[11px] text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 flex-shrink-0 mt-0.5" />
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
            <span className="text-xs text-slate-500 block">Starting Fee</span>
            <span className="text-base font-extrabold text-navy-900">
              {service.priceDisplay}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium text-right">
            {service.priceType}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleCTAClick}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center ${
              isQuoteType
                ? 'bg-slate-900 text-white hover:bg-slate-800'
                : 'btn-primary'
            }`}
          >
            {isQuoteType ? 'Request Quote' : 'Book Consultation'}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="py-2 px-3 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1 text-emerald-600" />
            WhatsApp
          </button>
        </div>

        <div className="mt-3 text-center">
          <Link
            to={`/services/${service.slug}`}
            className="text-[11px] font-semibold text-slate-500 hover:text-brand-700 inline-flex items-center transition-colors"
          >
            View required documents & process <ArrowRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
      </div>

    </div>
  );
};
