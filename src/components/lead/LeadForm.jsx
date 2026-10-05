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
      setErrors({ form: "Could not submit form. Please contact our advisory desk directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-navy-900">Inquiry Received</h3>
        <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
          Thank you, <strong className="text-slate-800">{leadRecord?.name}</strong>. Our senior consultant has received your inquiry for <strong className="text-slate-800">{leadRecord?.service}</strong> and will connect within 4 business hours.
        </p>
        <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600">
          Tracking ID: <span className="font-mono font-bold text-slate-900">{leadRecord?.id}</span>
        </div>
        <div className="pt-2">
          <button
            onClick={() => openWhatsApp(leadRecord?.service, `Hello, I submitted an inquiry #${leadRecord?.id} for ${leadRecord?.service}.`)}
            className="btn-accent text-xs py-2.5 px-4"
          >
            Chat with Assigned Consultant Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xl">
      <div className="mb-6">
        <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-brand-50 text-brand-800 text-[11px] font-semibold mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
          <span>DIRECT PARTNER DESK</span>
        </div>
        <h3 className="text-xl font-bold text-navy-900 tracking-tight">{title}</h3>
        <p className="text-xs text-slate-500 mt-1">
          Receive a tailored statutory roadmap, clear deliverable milestones, and transparent starting fee quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Sunil Kumar"
              className={`w-full px-3 py-2 rounded-lg border text-xs ${
                errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit Mobile Number"
              className={`w-full px-3 py-2 rounded-lg border text-xs ${
                errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className={`w-full px-3 py-2 rounded-lg border text-xs ${
                errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              City / State
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Delhi, Hyderabad, Pune"
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-3 py-2 rounded-lg border text-xs ${
                errors.service ? 'border-red-400 bg-red-50/30' : 'border-slate-300'
              }`}
            >
              <option value="">Select Required Service</option>
              {services.map(s => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
              <option value="General Corporate Advisory">General Corporate Advisory</option>
              <option value="Retainer Compliance Package">Retainer Compliance Package</option>
            </select>
            {errors.service && <p className="text-red-500 text-[11px] mt-1">{errors.service}</p>}
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Business Entity Type
            </label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
            >
              <option value="Private Limited Company">Private Limited Company</option>
              <option value="LLP (Limited Liability Partnership)">LLP (Limited Liability Partnership)</option>
              <option value="Early-Stage Startup">Early-Stage Startup</option>
              <option value="Proprietorship / Individual">Proprietorship / Individual</option>
              <option value="Public Limited / Corporate Group">Public Limited / Corporate Group</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium text-slate-700 mb-1">
            Requirement Overview (Optional)
          </label>
          <textarea
            name="requirement"
            rows="2"
            value={formData.requirement}
            onChange={handleChange}
            placeholder="Provide any details (turnover volume, notice date, timeline)..."
            className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-3 text-xs tracking-wider uppercase font-bold justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting Consultation Request...
            </>
          ) : (
            <span className="inline-flex items-center">
              Request Consultation & Quote <ArrowRight className="w-4 h-4 ml-1.5" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};
