'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './BlogHeroSection.scss';

const BlogHeroSection = () => {
  return (
    <motion.section
      className="page-hero blog-hero has-bg-image"
      aria-label="Agency blog"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={staggerContainer(0.2, 0.12)}
    >
      <motion.div
        className="container blog-hero__content"
        variants={staggerContainer(0.16, 0.18)}
      >
        <motion.p
          className="section-subtitle"
          variants={fadeIn('up', 18, 0.35)}
        >
          Ideas & insights
        </motion.p>
        <motion.h1 className="h1 page-title" variants={fadeIn('up', 26, 0.45)}>
          Stories from the product teams shipping what’s next.
        </motion.h1>
        <motion.p className="section-text" variants={fadeIn('up', 26, 0.55)}>
          Practical playbooks, trend analysis, and field notes to help you{' '}
          launch with confidence and iterate with purpose.
        </motion.p>

        <motion.nav
          className="breadcrumb"
          aria-label="Breadcrumb"
          variants={fadeInScale(0.55, 0.7)}
        >
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            Blog
          </span>
        </motion.nav>
      </motion.div>
    </motion.section>
  );
};

export default BlogHeroSection;
