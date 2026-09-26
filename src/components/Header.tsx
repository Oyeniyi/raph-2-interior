import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Shield, Clock, MapPin, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Raph2', href: '#why-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'The Founder', href: '#founder' },
    { name: 'Cost Calculator', href: '#calculator' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-charcoal-950 border-b border-gold-500/20 text-xs py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-cream-200/80">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              Lagos &bull; Abuja &bull; Ibadan &bull; Nationwide
            </span>
            <span className="hidden md:inline-block text-charcoal-600">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-400/80 shrink-0" />
              {COMPANY_INFO.workingHours}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
            <span className="text-cream-300/70 hidden lg:inline">Speak with Raphael:</span>
            <a 
              href={`tel:${COMPANY_INFO.phone1}`} 
              className="flex items-center gap-1 text-gold-300 hover:text-gold-200 transition-colors font-semibold"
              title="Call Ogunwale Raphael directly"
            >
              <Phone className="w-3 h-3 text-gold-500" />
              {COMPANY_INFO.phone1}
            </a>
            <span className="text-charcoal-700">&bull;</span>
            <a 
              href={`tel:${COMPANY_INFO.phone2}`} 
              className="flex items-center gap-1 text-gold-300 hover:text-gold-200 transition-colors font-semibold"
              title="Call Raph2 Interior alternative line"
            >
              <Phone className="w-3 h-3 text-gold-500" />
              {COMPANY_INFO.phone2}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-gold-500/20 shadow-card-dark py-3.5' 
            : 'bg-charcoal-900/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-gold-500/40 shadow-gold-glow group-hover:scale-105 transition-transform duration-300 bg-charcoal-950 flex items-center justify-center p-0.5">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt="Raph2 Interior Expert Official Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl tracking-wider text-cream-100 uppercase group-hover:text-gold-300 transition-colors">
                RAPH2 <span className="gold-text-gradient font-black">INTERIOR</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gold-400/90 uppercase font-sans font-medium">
                Expert Finishing &bull; Luxury Spaces
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-cream-200/90 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-[width] after:duration-200 after:ease-out"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl1}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 hover:border-gold-400"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
              <span>WhatsApp Us</span>
            </a>
            
            <a
              href="#contact"
              className="btn-press inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-md bg-gold-gradient text-charcoal-950 shadow-gold-glow hover:shadow-gold-glow-lg uppercase tracking-wider"
            >
              <span>Get Free Quote</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="btn-press lg:hidden p-2 rounded-lg border border-gold-500/30 text-gold-400 hover:bg-gold-500/10"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-950/98 border-b border-gold-500/30 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-1 divide-y divide-white/5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-base font-medium text-cream-100 hover:text-gold-400 transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gold-500/60" />
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-gold-500/20 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone1}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-gold-500/40 text-gold-300 bg-gold-500/5 font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {COMPANY_INFO.phone1}</span>
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gold-gradient text-charcoal-950 font-bold text-sm shadow-gold-glow"
              >
                <MessageSquare className="w-4 h-4 text-charcoal-950" />
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
