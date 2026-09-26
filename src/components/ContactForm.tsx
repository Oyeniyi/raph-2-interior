import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Clock, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/mockData';
import { LeadFormData } from '../types';

interface ContactFormProps {
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    service: preselectedService || 'P.O.P Ceiling Design & Casting',
    location: '',
    budgetRange: '₦500k - ₦1.5M',
    timeline: 'Immediately (Within 1 week)',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `*New Project Inquiry - Raph2 Interior Expert*\n\n` +
      `*Client Name:* ${formData.fullName || 'Not provided'}\n` +
      `*Phone Number:* ${formData.phone || 'Not provided'}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Property Location:* ${formData.location || 'Not provided'}\n` +
      `*Budget Range:* ${formData.budgetRange}\n` +
      `*Target Timeline:* ${formData.timeline}\n` +
      `*Project Scope/Message:* ${formData.projectDetails || 'Standard quotation request'}\n\n` +
      `_Submitted via raph2interiorexpert.com_`
    );

    window.open(`https://wa.me/2349061402498?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Fast Turnaround & Transparent Quotation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-cream-100 mb-5 leading-tight">
            Request Your <span className="gold-text-gradient">Free Consultation</span>
          </h2>

          <p className="text-base sm:text-lg text-cream-200/70 font-sans leading-relaxed">
            Ready to experience perfect finishing? Speak directly with Ogunwale Raphael or submit your specifications below for an immediate estimate and site survey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-8 rounded-2xl border border-gold-500/30 bg-charcoal-850">
              <h3 className="text-xl font-bold font-serif text-cream-100 mb-6">
                Direct Contact Lines
              </h3>

              <div className="space-y-6">
                {/* Phone 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-xs text-gold-400/90 uppercase font-semibold tracking-wider block">
                      Primary Line (Call & WhatsApp)
                    </span>
                    <a 
                      href={`tel:${COMPANY_INFO.phone1}`} 
                      className="text-lg font-bold text-cream-100 hover:text-gold-300 transition-colors block font-mono mt-0.5"
                    >
                      {COMPANY_INFO.phone1}
                    </a>
                    <span className="text-xs text-cream-300/60 block">Ogunwale Raphael (Founder)</span>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-xs text-gold-400/90 uppercase font-semibold tracking-wider block">
                      Secondary Operations Line
                    </span>
                    <a 
                      href={`tel:${COMPANY_INFO.phone2}`} 
                      className="text-lg font-bold text-cream-100 hover:text-gold-300 transition-colors block font-mono mt-0.5"
                    >
                      {COMPANY_INFO.phone2}
                    </a>
                    <span className="text-xs text-cream-300/60 block">Customer Care & Field Support</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-xs text-gold-400/90 uppercase font-semibold tracking-wider block">
                      Coverage & Physical Mobility
                    </span>
                    <p className="text-sm font-semibold text-cream-100 mt-0.5">
                      Lagos &bull; Ogun &bull; Oyo (Ibadan) &bull; Abuja
                    </p>
                    <span className="text-xs text-cream-300/60 block">Nationwide mobile execution for duplexes & commercial estates</span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-xs text-gold-400/90 uppercase font-semibold tracking-wider block">
                      Working Hours
                    </span>
                    <p className="text-sm font-semibold text-cream-100 mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </p>
                    <span className="text-xs text-cream-300/60 block">Emergency & weekend urgent timelines accommodated</span>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Quick Button */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={COMPANY_INFO.whatsappUrl1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-charcoal-900 border-2 border-gold-500/60 text-gold-300 hover:bg-gold-500/15 hover:border-gold-400 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-gold-400" />
                  <span>Open WhatsApp Direct Chat</span>
                </a>
              </div>

            </div>

            {/* Quality Seal */}
            <div className="p-5 rounded-xl bg-charcoal-850 border border-gold-500/20 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-gold-400 shrink-0" />
              <div className="text-xs text-cream-200/80">
                <strong className="text-gold-300 block">Confidential & Zero Spam:</strong>
                Your contact details are strictly used to schedule your measurement and deliver your quotation.
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 rounded-2xl border border-gold-500/30 bg-charcoal-850 shadow-2xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 modal-enter">
                  <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-400 text-gold-400 flex items-center justify-center mx-auto shadow-gold-glow">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-cream-100">
                    Consultation Request Received!
                  </h3>
                  <p className="text-sm text-cream-200/80 max-w-md mx-auto">
                    Thank you, <strong className="text-gold-300">{formData.fullName}</strong>. Ogunwale Raphael has been notified of your project in <strong className="text-gold-300">{formData.location}</strong>. We will reach you within 2 hours.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSubmit}
                      className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-gradient text-charcoal-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-press px-6 py-3 rounded-lg border border-white/20 text-cream-200 hover:text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleDirectSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-cream-200 mb-2">
                        Your Full Name <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Chief Babatunde or Mrs. Ade"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-cream-100 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-cream-200 mb-2">
                        Phone / WhatsApp Number <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 08012345678"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-cream-100 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Service Needed */}
                    <div>
                      <label className="block text-xs font-semibold text-cream-200 mb-2">
                        Primary Service Required <span className="text-gold-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-cream-100 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      >
                        {SERVICES.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-charcoal-950 text-cream-100">
                            {srv.title}
                          </option>
                        ))}
                        <option value="Combined Package (P.O.P + Paint + Screeding)" className="bg-charcoal-950 text-cream-100">
                          Complete Package (P.O.P + Screeding + Paint)
                        </option>
                      </select>
                    </div>

                    {/* Project Location */}
                    <div>
                      <label className="block text-xs font-semibold text-cream-200 mb-2">
                        Project Location (City / Area) <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Lekki Phase 1, Lagos / Maitama, Abuja"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-cream-100 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-semibold text-cream-200 mb-2">
                        Target Budget Estimate
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-cream-100 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      >
                        <option value="₦250k - ₦500k">₦250k &ndash; ₦500k</option>
                        <option value="₦500k - ₦1.5M">₦500k &ndash; ₦1.5M</option>
                        <option value="₦1.5M - ₦3.5M">₦1.5M &ndash; ₦3.5M</option>
                        <option value="₦3.5M - ₦8M+">₦3.5M &ndash; ₦8M+ (Executive Duplex)</option>
                        <option value="To Be Discussed After Measurement">To Be Discussed After Site Visit</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-xs font-semibold text-cream-200 mb-2">
                        When Do You Need Us to Start?
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-cream-100 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                      >
                        <option value="Immediately (Within 1 week)">Immediately (Within 1 week)</option>
                        <option value="Within 2-3 Weeks">Within 2 &ndash; 3 Weeks</option>
                        <option value="Next Month">Next Month</option>
                        <option value="Planning Phase / Budgeting">Planning Phase / Early Budgeting</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-cream-200 mb-2">
                      Project Details or Specific Questions
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Describe the rooms, ceiling style, current state of walls, or any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-white/10 text-cream-100 text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    />
                  </div>

                  {/* Submit CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="btn-press flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gold-gradient text-charcoal-950 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-charcoal-950" />
                      <span>Submit Inquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="btn-press inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl border-2 border-gold-500 text-gold-300 bg-gold-500/10 hover:bg-gold-500 hover:text-charcoal-950 font-bold text-sm uppercase tracking-wider cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
