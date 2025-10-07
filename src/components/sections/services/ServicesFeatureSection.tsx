'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServicesFeatureSection.scss';

const features = [
  'Full-stack product delivery pods.',
  'Growth experimentation and analytics enablement.',
  'Secure DevOps and compliance automation.',
  'Lifecycle marketing and CRM orchestration.',
];

const ServicesFeatureSection = () => {
  return (
    <motion.section
      className="section services-feature"
      aria-labelledby="capability-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.2, 0.12)}>
        <motion.figure
          className="feature-banner"
          variants={fadeIn('right', 40, 0.45)}
        >
          <span className="glow" aria-hidden="true" />
          <Image
            src="/assets/images/feature-banner.png"
            width={800}
            height={531}
            alt="Feature capabilities"
            className="w-100"
            priority={false}
          />
        </motion.figure>

        <motion.div
          className="feature-content"
          variants={staggerContainer(0.16, 0.18)}
        >
          <motion.p
            className="section-subtitle"
            id="capability-title"
            variants={fadeIn('up', 14, 0.35)}
          >
            Platform expertise
          </motion.p>

          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 20, 0.45)}
          >
            Certified specialists across cloud, mobile, and web ecosystems.
          </motion.h2>

          <motion.p className="section-text" variants={fadeIn('up', 20, 0.55)}>
            We hand-pick Docker, Kubernetes, React, Flutter, and DataOps experts
            based on the technical footprint of each engagement—keeping teams
            lean while tapping into deep expertise when you need it.
          </motion.p>

          <motion.ul
            className="feature-list"
            variants={staggerContainer(0.16, 0.2)}
          >
            {features.map((item, index) => (
              <motion.li
                key={item}
                variants={fadeIn('up', 14, 0.45 + index * 0.08)}
              >
                <motion.div
                  className="feature-card"
                  variants={fadeInScale(0.45)}
                >
                  <span className="card-icon" aria-hidden="true">
                    <ion-icon name="checkmark" aria-hidden={true} />
                  </span>
                  <span className="span">{item}</span>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesFeatureSection;
