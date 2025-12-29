import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section
      className="page-hero contact-hero has-bg-image"
      aria-label="Contact Greenbillion"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      <div className="overlay" aria-hidden="true" />

      <div className="container">
        <p className="section-subtitle">Let’s collaborate</p>
        <h1 className="h1 page-title">
          We’d love to hear about your next challenge.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
