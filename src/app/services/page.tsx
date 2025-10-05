import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our comprehensive range of digital services designed to help your business thrive online.',
};

export default function Services() {
  return (
    <Layout>
      <article>
        <section className="section page-hero has-bg-image" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
          <div className="container">
            <h1 className="h1 page-hero-title">Our Services</h1>
            <p className="section-text">
              Comprehensive digital solutions tailored to your business needs.
            </p>
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span>/</span>
              <span className="breadcrumb-current">Services</span>
            </nav>
          </div>
        </section>
      </article>
    </Layout>
  );
}