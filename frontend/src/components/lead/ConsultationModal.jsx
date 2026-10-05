import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert, Loader2, Calendar, Clock, MessageSquare, PhoneCall } from 'lucide-react';
import { services } from '../../data/services';
import { validateLeadForm } from '../../utils/validation';
import { submitLead } from '../../services/leadService';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';
import { openWhatsApp } from '../../utils/whatsapp';

export const ConsultationModal = ({ isOpen, onClose, preselectedServiceId = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    businessType: 'Private Limited / LLP',
    service: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    requirement: '',
    preferredContact: 'Phone & WhatsApp'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedLead, setSubmittedLead] = useState(null);

  useEffect(() => {
    if (preselectedServiceId) {
      const match = services.find(s => s.id === preselectedServiceId || s.slug === preselectedServiceId);
      if (match) {
        setFormData(prev => ({ ...prev, service: match.title }));
      }
    }
  }, [preselectedServiceId, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    trackEvent(analyticsEvents.FORM_SUBMITTED, { form: 'consultation_modal', service: formData.service });

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
        setSubmittedLead(result.lead);
        trackEvent(analyticsEvents.FORM_SUCCESS, { leadId: result.lead.id, service: formData.service });
      }
    } catch (err) {
      setErrors({ form: "An unexpected error occurred. Please reach us directly via WhatsApp or phone." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setSubmittedLead(null);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        
        {/* Header */}
        <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between border-b border-navy-800">
          <div>
            <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">
              Senior Consultant Booking Desk
            </span>
            <h3 id="modal-headline" className="text-lg font-bold">
              Schedule a Professional Consultation
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-navy-900">Consultation Request Confirmed</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{submittedLead?.name}</strong>. Our senior advisory coordinator will reach out to you via <strong className="text-slate-900">{submittedLead?.preferredContact}</strong> within 4 business hours.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-left max-w-md mx-auto space-y-1">
                <p className="text-slate-500">Reference Token: <span className="font-mono font-bold text-slate-800">{submittedLead?.id}</span></p>
                <p className="text-slate-500">Selected Practice Area: <span className="font-semibold text-slate-800">{submittedLead?.service}</span></p>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => openWhatsApp(submittedLead?.service, `Hello, I submitted consultation request ${submittedLead?.id} for ${submittedLead?.service}.`)}
                  className="btn-accent text-xs py-2.5 px-4"
                >
                  <MessageSquare className="w-4 h-4 mr-1.5" />
                  Connect Instantly on WhatsApp
                </button>
                <button
                  onClick={handleClose}
                  className="btn-secondary text-xs py-2.5 px-4"
                >
                  Done & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {errors.form && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center space-x-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              {/* Name & Phone */}
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
                    placeholder="e.g. Rajesh Sharma"
                    className={`w-full px-3 py-2 rounded-lg border text-xs focus:ring-2 focus:ring-brand-500 ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
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
                    placeholder="10-digit Indian Mobile"
                    className={`w-full px-3 py-2 rounded-lg border text-xs focus:ring-2 focus:ring-brand-500 ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & City */}
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
                    className={`w-full px-3 py-2 rounded-lg border text-xs focus:ring-2 focus:ring-brand-500 ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, Bengaluru, Delhi"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 bg-white"
                  />
                </div>
              </div>

              {/* Service & Business Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 rounded-lg border text-xs focus:ring-2 focus:ring-brand-500 ${
                      errors.service ? 'border-red-400 bg-red-50/30' : 'border-slate-300 bg-white'
                    }`}
                  >
                    <option value="">Select a Consulting Practice</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Corporate Advisory">General Corporate Advisory</option>
                    <option value="Statutory Tax Scrutiny / Notice">Statutory Tax Scrutiny / Notice</option>
                    <option value="Comprehensive Retainer Plan">Comprehensive Retainer Plan</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-[11px] mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Entity / Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 bg-white"
                  >
                    <option value="Private Limited Company">Private Limited Company</option>
                    <option value="Limited Liability Partnership (LLP)">Limited Liability Partnership (LLP)</option>
                    <option value="Early-Stage Startup / Founder">Early-Stage Startup / Founder</option>
                    <option value="Proprietorship / Individual">Proprietorship / Individual</option>
                    <option value="Public Limited / Corporate Group">Public Limited / Corporate Group</option>
                    <option value="Foreign Entity / Cross-Border">Foreign Entity / Cross-Border</option>
                  </select>
                </div>
              </div>

              {/* Requirement Note */}
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Brief Specifics / Questions (Optional)
                </label>
                <textarea
                  name="requirement"
                  rows="2"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Share any key context (e.g. turnover range, pending notice section, incorporation timeline)..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-brand-500 bg-white"
                ></textarea>
              </div>

              {/* Preferred Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div>
                  <label className="block font-medium text-slate-700 mb-1 flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-500" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 text-xs bg-white"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-700 mb-1 flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                    Preferred Time Window
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-2.5 py-1.5 rounded border border-slate-300 text-xs bg-white"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 7:00 PM)">Evening (5:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-500 leading-normal">
                🔒 Your documents & information are protected under strict professional confidentiality. Zero spam guarantee.
              </p>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 text-xs tracking-wider uppercase font-bold justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Recording Consultation Request...
                    </>
                  ) : (
                    'Confirm Consultation Request'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
