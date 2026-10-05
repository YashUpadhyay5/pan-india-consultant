# Bharat Advisory Partners — PAN-India Consulting & Advisory Platform

A production-level, premium corporate web application designed for a top-tier Indian accounting, taxation, company law, and business advisory firm. Built with React 19, Vite, React Router, Tailwind CSS v4, and Lucide React.

---

## 🏛️ Key Features & Architecture

1. **Brand System & Visual Hierarchy**:
   - Deep Navy Primary (`#0a193d`), Charcoal Secondary (`#0f172a`), Trust Amber Accent (`#d97706`), and Slate Neutral Surfaces.
   - Restrained shadows, typography (Inter + Merriweather), and WCAG-aligned focus states.
   - Built to feel like a serious institutional advisory practice.

2. **Interactive Service Category Filter System**:
   - Instant client-side state switching across 8 disciplines: *Taxation, GST Compliance, Company Law & ROC, Certifications, Business Advisory, Accounting & MIS, Registrations, and FEMA Compliance*.
   - Responsive horizontal swipeable tabs on mobile.
   - Service cards with baseline starting fees, deliverables, and dynamic CTA handling (*Book Consultation* vs *Request Quote*).

3. **Lead Acquisition & CRM Data Model**:
   - Centralized lead submission pipeline with client validation for Indian 10-digit mobile numbers and business emails.
   - Automatic UTM marketing attribution capture (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `landing_page`, `referrer`).
   - Standard CRM lead statuses (`NEW`, `CONTACTED`, `QUALIFIED`, `CONSULTATION_SCHEDULED`, `PROPOSAL_SENT`, `WON`, `LOST`).
   - Local fallback cache (`localStorage`) with ready API endpoint integration for Node.js / FastAPI backends.

4. **Dynamic WhatsApp Integration**:
   - Context-aware pre-filled messages dynamically populated with the selected service.
   - Floating quick-desk widget on desktop + sticky bottom bar on mobile.
   - Environment-driven number configuration via `VITE_WHATSAPP_NUMBER`.

5. **Compliance & Knowledge Desk**:
   - Interactive Statutory Compliance Calendar for Indian businesses covering monthly GST (GSTR-1, 3B), TDS challans & quarterly returns, Advance Tax installments, and MCA ROC filing timelines (AOC-4, MGT-7).

6. **SEO & Structured Data (JSON-LD)**:
   - Dynamic meta tags, OpenGraph tags, canonical links, and `ProfessionalService` Schema.org JSON-LD structured markup on every page.
   - XML Sitemap (`/sitemap.xml`) and `robots.txt` included.

---

## 📂 Project Structure

```
src/
├── assets/             # Logos and static vector graphics
├── components/
│   ├── common/         # Navbar, Footer, AnnouncementBar, MobileBottomBar, CookieConsent, SEOHead, FloatingWhatsApp
│   ├── home/           # Hero, TrustBadgeBar, ServiceCategorySection, PricingPreview, WhyChooseUs, HowItWorks, Industries, CaseStudies, Testimonials, FAQ, ConsultationCTA
│   ├── services/       # ServiceCard
│   └── lead/           # ConsultationModal, LeadForm
├── data/
│   ├── services.js     # Master services and pricing catalog (20+ services)
│   ├── industries.js   # Sector specific challenges and solutions
│   ├── faqs.js         # Categorized FAQ repository
│   ├── caseStudies.js  # Representative problem-solution-outcome frameworks
│   ├── testimonials.js # Attributed client feedback structure
│   ├── navigation.js   # Global header & footer routes
│   ├── complianceCalendar.js # Statutory due dates for Indian companies
│   └── siteConfig.js   # Company metadata, contact info, trust pillars
├── hooks/
│   └── useUTM.js       # Marketing campaign attribution capture
├── layouts/
│   └── MainLayout.jsx  # Root layout wrapper
├── pages/
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── ServiceDetailPage.jsx
│   ├── IndustriesPage.jsx
│   ├── IndustryDetailPage.jsx
│   ├── PricingPage.jsx
│   ├── CaseStudiesPage.jsx
│   ├── ResourcesPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── PrivacyPolicyPage.jsx
│   ├── TermsPage.jsx
│   ├── DisclaimerPage.jsx
│   └── NotFoundPage.jsx
├── routes/
│   └── AppRoutes.jsx   # Route definitions with ScrollToTop restoration
├── services/
│   ├── leadService.js      # CRM lead ingestion and local/API sync
│   └── analyticsService.js # Event tracker for GA4 / Meta Pixel
├── utils/
│   ├── formatters.js   # INR currency and text sanitizers
│   ├── whatsapp.js     # Dynamic WhatsApp link generator
│   └── validation.js   # Mobile and email validators
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### 2. Installation
```bash
cd pan-india-consulting
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
VITE_COMPANY_NAME=Bharat Advisory Partners
VITE_COMPANY_LEGAL_NAME=Bharat Advisory Partners LLP
VITE_TAGLINE="Taxation, Corporate Compliance & Business Advisory"
VITE_SUPPORT_PHONE=+919876543210
VITE_SUPPORT_EMAIL=advisory@bharatadvisory.in
VITE_WHATSAPP_NUMBER=919876543210
VITE_OFFICE_LOCATIONS="New Delhi • Mumbai • Bengaluru • Hyderabad • Chennai • Kolkata • Ahmedabad • Pune"
VITE_API_BASE_URL=
VITE_GA_ID=
VITE_META_PIXEL_ID=
```

### 4. Running Locally
```bash
npm run dev
```

### 5. Building for Production
```bash
npm run build
```

### 6. Previewing Production Build
```bash
npm run preview
```

---

## 🚀 Deployment

The project produces static assets in the `dist/` folder and is ready for one-click deployment on:
- **Vercel**: Import repository -> Framework: Vite -> Deploy.
- **Netlify**: Build command `npm run build`, Publish directory `dist`.
- **AWS S3 + CloudFront / Nginx**: Upload `dist/` and configure fallback routing to `index.html`.
