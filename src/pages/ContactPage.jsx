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
      <section className="bg-navy-950 text-white py-14 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Contact Our PAN-India Advisory Desk
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Schedule a confidential discussion with our senior consulting leads or submit your requirements for an itemized service proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card space-y-6 text-xs text-slate-700">
                <h3 className="text-base font-bold text-navy-950 pb-2 border-b border-slate-100">
                  National Advisory Touchpoints
                </h3>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-800 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Direct Phone Line:</strong>
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-brand-700 hover:underline font-semibold text-sm">
                      {siteConfig.contact.phone}
                    </a>
                    <span className="block text-[11px] text-slate-500 mt-0.5">Assistance across business hours</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">WhatsApp Advisory Desk:</strong>
                    <button
                      onClick={() => openWhatsApp(null, "Hello, I would like to schedule a consultation with your advisory team.")}
                      className="text-emerald-700 hover:underline font-semibold text-sm"
                    >
                      Instant WhatsApp Chat ({siteConfig.contact.whatsapp})
                    </button>
                    <span className="block text-[11px] text-slate-500 mt-0.5">Quick query response within minutes</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Official Email:</strong>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-700 hover:underline font-semibold text-sm">
                      {siteConfig.contact.email}
                    </a>
                    <span className="block text-[11px] text-slate-500 mt-0.5">Encrypted confidential inbox</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Operating Hours:</strong>
                    <span>{siteConfig.contact.businessHours}</span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">{siteConfig.contact.responseTime}</span>
                  </div>
                </div>

              </div>

              {/* Office Locations / Representation Notice */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-card space-y-4">
                <h4 className="text-sm font-bold text-navy-950 flex items-center">
                  <Globe className="w-4 h-4 text-brand-700 mr-2" />
                  PAN-India Consultation Network
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We serve clients in all states through our centralized digital operations desk with representative meeting facilities across major business centers:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {siteConfig.offices.map((office, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <p className="font-bold text-navy-900">{office.city}</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm sourceTag="contact_page_form" title="Submit Your Consulting Requirement" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
