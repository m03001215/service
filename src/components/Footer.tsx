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
    // register,
    // handleSubmit,
    // reset,
    // formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  });

  const socialLinks: SocialLink[] = [
    {
      href: 'mailto:dohn2050@gmail.com',
      icon: 'mail-outline',
      label: 'GMail',
    },
    {
      href: 'https://www.linkedin.com/in/dohn-galzote-7030bb396',
      icon: 'logo-linkedin',
      label: 'LinkedIn',
    },
    {
      href: 'https://t.me/greenbillion9',
      icon: 'paper-plane-outline',
      label: 'Telegram',
    },
    {
      href: 'https://discord.gg/CTvSKCbfCt',
      icon: 'logo-discord',
      label: 'Discord',
    },
    {
      href: 'https://www.fiverr.com/s/8zZzXpv',
      icon: 'briefcase-outline',
      label: 'Fiverr',
    },
  ];

  return (
    <footer className="footer">
      <div className="container grid-list">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Image
              src="/assets/images/logo-light.svg"
              width={165}
              height={24}
              alt="Greenbillion home"
            />
          </Link>

          <p className="footer-text">
            &copy; 2025 Greenbillion <br /> All rights reserved.
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

        {/* <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Get in Touch</p>
          </li>

          <li>
            <address className="footer-text">
              Angeles, Pampanga, Philippines
            </address>
          </li>

          <li>
            <Link href="mailto:info@email.com" className="footer-link">
              dohn2050@gmail.com
            </Link>
          </li>

          <li>
            <Link href="tel:001234567890" className="footer-link">
              +1 (437) 886-1160
            </Link>
          </li>
        </ul> */}

        {/* <ul className="footer-list">
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
        </ul> */}

        {/* <div className="footer-list">
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
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
