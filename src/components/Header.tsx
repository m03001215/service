'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink, SocialLink } from '@/types';
import styles from './Header.module.scss';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks: SocialLink[] = [
    { href: 'https://twitter.com', icon: 'logo-twitter', label: 'Twitter' },
    { href: 'https://facebook.com', icon: 'logo-facebook', label: 'Facebook' },
    { href: 'https://dribbble.com', icon: 'logo-dribbble', label: 'Dribbble' },
    { href: 'https://instagram.com', icon: 'logo-instagram', label: 'Instagram' },
    { href: 'https://youtube.com', icon: 'logo-youtube', label: 'YouTube' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('nav-active');
    } else {
      document.body.classList.remove('nav-active');
    }

    return () => {
      document.body.classList.remove('nav-active');
    };
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.active : ''}`}
      data-header
    >
      <div className="container">
        <Link href="/" className={styles.logo}>
          <Image
            src="/assets/images/logo-light.svg"
            width={74}
            height={24}
            alt="Adex home"
            className={styles.logoLight}
          />
          <Image
            src="/assets/images/logo-dark.svg"
            width={74}
            height={24}
            alt="Adex home"
            className={styles.logoDark}
          />
        </Link>

        <nav 
          className={`${styles.navbar} ${isNavOpen ? styles.active : ''}`}
          data-navbar
        >
          <div className={styles.navbarTop}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/assets/images/logo-light.svg"
                width={74}
                height={24}
                alt="Adex home"
              />
            </Link>

            <button
              className={styles.navCloseBtn}
              aria-label="close menu"
              onClick={toggleNav}
            >
              <ion-icon name="close-outline" aria-hidden={true}></ion-icon>
            </button>
          </div>

          <ul className={styles.navbarList}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`${styles.navbarLink} ${pathname === link.href ? styles.active : ''}`}
                  onClick={closeNav}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.wrapper}>
            <Link href="mailto:info@email.com" className={styles.contactLink}>
              info@email.com
            </Link>
            <Link href="tel:001234567890" className={styles.contactLink}>
              00 (123) 456 78 90
            </Link>
          </div>

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
        </nav>

        <Link href="/contact#quote" className="btn btn-primary">
          Free Trial
        </Link>

        <button
          className={styles.navOpenBtn}
          aria-label="open menu"
          onClick={toggleNav}
        >
          <ion-icon name="menu-outline" aria-hidden={true}></ion-icon>
        </button>

        <div
          className={`${styles.overlay} ${isNavOpen ? styles.active : ''}`}
          onClick={closeNav}
          data-overlay
        ></div>
      </div>
    </header>
  );
};

export default Header;