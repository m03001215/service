import { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our portfolio of successful digital projects and case studies.',
};

export default function Projects() {
  return (
    <Layout>
      <article>
        <section className="section page-hero has-bg-image" style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}>
          <div className="container">
            <h1 className="h1 page-hero-title">Our Projects</h1>
            <p className="section-text">
              Explore our portfolio of successful digital transformations.
            </p>
            <nav className="breadcrumb">
              <a href="/" className="breadcrumb-link">Home</a>
              <span>/</span>
              <span className="breadcrumb-current">Projects</span>
            </nav>
          </div>
        </section>
      </article>
    </Layout>
  );
}