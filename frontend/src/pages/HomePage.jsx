import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/home/Hero';
import { TrustBadgeBar } from '../components/home/TrustBadgeBar';
import { WelcomeCredibilitySection } from '../components/home/WelcomeCredibilitySection';
import { WhyChooseConsultantSection } from '../components/home/WhyChooseConsultantSection';
import { MarqueeTickerStrip } from '../components/home/MarqueeTickerStrip';
import { AccountingStatisticsSection } from '../components/home/AccountingStatisticsSection';
import { ServiceCategorySection } from '../components/home/ServiceCategorySection';
import { PricingPreviewSection } from '../components/home/PricingPreviewSection';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FAQSection } from '../components/home/FAQSection';
import { ConsultationCTASection } from '../components/home/ConsultationCTASection';
import { LeadForm } from '../components/lead/LeadForm';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Phone, Mail, MessageCircle, Clock, Shield } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const HomePage = () => {
  const { openConsultation } = useOutletContext();

  return (
    <>
      <SEOHead
        title="PAN-India Tax, GST & Corporate Advisory"
        description="Premier Indian professional consulting firm providing Income Tax, GST, MCA Company Incorporation, ROC Compliance, Virtual CFO and UDIN verified certifications across India."
        canonicalPath="/"
      />

      {/* 1. Hero Section (with 01-02-03 slide pagination & split dark composition) */}
      <Hero onOpenConsultation={() => openConsultation(null)} />

      {/* 2. Trust Badges Strip (World-class services, Experience strategy, Zero-Penalty, Grow business) */}
      <TrustBadgeBar />

      {/* 3. Welcome & Credibility Section (Top strategies for sustainable business + 20K+ badge + 25+ stats) */}
      <WelcomeCredibilitySection onOpenConsultation={() => openConsultation(null)} />

      {/* 4. Why Choose Us as Your Accountant Consultant (Portrait + 5 Services + Dark Callout Card) */}
      <WhyChooseConsultantSection onOpenConsultation={() => openConsultation(null)} />

      {/* 5. Gold Marquee Ticker Strip */}
      <MarqueeTickerStrip />

      {/* 6. Accounting Statistics & Numbers (Interactive Bar Chart + 3 Image Cards) */}
      <AccountingStatisticsSection onOpenConsultation={() => openConsultation(null)} />

      {/* 7. Comprehensive 25 Practice Service Catalog Filter */}
      <ServiceCategorySection onSelectService={(serviceId) => openConsultation(serviceId)} />

      {/* 8. Retainers & Pricing Preview */}
      <PricingPreviewSection onOpenConsultation={() => openConsultation(null)} />

      {/* 9. 5 Industry Verticals */}
      <IndustriesSection />

      {/* 10. Case Studies */}
      <CaseStudiesSection onOpenConsultation={() => openConsultation(null)} />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. FAQ Accordion */}
      <FAQSection onOpenConsultation={() => openConsultation(null)} />

      {/* 13. Consultation CTA Banner */}
      <ConsultationCTASection onOpenConsultation={() => openConsultation(null)} />

      {/* 14. Contact & Direct Lead Form Section */}
      <section id="contact-section" className="py-16 sm:py-24 bg-slate-100 border-t border-slate-200">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  National Advisory Desk
                </span>
                <h2 className="text-3xl font-extrabold text-navy-950 mt-3 tracking-tight font-display">
                  Consult With Our Senior Partners
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Have an urgent direct tax notice, complex GST reconciliation, or cross-border structuring question? Speak directly with our domain leads.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-navy-950 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950">Direct Phone Line:</strong>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-navy-900 hover:text-amber-600 font-bold text-sm">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-navy-950 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950">Advisory Inquiries:</strong>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-navy-900 hover:text-amber-600 font-bold text-sm">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950">WhatsApp Advisory Desk:</strong>
                    <button 
                      onClick={() => openWhatsApp(null, "Hello, I want to discuss a consulting mandate.")}
                      className="text-emerald-700 hover:underline font-bold text-sm"
                    >
                      Instant WhatsApp Chat ({siteConfig.contact.whatsapp})
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950">Desk Operating Hours:</strong>
                    <span>{siteConfig.contact.businessHours}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-navy-950 text-white rounded-2xl border border-navy-800 text-xs flex items-start space-x-3 shadow-sm">
                <Shield className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white font-display">Guaranteed Response SLA</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    All consultation requests submitted via this portal are acknowledged and assigned to a domain specialist within 4 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm sourceTag="homepage_contact_section" title="Schedule an Advisory Consultation" />
            </div>

          </div>
        </div>
      </section>

    </>
  );
};
