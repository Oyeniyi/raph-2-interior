import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
            <span>Client Praise & Social Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-5 leading-tight">
            Loved By Homeowners & <span className="gold-text-gradient">Architects</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/70 font-sans leading-relaxed">
            Read what property owners, developers, and corporate executives across Lagos, Abuja, and Ibadan have to say about our finishing standard.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl glass-card glass-card-hover border border-gold-500/20 bg-charcoal-850 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-500/30 group-hover:text-gold-400/50 transition-colors" />
                </div>

                {/* Service Tag */}
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-gold-500/15 text-gold-300 border border-gold-500/20 mb-4">
                  {item.serviceRendered}
                </span>

                {/* Comment */}
                <p className="text-sm sm:text-base text-cream-200/85 leading-relaxed font-sans mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold font-serif text-cream-100 flex items-center gap-2">
                    {item.clientName}
                    <span title="Verified Customer" className="inline-flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    </span>
                  </h4>
                  <p className="text-xs text-gold-400/90 font-medium">
                    {item.role} &bull; <span className="text-cream-300/60">{item.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-2xl bg-charcoal-950 border border-gold-500/30 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black font-serif gold-text-gradient mb-1">500+</div>
            <div className="text-xs text-cream-300/70 uppercase tracking-wider font-semibold">Completed Projects</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-serif gold-text-gradient mb-1">8+</div>
            <div className="text-xs text-cream-300/70 uppercase tracking-wider font-semibold">Years in Industry</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-serif gold-text-gradient mb-1">100%</div>
            <div className="text-xs text-cream-300/70 uppercase tracking-wider font-semibold">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black font-serif gold-text-gradient mb-1">24/7</div>
            <div className="text-xs text-cream-300/70 uppercase tracking-wider font-semibold">Rapid WhatsApp Response</div>
          </div>
        </div>

      </div>
    </section>
  );
};
