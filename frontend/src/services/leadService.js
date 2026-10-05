import { getCapturedAttribution } from '../hooks/useUTM';
import { sanitizeInput } from '../utils/formatters';
import { supabase } from '../utils/supabase';

const LEADS_STORAGE_KEY = 'bharat_advisory_leads_crm';

export const LEAD_STATUS = {
  NEW: 'NEW',
  CONTACTED: 'CONTACTED',
  QUALIFIED: 'QUALIFIED',
  CONSULTATION_SCHEDULED: 'CONSULTATION_SCHEDULED',
  PROPOSAL_SENT: 'PROPOSAL_SENT',
  WON: 'WON',
  LOST: 'LOST'
};

export const submitLead = async (rawFormData) => {
  const attribution = getCapturedAttribution();
  
  const leadPayload = {
    id: `LEAD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: sanitizeInput(rawFormData.name),
    phone: sanitizeInput(rawFormData.phone),
    email: sanitizeInput(rawFormData.email).toLowerCase(),
    city: sanitizeInput(rawFormData.city || 'Not Specified'),
    businessType: sanitizeInput(rawFormData.businessType || 'Pvt Ltd / LLP / Enterprise'),
    service: sanitizeInput(rawFormData.service),
    requirement: sanitizeInput(rawFormData.requirement || 'General Consultation Inquiry'),
    preferredContact: sanitizeInput(rawFormData.preferredContact || 'Phone / WhatsApp'),
    preferredDate: rawFormData.preferredDate || null,
    preferredTime: rawFormData.preferredTime || null,
    budget: sanitizeInput(rawFormData.budget || 'Standard Fee'),
    attribution: {
      source: attribution.utm_source || 'Website Direct',
      medium: attribution.utm_medium || 'Organic',
      campaign: attribution.utm_campaign || 'Brand',
      landingPage: attribution.landing_page || window.location.pathname,
      referrer: attribution.referrer || 'Direct'
    },
    status: LEAD_STATUS.NEW,
    createdAt: new Date().toISOString(),
    notes: []
  };

  // 1. Store in Local CRM Cache
  try {
    const existing = JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
    existing.unshift(leadPayload);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn("Could not save to local storage", err);
  }

  // 2. Insert directly into Supabase PostgreSQL database
  try {
    const { data, error } = await supabase.from('leads').insert([
      {
        name: leadPayload.name,
        phone: leadPayload.phone,
        email: leadPayload.email,
        service: leadPayload.service,
        turnover: leadPayload.budget || leadPayload.businessType,
        message: leadPayload.requirement,
        status: 'NEW'
      }
    ]);

    if (error) {
      console.warn("Supabase database note:", error.message);
    } else {
      console.log("Lead successfully inserted into Supabase database!", data);
    }
  } catch (dbError) {
    console.warn("Supabase database sync:", dbError);
  }

  // 3. If an API Base URL is configured in .env, dispatch POST
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  if (apiUrl) {
    try {
      const response = await fetch(`${apiUrl}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadPayload)
      });
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      return { success: true, lead: leadPayload, remote: true };
    } catch (networkError) {
      console.warn("API delivery fallback", networkError);
      return { success: true, lead: leadPayload, remote: false, message: "Saved locally (Offline Mode)" };
    }
  }

  // Short realistic pause for UX feedback
  await new Promise(resolve => setTimeout(resolve, 600));

  return {
    success: true,
    lead: leadPayload,
    message: "Consultation request recorded successfully."
  };
};

export const getStoredLeads = () => {
  try {
    return JSON.parse(localStorage.getItem(LEADS_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};
