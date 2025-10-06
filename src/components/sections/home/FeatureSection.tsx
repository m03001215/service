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
            Our Solutions
          </p>

          <h2 className="h2 section-title">
            We make your spending stress-free for you to have the perfect
            control.
          </h2>

          <p className="section-text">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus.
          </p>

          <ul className="feature-list">
            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  Aenean quam ornare. Curabitur blandit.
                </span>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  Nullam quis risus eget urna mollis ornare.
                </span>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  Etiam porta euismod malesuada mollis.
                </span>
              </div>
            </li>

            <li>
              <div className="feature-card">
                <div className="card-icon">
                  <ion-icon name="checkmark" aria-hidden={true} />
                </div>

                <span className="span">
                  Vivamus sagittis lacus vel augue rutrum.
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
