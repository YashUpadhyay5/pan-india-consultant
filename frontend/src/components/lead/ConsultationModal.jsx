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

  // Set preselected service
  useEffect(() => {
    if (preselectedServiceId) {
      const match = services.find(s => s.id === preselectedServiceId || s.slug === preselectedServiceId);
      if (match) {
        setFormData(prev => ({ ...prev, service: match.title }));
      }
    }
  }, [preselectedServiceId, isOpen]);

  // Body scroll lock & Escape key dismiss
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

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
    } catch {
      setErrors({ form: "An unexpected error occurred. Please connect directly via WhatsApp or phone." });
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
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div 
        className="relative bg-white w-full max-w-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all my-auto max-h-[92dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-navy-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-navy-800 flex-shrink-0">
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
              Senior Consultant Booking Desk
            </span>
            <h3 id="modal-headline" className="text-base sm:text-lg font-bold font-display">
              Schedule a Professional Consultation
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="touch-target p-2 rounded-xl text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-navy-950 font-display">
                Session Successfully Scheduled!
              </h4>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-navy-900">{submittedLead?.name}</strong>. A domain lead has been assigned to your requirement for <strong className="text-navy-900">{submittedLead?.service}</strong>.
              </p>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 max-w-md mx-auto space-y-1">
                <p><strong>Tracking Token:</strong> <span className="font-mono font-bold text-navy-950">{submittedLead?.id}</span></p>
                <p><strong>Expected Contact:</strong> Within 4 business hours via WhatsApp / Phone Call</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => openWhatsApp(submittedLead?.service, `Hello, I scheduled a consultation #${submittedLead?.id} for ${submittedLead?.service}.`)}
                  className="btn-accent text-xs sm:text-sm py-3 px-5 flex-1"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Connect on WhatsApp
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-secondary text-xs sm:text-sm py-3 px-5"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.name ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="modal-phone" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    inputMode="tel"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit Mobile Number"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    inputMode="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="modal-service" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Select Practice Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="modal-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white ${
                      errors.service ? 'border-red-400 bg-red-50/30' : 'border-slate-300 focus:border-amber-500'
                    }`}
                  >
                    <option value="">Select Required Service</option>
                    {services.map(s => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                    <option value="General Corporate Advisory">General Corporate Advisory</option>
                    <option value="Statutory Retainer Package">Statutory Retainer Package</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-entity" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Entity Constitution
                  </label>
                  <select
                    id="modal-entity"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:border-amber-500"
                  >
                    <option value="Private Limited Company">Private Limited Company</option>
                    <option value="LLP (Limited Liability Partnership)">LLP (Limited Liability Partnership)</option>
                    <option value="Startup / Pre-Revenue Entity">Startup / Pre-Revenue Entity</option>
                    <option value="Proprietorship / Individual">Proprietorship / Individual</option>
                    <option value="Public Limited / Corporate Group">Public Limited / Corporate Group</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-city" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    City / Jurisdiction
                  </label>
                  <input
                    id="modal-city"
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, Bengaluru, Delhi"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-requirement" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                  Brief Specifics or Questions (Optional)
                </label>
                <textarea
                  id="modal-requirement"
                  name="requirement"
                  rows="2"
                  value={formData.requirement}
                  onChange={handleChange}
                  placeholder="Outline any pending statutory notices, filing deadlines, or business size..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-amber-500"
                ></textarea>
              </div>

              {errors.form && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                  {errors.form}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gold py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider justify-center shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Assigning Senior Consultant...
                    </>
                  ) : (
                    <span>Confirm Consultation Appointment</span>
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
