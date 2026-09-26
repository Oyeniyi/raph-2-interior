import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, COMPANY_INFO } from '../data/mockData';
import { PortfolioItem } from '../types';
import { MapPin, Eye, X, CheckCircle, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

export const PortfolioGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'pop', label: 'P.O.P Ceilings' },
    { key: 'moulding', label: 'Wall Skirting & Mouldings' },
    { key: 'wallpaper', label: 'Wallpapers & 3D Panels' },
    { key: 'renovation', label: 'TV Units & Renovations' },
    { key: 'painting', label: 'Painting & Screeding' },
    { key: 'taroline', label: 'Taroline / Tyrolean' },
  ];

  const filteredItems = selectedFilter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedFilter);

  const getCategoryCount = (key: string) => {
    if (key === 'all') return PORTFOLIO_ITEMS.length;
    return PORTFOLIO_ITEMS.filter(item => item.category === key).length;
  };

  const handleConsultThisProject = (item: PortfolioItem) => {
    const text = encodeURIComponent(
      `Hello Ogunwale Raphael, I saw your portfolio project "${item.title}" in ${item.location} on Raph2 Interior Expert website. I want a similar finish for my property.`
    );
    window.open(`https://wa.me/2349061402498?text=${text}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-charcoal-950 relative border-t border-b border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Proven Craftsmanship Across Nigeria</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-5 leading-tight">
            Our Completed <span className="gold-text-gradient">Portfolio</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/70 font-sans leading-relaxed">
            Explore authentic interior transformations executed by Ogunwale Raphael. Every ceiling line, screeded wall, and wallpaper seam reflects uncompromising attention to detail.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.key);
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedFilter(cat.key)}
                className={`btn-press inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  selectedFilter === cat.key
                    ? 'bg-gold-gradient text-charcoal-950 shadow-gold-glow scale-[1.02]'
                    : 'bg-charcoal-800/80 text-cream-200/80 hover:text-gold-300 hover:bg-charcoal-800 border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  selectedFilter === cat.key ? 'bg-charcoal-950/30 text-charcoal-950' : 'bg-charcoal-900 text-gold-400/80'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-xl overflow-hidden glass-card cursor-pointer border border-gold-500/20 bg-charcoal-900 transition-[transform,border-color,box-shadow] duration-220 ease-out hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-card-dark active:scale-[0.98]"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-charcoal-800 relative">
                <img
                  src={item.imageUrl}
                  alt={`${item.title} - Raph2 Interior Expert ${item.categoryLabel}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-charcoal-950/80 backdrop-blur-sm text-[10px] uppercase font-bold text-gold-400 border border-gold-500/30">
                  {item.categoryLabel}
                </span>

                {/* Hover Quick Action Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-charcoal-950/50 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-gradient text-charcoal-950 font-bold text-xs shadow-gold-glow">
                    <Eye className="w-4 h-4" />
                    <span>View Project Specs</span>
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1.5 text-gold-400/90 text-xs mb-1.5">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-base font-bold font-serif text-cream-100 mb-2 line-clamp-1 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-cream-200/70 line-clamp-2 font-sans mb-3">
                  {item.summary}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] text-gold-400 font-medium">
                  <span>Explore details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Project Inspection */}
        {activeItem && (
          <div 
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/90 backdrop-blur-md transition-opacity duration-200"
          >
            <div 
              className="relative w-full max-w-3xl rounded-2xl overflow-hidden glass-card border border-gold-500/40 bg-charcoal-900 shadow-2xl max-h-[90vh] flex flex-col modal-enter"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header & Close */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-charcoal-950/80 text-cream-100 hover:text-gold-400 hover:bg-charcoal-950 transition-colors border border-white/10"
                aria-label="Close Project Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Container */}
              <div className="overflow-y-auto">
                <div className="relative h-64 sm:h-80 w-full bg-charcoal-800">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-6 right-6">
                    <span className="inline-block px-3 py-1 rounded-md bg-gold-500 text-charcoal-950 text-xs font-bold uppercase tracking-wider mb-2">
                      {activeItem.categoryLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-cream-100">
                      {activeItem.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs text-gold-300 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {activeItem.location}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-2">
                      Architectural Summary
                    </h4>
                    <p className="text-sm text-cream-200/80 leading-relaxed font-sans">
                      {activeItem.summary}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-3">
                      Execution Specifications
                    </h4>
                    <ul className="space-y-2">
                      {activeItem.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-cream-200/90">
                          <CheckCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials Employed */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-gold-400 font-semibold mb-3">
                      High-Grade Materials Deployed
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.materials.map((mat, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-md bg-charcoal-800 text-gold-300 border border-gold-500/20 text-xs font-medium">
                          &bull; {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Modal Action CTA */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-cream-300/70">Want this exact design in your space?</p>
                      <p className="text-sm font-bold text-gold-400">Consult Ogunwale Raphael today</p>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => handleConsultThisProject(activeItem)}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-[1.02] transition-transform"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire on WhatsApp</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
