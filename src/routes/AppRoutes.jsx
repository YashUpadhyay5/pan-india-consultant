import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { ServiceDetailPage } from '../pages/ServiceDetailPage';
import { IndustriesPage } from '../pages/IndustriesPage';
import { IndustryDetailPage } from '../pages/IndustryDetailPage';
import { PricingPage } from '../pages/PricingPage';
import { CaseStudiesPage } from '../pages/CaseStudiesPage';
import { ResourcesPage } from '../pages/ResourcesPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { TermsPage } from '../pages/TermsPage';
import { DisclaimerPage } from '../pages/DisclaimerPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AdminDashboardPage } from '../pages/AdminDashboardPage';
import { useUTM } from '../hooks/useUTM';
import { analyticsEvents, trackEvent } from '../services/analyticsService';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    trackEvent(analyticsEvents.PAGE_VIEW, { path: pathname, search });
  }, [pathname, search]);

  return null;
};

export const AppRoutes = () => {
  // Capture UTM parameters on initial entry
  useUTM();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="industries/:slug" element={<IndustryDetailPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
