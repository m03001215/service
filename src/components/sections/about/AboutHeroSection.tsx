import Link from 'next/link';

import './AboutHeroSection.scss';

const AboutHeroSection = () => {
  return (
    <section
      className="page-hero about-hero has-bg-image"
      aria-label="About Adex"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      <div className="overlay" aria-hidden="true" />

      <div className="container">
        <p className="section-subtitle">About Adex</p>
        <h1 className="h1 page-title">Where strategy meets creativity.</h1>
        <p className="section-text">
          We’re a collective of strategists, designers, and engineers obsessed
          with transforming ambitious ideas into lovable digital products.
        </p>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            About
          </span>
        </nav>
      </div>
    </section>
  );
};

export default AboutHeroSection;
