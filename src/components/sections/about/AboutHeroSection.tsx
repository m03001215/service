'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, staggerContainer } from '@/utils/motion';

import './AboutHeroSection.scss';

const AboutHeroSection = () => {
  return (
    <motion.section
      className="page-hero about-hero has-bg-image"
      aria-label="About Adex"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={staggerContainer(0.18, 0.05)}
    >
      <div className="overlay" aria-hidden="true" />

      <motion.div className="container" variants={staggerContainer(0.18, 0.1)}>
        <motion.p variants={fadeIn('up', 24, 0.5)} className="section-subtitle">
          About Adex
        </motion.p>
        <motion.h1 variants={fadeIn('up', 24, 0.6)} className="h1 page-title">
          Where strategy meets creativity.
        </motion.h1>
        <motion.p variants={fadeIn('up', 28, 0.65)} className="section-text">
          We’re a collective of strategists, designers, and engineers obsessed
          with transforming ambitious ideas into lovable digital products.
        </motion.p>

        <motion.nav
          className="breadcrumb"
          aria-label="Breadcrumb"
          variants={fadeIn('up', 20, 0.7)}
        >
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            About
          </span>
        </motion.nav>
      </motion.div>
    </motion.section>
  );
};

export default AboutHeroSection;
