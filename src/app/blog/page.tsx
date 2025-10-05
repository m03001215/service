import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest insights, trends, and tips from our digital experts.',
};

export default function Blog() {
  return (
    <Layout>
      <article>
        <section className="section page-hero has-bg-image" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
          <div className="container">
            <h1 className="h1 page-hero-title">Our Blog</h1>
            <p className="section-text">
              Insights, trends, and expert advice from the digital world.
            </p>
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span>/</span>
              <span className="breadcrumb-current">Blog</span>
            </nav>
          </div>
        </section>
      </article>
    </Layout>
  );
}