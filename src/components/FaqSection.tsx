import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-charcoal-950 relative border-t border-b border-gold-500/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-gold-400" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-5 leading-tight">
            Frequently Asked <span className="gold-text-gradient">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/70 font-sans leading-relaxed">
            Everything you need to know about our P.O.P ceilings, screeding procedures, timelines, pricing, and project guarantees.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'border-gold-500/50 bg-charcoal-900 shadow-card-dark'
                    : 'border-white/10 bg-charcoal-900/60 hover:border-gold-500/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between gap-4 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-serif font-bold transition-colors duration-200 ${
                    isOpen ? 'text-gold-300' : 'text-cream-100 group-hover:text-gold-400'
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-250 ease-out ${
                    isOpen 
                      ? 'bg-gold-500 text-charcoal-950 border-gold-400 rotate-180' 
                      : 'bg-charcoal-800 text-gold-400 border-white/10 group-hover:border-gold-500/40'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div className={`accordion-wrapper ${isOpen ? 'is-open' : ''}`}>
                  <div className="accordion-inner">
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-cream-200/80 leading-relaxed font-sans border-t border-white/5">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unanswered Question Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-charcoal-900 border border-gold-500/20">
          <p className="text-sm text-cream-200 mb-3">
            Have a unique architectural design or specific inquiry not answered here?
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950 font-bold text-xs uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat Directly with Ogunwale Raphael</span>
          </a>
        </div>

      </div>
    </section>
  );
};
