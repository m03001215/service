import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import AboutSection from '@/components/sections/home/AboutSection';
import CTASection from '@/components/sections/home/CTASection';
import FeatureSection from '@/components/sections/home/FeatureSection';
import HeroSection from '@/components/sections/home/HeroSection';
import ProjectSection from '@/components/sections/home/ProjectSection';
import ServiceSection from '@/components/sections/home/ServiceSection';
import StatSection from '@/components/sections/home/StatSection';

export const metadata: Metadata = {
  title: 'Adex • Digital Product Studio',
  description:
    'Partner with Adex to design standout digital products, launch faster, and grow sustainably.',
  openGraph: {
    title: 'Adex • Digital Product Studio',
    description:
      'Partner with Adex to design standout digital products, launch faster, and grow sustainably.',
    images: ['/assets/images/hero-slide-1.jpg'],
  },
};

export default function Home() {
  return (
    <Layout>
      <article>
        <HeroSection />
        <ServiceSection />
        <AboutSection />
        <FeatureSection />
        <StatSection />
        <ProjectSection />
        <CTASection />
      </article>
    </Layout>
  );
}
