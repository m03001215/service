import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import ConnectSection from '@/components/sections/contact/ConnectSection';
import FAQSection from '@/components/sections/contact/FAQSection';
import HeroSection from '@/components/sections/contact/HeroSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Greenbillion. Let's discuss your next algorithmic trading project.",
  openGraph: {
    title: 'Greenbillion • Algorithmic Trading',
    description:
      'Partner with Greenbillion to develop and implement algorithmic trading strategies.',
    images: ['/assets/images/hero-slide-1.jpg'],
  },
};

export default function Contact() {
  return (
    <Layout>
      <article className="contact-page">
        <HeroSection />
        <ConnectSection />
        <FAQSection />
      </article>
    </Layout>
  );
}
