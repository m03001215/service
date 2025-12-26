'use client';

import Image from 'next/image';

import './FeatureSection.scss';

const FeatureSection = () => {
  return (
    <section className="section feature" aria-labelledby="feature-label">
      <div className="container">
        <figure className="feature-banner">
          <Image
            src="/assets/images/feature-banner.png"
            width={800}
            height={531}
            alt="feature banner"
            className="w-100"
            loading="lazy"
          />
        </figure>

        <div className="feature-content">
          <p className="section-subtitle" id="feautre-label">
            Our Technologies
          </p>

          <h2 className="h2 section-title">
            Comprehensive trading platforms and development technologies.
          </h2>

          <p className="section-text">
            We work with all major trading platforms and modern development
            technologies to deliver cutting-edge solutions for algorithmic
            trading, web applications, and mobile development.
          </p>

          <ul className="feature-list">
            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  MetaTrader 4/5 (MQL4/MQL5) - Expert Advisors, Indicators &
                  Scripts
                </span>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  TradingView PineScript - Custom Indicators & Strategies
                </span>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  NinjaTrader & Python - Advanced Trading Systems & Backtesting
                </span>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  Web & Mobile Development - Full-Stack Applications & APIs
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
