import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustPillars } from './components/TrustPillars';
import { ServicesGrid } from './components/ServicesGrid';
import { PortfolioGallery } from './components/PortfolioGallery';
import { FounderSection } from './components/FounderSection';
import { CostEstimator } from './components/CostEstimator';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('P.O.P Ceiling Design & Casting');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-charcoal-900 text-cream-100 flex flex-col font-sans selection:bg-gold-500 selection:text-charcoal-950 pb-16 sm:pb-0">
      {/* Top Header */}
      <Header />

      {/* Main Page Landmark */}
      <main className="flex-1">
        {/* Hero Section with H1 */}
        <Hero />

        {/* 5 Core Trust & Value Pillars */}
        <TrustPillars />

        {/* 6 Core Specializations Services Grid */}
        <ServicesGrid onSelectService={handleSelectService} />

        {/* Filterable Portfolio Gallery & Lightbox */}
        <PortfolioGallery />

        {/* Founder & Brand Authority Section */}
        <FounderSection />

        {/* Interactive Cost Estimator & Quote Generator */}
        <CostEstimator />

        {/* Client Praise & Testimonials */}
        <Testimonials />

        {/* SEO FAQ Accordion */}
        <FaqSection />

        {/* Lead Generation & Quote Booking Form */}
        <ContactForm preselectedService={selectedService} />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* High-Converting Floating WhatsApp & Mobile Action Bar */}
      <FloatingActions />
    </div>
  );
};

export default App;
