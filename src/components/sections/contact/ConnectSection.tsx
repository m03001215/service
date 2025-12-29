'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import type { ProjectContactFormData } from '@/types';

import './ConnectSection.scss';

// Validation schema
const projectContactSchema = yup.object().shape({
  name: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name must be at least 2 characters')
    .trim(),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .trim(),
  budget: yup
    .string()
    .required('Please select a budget range')
    .notOneOf([''], 'Please select a budget range'),
  details: yup
    .string()
    .required('Project details are required')
    .min(10, 'Please provide at least 10 characters of detail')
    .trim(),
  nda: yup.boolean().default(false),
});

const ConnectSection = () => {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProjectContactFormData>({
    resolver: yupResolver(projectContactSchema) as any,
    defaultValues: {
      name: '',
      email: '',
      budget: '',
      details: '',
      nda: false,
    },
  });

  const onSubmit = async (data: ProjectContactFormData) => {
    try {
      setSubmitStatus({ type: null, message: '' });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit request');
      }

      // Reset form on successful submission
      reset();
      setSubmitStatus({
        type: 'success',
        message:
          result.message ||
          `Thank you ${data.name}! Your request has been submitted successfully. We will contact you at ${data.email} within one business day.`,
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to submit request. Please try again.',
      });
    }
  };
  return (
    <section
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div className="contact-card">
          <h2 className="h2 section-title">
            Connect with the Greenbillion team.
          </h2>
          <p className="section-text contact-intro">
            Get in touch with us through any of the channels below. We&apos;re
            here to help with your algorithmic trading and web & mobile
            applications development needs.
          </p>

          <ul className="contact-list">
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Schedule Meeting</p>
                <p className="card-text">
                  <Link
                    href="https://calendar.app.google/H9cQTgVuuWMgCb6T8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
                  >
                    Schedule meeting with Google Calendar
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="mail-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Gmail</p>
                <p className="card-text">
                  <Link
                    href="mailto:dohn2050@gmail.com"
                    className="link-inline"
                  >
                    dohn2050@gmail.com
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="logo-linkedin"></ion-icon>
              </div>
              <div>
                <p className="card-title">LinkedIn</p>
                <p className="card-text">
                  <Link
                    href="https://www.linkedin.com/in/dohn-galzote-7030bb396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
                  >
                    Connect on LinkedIn
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Telegram</p>
                <p className="card-text">
                  <Link
                    href="https://t.me/greenbillion9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
                  >
                    @greenbillion9
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="logo-discord"></ion-icon>
              </div>
              <div>
                <p className="card-title">Discord</p>
                <p className="card-text">
                  <Link
                    href="https://discord.gg/CTvSKCbfCt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
                  >
                    Join our Discord server
                  </Link>
                </p>
              </div>
            </li>
            <li>
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>
              <div>
                <p className="card-title">Fiverr</p>
                <p className="card-text">
                  <Link
                    href="https://www.fiverr.com/s/8zZzXpv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-inline"
                  >
                    Connect on Fiverr
                  </Link>
                </p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="contact-form"
          id="quote"
          aria-describedby="contact-title"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-header">
            <h3 className="h3">Start a project conversation</h3>
            <p className="section-text">
              Tell us about your project, timeline, and the outcomes you’re
              targeting.
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
                placeholder="Jane Doe"
                className={`input-field ${errors.name ? 'error' : ''}`}
                {...register('name')}
              />
              {errors.name && (
                <span className="error-message">{errors.name.message}</span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-email">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                placeholder="you@email.com"
                className={`input-field ${errors.email ? 'error' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-budget">
                Estimated budget
              </label>
              <select
                id="contact-budget"
                className={`input-field ${errors.budget ? 'error' : ''}`}
                {...register('budget')}
              >
                <option value="">Choose an option</option>
                <option value="50-1000">$50 – $1000</option>
                <option value="1000-2000">$1000 – $2000</option>
                <option value="2000-5000">$2000 – $5000</option>
                <option value="5000+">$5000+</option>
              </select>
              {errors.budget && (
                <span className="error-message">{errors.budget.message}</span>
              )}
            </div>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="contact-details">
              Project details
            </label>
            <textarea
              id="contact-details"
              rows={4}
              placeholder="Share context, goals, and key milestones"
              className={`input-field ${errors.details ? 'error' : ''}`}
              {...register('details')}
            ></textarea>
            {errors.details && (
              <span className="error-message">{errors.details.message}</span>
            )}
          </div>

          {/* <label className="checkbox" htmlFor="contact-nda">
            <input type="checkbox" id="contact-nda" {...register('nda')} />
            <span>I&apos;d like to start with an NDA.</span>
          </label> */}

          {submitStatus.type && (
            <div
              className={`form-message ${
                submitStatus.type === 'success' ? 'success' : 'error'
              }`}
              role="alert"
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit request'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConnectSection;
