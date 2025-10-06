'use client';

import './StatSection.scss';

const StatSection = () => {
  return (
    <section className="stats" aria-label="our stats">
      <div className="container">
        <ul
          className="stats-card has-bg-image"
          style={{ backgroundImage: "url('./assets/images/stats-bg.jpg')" }}
        >
          <li>
            <p className="card-text">
              <span className="h1">7518</span>

              <span className="span">Completed Projects</span>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">3472</span>

              <span className="span">Happy Customers</span>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">2184</span>

              <span className="span">Expert Employees</span>
            </p>
          </li>

          <li>
            <p className="card-text">
              <span className="h1">4523</span>

              <span className="span">Awards Won</span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default StatSection;
