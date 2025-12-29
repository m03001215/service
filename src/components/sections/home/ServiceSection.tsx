'use client';

import Link from 'next/link';

import './ServiceSection.scss';

const ServiceSection = () => {
  return (
    <section className="section service" aria-labelledby="service-label">
      <div className="container">
        <p className="section-subtitle" id="service-label">
          Our Services
        </p>

        <h2 className="h2 section-title">
          Comprehensive trading solutions and web & mobile applications
          development services tailored to your needs.
        </h2>

        <ul className="grid-list">
          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="trending-up-outline" aria-hidden={true} />
              </div>

              <h3 className="h4 card-title">MetaTrader / MQL Development</h3>

              <p className="card-text">
                Custom MQL4/MQL5 Expert Advisors and Indicators for MT4/MT5.
                Backtesting, optimization, and automated trading solutions.
              </p>

              <Link href="contact" className="btn-text">
                <span className="span">Contact Us</span>

                <ion-icon name="arrow-forward-outline" aria-hidden={true} />
              </Link>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="bar-chart-outline" aria-hidden={true} />
              </div>

              <h3 className="h4 card-title">TradingView / Pine Script</h3>

              <p className="card-text">
                Custom Pine Script indicators and strategies for TradingView.
                Backtesting, alerts, webhooks, and automated trading solutions.
              </p>

              <Link href="contact" className="btn-text">
                <span className="span">Contact Us</span>

                <ion-icon name="arrow-forward-outline" aria-hidden={true} />
              </Link>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="analytics-outline" aria-hidden={true} />
              </div>

              <h3 className="h4 card-title">NinjaTrader Development</h3>

              <p className="card-text">
                Custom NinjaScript strategies, indicators, and add-ons for
                NinjaTrader. Advanced order management, backtesting, and
                automated trading solutions.
              </p>

              <Link href="contact" className="btn-text">
                <span className="span">Contact Us</span>

                <ion-icon name="arrow-forward-outline" aria-hidden={true} />
              </Link>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="server-outline" aria-hidden={true} />
              </div>

              <h3 className="h4 card-title">QuantConnect Development</h3>

              <p className="card-text">
                Algorithm development and strategy implementation on
                QuantConnect platform. Cloud-based backtesting, live trading,
                and quantitative research solutions.
              </p>

              <Link href="contact" className="btn-text">
                <span className="span">Contact Us</span>

                <ion-icon name="arrow-forward-outline" aria-hidden={true} />
              </Link>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="code-slash-outline" aria-hidden={true} />
              </div>

              <h3 className="h4 card-title">Python Trading Systems</h3>

              <p className="card-text">
                Advanced Python-based algorithmic trading systems, backtesting
                frameworks, and quantitative analysis tools for institutional
                traders.
              </p>

              <Link href="contact" className="btn-text">
                <span className="span">Contact Us</span>

                <ion-icon name="arrow-forward-outline" aria-hidden={true} />
              </Link>
            </div>
          </li>

          <li>
            <div className="service-card">
              <div className="card-icon">
                <ion-icon name="laptop-outline" aria-hidden={true} />
              </div>

              <h3 className="h4 card-title">Web & Mobile Development</h3>

              <p className="card-text">
                Modern web and mobile applications for several industries
                including trading, finance, sports, healthcare, and more.
              </p>

              <Link href="contact" className="btn-text">
                <span className="span">Contact Us</span>

                <ion-icon name="arrow-forward-outline" aria-hidden={true} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
