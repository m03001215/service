'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, staggerContainer } from '@/utils/motion';

import './AboutCTASection.scss';

const AboutCTASection = () => {
  return (
    <motion.section
      className="about-cta"
      aria-label="Call to action"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.2, 0.1)}>
        <motion.div className="cta-content" variants={fadeIn('up', 22, 0.55)}>
          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 24, 0.6)}
          >
            Bring our experts into your next planning session.
          </motion.h2>
          <motion.p className="section-text" variants={fadeIn('up', 20, 0.68)}>
            Share a brief on what you’re building and we’ll assemble a bespoke
            team to help you move from vision to delivery.
          </motion.p>
        </motion.div>

        <motion.div variants={fadeIn('up', 20, 0.75)}>
          <Link href="/contact" className="btn btn-primary">
            Schedule a chat
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutCTASection;
