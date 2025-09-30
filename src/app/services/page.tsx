'use client';

import React, { useState } from 'react';
import {
  FaChartLine,
  FaClock,
  FaCloud,
  FaDesktop,
  FaMobile,
  FaRocket,
  FaShieldAlt,
  FaShoppingCart,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import {
  HiLightBulb,
  HiShieldCheck,
  HiSparkles,
  HiTrendingUp,
} from 'react-icons/hi';

import QuoteModal from '@/components/modals/QuoteModal';
import CTASection from '@/components/pages/services/CTASection';
import ServiceModal from '@/components/pages/services/ServiceModal';
import ServicesGrid from '@/components/pages/services/ServicesGrid';
import ServicesHero from '@/components/pages/services/ServicesHero';
import WhyChooseUs from '@/components/pages/services/WhyChooseUs';
import ProcessSection from '@/components/sections/ProcessSection';
import StatsSection from '@/components/sections/StatsSection';
import servicesContent from '@/content/services/en/content.json';
import { createProcessConfig, createStatsConfig } from '@/lib/section-configs';
import type { Service } from '@/types';

const iconMap = {
  FaDesktop,
  FaMobile,
  FaShoppingCart,
  FaCloud,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaClock,
  FaUsers,
  HiSparkles,
  HiLightBulb,
  HiTrendingUp,
  HiShieldCheck,
};

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<Service | null>(null);
  const [modalOrigin, setModalOrigin] = useState({ x: 0, y: 0 });

  // Convert content with string icons to React component icons
  const heroServices = servicesContent.hero.services.map((service) => ({
    ...service,
    icon: iconMap[service.icon as keyof typeof iconMap],
  }));

  const detailedServices = servicesContent.detailedServices.map((service) => ({
    ...service,
    icon: iconMap[service.icon as keyof typeof iconMap],
  }));

  const whyChooseUs = servicesContent.whyChooseUs.items.map((item) => ({
    ...item,
    icon: iconMap[item.icon as keyof typeof iconMap],
  }));

  const stats = servicesContent.stats.items;

  const handleViewDetails = (
    service: Service,
    origin: { x: number; y: number },
  ) => {
    setModalOrigin(origin);
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleGetQuote = (service: Service) => {
    setQuoteService(service);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className='relative overflow-hidden'>
      <ServicesHero
        heroServices={heroServices}
        detailedServices={detailedServices}
        onViewDetails={handleViewDetails}
        onGetQuote={handleGetQuote}
      />

      <StatsSection
        {...createStatsConfig({
          stats,
          title: servicesContent.stats.title,
          subtitle: servicesContent.stats.description,
        })}
      />

      <ServicesGrid
        detailedServices={detailedServices}
        onViewDetails={handleViewDetails}
        onGetQuote={handleGetQuote}
      />

      <ProcessSection
        {...createProcessConfig({
          processSteps: servicesContent.process.steps,
          title: servicesContent.process.title,
          subtitle: servicesContent.process.description,
        })}
      />

      <WhyChooseUs whyChooseUs={whyChooseUs} />

      <CTASection />

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
        modalOrigin={modalOrigin}
        onGetQuote={handleGetQuote}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        service={quoteService}
      />
    </div>
  );
};

export default ServicesPage;
