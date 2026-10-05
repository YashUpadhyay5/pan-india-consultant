export const isValidIndianPhone = (phone) => {
  if (!phone) return false;
  // Clean non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  // Matches 10 digits starting with 6, 7, 8, 9 or 12 digits with 91 prefix
  if (cleanPhone.length === 10) {
    return /^[6-9]\d{9}$/.test(cleanPhone);
  } else if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
    return /^91[6-9]\d{9}$/.test(cleanPhone);
  }
  return false;
};

export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validateLeadForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters).";
  }

  if (!formData.phone || !isValidIndianPhone(formData.phone)) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formData.service || formData.service.trim() === "") {
    errors.service = "Please select the service required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
