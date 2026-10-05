import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { HomePage } from '../pages/HomePage';
import { useUTM } from '../hooks/useUTM';
import { analyticsEvents, trackEvent } from '../services/analyticsService';

// Route-level code-splitting for high-speed performance and minimal initial bundle size
const AboutPage = lazy(() => import('../pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('../pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('../pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const IndustriesPage = lazy(() => import('../pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const IndustryDetailPage = lazy(() => import('../pages/IndustryDetailPage').then(m => ({ default: m.IndustryDetailPage })));
const PricingPage = lazy(() => import('../pages/PricingPage').then(m => ({ default: m.PricingPage })));
const CaseStudiesPage = lazy(() => import('../pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const ResourcesPage = lazy(() => import('../pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import('../pages/TermsPage').then(m => ({ default: m.TermsPage })));
const DisclaimerPage = lazy(() => import('../pages/DisclaimerPage').then(m => ({ default: m.DisclaimerPage })));
const AdminDashboardPage = lazy(() => import('../pages/AdminDashboardPage').then(m => ({ default: m.AdminDashboardPage })));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Non-intrusive lightweight loading state
const PageFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center py-20" aria-label="Loading page">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-3 border-slate-200 border-t-amber-500 animate-spin" />
      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Synchronizing Desk...</span>
    </div>
  </div>
);

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
          <Route path="about" element={<Suspense fallback={<PageFallback />}><AboutPage /></Suspense>} />
          <Route path="services" element={<Suspense fallback={<PageFallback />}><ServicesPage /></Suspense>} />
          <Route path="services/:slug" element={<Suspense fallback={<PageFallback />}><ServiceDetailPage /></Suspense>} />
          <Route path="industries" element={<Suspense fallback={<PageFallback />}><IndustriesPage /></Suspense>} />
          <Route path="industries/:slug" element={<Suspense fallback={<PageFallback />}><IndustryDetailPage /></Suspense>} />
          <Route path="pricing" element={<Suspense fallback={<PageFallback />}><PricingPage /></Suspense>} />
          <Route path="case-studies" element={<Suspense fallback={<PageFallback />}><CaseStudiesPage /></Suspense>} />
          <Route path="resources" element={<Suspense fallback={<PageFallback />}><ResourcesPage /></Suspense>} />
          <Route path="contact" element={<Suspense fallback={<PageFallback />}><ContactPage /></Suspense>} />
          <Route path="privacy-policy" element={<Suspense fallback={<PageFallback />}><PrivacyPolicyPage /></Suspense>} />
          <Route path="terms" element={<Suspense fallback={<PageFallback />}><TermsPage /></Suspense>} />
          <Route path="disclaimer" element={<Suspense fallback={<PageFallback />}><DisclaimerPage /></Suspense>} />
          <Route path="admin" element={<Suspense fallback={<PageFallback />}><AdminDashboardPage /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<PageFallback />}><NotFoundPage /></Suspense>} />
        </Route>
      </Routes>
    </>
  );
};
