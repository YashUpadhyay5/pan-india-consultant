import React, { useState, useMemo } from 'react';
import { useOutletContext, useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { services, serviceCategories } from '../data/services';
import { ServiceCard } from '../components/services/ServiceCard';
import { Search, Filter, Shield, Info } from 'lucide-react';
import { analyticsEvents, trackEvent } from '../services/analyticsService';

export const ServicesPage = () => {
  const { openConsultation } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
    trackEvent(analyticsEvents.CATEGORY_SELECTED, { categoryId: catId, source: 'services_page' });
  };

  return (
    <>
      <SEOHead
        title="Consulting Practice Areas & Statutory Services"
        description="Explore 20+ specialized tax, GST, corporate law, ROC filing, UDIN certifications, and Virtual CFO services delivered across India."
        canonicalPath="/services"
      />

      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-14 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              National Consulting Practice Directory
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Corporate Law, Taxation & Business Advisory Services
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              Explore our full spectrum of statutory filings, tax optimizations, and strategic governance solutions with transparent baseline pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter & Catalog Section */}
      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. GST, ITR, Incorporation)..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
              />
            </div>

            {/* Results count */}
            <div className="text-xs text-slate-500 font-medium">
              Showing <strong className="text-navy-950">{filteredServices.length}</strong> available consulting services
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center overflow-x-auto pb-3 mb-8 gap-2 no-scrollbar">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                  selectedCategory === cat.id
                    ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                    : 'bg-white text-slate-700 hover:text-navy-900 border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredServices.length === 0 ? (
            <div className="bg-white p-12 rounded-2xl border border-slate-200 text-center space-y-4">
              <p className="text-sm font-bold text-navy-950">No matching services found</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for a different keyword or view all services across our practice areas.
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn-primary text-xs py-2 px-4"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onSelectService={(serviceId) => openConsultation(serviceId)}
                />
              ))}
            </div>
          )}

          {/* Pricing Disclaimer */}
          <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 flex items-start space-x-3 text-xs text-slate-600">
            <Info className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900 block">Baseline Fee Terms:</strong>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Prices mentioned are baseline starting fees. Final quotes depend on transaction volume, complexity, and scope of work. All engagements are confirmed with formal written scope documents.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
