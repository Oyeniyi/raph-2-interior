import React from 'react';
import { Phone, MessageSquare, MapPin, Clock, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';
import { FacebookIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-cream-200/80 border-t border-gold-500/25 relative overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gold-600/5 blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Philosophy (Cols 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg overflow-hidden border border-gold-500/40 bg-charcoal-950 p-0.5 flex items-center justify-center shadow-gold-glow">
                <img 
                  src={COMPANY_INFO.logoUrl} 
                  alt="Raph2 Interior Expert Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif font-bold text-lg text-cream-100 uppercase tracking-wider block">
                  RAPH2 <span className="gold-text-gradient">INTERIOR</span>
                </span>
                <span className="text-[10px] tracking-widest text-gold-400 uppercase block">
                  Expert Finishing &bull; Luxury Spaces
                </span>
              </div>
            </a>

            <p className="text-xs text-gold-300/90 font-serif italic">
              &ldquo;{COMPANY_INFO.tagline1}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-cream-300/70 leading-relaxed font-sans">
              Founded and supervised by <strong>{COMPANY_INFO.founder}</strong>, Raph2 Interior Expert is Nigeria's trusted craft leader in architectural P.O.P ceiling designs, mirror-smooth screeding, luxury painting, wallpapers, and Tyrolean wall protections.
            </p>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-charcoal-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 transition-colors"
                title={`Follow ${COMPANY_INFO.facebookName} on Facebook`}
                aria-label="Facebook Profile"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={COMPANY_INFO.whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-charcoal-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 transition-colors"
                title="Connect on WhatsApp"
                aria-label="WhatsApp Consultation"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone1}`}
                className="w-9 h-9 rounded-lg bg-charcoal-900 border border-gold-500/30 flex items-center justify-center text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 transition-colors"
                title="Call Raphael"
                aria-label="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-serif uppercase tracking-widest text-gold-400">
              Finishing Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gold-500 text-xs">&rsaquo;</span>
                    <span>{srv.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (Cols 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold font-serif uppercase tracking-widest text-gold-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#why-us" className="hover:text-gold-300 transition-colors">&rsaquo; Why Raph2</a></li>
              <li><a href="#portfolio" className="hover:text-gold-300 transition-colors">&rsaquo; Portfolio</a></li>
              <li><a href="#founder" className="hover:text-gold-300 transition-colors">&rsaquo; Meet Raphael</a></li>
              <li><a href="#calculator" className="hover:text-gold-300 transition-colors">&rsaquo; Cost Calculator</a></li>
              <li><a href="#faq" className="hover:text-gold-300 transition-colors">&rsaquo; FAQs</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors">&rsaquo; Request Quote</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations (Cols 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-serif uppercase tracking-widest text-gold-400">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${COMPANY_INFO.phone1}`} className="hover:text-gold-300 font-mono font-bold block">
                    {COMPANY_INFO.phone1}
                  </a>
                  <a href={`tel:${COMPANY_INFO.phone2}`} className="hover:text-gold-300 font-mono text-xs text-cream-300/70 block">
                    {COMPANY_INFO.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs text-cream-300/80">
                  Lagos, Ogun, Oyo (Ibadan), Abuja &amp; Nationwide Deployment
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs text-cream-300/80">
                  {COMPANY_INFO.workingHours}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <FacebookIcon className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold-400 hover:underline"
                >
                  Facebook: {COMPANY_INFO.facebookName}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accreditation */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-300/60">
          <p>
            &copy; {currentYear} <strong>Raph2 Interior Expert</strong>. All rights reserved. Founded by Ogunwale Raphael.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              100% Quality Plaster Standard
            </span>
            <span>&bull;</span>
            <span>LocalBusiness Schema Optimized</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
