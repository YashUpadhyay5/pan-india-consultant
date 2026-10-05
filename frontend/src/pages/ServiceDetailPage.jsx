import React from 'react';
import { useParams, Link, useOutletContext, Navigate } from 'react-router-dom';
import { services } from '../data/services';
import { SEOHead } from '../components/common/SEOHead';
import { LeadForm } from '../components/lead/LeadForm';
import { 
  CheckCircle2, FileText, ArrowLeft, Clock, ShieldCheck, 
  MessageSquare, ChevronRight, HelpCircle, AlertCircle 
} from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';
import { analyticsEvents, trackEvent } from '../services/analyticsService';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { openConsultation } = useOutletContext();

  const service = services.find(s => s.slug === slug || s.id === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const handleWhatsApp = () => {
    trackEvent(analyticsEvents.WHATSAPP_CLICKED, { serviceId: service.id, source: 'service_detail_page' });
    openWhatsApp(service.title);
  };

  const handleBookCTA = () => {
    trackEvent(analyticsEvents.CONSULTATION_CLICKED, { serviceId: service.id, source: 'service_detail_hero' });
    openConsultation(service.id);
  };

  return (
    <>
      <SEOHead
        title={service.title}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
      />

      {/* Header & Breadcrumb */}
      <section className="bg-navy-950 text-white pt-10 pb-16 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-amber-400 font-medium">{service.categoryLabel}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-900 text-brand-200 border border-brand-800">
                {service.categoryLabel} Practice Area
              </span>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {service.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {service.fullDescription || service.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center bg-navy-900/90 px-3 py-1.5 rounded-lg border border-navy-800">
                  <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  <span>Timeline: <strong>{service.timeline}</strong></span>
                </div>

                <div className="flex items-center bg-navy-900/90 px-3 py-1.5 rounded-lg border border-navy-800">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                  <span>100% Statutory Compliance</span>
                </div>
              </div>
            </div>

            {/* Price Card & Hero Action */}
            <div className="lg:col-span-4 bg-white text-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium block">Starting Consultation Fee</span>
              <div className="text-2xl sm:text-3xl font-black text-navy-950 mt-1">
                {service.priceDisplay}
              </div>
              <span className="text-xs text-slate-500 block mb-4">
                {service.priceType}
              </span>

              <div className="space-y-2.5">
                <button
                  onClick={handleBookCTA}
                  className="w-full btn-primary py-3 text-xs tracking-wider uppercase font-bold justify-center shadow-sm"
                >
                  Book Consultation Now
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-1.5 text-emerald-600" />
                  Inquire on WhatsApp
                </button>
              </div>

              <p className="text-[10px] text-slate-500 text-center mt-3">
                Transparent quotes • Senior partner review
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Body Details */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Deliverables Section */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" />
                  What's Included in This Scope
                </h3>
                <ul className="space-y-3">
                  {service.deliverables?.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-700 mt-2 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents Checklist */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center">
                  <FileText className="w-5 h-5 text-brand-700 mr-2" />
                  Checklist of Documents Required
                </h3>
                <ul className="space-y-3">
                  {service.documentsRequired?.map((doc, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center text-[10px] font-bold mr-3 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific FAQs */}
              {service.faqItems && service.faqItems.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
                  <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-slate-100 flex items-center">
                    <HelpCircle className="w-5 h-5 text-amber-600 mr-2" />
                    Key Questions for {service.title}
                  </h3>
                  <div className="space-y-4">
                    {service.faqItems.map((faq, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                        <p className="text-xs sm:text-sm font-bold text-navy-900">{faq.q}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start space-x-3">
                <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Fee Policy:</strong> Baseline starting prices exclude statutory government challans, DSC token charges, and state stamp duty, which are payable at actuals. Final scope is committed in a formal engagement letter.
                </p>
              </div>

            </div>

            {/* Right Sticky Lead Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <LeadForm 
                defaultService={service.title} 
                sourceTag={`service_page_${service.slug}`} 
                title={`Book Consultation for ${service.title}`}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
