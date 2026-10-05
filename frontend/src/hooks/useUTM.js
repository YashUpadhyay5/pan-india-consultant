import { useState, useEffect } from 'react';

const UTM_STORAGE_KEY = 'bharat_advisory_attribution';

export const useUTM = () => {
  const [attribution, setAttribution] = useState(() => {
    try {
      const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlAttribution = {};

      const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
      let foundUTM = false;

      utmKeys.forEach(key => {
        const val = params.get(key);
        if (val) {
          urlAttribution[key] = val;
          foundUTM = true;
        }
      });

      const existing = sessionStorage.getItem(UTM_STORAGE_KEY);
      if (!existing || foundUTM) {
        const fullAttribution = {
          ...(existing ? JSON.parse(existing) : {}),
          ...urlAttribution,
          landing_page: window.location.pathname,
          referrer: document.referrer || 'Direct / Organic',
          capturedAt: new Date().toISOString()
        };
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fullAttribution));
        setAttribution(fullAttribution);
      }
    } catch (e) {
      console.warn("Attribution capture error", e);
    }
  }, []);

  return attribution;
};

export const getCapturedAttribution = () => {
  try {
    const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {
      utm_source: 'Direct',
      landing_page: window.location.pathname,
      referrer: document.referrer || 'Direct'
    };
  } catch {
    return { utm_source: 'Direct' };
  }
};
