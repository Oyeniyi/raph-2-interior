import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Desktop & Tablet WhatsApp Widget (Bottom-Right) */}
      <aside aria-label="Quick Communication Actions" className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col items-end gap-3">
        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          tabIndex={showScrollTop ? 0 : -1}
          aria-hidden={!showScrollTop}
          className={`btn-press w-10 h-10 rounded-full bg-charcoal-900 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 flex items-center justify-center shadow-lg transition-[opacity,transform] duration-200 ease-out ${
            showScrollTop
              ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
              : 'opacity-0 translate-y-3 pointer-events-none scale-90'
          }`}
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* WhatsApp Floating Action Pill */}
        <a
          href={COMPANY_INFO.whatsappUrl1}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-600 text-white shadow-2xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-300"
          aria-label="Chat on WhatsApp with Ogunwale Raphael"
        >
          {/* Subtle Ping Ring */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>

          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>

          <div className="hidden sm:flex flex-col text-left pr-1">
            <span className="text-[10px] text-emerald-100 uppercase tracking-wider font-medium leading-none">
              Need Quick Advice?
            </span>
            <span className="text-xs font-bold leading-tight mt-0.5">
              WhatsApp Raphael
            </span>
          </div>
        </a>
      </aside>

      {/* Sticky Mobile Bottom Quick-Call & WhatsApp Conversion Bar (< 640px) */}
      <nav aria-label="Mobile quick action bar" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-950/95 backdrop-blur-md border-t border-gold-500/30 p-2.5 flex items-center gap-2">
        <a
          href={`tel:${COMPANY_INFO.phone1}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-900 border border-gold-500/40 text-gold-300 font-bold text-xs uppercase tracking-wider active:bg-gold-500/20"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          <span>Call Raphael</span>
        </a>

        <a
          href={COMPANY_INFO.whatsappUrl1}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95"
        >
          <MessageSquare className="w-4 h-4 text-white" />
          <span>WhatsApp Us</span>
        </a>
      </nav>
    </>
  );
};
