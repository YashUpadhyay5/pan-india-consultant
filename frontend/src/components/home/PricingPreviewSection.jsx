import React from 'react';
import { pricingTiers } from '../../data/services';
import { Check, ShieldAlert, ArrowRight, HelpCircle } from 'lucide-react';
import { analyticsEvents, trackEvent } from '../../services/analyticsService';
import { Link } from 'react-router-dom';

export const PricingPreviewSection = ({ onOpenConsultation }) => {
  const handleTierClick = (tier) => {
    trackEvent(analyticsEvents.PRICING_VIEWED, { tierId: tier.id, tierName: tier.name });
    onOpenConsultation();
  };

  return (
    <section id="pricing-section" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            TRANSPARENT RETAINERS
          </span>
          <h2 className="fluid-h2 font-extrabold text-navy-950 mt-4 tracking-tight leading-tight">
            Predictable Pricing for High-Growth Indian Businesses
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Choose between task-based statutory filings or all-inclusive monthly compliance retainers with dedicated advisory access.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                tier.highlight
                  ? 'bg-navy-950 text-white shadow-2xl border-2 border-amber-500 transform lg:-translate-y-2'
                  : 'bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-navy-950 text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="mb-4">
                  <h3 className={`text-lg font-bold ${tier.highlight ? 'text-white' : 'text-navy-950'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs mt-1 ${tier.highlight ? 'text-amber-300' : 'text-slate-500'}`}>
                    {tier.bestFor}
                  </p>
                </div>

                <div className="py-4 border-y border-slate-200/40 mb-6">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xs text-slate-400">Starts at</span>
                    <span className={`text-3xl font-black ${tier.highlight ? 'text-white' : 'text-navy-950'}`}>
                      {tier.startingFee}
                    </span>
                  </div>
                  <span className={`text-[11px] font-medium block mt-0.5 ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    {tier.billingCycle}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-6 ${tier.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                  {tier.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${tier.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                    Included Scope:
                  </span>
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-xs">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5 ${
                        tier.highlight ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={tier.highlight ? 'text-slate-200' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleTierClick(tier)}
                  className={`w-full py-3 rounded-lg text-xs font-bold transition-all shadow-sm ${
                    tier.highlight
                      ? 'bg-amber-500 hover:bg-amber-400 text-navy-950 shadow-md'
                      : 'btn-primary'
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Disclaimer Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-1">
          <p className="text-xs font-bold text-slate-800">
            Statutory Transparency & Scope Note:
          </p>
          <p className="text-[11px] text-slate-500 leading-normal">
            Prices mentioned are baseline starting fees. Final quotes depend on transaction volume, complexity, and scope of work. Government statutory fees (MCA challans, GST portal fees, Stamp Duty, Trademark registry fees) are charged at actuals as per government receipts.
          </p>
        </div>

      </div>
    </section>
  );
};
