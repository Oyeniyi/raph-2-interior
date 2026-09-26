import React from 'react';
import { Phone, MessageSquare, Award, CheckCircle2, Shield, Share2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { FacebookIcon } from './Icons';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-charcoal-900 relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Portrait & Badge Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Founder Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-charcoal-850">
                <img
                  src={COMPANY_INFO.founderPhotoUrl}
                  alt="Ogunwale Raphael — Founder of Raph2 Interior Expert, P.O.P Ceiling &amp; Interior Finishing Specialist with 8+ years experience across Lagos Nigeria"
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top filter contrast-[1.05]"
                  loading="lazy"
                  width="480"
                  height="540"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />

                {/* Founder Title Plate */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-gold-500/30 text-center">
                  <h3 className="font-serif font-bold text-xl text-cream-100">
                    {COMPANY_INFO.founder}
                  </h3>
                  <p className="text-xs text-gold-400 font-medium tracking-wider uppercase mt-0.5">
                    {COMPANY_INFO.founderTitle}
                  </p>
                  <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-center gap-3 text-xs text-cream-300">
                    <span className="flex items-center gap-1 text-gold-300">
                      <Award className="w-3.5 h-3.5 text-gold-400" />
                      8+ Years Hands-on Mastery
                    </span>
                    <span>&bull;</span>
                    <span>Lagos & Nationwide</span>
                  </div>
                </div>
              </div>

              {/* Floating Verification Tag */}
              <div className="absolute -top-4 -right-4 p-3.5 rounded-xl glass-card border border-gold-500/50 shadow-gold-glow flex items-center gap-2.5 backdrop-blur-md">
                <div className="w-9 h-9 rounded-lg bg-gold-gradient flex items-center justify-center text-charcoal-950 font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cream-100">Personal Guarantee</div>
                  <div className="text-[10px] text-gold-300">Direct Founder Supervision</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Founder Authority, Philosophy & Quote */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>Meet The Craftsman Behind The Brand</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-6 leading-tight">
              Driven by Passion, Defined by{' '}
              <span className="gold-text-gradient">Precision Finishing</span>
            </h2>

            {/* Blockquote specified in requirements */}
            <div className="p-6 rounded-xl bg-charcoal-850 border-l-4 border-gold-500 mb-6 relative">
              <p className="text-lg sm:text-xl font-serif italic text-gold-300 leading-relaxed">
                &ldquo;{COMPANY_INFO.philosophy}&rdquo;
              </p>
              <span className="block mt-2 text-xs font-sans text-cream-300/70 uppercase tracking-widest font-semibold">
                &mdash; {COMPANY_INFO.founder}, Lead Interior Specialist
              </span>
            </div>

            <div className="space-y-4 text-cream-200/80 text-sm sm:text-base font-sans leading-relaxed mb-8">
              <p>
                In an industry plagued by shortcuts, cracked ceilings, and uneven paint coats, <strong>Ogunwale Raphael</strong> founded <strong>Raph2 Interior Expert</strong> with one mission: to deliver uncompromising, international-standard interior finishes for Nigerian homes and commercial spaces.
              </p>
              <p>
                With <strong>8+ years of hands-on mastery</strong>, Raphael personally supervises spatial measurements, structural anchorings, paint chemistry, and final hand-sanding for every project. His firm has completed <strong>500+ transformations</strong> across Lagos, Abuja, Ibadan, and beyond — every one delivered on time and on budget.
              </p>
            </div>

            {/* 3 Founder Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Zero Plaster Premature Cracking</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Detailed Transparent Bill of Quantities</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Laser-Level Architectural Alignment</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-cream-100">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>On-Site Client Inspection Walkthrough</span>
              </div>
            </div>

            {/* Founder Direct CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
              <a
                href={`tel:${COMPANY_INFO.phone1}`}
                className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow cursor-pointer"
              >
                <Phone className="w-4 h-4 text-charcoal-950" />
                <span>Call Raphael Directly ({COMPANY_INFO.phone1})</span>
              </a>

              <a
                href={COMPANY_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gold-500/40 text-gold-300 hover:bg-gold-500/10 font-semibold text-xs cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4 text-gold-400" />
                <span>Facebook: {COMPANY_INFO.facebookName}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
