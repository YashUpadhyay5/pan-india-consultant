export const formatINR = (amount) => {
  if (amount === undefined || amount === null) return "";
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export const sanitizeInput = (str) => {
  if (!str) return "";
  return String(str).trim().replace(/[<>]/g, "");
};
