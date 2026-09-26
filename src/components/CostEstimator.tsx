import React, { useState } from 'react';
import { Calculator, Check, MessageSquare, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const CostEstimator: React.FC = () => {
  const [spaceType, setSpaceType] = useState<'living' | 'bedroom' | 'flat3' | 'duplex' | 'commercial'>('living');
  const [selectedServices, setSelectedServices] = useState<string[]>(['pop', 'paint']);
  const [finishTier, setFinishTier] = useState<'standard' | 'luxury' | 'royal'>('luxury');

  const spaceOptions = [
    { id: 'living', label: 'Living Room & Dining', areaSqm: 45, desc: 'Average open living & dining hall' },
    { id: 'bedroom', label: 'Master Bedroom Suite', areaSqm: 28, desc: 'Spacious en-suite bedroom' },
    { id: 'flat3', label: 'Full 3-Bedroom Apartment', areaSqm: 140, desc: 'Complete 3-bedroom flat all rooms' },
    { id: 'duplex', label: '4/5 Bedroom Duplex / Villa', areaSqm: 280, desc: 'Multi-floor luxury private residence' },
    { id: 'commercial', label: 'Commercial Office / Lounge', areaSqm: 100, desc: 'Corporate workspace or boutique' },
  ];

  const serviceOptions = [
    { id: 'pop', label: 'P.O.P Ceiling Design & Casting', ratePerSqm: { standard: 6500, luxury: 9500, royal: 14000 } },
    { id: 'screed', label: 'Mirror-Smooth Wall Screeding', ratePerSqm: { standard: 2200, luxury: 3400, royal: 4800 } },
    { id: 'paint', label: 'Luxury Painting (Walls & Ceiling)', ratePerSqm: { standard: 2800, luxury: 4200, royal: 6500 } },
    { id: 'wallpaper', label: 'Luxury Accent Wallpaper Feature', flatFee: { standard: 45000, luxury: 75000, royal: 130000 } },
    { id: 'taroline', label: 'Taroline / Tyrolean Exterior Finish', ratePerSqm: { standard: 3500, luxury: 5200, royal: 7800 } },
  ];

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(id => id !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const currentSpace = spaceOptions.find(s => s.id === spaceType) || spaceOptions[0];

  // Calculate estimated price
  let totalEstimate = 0;
  selectedServices.forEach(srvId => {
    const srv = serviceOptions.find(s => s.id === srvId);
    if (srv) {
      if (srv.ratePerSqm) {
        totalEstimate += currentSpace.areaSqm * srv.ratePerSqm[finishTier];
      } else if (srv.flatFee) {
        totalEstimate += srv.flatFee[finishTier];
      }
    }
  });

  const formattedEstimateMin = Math.round(totalEstimate * 0.9).toLocaleString('en-NG');
  const formattedEstimateMax = Math.round(totalEstimate * 1.15).toLocaleString('en-NG');

  const handleSendEstimateToWhatsApp = () => {
    const serviceNames = selectedServices
      .map(id => serviceOptions.find(s => s.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const message = encodeURIComponent(
      `Hello Ogunwale Raphael, I used the Cost Calculator on Raph2 Interior Expert website:\n\n` +
      `• Space Type: ${currentSpace.label} (~${currentSpace.areaSqm} sqm)\n` +
      `• Finishes Selected: ${serviceNames}\n` +
      `• Finish Tier: ${finishTier.toUpperCase()}\n` +
      `• Estimated Ballpark: ₦${formattedEstimateMin} - ₦${formattedEstimateMax}\n\n` +
      `Can we schedule an on-site inspection for a formal Bill of Quantities?`
    );

    window.open(`https://wa.me/2349061402498?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-charcoal-950 relative border-t border-b border-gold-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-gold-400" />
            <span>Interactive Project Estimator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-5 leading-tight">
            Estimate Your <span className="gold-text-gradient">Interior Investment</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/70 font-sans leading-relaxed">
            Get an instant ballpark estimate tailored to your room scale and finish specifications. We deliver premium luxury without arbitrary price inflation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls: Left 7 Cols */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-2xl border border-gold-500/20 bg-charcoal-900 space-y-8">
            
            {/* Step 1: Space Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 font-serif mb-3">
                Step 1 &bull; Select Property / Space Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {spaceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSpaceType(opt.id as any)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      spaceType === opt.id
                        ? 'border-gold-500 bg-gold-500/15 shadow-gold-glow/50 text-cream-100'
                        : 'border-white/10 bg-charcoal-850/60 text-cream-200/70 hover:border-gold-500/40'
                    }`}
                  >
                    <div className="text-sm font-semibold text-cream-100 mb-0.5">{opt.label}</div>
                    <div className="text-[11px] text-gold-400/90">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Selected Finishes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 font-serif mb-3">
                Step 2 &bull; Select Desired Finishing Services
              </label>
              <div className="space-y-2.5">
                {serviceOptions.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'border-gold-500 bg-gold-500/10 text-cream-100'
                          : 'border-white/5 bg-charcoal-850/40 text-cream-300/60 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked ? 'bg-gold-500 border-gold-400 text-charcoal-950' : 'border-white/20 bg-charcoal-800'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{srv.label}</span>
                      </div>
                      <span className="text-[11px] text-gold-400/80 font-mono">
                        {srv.ratePerSqm ? 'Per sqm' : 'Per accent wall'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Finish Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gold-400 font-serif mb-3">
                Step 3 &bull; Quality & Specification Tier
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Executive Standard', tag: 'High-grade commercial' },
                  { id: 'luxury', name: 'Luxury Premium', tag: 'Most Popular Choice' },
                  { id: 'royal', name: 'Royal Bespoke', tag: 'Maximum Opulence' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setFinishTier(tier.id as any)}
                    className={`btn-press p-3 rounded-xl border text-center transition-colors duration-200 cursor-pointer ${
                      finishTier === tier.id
                        ? 'border-gold-500 bg-gold-gradient text-charcoal-950 font-bold shadow-gold-glow'
                        : 'border-white/10 bg-charcoal-850 text-cream-200/80 hover:border-gold-500/40'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold leading-tight">{tier.name}</div>
                    <div className={`text-[10px] mt-1 ${finishTier === tier.id ? 'text-charcoal-900' : 'text-gold-400/80'}`}>
                      {tier.tag}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card: Right 5 Cols */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border-2 border-gold-500/40 bg-charcoal-900 sticky top-28 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gold-500/10 text-gold-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Projected Investment Ballpark</span>
            </div>

            <h3 className="text-xl font-bold font-serif text-cream-100 mb-1">
              Estimated Investment
            </h3>
            <p className="text-xs text-cream-200/70 mb-6">
              Based on {currentSpace.label} (~{currentSpace.areaSqm} sqm) with {finishTier.toUpperCase()} specifications.
            </p>

            {/* Price Range Display */}
            <div className="p-5 rounded-xl bg-charcoal-950/80 border border-gold-500/30 mb-6 text-center">
              <span className="text-xs text-cream-300/60 uppercase tracking-widest font-semibold block mb-1">
                Estimated Range (NGN)
              </span>
              <div 
                key={`${spaceType}-${finishTier}-${selectedServices.join('-')}`}
                className="text-2xl sm:text-3xl font-black font-serif gold-text-gradient transition-[opacity,transform] duration-150 ease-out"
              >
                ₦{formattedEstimateMin} &mdash; ₦{formattedEstimateMax}
              </div>
              <span className="text-[11px] text-gold-400/80 block mt-1.5 font-medium">
                *Includes labor, surface prep, and premium materials
              </span>
            </div>

            {/* Summary List */}
            <div className="space-y-2 text-xs text-cream-200/80 pb-6 border-b border-white/10 mb-6">
              <div className="flex justify-between">
                <span className="text-cream-300/60">Space Scale:</span>
                <span className="font-semibold text-cream-100">{currentSpace.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream-300/60">Finishing Services:</span>
                <span className="font-semibold text-gold-300">{selectedServices.length} Selected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream-300/60">Specification Tier:</span>
                <span className="font-semibold text-cream-100 capitalize">{finishTier} Quality</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream-300/60">Milestone Turnaround:</span>
                <span className="font-semibold text-cream-100">3 - 7 Working Days</span>
              </div>
            </div>

            {/* WhatsApp Conversion CTA */}
            <button
              onClick={handleSendEstimateToWhatsApp}
              className="btn-press w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gold-gradient text-charcoal-950 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg group cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-charcoal-950" />
              <span>Send Estimate to WhatsApp</span>
            </button>

            <p className="text-[11px] text-cream-300/60 text-center mt-3 flex items-center justify-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-gold-500/70" />
              <span>Final exact quote provided after physical site inspection.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
