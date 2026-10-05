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
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200" id="faqs">
      <div className="site-container max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs font-bold text-brand-700 uppercase tracking-wider bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="fluid-h2 font-extrabold text-navy-950 mt-4 tracking-tight leading-tight">
            Clear Answers to Key Advisory Questions
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            Everything you need to know about our PAN-India delivery model, pricing clarity, and consultation process.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`touch-target px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                activeCategory === cat.id
                  ? 'bg-navy-950 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3 sm:space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between bg-slate-50/70 hover:bg-slate-100/70 transition-colors touch-target"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base font-bold text-navy-950 pr-4 font-display">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-amber-600' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 py-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-brand-50 border border-brand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-navy-950 font-display">Have a specific question not listed here?</h3>
            <p className="text-xs sm:text-sm text-brand-900 mt-1">Connect directly with our advisory coordinator for instant assistance.</p>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openWhatsApp(null, "Hello, I have a specific compliance query regarding my business.")}
              className="touch-target w-full sm:w-auto btn-accent text-xs sm:text-sm py-2.5 px-5 shadow-sm whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>WhatsApp Helpdesk</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
