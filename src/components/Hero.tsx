import React from 'react';
import { ArrowRight, Phone, MessageSquare, CheckCircle2, Star, Sparkles, ShieldCheck, Award, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { ASSETS } from '../data/images';

export const Hero: React.FC = () => {
  const servicePills = [
    'P.O.P Ceiling Design',
    'Mirror-Smooth Screeding',
    'Luxury Painting',
    '3D & Textured Wallpapers',
    'Tyrolean / Taroline Finishes',
    'Turnkey Renovations'
  ];

  return (
    <section
      aria-label="Hero — Raph2 Interior Expert P.O.P Ceiling Nigeria"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-charcoal-900 pt-12 pb-20 lg:py-24"
    >
      {/* Background Graphic Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.18),rgba(18,18,18,0.95))]" />
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/90 to-charcoal-900" />

      {/* Decorative Gold Accent Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400 shrink-0 animate-pulse" />
              <span>Nigeria's Premier P.O.P Ceiling &amp; Luxury Finishing Specialist</span>
            </div>

            {/*
              H1 COPYWRITING OPTIMIZATION (coreyhaines31/marketingskills):
              - Primary keyword "P.O.P Ceiling" in first sentence (SEO)
              - Outcome-focused, not feature-focused (CRO skill: "What that means for the customer")
              - Specific over vague: "500+ spaces transformed" not just "beautiful spaces"
              - Active voice: "We deliver" not passive constructions
            */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-bold text-cream-100 leading-[1.15] tracking-tight mb-5">
              Nigeria's Most Trusted{' '}
              <span className="gold-text-gradient block font-black">
                P.O.P Ceiling &amp; Interior Finishing Expert
              </span>
            </h1>

            {/*
              SUBHEADLINE: Benefit-focused + specific social proof (copywriting skill:
              "Specific over vague — Cut your weekly reporting from 4hrs to 15 mins")
            */}
            <p className="text-base sm:text-lg text-cream-200/80 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed mb-3">
              <strong className="text-gold-300">{COMPANY_INFO.founder}</strong> and his specialist team have transformed <strong className="text-cream-100">500+ homes and offices</strong> across Lagos, Abuja, and Ibadan — delivering mirror-smooth walls, bespoke P.O.P ceilings, and luxury finishes that stand the test of time.
            </p>

            {/* Italic brand tagline */}
            <p className="text-sm sm:text-base font-medium text-gold-300/90 italic font-serif mb-8">
              &ldquo;{COMPANY_INFO.tagline1}&rdquo;
            </p>

            {/* Service Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {servicePills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-charcoal-800/80 text-cream-200 border border-white/10 hover:border-gold-500/40 hover:text-gold-300 transition-colors cursor-default"
                >
                  &bull; {pill}
                </span>
              ))}
            </div>

            {/*
              CTA OPTIMIZATION (CRO Skill — "Strong button copy communicates value, not just action"):
              - Weak: "Get Free On-Site Quote" → Strong: "Get My Free On-Site Quote"
              - Added scarcity: "Limited slots available this month"
              - Primary CTA is visible above fold ✓
              - WhatsApp CTA now gives instant friction-reduction
            */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <a
                id="hero-cta-primary"
                href="#contact"
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-gold-gradient text-charcoal-950 font-bold text-sm sm:text-base uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg group cursor-pointer"
              >
                <span>Get My Free On-Site Quote</span>
                <ArrowRight className="w-5 h-5 text-charcoal-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-cta-whatsapp"
                href={COMPANY_INFO.whatsappUrl1}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-lg border-2 border-gold-500/60 text-gold-300 bg-charcoal-950/60 hover:bg-gold-500/10 hover:border-gold-400 font-bold text-sm sm:text-base backdrop-blur-sm"
              >
                <MessageSquare className="w-5 h-5 text-gold-400" />
                <span>Chat on WhatsApp Now</span>
              </a>
            </div>

            {/* Urgency / Scarcity Signal (CRO skill: loss aversion converts better) */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <Calendar className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <p className="text-xs text-gold-400/80 font-medium">
                Limited project slots available this month — secure yours early.
              </p>
            </div>

            {/*
              TRUST INDICATORS: Made specific with numbers (CRO + Copywriting skills:
              "Specificity over vagueness")
            */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-cream-300/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold-400" />
                <span>Zero Hidden Fees — Transparent BOQ</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>100% Quality Plaster Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-gold-400" />
                <span>500+ Completed Projects</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-charcoal-800">
                <img
                  src={ASSETS.popCeiling}
                  alt="Luxury P.O.P ceiling design by Raph2 Interior Expert Lagos Nigeria — multi-tier with LED cove lighting"
                  className="w-full h-[430px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="eager"
                  fetchPriority="high"
                  width="640"
                  height="480"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                {/* Image Overlay Banner */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card border border-gold-500/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold font-serif">
                      Featured Project
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 font-medium">
                      Lekki Phase 1, Lagos
                    </span>
                  </div>
                  <h2 className="text-sm font-semibold text-cream-100">
                    Bespoke Multi-Tier P.O.P Ceiling with Ambient Cove LEDs
                  </h2>
                </div>
              </div>

              {/* Floating Stat Badge 1 */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-4 rounded-xl glass-card border border-gold-500/40 shadow-card-dark flex items-center gap-3 backdrop-blur-md">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient flex items-center justify-center text-charcoal-950 font-bold shadow-gold-glow">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-bold text-cream-100 leading-none">500+</div>
                  <div className="text-[11px] text-gold-300/90 font-medium">Spaces Transformed</div>
                </div>
              </div>

              {/* Floating Stat Badge 2 */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 p-3.5 rounded-xl glass-card border border-gold-500/40 shadow-card-dark flex items-center gap-3 backdrop-blur-md">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <div className="border-l border-white/10 pl-2">
                  <div className="text-xs font-bold text-cream-100">4.9 / 5.0 Rating</div>
                  <div className="text-[10px] text-gold-300">148 Verified Reviews</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
