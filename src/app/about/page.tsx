import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Adex Digital Studio - our story, mission, and the team behind our success.',
};

export default function About() {
  return (
    <Layout>
      <article>
        <section className="section page-hero has-bg-image" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
          <div className="container">
            <h1 className="h1 page-hero-title">About Us</h1>
            <p className="section-text">
              Learn more about our journey, values, and the dedicated team behind Adex Digital Studio.
            </p>
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span>/</span>
              <span className="breadcrumb-current">About</span>
            </nav>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-content">
              <p className="section-subtitle">Why Choose Us?</p>
              <h2 className="h2 section-title">
                We bring solutions to make life easier for our clients.
              </h2>
              <p className="section-text">
                At Adex Digital Studio, we specialize in crafting exceptional digital experiences that drive growth and engagement. Our team combines creativity with technical expertise to deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}