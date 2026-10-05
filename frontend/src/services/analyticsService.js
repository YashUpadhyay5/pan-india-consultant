export const trackEvent = (eventName, params = {}) => {
  try {
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params
    };

    // Google Analytics (gtag) dispatch if initialized
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }

    // Meta Pixel dispatch if initialized
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, params);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`[Analytics Event] ${eventName}:`, payload);
    }
  } catch (err) {
    console.warn("Analytics error", err);
  }
};

export const analyticsEvents = {
  PAGE_VIEW: 'page_view',
  CATEGORY_SELECTED: 'service_category_selected',
  SERVICE_VIEWED: 'service_viewed',
  PRICING_VIEWED: 'pricing_viewed',
  CONSULTATION_CLICKED: 'consultation_clicked',
  QUOTE_CLICKED: 'quote_clicked',
  WHATSAPP_CLICKED: 'whatsapp_clicked',
  FORM_STARTED: 'form_started',
  FORM_SUBMITTED: 'form_submitted',
  FORM_SUCCESS: 'form_success',
  PHONE_CLICKED: 'phone_clicked',
  EMAIL_CLICKED: 'email_clicked'
};
