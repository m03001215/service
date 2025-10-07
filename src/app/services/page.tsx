import { Metadata } from 'next';
import Layout from '@/components/Layout';
import ServicesCTASection from '@/components/sections/services/ServicesCTASection';
import ServicesFeatureSection from '@/components/sections/services/ServicesFeatureSection';
import ServicesHeroSection from '@/components/sections/services/ServicesHeroSection';
import ServiceOverviewSection from '@/components/sections/services/ServiceOverviewSection';
import ServicesProcessSection from '@/components/sections/services/ServicesProcessSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Discover our comprehensive range of digital services designed to help your business thrive online.',
};

export default function Services() {
  return (
    <Layout>
      <article className="services-page">
        <ServicesHeroSection />
        <ServiceOverviewSection />
        <ServicesProcessSection />
        <ServicesFeatureSection />
        <ServicesCTASection />
      </article>
    </Layout>
  );
}
