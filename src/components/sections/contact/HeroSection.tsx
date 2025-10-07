import Link from 'next/link';

import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section
      className="page-hero contact-hero has-bg-image"
      aria-label="Contact Adex"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      <div className="overlay" aria-hidden="true" />

      <div className="container">
        <p className="section-subtitle">Let’s collaborate</p>
        <h1 className="h1 page-title">
          We’d love to hear about your next challenge.
        </h1>
        <p className="section-text">
          Share a few details about what you’re working on and we’ll align you
          with the right specialists within one business day.
        </p>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            Contact
          </span>
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;
