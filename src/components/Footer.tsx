'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import type { SocialLink, NewsletterFormData } from '@/types';
import './Footer.scss';

// Validation schema
const newsletterSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
    .trim(),
});

const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const socialLinks: SocialLink[] = [
    { href: 'https://facebook.com', icon: 'logo-facebook', label: 'Facebook' },
    { href: 'https://twitter.com', icon: 'logo-twitter', label: 'Twitter' },
    { href: 'https://dribbble.com', icon: 'logo-dribbble', label: 'Dribbble' },
    {
      href: 'https://instagram.com',
      icon: 'logo-instagram',
      label: 'Instagram',
    },
    { href: 'https://youtube.com', icon: 'logo-youtube', label: 'YouTube' },
  ];

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // Handle newsletter subscription logic here
      // Example: await subscribeToNewsletter(data.email);

      // Simulate API call with the email data
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form on successful submission
      reset();

      // You can add success notification here
      alert(`Successfully subscribed ${data.email} to newsletter!`);
    } catch (error) {
      // You can add error notification here
      console.error('Newsletter subscription failed:', error);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="footer">
      <div className="container grid-list">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Image
              src="/assets/images/logo-light.svg"
              width={74}
              height={24}
              alt="Adex home"
            />
          </Link>

          <p className="footer-text">
            &copy; 2022 codewithsadee. <br /> All rights reserved.
          </p>

          <ul className="social-list">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link
                  href={social.href}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ion-icon name={social.icon}></ion-icon>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Get in Touch</p>
          </li>

          <li>
            <address className="footer-text">
              Moonshine St. 14/05 Light City, London, United Kingdom
            </address>
          </li>

          <li>
            <Link href="mailto:info@email.com" className="footer-link">
              info@email.com
            </Link>
          </li>

          <li>
            <Link href="tel:001234567890" className="footer-link">
              00 (123) 456 78 90
            </Link>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Learn More</p>
          </li>

          <li>
            <Link href="/about" className="footer-link">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/about#story" className="footer-link">
              Our Story
            </Link>
          </li>

          <li>
            <Link href="/services" className="footer-link">
              Services
            </Link>
          </li>

          <li>
            <Link href="/projects" className="footer-link">
              Projects
            </Link>
          </li>

          <li>
            <Link href="/terms" className="footer-link">
              Terms of Use
            </Link>
          </li>

          <li>
            <Link href="/privacy" className="footer-link">
              Privacy Policy
            </Link>
          </li>
        </ul>

        <div className="footer-list">
          <p className="h4 footer-list-title">Our Newsletter</p>

          <p className="footer-text">
            Subscribe to our newsletter to get our news & deals delivered to
            you.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="input-wrapper">
            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                className={`input-field ${errors.email ? 'error' : ''}`}
                {...register('email')}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Joining...' : 'Join'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
