import Link from 'next/link';

import './AboutCTASection.scss';

const AboutCTASection = () => {
  return (
    <section className="about-cta" aria-label="Call to action">
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">
            Bring our experts into your next planning session.
          </h2>
          <p className="section-text">
            Share a brief on what you’re building and we’ll assemble a bespoke
            team to help you move from vision to delivery.
          </p>
        </div>

        <Link href="/contact" className="btn btn-primary">
          Schedule a chat
        </Link>
      </div>
    </section>
  );
};

export default AboutCTASection;
