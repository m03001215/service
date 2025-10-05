'use client';

import { useEffect } from 'react';
import { useScroll } from '../hooks/useScroll';
import Header from './Header';
import Footer from './Footer';
import { LayoutProps } from '@/types';

export default function Layout({ children, showPreloader = false }: LayoutProps) {
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