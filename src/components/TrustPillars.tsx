import React from 'react';
import { Award, ShieldCheck, Clock, Coins, Sparkles, CheckCircle } from 'lucide-react';
import { TRUST_PILLARS } from '../data/mockData';

export const TrustPillars: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-7 h-7 text-gold-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-gold-400" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-gold-400" />;
      case 'Coins':
        return <Coins className="w-7 h-7 text-gold-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-7 h-7 text-gold-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-charcoal-950 relative border-t border-b border-gold-500/15">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
            <span>The Raph2 Standard of Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-5 leading-tight">
            Why Discerning Clients Trust{' '}
            <span className="gold-text-gradient">Raph2 Interior Expert</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/70 font-sans leading-relaxed">
            We bridge the gap between high-end architectural ambition and reliable on-site craftsmanship. Here are the 5 foundational pillars behind every project we execute.
          </p>
        </div>

        {/* 5 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {TRUST_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`p-8 rounded-2xl glass-card glass-card-hover relative group flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Top Card Bar */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                    {getIcon(pillar.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black font-serif gold-text-gradient block">
                      {pillar.metric}
                    </span>
                    <span className="text-[11px] text-cream-300/60 uppercase font-medium tracking-wider">
                      {pillar.metricLabel}
                    </span>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-serif block mb-1">
                  Pillar 0{index + 1} &bull; {pillar.subtitle}
                </span>

                <h3 className="text-xl font-bold font-serif text-cream-100 mb-3 group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-cream-200/75 leading-relaxed font-sans mb-6">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Card Accent */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold-400 font-medium">
                <span>Verified Quality Standard</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Guarantee Ribbon */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-charcoal-900 via-charcoal-800 to-charcoal-900 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0 border border-gold-500/40">
              <ShieldCheck className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-cream-100">
                100% Craftsmanship & Material Authenticity Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-cream-200/70">
                No compromised gypsum, no diluted paints, no premature peeling. Every job is inspected personally by Ogunwale Raphael.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-press shrink-0 px-6 py-2.5 rounded-lg bg-gold-500/10 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-charcoal-950 font-semibold text-xs sm:text-sm uppercase tracking-wider cursor-pointer"
            id="trust-pillars-cta"
          >
            Get My Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
