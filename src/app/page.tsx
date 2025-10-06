import { Metadata } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/home/HeroSection';
import ServiceSection from '@/components/sections/home/ServiceSection';
import AboutSection from '@/components/sections/home/AboutSection';
import FeatureSection from '@/components/sections/home/FeatureSection';

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
      </article>
    </Layout>
  );
}
