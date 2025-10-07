'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServicesHeroSection.scss';

const ServicesHeroSection = () => {
  return (
    <motion.section
      className="page-hero services-hero has-bg-image"
      aria-label="Services"
      style={{ backgroundImage: "url('/assets/images/stats-bg.jpg')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
      variants={staggerContainer(0.18, 0.05)}
    >
      <div className="hero-overlay" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <motion.div className="container" variants={staggerContainer(0.16, 0.12)}>
        <motion.p
          className="section-subtitle"
          variants={fadeIn('up', 24, 0.45)}
        >
          What we deliver
        </motion.p>

        <motion.h1 className="h1 page-title" variants={fadeIn('up', 26, 0.55)}>
          End-to-end product partnerships tailored to your roadmap.
        </motion.h1>

        <motion.p className="section-text" variants={fadeIn('up', 28, 0.65)}>
          From discovery to scale, our blended teams plug directly into your
          workflows to ship meaningful outcomes.
        </motion.p>

        <motion.nav
          className="breadcrumb"
          aria-label="Breadcrumb"
          variants={fadeInScale(0.6, 0.75)}
        >
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            Services
          </span>
        </motion.nav>
      </motion.div>
    </motion.section>
  );
};

export default ServicesHeroSection;
