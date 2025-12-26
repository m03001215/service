'use client';

import Image from 'next/image';

import { useAccordion } from '../../../hooks/useAccordion';

import './AboutSection.scss';

const AboutSection = () => {
  const { toggleAccordion, isExpanded } = useAccordion('professional-design');

  return (
    <section className="about" aria-labelledby="about-label">
      <div className="container">
        <figure className="about-banner">
          <Image
            src="/assets/images/about-banner.png"
            width={800}
            height={580}
            alt="about banner"
            className="w-100"
            priority
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle" id="about-label">
            Why Choose Us?
          </p>

          <h2 className="h2 section-title">
            Algorithmic trading solutions and web & mobile development service
            for your success.
          </h2>

          <ul>
            <li className="about-item">
              <div
                className={`accordion-card ${isExpanded('professional-design') ? 'expanded' : ''}`}
                data-accordion
              >
                <h3 className="card-title">
                  <button
                    className="accordion-btn"
                    onClick={() => toggleAccordion('professional-design')}
                    data-accordion-btn
                  >
                    <ion-icon
                      name="chevron-down-outline"
                      aria-hidden={true}
                      class="down"
                    />

                    <span className="span h5">Multi-Platform Expertise</span>
                  </button>
                </h3>

                <p className="accordion-content">
                  We specialize in MetaTrader (MQL4/MQL5), TradingView
                  (PineScript), NinjaTrader (NinjaScript), QuantConnect, Python,
                  and other leading trading platforms. Our team delivers custom
                  Expert Advisors, indicators, strategies, and automated trading
                  systems across all major platforms.
                </p>
              </div>
            </li>

            <li className="about-item">
              <div
                className={`accordion-card ${isExpanded('top-notch-support') ? 'expanded' : ''}`}
                data-accordion
              >
                <h3 className="card-title">
                  <button
                    className="accordion-btn"
                    onClick={() => toggleAccordion('top-notch-support')}
                    data-accordion-btn
                  >
                    <ion-icon
                      name="chevron-down-outline"
                      aria-hidden={true}
                      class="down"
                    />

                    <span className="span h5">Full-Stack Development</span>
                  </button>
                </h3>

                <p className="accordion-content">
                  Beyond trading systems, we build robust web and mobile
                  applications for several industries including trading,
                  finance, sports, healthcare, and more.
                </p>
              </div>
            </li>

            <li className="about-item">
              <div
                className={`accordion-card ${isExpanded('exclusive-assets') ? 'expanded' : ''}`}
                data-accordion
              >
                <h3 className="card-title">
                  <button
                    className="accordion-btn"
                    onClick={() => toggleAccordion('exclusive-assets')}
                    data-accordion-btn
                  >
                    <ion-icon
                      name="chevron-down-outline"
                      aria-hidden={true}
                      class="down"
                    />

                    <span className="span h5">Proven Track Record</span>
                  </button>
                </h3>

                <p className="accordion-content">
                  With extensive experience in algorithmic trading and software
                  development, we&apos;ve helped traders and institutions build
                  profitable systems. Our solutions are tested, optimized, and
                  backed by comprehensive support and documentation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
