'use client';

import Link from 'next/link';

import './ContactConnectSection.scss';

const ContactConnectSection = () => {
  return (
    <section
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-card">
          <p className="section-subtitle" id="contact-title">
            Say hello
          </p>
          <h2 className="h2 section-title">Connect with the Adex team.</h2>
          <p className="section-text contact-intro">
            Prefer email? Reach out at{' '}
            <Link href="mailto:info@email.com" className="link-inline">
              info@email.com
            </Link>{' '}
            or call us directly at{' '}
            <Link href="tel:001234567890" className="link-inline">
              00 (123) 456 78 90
            </Link>
            . Our global studio spans three continents with specialists ready to
            join your next build.
          </p>

          <ul className="contact-list">
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="time-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Hours</p>
                <p className="card-text">Mon – Fri, 8:30 AM to 7:00 PM GMT</p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="globe-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Locations</p>
                <p className="card-text">
                  London • Berlin • Singapore • Remote
                </p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="chatbubbles-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Slack community</p>
                <p className="card-text">
                  Join practitioners swapping learnings in real time.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="contact-form"
          id="quote"
          aria-describedby="contact-title"
          onSubmit={event => event.preventDefault()}
        >
          <div className="form-header">
            <h3 className="h3">Start a project conversation</h3>
            <p className="section-text">
              Tell us about your product, timeline, and the outcomes you’re
              targeting.
            </p>
            <p className="response-time">
              We respond within one business day. Need a faster kickoff? Leave a
              note below and we’ll prioritize your request.
            </p>
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label className="form-label" htmlFor="contact-name">
                Full name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Jane Doe"
                required
                className="input-field"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-email">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="you@email.com"
                required
                className="input-field"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-company">
                Company
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                placeholder="Your company"
                className="input-field"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-budget">
                Estimated budget
              </label>
              <select
                id="contact-budget"
                name="budget"
                className="input-field"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="50-100">$50k – $100k</option>
                <option value="100-250">$100k – $250k</option>
                <option value="250-500">$250k – $500k</option>
                <option value="500+">$500k+</option>
              </select>
            </div>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="contact-details">
              Project details
            </label>
            <textarea
              id="contact-details"
              name="details"
              rows={4}
              placeholder="Share context, goals, and key milestones"
              className="input-field"
              required
            ></textarea>
          </div>

          <label className="checkbox" htmlFor="contact-nda">
            <input type="checkbox" name="nda" value="yes" id="contact-nda" />
            <span>I’d like to start with an NDA.</span>
          </label>

          <button type="submit" className="btn btn-primary">
            Submit request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactConnectSection;
