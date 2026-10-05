import React, { useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';

export const SEOHead = ({
  title,
  description,
  canonicalPath = "",
  schemaType = "ProfessionalService",
  customSchema = null
}) => {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name} — PAN-India Consulting`
    : `${siteConfig.name} | Tax, GST, Company Law & Business Advisory India`;

  const metaDesc = description || siteConfig.description;
  const canonicalUrl = `${window.location.origin}${canonicalPath}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.name = 'description';
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.content = metaDesc;

    // Update OpenGraph
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: metaDesc },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteConfig.name }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Update Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // Structured Data JSON-LD
    let scriptTag = document.getElementById('jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": siteConfig.name,
      "legalName": siteConfig.legalName,
      "description": siteConfig.description,
      "url": window.location.origin,
      "telephone": siteConfig.contact.phoneRaw,
      "email": siteConfig.contact.email,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "National Coverage (PAN-India)"
      },
      "priceRange": "₹₹",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "19:00"
      }
    };

    scriptTag.text = JSON.stringify(customSchema || defaultSchema);
  }, [fullTitle, metaDesc, canonicalUrl, schemaType, customSchema]);

  return null;
};
