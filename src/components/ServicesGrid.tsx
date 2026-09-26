import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Clock, MessageSquare } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleQuoteClick = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppService = (service: ServiceItem) => {
    const encoded = encodeURIComponent(
      `Hello Ogunwale Raphael, I am interested in your "${service.title}" service from Raph2 Interior Expert. Please provide more details and pricing.`
    );
    window.open(`https://wa.me/2349061402498?text=${encoded}`, '_blank');
  };

  return (
    <section id="services" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Master Crafts & Architectural Finishes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-5 leading-tight">
            Interior Finishing Services <span className="gold-text-gradient">Across Nigeria</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/70 font-sans leading-relaxed">
            From modern LED-recessed P.O.P ceilings to heavy-duty weather-proof Tyrolean facades — we bring world-class precision to every square meter in Lagos, Abuja, Ibadan and nationwide.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col justify-between group border border-gold-500/20 bg-charcoal-850"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 overflow-hidden bg-charcoal-800">
                <img
                  src={service.imageUrl}
                  alt={`${service.title} — Raph2 Interior Expert Nigeria`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width="480"
                  height="224"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />

                {service.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold-500 text-charcoal-950 text-xs font-bold uppercase tracking-wider shadow-gold-glow">
                    {service.badge}
                  </span>
                )}

                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-charcoal-950/80 backdrop-blur-sm border border-white/10 text-[11px] text-gold-300">
                  <Clock className="w-3 h-3 text-gold-400" />
                  <span>{service.deliveryTime}</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-serif text-cream-100 mb-2 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gold-400/90 font-serif italic mb-4">
                    &ldquo;{service.tagline}&rdquo;
                  </p>

                  <p className="text-sm text-cream-200/70 mb-6 leading-relaxed font-sans">
                    {service.shortDesc}
                  </p>

                  {/* Service Features Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-cream-200/85">
                        <span className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="pt-5 border-t border-white/10 flex items-center gap-3">
                  <button
                    onClick={() => handleQuoteClick(service.title)}
                    className="btn-press flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-gold-500/10 hover:bg-gold-500 text-gold-300 hover:text-charcoal-950 border border-gold-500/30 text-xs font-bold uppercase tracking-wider cursor-pointer"
                    aria-label={`Get a free quote for ${service.title}`}
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleWhatsAppService(service)}
                    className="btn-press p-2.5 rounded-lg border border-gold-500/30 text-gold-400 hover:bg-gold-500/20 cursor-pointer"
                    title="Inquire on WhatsApp"
                    aria-label={`WhatsApp inquiry for ${service.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Service Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-cream-300/80 mb-3">
            Have a custom architectural design, hotel, or commercial project? We can help.
          </p>
          <a
            href={COMPANY_INFO.whatsappUrl1}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm underline underline-offset-4 decoration-gold-500/50 hover:decoration-gold-400 transition-all"
          >
            <span>Send your floor plan or photo to Ogunwale Raphael on WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
