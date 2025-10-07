'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectsCTASection.scss';

const ProjectsCTASection = () => {
  return (
    <motion.section
      className="projects-cta"
      aria-label="Call to action"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
    >
      <motion.div className="container" variants={staggerContainer(0.16, 0.12)}>
        <motion.p className="eyebrow" variants={fadeIn('up', 14, 0.4)}>
          Let’s collaborate
        </motion.p>
        <motion.h2
          className="h2 section-title"
          variants={fadeIn('up', 20, 0.5)}
        >
          Curious how these wins translate to your roadmap?
        </motion.h2>
        <motion.p className="section-text" variants={fadeIn('up', 20, 0.58)}>
          Share your aspirations and we’ll assemble a dedicated squad to explore
          pathways, prototypes, and ROI in a fast-moving working session.
        </motion.p>
        <motion.div variants={fadeInScale(0.55, 0.7)}>
          <Link href="/contact#quote" className="btn btn-primary">
            Book a working session
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsCTASection;
