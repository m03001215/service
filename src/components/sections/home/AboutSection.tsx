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
            We bring solutions to make life easier for our clients.
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

                    <span className="span h5">Professional Design</span>
                  </button>
                </h3>

                <p className="accordion-content">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
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

                    <span className="span h5">Top-Notch Support</span>
                  </button>
                </h3>

                <p className="accordion-content">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
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

                    <span className="span h5">Exclusive Assets</span>
                  </button>
                </h3>

                <p className="accordion-content">
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Cras mattis consectetur purus sit amet fermentum. Praesent
                  commodo cursus magna, vel.
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
