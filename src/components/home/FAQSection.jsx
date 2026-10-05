import React, { useState } from 'react';
import { faqs, faqCategories } from '../../data/faqs';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../../utils/whatsapp';

export const FAQSection = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIds, setOpenIds] = useState(['services-provided', 'pan-india-delivery']);

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const toggleAccordion = (id) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 mt-3 tracking-tight">
            Clear Answers to Key Advisory Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Everything you need to know about our PAN-India delivery model, pricing clarity, and consultation process.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === cat.id
                  ? 'bg-navy-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-navy-950 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-brand-700' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 py-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-50 border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-brand-950">Have a specific question not listed here?</h4>
            <p className="text-xs text-brand-800 mt-0.5">Connect directly with our advisory coordinator for instant assistance.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => openWhatsApp(null, "Hello, I have a specific compliance query regarding my business.")}
              className="btn-accent text-xs py-2 px-4 whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
              WhatsApp Helpdesk
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
