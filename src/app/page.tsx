import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import AboutSection from '@/components/sections/home/AboutSection';
import CTASection from '@/components/sections/home/CTASection';
import HeroSection from '@/components/sections/home/HeroSection';
import ServiceSection from '@/components/sections/home/ServiceSection';

// eslint-disable-next-line sonarjs/no-commented-code
// import FeatureSection from '@/components/sections/home/FeatureSection';
// import StatSection from '@/components/sections/home/StatSection';
// import ProjectSection from '@/components/sections/home/ProjectSection';

export const metadata: Metadata = {
  title: 'Greenbillion • Algorithmic Trading',
  description:
    'Partner with Greenbillion to develop and implement algorithmic trading strategies.',
  openGraph: {
    title: 'Greenbillion • Algorithmic Trading',
    description:
      'Partner with Greenbillion to develop and implement algorithmic trading strategies.',
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
        {/* <FeatureSection /> */}
        {/* <StatSection /> */}
        {/* <ProjectSection /> */}
        <CTASection />
      </article>
    </Layout>
  );
}
