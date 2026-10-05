import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { SEOHead } from '../components/common/SEOHead';
import { LeadForm } from '../components/lead/LeadForm';
import { Phone, Mail, MessageCircle, MapPin, Clock, ShieldCheck, Globe } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const ContactPage = () => {
  return (
    <>
      <SEOHead
        title="Contact Our National Advisory Team"
        description="Connect with Bharat Advisory Partners for taxation, GST, company incorporation, and business compliance consultations across India."
        canonicalPath="/contact"
      />

      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-16 sm:py-20 border-b border-navy-900">
        <div className="site-container">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-3">
              DIRECT DESK TOUCHPOINTS
            </span>
            <h1 className="fluid-h1 font-extrabold tracking-tight">
              Contact Our PAN-India Advisory Desk
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Schedule a confidential discussion with our senior consulting leads or submit your requirements for an itemized service proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Lead Form */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Contact Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card space-y-6 text-xs sm:text-sm text-slate-700">
                <h3 className="text-base sm:text-lg font-bold text-navy-950 pb-3 border-b border-slate-100 font-display">
                  National Advisory Touchpoints
                </h3>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Direct Phone Line:</strong>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-brand-700 hover:text-amber-600 font-bold text-sm sm:text-base">
                      {siteConfig.contact.phone}
                    </a>
                    <span className="block text-[11px] text-slate-500 mt-0.5">Assistance across business hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">WhatsApp Advisory Desk:</strong>
                    <button
                      type="button"
                      onClick={() => openWhatsApp(null, "Hello, I would like to schedule a consultation with your advisory team.")}
                      className="text-emerald-700 hover:underline font-bold text-sm sm:text-base text-left"
                    >
                      Instant WhatsApp Chat ({siteConfig.contact.whatsapp})
                    </button>
                    <span className="block text-[11px] text-slate-500 mt-0.5">Quick query response within minutes</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Official Email Communications:</strong>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-700 hover:text-amber-600 font-bold text-sm sm:text-base">
                      {siteConfig.contact.email}
                    </a>
                    <span className="block text-[11px] text-slate-500 mt-0.5">Encrypted document dispatch address</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Operating Hours:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">{siteConfig.contact.businessHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Geographic Scope:</strong>
                    <p className="text-xs text-slate-600 mt-0.5">{siteConfig.panIndiaPresence}</p>
                  </div>
                </div>

              </div>

              {/* SLA Guarantee Box */}
              <div className="p-5 bg-navy-950 text-white rounded-2xl border border-navy-800 text-xs sm:text-sm flex items-start gap-3.5 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white font-display text-sm">Response Time Guarantee</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    All consultation requests received during business hours are acknowledged and assigned to a domain specialist within 4 business hours.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              <LeadForm sourceTag="contact_page" title="Schedule an Advisory Consultation" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
