'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectsHeroSection.scss';

const ProjectsHeroSection = () => {
  return (
    <motion.section
      className="page-hero projects-hero has-bg-image"
      aria-label="Case studies"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.55 }}
      variants={staggerContainer(0.2, 0.12)}
    >
      <motion.div className="container" variants={staggerContainer(0.16, 0.16)}>
        <motion.p
          className="section-subtitle"
          variants={fadeIn('up', 20, 0.45)}
        >
          Case studies
        </motion.p>
        <motion.h1 className="h1 page-title" variants={fadeIn('up', 26, 0.55)}>
          Proof that bold ideas can scale beautifully.
        </motion.h1>
        <motion.p className="section-text" variants={fadeIn('up', 28, 0.65)}>
          Explore a selection of collaborative launches spanning fintech, SaaS,
          health tech, and the future of work.
        </motion.p>

        <motion.nav
          className="breadcrumb"
          aria-label="Breadcrumb"
          variants={fadeInScale(0.55, 0.75)}
        >
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            Projects
          </span>
        </motion.nav>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsHeroSection;
