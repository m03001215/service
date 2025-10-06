'use client';

import Image from 'next/image';

import './ProjectSection.scss';

const ProjectSection = () => {
  return (
    <section className="section project" aria-labelledby="project-label">
      <div className="container">
        <p className="section-subtitle" id="project-label">
          Case Studies
        </p>

        <h2 className="h2 section-title">
          Check out some of our awesome projects with creative ideas and great
          design.
        </h2>

        <ul className="grid-list">
          <li>
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={
                  { '--width': '560', '--height': '350' } as React.CSSProperties
                }
              >
                <Image
                  src="/assets/images/blog-1.jpg"
                  width={560}
                  height={350}
                  alt="Ligula tristique quis risus"
                  className="img-cover"
                  loading="lazy"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="project-ligula.html" className="card-title">
                    Ligula tristique quis risus
                  </a>
                </h3>

                <p className="card-text">
                  A growth-stage SaaS team partnered with Adex to overhaul
                  onboarding, increasing activation by 32% with a guided setup
                  and behavioral messaging.
                </p>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline" aria-hidden={true} />

                    <time className="meta-text" dateTime="2023-10-14">
                      14 Oct 2023
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <ion-icon name="document-text-outline" aria-hidden={true} />

                    <span className="meta-text">SaaS Platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={
                  { '--width': '560', '--height': '350' } as React.CSSProperties
                }
              >
                <Image
                  src="/assets/images/blog-2.jpg"
                  width={560}
                  height={350}
                  alt="Nullam id dolor elit id nibh"
                  className="img-cover"
                  loading="lazy"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="project-nullam.html" className="card-title">
                    Nullam id dolor elit id nibh
                  </a>
                </h3>

                <p className="card-text">
                  We shaped a headless commerce experience that launched three
                  localized storefronts in under six months with zero critical
                  defects.
                </p>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline" aria-hidden={true} />

                    <time className="meta-text" dateTime="2024-03-29">
                      29 Mar 2024
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <ion-icon name="document-text-outline" aria-hidden={true} />

                    <span className="meta-text">Retail</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={
                  { '--width': '560', '--height': '350' } as React.CSSProperties
                }
              >
                <Image
                  src="/assets/images/blog-3.jpg"
                  width={560}
                  height={350}
                  alt="Ultricies fusce porta elit"
                  className="img-cover"
                  loading="lazy"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="project-ultricies.html" className="card-title">
                    Ultricies fusce porta elit
                  </a>
                </h3>

                <p className="card-text">
                  Medisight partnered with Adex to unify clinician workflows,
                  delivering predictive insights with 95% alert accuracy across
                  42 hospitals.
                </p>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline" aria-hidden={true} />

                    <time className="meta-text" dateTime="2024-01-08">
                      08 Jan 2024
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <ion-icon name="document-text-outline" aria-hidden={true} />

                    <span className="meta-text">Health Tech</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure
                className="card-banner img-holder"
                style={
                  { '--width': '560', '--height': '350' } as React.CSSProperties
                }
              >
                <Image
                  src="/assets/images/blog-4.jpg"
                  width={560}
                  height={350}
                  alt="Habit-forming productivity app"
                  className="img-cover"
                  loading="lazy"
                />
              </figure>

              <div className="card-content">
                <h3 className="h3">
                  <a href="project-habit.html" className="card-title">
                    Habit-forming productivity app
                  </a>
                </h3>

                <p className="card-text">
                  Ritualist Labs partnered with Adex to launch a personalization
                  engine powering 1.2M daily streaks with adaptive routines and
                  lifecycle automation.
                </p>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon name="calendar-outline" aria-hidden={true} />

                    <time className="meta-text" dateTime="2023-06-02">
                      02 Jun 2023
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <ion-icon
                      name="phone-portrait-outline"
                      aria-hidden={true}
                    />

                    <span className="meta-text">Mobile</span>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
