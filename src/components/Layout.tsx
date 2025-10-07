'use client';

import { useEffect } from 'react';

import type { LayoutProps } from '@/types';

import { useScroll } from '../hooks/useScroll';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  const { scrollY, isAtTop } = useScroll();

  // Add smooth scroll behavior and manage body classes based on scroll
  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add/remove scroll-based classes to body
    if (isAtTop) {
      document.body.classList.add('at-top');
      document.body.classList.remove('scrolled');
    } else {
      document.body.classList.remove('at-top');
      document.body.classList.add('scrolled');
    }

    // Add scroll position data attribute for CSS targeting
    document.body.setAttribute('data-scroll-y', scrollY.toString());

    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, [scrollY, isAtTop]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
