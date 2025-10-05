import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Adex Digital Studio. Let's discuss your next digital project.",
};

export default function Contact() {
  return (
    <Layout>
      <article>
        <section
          className="section page-hero has-bg-image"
          style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="h1 page-hero-title">Contact Us</h1>
            <p className="section-text">
              Ready to start your next project? Let&apos;s discuss how we can
              help.
            </p>
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">
                Home
              </a>
              <span>/</span>
              <span className="breadcrumb-current">Contact</span>
            </nav>
          </div>
        </section>
      </article>
    </Layout>
  );
}
