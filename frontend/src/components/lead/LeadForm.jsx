import React, { useState } from 'react';
import { ShieldCheck, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { validateLeadForm } from '../../utils/validation';
import { submitLead } from '../../services/leadService';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';
import { openWhatsApp } from '../../utils/whatsapp';

export const LeadForm = ({ defaultService = '', sourceTag = 'inline_lead_form', title = "Request an Advisory Consultation" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Private Limited Company',
    service: defaultService,
    requirement: '',
    preferredContact: 'WhatsApp / Phone Call'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadRecord, setLeadRecord] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    trackEvent(analyticsEvents.FORM_SUBMITTED, { form: sourceTag, service: formData.service });

    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitLead(formData);
      if (result.success) {
        setIsSuccess(true);
        setLeadRecord(result.lead);
        trackEvent(analyticsEvents.FORM_SUCCESS, { leadId: result.lead.id, form: sourceTag });
      }
    } catch {
      setErrors({ form: "Could not submit form. Please contact our advisory desk directly via WhatsApp or phone." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl text-center space-y-4 animate-fadeIn">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-navy-900 font-display">
          Consultation Request Confirmed
        </h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thank you, <strong className="text-slate-900">{leadRecord?.name}</strong>. Our senior consultant has received your inquiry for <strong className="text-slate-900">{leadRecord?.service}</strong> and will connect within 4 business hours.
        </p>
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
          Tracking ID: <span className="font-mono font-bold text-navy-950">{leadRecord?.id}</span>
        </div>
        <div className="pt-2">
          <button
            type="button"
            onClick={() => openWhatsApp(leadRecord?.service, `Hello, I submitted consultation request #${leadRecord?.id} for ${leadRecord?.service}.`)}
            className="btn-accent text-xs sm:text-sm py-3 px-6 shadow-md"
          >
            Chat with Assigned Consultant Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-card">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-semibold mb-2.5 border border-brand-200">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
          <span>DIRECT PARTNER ADVISORY DESK</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight font-display">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
          Receive a tailored statutory roadmap, clear deliverable milestones, and transparent starting fee quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        
        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-name" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lead-name"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sunil Kumar"
              className={`w-full px-3.5 py-3 rounded-xl border transition-colors ${
                errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="lead-phone" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="lead-phone"
              type="tel"
              inputMode="tel"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit Mobile Number"
              className={`w-full px-3.5 py-3 rounded-xl border transition-colors ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Business Email & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id="lead-email"
              type="email"
              inputMode="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full px-3.5 py-3 rounded-xl border transition-colors ${
                errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="lead-city" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              City / State
            </label>
            <input
              id="lead-city"
              type="text"
              name="city"
              autoComplete="address-level2"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Delhi, Hyderabad, Pune"
              className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Service Required & Entity Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="lead-service" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="lead-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-3.5 py-3 rounded-xl border bg-white transition-colors ${
                errors.service ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
              }`}
            >
              <option value="">Select Required Service</option>
              {services.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="General Corporate Advisory">General Corporate Advisory</option>
              <option value="Retainer Compliance Package">Retainer Compliance Package</option>
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
          </div>

          <div>
            <label htmlFor="lead-businesstype" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
              Business Entity Type
            </label>
            <select
              id="lead-businesstype"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-3.5 py-3 rounded-xl border border-slate-300 bg-white focus:border-amber-500 transition-colors"
            >
              <option value="Private Limited Company">Private Limited Company</option>
              <option value="LLP (Limited Liability Partnership)">LLP (Limited Liability Partnership)</option>
              <option value="Early-Stage Startup">Early-Stage Startup</option>
              <option value="Proprietorship / Individual">Proprietorship / Individual</option>
              <option value="Public Limited / Corporate Group">Public Limited / Corporate Group</option>
            </select>
          </div>
        </div>

        {/* Requirement Notes */}
        <div>
          <label htmlFor="lead-requirement" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5">
            Requirement Overview (Optional)
          </label>
          <textarea
            id="lead-requirement"
            name="requirement"
            rows="2"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Provide any context (turnover volume, notice date, timeline)..."
            className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-amber-500 transition-colors"
          ></textarea>
        </div>

        {errors.form && (
          <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
            {errors.form}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-3.5 text-xs sm:text-sm tracking-wider uppercase font-bold justify-center shadow-md disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting Consultation Request...
            </>
          ) : (
            <span className="inline-flex items-center gap-2">
              <span>Request Consultation & Quote</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </button>

      </form>
    </div>
  );
};
