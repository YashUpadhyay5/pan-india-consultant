import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const NotFoundPage = () => {
  return (
    <>
      <SEOHead
        title="404 — Page Not Found"
        description="The requested page could not be located on Bharat Advisory Partners."
        canonicalPath="/404"
      />

      <section className="py-24 bg-slate-50 min-h-[70vh] flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 bg-brand-100 text-brand-800 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black font-serif shadow-sm">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-navy-950">Page Not Found</h1>
            <p className="text-xs text-slate-600 leading-relaxed">
              The page you requested may have been relocated or updated. Use the navigation links below to explore our services or return home.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/" className="btn-primary text-xs py-2.5 px-4">
              <Home className="w-4 h-4 mr-1.5" />
              Return to Homepage
            </Link>
            <Link to="/services" className="btn-secondary text-xs py-2.5 px-4">
              <Search className="w-4 h-4 mr-1.5" />
              Explore Practice Directory
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-200 text-xs text-slate-500">
            Need urgent assistance? Call our advisory desk: <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-navy-950 font-bold hover:underline">{siteConfig.contact.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
};
