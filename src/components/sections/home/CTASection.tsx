'use client';

import Link from 'next/link';

import './CTASection.scss';

const CTASection = () => {
  return (
    <section className="cta" aria-label="call to action">
      <div className="container">
        <h2 className="h2 section-title">
          Ready to build your trading indicator or strategy?
        </h2>

        <Link href="/contact#quote" className="btn btn-primary">
          Get Started Today
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
