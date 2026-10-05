import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { pricingTiers, services, serviceCategories } from '../data/services';
import { industries } from '../data/industries';
import { Check, Info, ArrowRight, Layers, Building2, Search } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const PricingPage = () => {
  const { openConsultation } = useOutletContext();
  const [viewTab, setViewTab] = useState('core'); // 'core' | 'sector'
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSector, setActiveSector] = useState(industries[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCoreServices = services.filter(s => {
    const matchesCat = activeCategory === 'all' || s.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const selectedIndustry = industries.find(i => i.id === activeSector) || industries[0];

  return (
    <>
      <SEOHead
        title="Complete Pricing & Retainer Fee Schedule"
        description="Transparent fee schedule for Income Tax, GST, Company Law, UDIN Certifications, and Industry-Specific Advisory Packages."
        canonicalPath="/pricing"
      />

      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-14 border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block mb-2">
              Transparent Fee Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Indicative Pricing & Retainer Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
              We eliminate unexpected consulting bills. Inspect our verified baseline starting fees across core practice disciplines and industry-specific operational packages.
            </p>
          </div>
        </div>
      </section>

      {/* Retainer Tiers Section */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-navy-950">Annual & Monthly Retainer Packages</h2>
            <p className="text-xs text-slate-500 mt-1">
              All-inclusive statutory compliance retainers with dedicated advisory oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  tier.highlight
                    ? 'bg-navy-950 text-white shadow-xl border-2 border-amber-500'
                    : 'bg-slate-50 text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <h3 className={`text-lg font-bold ${tier.highlight ? 'text-white' : 'text-navy-950'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs mt-1 ${tier.highlight ? 'text-amber-300' : 'text-slate-500'}`}>
                    {tier.bestFor}
                  </p>

                  <div className="py-4 my-4 border-y border-slate-200/40">
                    <span className="text-xs text-slate-400 block">Baseline Retainer</span>
                    <span className={`text-3xl font-black ${tier.highlight ? 'text-white' : 'text-navy-950'}`}>
                      {tier.startingFee}
                    </span>
                    <span className={`text-xs block mt-1 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                      {tier.billingCycle}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-8">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start text-xs">
                        <Check className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${
                          tier.highlight ? 'text-amber-400' : 'text-emerald-600'
                        }`} />
                        <span className={tier.highlight ? 'text-slate-200' : 'text-slate-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openConsultation(null)}
                  className={`w-full py-3 rounded-lg text-xs font-bold ${
                    tier.highlight ? 'bg-amber-500 hover:bg-amber-400 text-navy-950' : 'btn-primary'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main Fee Directory Switcher: Core vs Sector */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-navy-950">Statutory & Specialized Fee Matrix</h2>
            <p className="text-xs text-slate-500 mt-1">
              Explore service-wise pricing for standalone filings or specialized sector packages.
            </p>

            {/* Top View Mode Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 mt-4 border border-slate-300/80">
              <button
                type="button"
                onClick={() => setViewTab('core')}
                className={`flex items-center space-x-2 px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewTab === 'core'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-navy-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Core Practice Directory (25 Services)</span>
              </button>

              <button
                type="button"
                onClick={() => setViewTab('sector')}
                className={`flex items-center space-x-2 px-5 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewTab === 'sector'
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-navy-900'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>Industry Sector Packages (5 Verticals)</span>
              </button>
            </div>
          </div>

          {/* VIEW 1: CORE PRACTICE PRICING */}
          {viewTab === 'core' && (
            <div>
              {/* Controls */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                {/* Category Filter Pills */}
                <div className="flex items-center overflow-x-auto pb-2 gap-2 no-scrollbar w-full md:w-auto">
                  {serviceCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                        activeCategory === cat.id
                          ? 'bg-navy-900 text-white border-navy-900 shadow-xs'
                          : 'bg-white text-slate-700 hover:text-navy-900 border-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search practice services..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-300 text-xs bg-white"
                  />
                </div>
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-navy-900 text-white border-b border-navy-800">
                      <th className="py-3.5 px-6 font-bold uppercase tracking-wider text-[11px]">Service Name</th>
                      <th className="py-3.5 px-6 font-bold uppercase tracking-wider text-[11px]">Scope of Work</th>
                      <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-[11px]">Indicative Pricing (INR)</th>
                      <th className="py-3.5 px-6 font-bold uppercase tracking-wider text-[11px] text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredCoreServices.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-navy-950 align-top">
                          <Link to={`/services/${s.slug}`} className="hover:text-brand-700">
                            {s.title}
                          </Link>
                          <span className="block text-[10px] font-semibold text-brand-700 mt-0.5">{s.categoryLabel}</span>
                        </td>
                        <td className="py-4 px-6 text-slate-600 align-top max-w-sm">
                          <p className="leading-relaxed">{s.scopeOfWork || s.shortDescription}</p>
                        </td>
                        <td className="py-4 px-5 align-top whitespace-nowrap">
                          <span className="font-extrabold text-navy-900 text-sm">{s.priceDisplay}</span>
                          <span className="block text-[10px] text-slate-400">{s.priceType}</span>
                        </td>
                        <td className="py-4 px-6 align-top text-right whitespace-nowrap">
                          <button
                            onClick={() => openConsultation(s.id)}
                            className="btn-primary text-xs py-1.5 px-3"
                          >
                            {s.ctaType === 'quote' ? 'Request Quote' : 'Book Consultation'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Cards View */}
              <div className="md:hidden space-y-4 mb-8">
                {filteredCoreServices.map((s) => (
                  <div key={s.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-brand-700 uppercase">{s.categoryLabel}</span>
                        <h4 className="text-sm font-bold text-navy-950 mt-0.5">
                          <Link to={`/services/${s.slug}`}>{s.title}</Link>
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-black text-navy-900 block">{s.priceDisplay}</span>
                        <span className="text-[10px] text-slate-400">{s.priceType}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.scopeOfWork || s.shortDescription}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                      <Link to={`/services/${s.slug}`} className="text-xs font-semibold text-brand-700">
                        View Details →
                      </Link>
                      <button
                        onClick={() => openConsultation(s.id)}
                        className="btn-primary text-xs py-1.5 px-3"
                      >
                        Consult
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIEW 2: INDUSTRY SECTOR PACKAGES */}
          {viewTab === 'sector' && (
            <div className="space-y-8">
              {/* Sector Tabs */}
              <div className="flex items-center overflow-x-auto pb-2 gap-2 no-scrollbar justify-start sm:justify-center">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveSector(ind.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors border ${
                      activeSector === ind.id
                        ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                        : 'bg-white text-slate-700 hover:text-navy-900 border-slate-200'
                    }`}
                  >
                    {ind.title}
                  </button>
                ))}
              </div>

              {/* Selected Sector Box */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest block mb-1">
                      Sector Practice Package
                    </span>
                    <h3 className="text-xl font-bold text-navy-950">{selectedIndustry.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-2xl">{selectedIndustry.targetDescription}</p>
                  </div>
                  <Link
                    to={`/industries/${selectedIndustry.slug}`}
                    className="btn-secondary text-xs py-2 px-4 whitespace-nowrap"
                  >
                    View Sector Practice Page →
                  </Link>
                </div>

                {/* Desktop Table */}
                <div className="hidden sm:block overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Service Name</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Scope of Work</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Indicative Fee (INR)</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] text-right">Consultation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {selectedIndustry.specializedServices?.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3.5 px-4 font-bold text-navy-950 align-top">
                            {item.name}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600 align-top">
                            {item.scope}
                          </td>
                          <td className="py-3.5 px-4 font-extrabold text-navy-900 align-top whitespace-nowrap">
                            {item.indicativeFee}
                          </td>
                          <td className="py-3.5 px-4 align-top text-right whitespace-nowrap">
                            <button
                              onClick={() => openConsultation(null)}
                              className="btn-primary text-xs py-1 px-3"
                            >
                              Inquire
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile View */}
                <div className="sm:hidden space-y-3">
                  {selectedIndustry.specializedServices?.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xs font-bold text-navy-950">{item.name}</h4>
                        <span className="text-xs font-black text-brand-800 ml-2">{item.indicativeFee}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{item.scope}</p>
                      <div className="pt-2 text-right">
                        <button
                          onClick={() => openConsultation(null)}
                          className="btn-primary text-[11px] py-1 px-3"
                        >
                          Book Service
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Pricing Disclaimer */}
          <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start space-x-3 text-xs text-slate-600 max-w-4xl mx-auto">
            <Info className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-slate-900 block">Mandatory Pricing Disclaimer:</strong>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Prices mentioned are baseline starting fees. Final quotes depend on transaction volume, complexity, and scope of work. Government statutory fees (MCA challans, GST portal fees, Stamp Duty, Trademark registry fees) are charged at actuals as per government receipts.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
