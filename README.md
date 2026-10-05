# Bharat Advisory Partners — PAN-India Consulting & Advisory Platform

A production-level, enterprise corporate web application designed for a top-tier Indian accounting, taxation, company law, and business advisory firm.

The project is cleanly structured into two dedicated directories:
- **`frontend/`**: React 19 + Vite + Tailwind CSS v4 client application with executive admin dashboard.
- **`backend/`**: Node.js + Express REST API with Supabase PostgreSQL integration, Zod schema validation, Helmet security, Morgan logging, and CORS protection.

---

## 📂 Repository Structure

```
pan-india-consulting/
├── frontend/                     # Client application (React + Vite + Tailwind)
│   ├── public/                   # Static media, icons, robots.txt, sitemap.xml
│   ├── src/
│   │   ├── components/           # Common components, home sections, lead modals
│   │   ├── data/                 # Services, compliance calendar, site config
│   │   ├── hooks/                # UTM & state hooks
│   │   ├── layouts/              # Main layout & headers/footers
│   │   ├── pages/                # Home, Services, Admin Dashboard, etc.
│   │   ├── routes/               # AppRoutes (React Router)
│   │   ├── services/             # Supabase client & lead API services
│   │   └── utils/                # Formatters, validation, WhatsApp helpers
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── .env.example
│   └── .env
│
├── backend/                      # Server application (Node.js + Express)
│   ├── src/
│   │   ├── config/               # Supabase database client
│   │   ├── controllers/          # Lead & newsletter controllers
│   │   ├── routes/               # Express API routes (/api/v1)
│   │   ├── validators/           # Zod schemas for input validation
│   │   ├── app.js                # Express app setup with middleware
│   │   └── server.js             # HTTP server entrypoint
│   ├── package.json
│   ├── .env.example
│   └── .env
│
├── .gitignore                    # Global git ignore (secures .env and node_modules)
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your SUPABASE_URL and SUPABASE_KEY in .env
npm run dev
# Server runs on http://localhost:5000 (Health check: http://localhost:5000/api/v1/health)
```

### 2. Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env
# Fill in your VITE_API_BASE_URL and Supabase credentials in .env
npm run dev
# Frontend runs on http://localhost:3000
```

---

## 🏛️ Key Features

1. **Executive Admin CRM Dashboard (`/admin`)**:
   - Access-controlled executive portal (PIN protected).
   - Real-time KPI summaries (Total Leads, High Value, Pending, Won).
   - Live lead table with instant 1-click Direct Call & WhatsApp launch buttons.
   - Lead status updates and CSV export.

2. **Lead Acquisition & Validation**:
   - Dual-path submission: Express API backend with fallback direct Supabase client.
   - Indian phone validation (+91 10-digit numbers) and business email checks.
   - UTM attribution capture (`utm_source`, `utm_medium`, `utm_campaign`, etc.).

3. **Dynamic WhatsApp Quick-Desk**:
   - Pre-filled WhatsApp consultation prompts dynamically referencing selected advisory practices.

4. **Statutory Compliance Calendar**:
   - Live calendar tracking monthly GST (GSTR-1, 3B), TDS challans, Advance Tax installments, and ROC MCA filings.

---

## 🔒 Security & Best Practices
- Root `.gitignore` prevents leaking any `.env` files or `node_modules` across both subdirectories.
- Sanitized SQL queries via Supabase parameterized SDK.
- Helmet security headers, CORS origin restrictions, and request rate limiting.
