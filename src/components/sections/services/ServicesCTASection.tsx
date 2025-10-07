'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServicesCTASection.scss';

const ServicesCTASection = () => {
  return (
    <motion.section
      className="services-cta"
      aria-label="Call to action"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div className="container" variants={staggerContainer(0.16, 0.12)}>
        <motion.p className="eyebrow" variants={fadeIn('up', 14, 0.35)}>
          Ready when you are
        </motion.p>
        <motion.h2
          className="h2 section-title"
          variants={fadeIn('up', 20, 0.45)}
        >
          Let’s shape your next release together.
        </motion.h2>
        <motion.p className="section-text" variants={fadeIn('up', 20, 0.5)}>
          Share a few details about your product vision and we’ll align you with
          a curated strike team to launch within weeks—not quarters.
        </motion.p>
        <motion.div variants={fadeInScale(0.5, 0.6)}>
          <Link href="/contact#quote" className="btn btn-primary">
            Start a project
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesCTASection;
