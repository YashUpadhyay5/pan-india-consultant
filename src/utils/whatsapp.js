import { siteConfig } from '../data/siteConfig';

export const getWhatsAppNumber = () => {
  const envNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  return envNumber || siteConfig.contact.whatsapp;
};

export const createWhatsAppUrl = (serviceName = null, customMessage = null) => {
  const number = getWhatsAppNumber();
  let message = "";

  if (customMessage) {
    message = customMessage;
  } else if (serviceName) {
    message = `Hello, I am interested in *${serviceName}*. I would like to understand the process, documents required, and pricing.`;
  } else {
    message = "Hello, I would like to book a consultation regarding your professional consulting services.";
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

export const openWhatsApp = (serviceName = null, customMessage = null) => {
  const url = createWhatsAppUrl(serviceName, customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
};
