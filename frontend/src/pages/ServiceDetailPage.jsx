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
      <section className="bg-navy-950 text-white pt-12 pb-16 sm:pb-20 border-b border-navy-900">
        <div className="site-container">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6 flex-wrap" aria-label="Breadcrumbs">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
            <span className="text-amber-400 font-medium truncate max-w-xs">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {service.categoryLabel} Practice Area
              </span>

              <h1 className="fluid-h1 font-extrabold tracking-tight text-white font-display">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {service.fullDescription || service.shortDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center bg-navy-900/90 px-3.5 py-2 rounded-xl border border-navy-800">
                  <Clock className="w-4 h-4 mr-2 text-amber-400" />
                  <span>Timeline: <strong>{service.timeline}</strong></span>
                </div>

                <div className="flex items-center bg-navy-900/90 px-3.5 py-2 rounded-xl border border-navy-800">
                  <ShieldCheck className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>100% Statutory Compliance</span>
                </div>
              </div>
            </div>

            {/* Price Card & Hero Action */}
            <div className="lg:col-span-4 bg-white text-slate-900 p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Baseline Starting Fee</span>
              <div className="text-2xl sm:text-3xl font-black text-navy-950 mt-1 font-display">
                {service.priceDisplay}
              </div>
              <span className="text-xs text-slate-500 block mb-5">
                {service.priceType}
              </span>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleBookCTA}
                  className="w-full btn-gold py-3.5 text-xs sm:text-sm tracking-wider uppercase font-bold justify-center shadow-md"
                >
                  Book Consultation Now
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full touch-target inline-flex items-center justify-center py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout: Deliverables + Documents Checklist + Form */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Body Details */}
            <div className="lg:col-span-7 space-y-8 sm:space-y-10">
              
              {/* Deliverables Section */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-card">
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-5 pb-3 border-b border-slate-100 flex items-center font-display">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2.5 flex-shrink-0" />
                  <span>What's Included in This Scope</span>
                </h3>
                <ul className="space-y-3">
                  {service.deliverables?.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-brand-700 mt-2 mr-3 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Documents Checklist */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-card">
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-5 pb-3 border-b border-slate-100 flex items-center font-display">
                  <FileText className="w-5 h-5 text-brand-700 mr-2.5 flex-shrink-0" />
                  <span>Checklist of Documents Required</span>
                </h3>
                <ul className="space-y-3">
                  {service.documentsRequired?.map((doc, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-800 flex items-center justify-center text-[11px] font-bold mr-3 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specific FAQs */}
              {service.faqItems && service.faqItems.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-card">
                  <h3 className="text-base sm:text-lg font-bold text-navy-950 mb-5 pb-3 border-b border-slate-100 flex items-center font-display">
                    <HelpCircle className="w-5 h-5 text-amber-600 mr-2.5 flex-shrink-0" />
                    <span>Key Questions for {service.title}</span>
                  </h3>
                  <div className="space-y-4">
                    {service.faqItems.map((faq, idx) => (
                      <div key={idx} className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                        <p className="text-xs sm:text-sm font-bold text-navy-950 font-display">{faq.q}</p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Disclaimer */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3.5">
                <AlertCircle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
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
