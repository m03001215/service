import { Metadata } from 'next';
import Layout from '@/components/Layout';
import ContactHeroSection from '@/components/sections/contact/ContactHeroSection';
import ContactConnectSection from '@/components/sections/contact/ContactConnectSection';
import ContactFAQSection from '@/components/sections/contact/ContactFAQSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Adex Digital Studio. Let's discuss your next digital project.",
};

export default function Contact() {
  return (
    <Layout>
      <article className="contact-page">
        <ContactHeroSection />
        <ContactConnectSection />
        <ContactFAQSection />
      </article>
    </Layout>
  );
}
