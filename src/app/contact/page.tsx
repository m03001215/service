import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import ConnectSection from '@/components/sections/contact/ConnectSection';
import FAQSection from '@/components/sections/contact/FAQSection';
import HeroSection from '@/components/sections/contact/HeroSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Adex Digital Studio. Let's discuss your next digital project.",
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
