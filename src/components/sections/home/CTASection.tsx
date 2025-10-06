'use client';

import Link from 'next/link';

import './CTASection.scss';

const CTASection = () => {
  return (
    <section className="cta" aria-label="call to action">
      <div className="container">
        <h2 className="h2 section-title">
          Join our community by using our services and grow your business.
        </h2>

        <Link href="/contact#quote" className="btn btn-primary">
          Try it For Free
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
