'use client';

import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './AboutValuesSection.scss';

const valueCards = [
  {
    icon: 'sparkles-outline',
    title: 'Curiosity first',
    description:
      'We continually explore emerging technologies, design languages, and behavioral trends to uncover new opportunities for our clients.',
  },
  {
    icon: 'people-outline',
    title: 'Radical collaboration',
    description:
      'Co-creation sessions, transparent tooling, and inclusive rituals keep everyone centered on the same goals.',
  },
  {
    icon: 'rocket-outline',
    title: 'Momentum matters',
    description:
      'We prototype quickly, iterate frequently, and celebrate shipping value every sprint.',
  },
];

const AboutValuesSection = () => {
  return (
    <motion.section
      className="section about-values"
      aria-labelledby="values-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="container" variants={staggerContainer(0.22, 0.12)}>
        <motion.div className="values-header" variants={fadeIn('up', 24, 0.5)}>
          <motion.p
            className="section-subtitle"
            id="values-title"
            variants={fadeIn('up', 16, 0.5)}
          >
            What drives us
          </motion.p>
          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 22, 0.55)}
          >
            Principles that keep our teams inspired and aligned.
          </motion.h2>
        </motion.div>

        <motion.div
          className="content-grid values-grid"
          variants={staggerContainer(0.18, 0.2)}
        >
          {valueCards.map(card => (
            <motion.article
              key={card.title}
              className="content-card value-card"
              variants={fadeInScale(0.55)}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <motion.div
                className="icon-badge"
                aria-hidden="true"
                variants={fadeIn('up', 10, 0.2)}
              >
                <ion-icon name={card.icon}></ion-icon>
              </motion.div>
              <motion.h3
                className="h4 card-title"
                variants={fadeIn('up', 16, 0.35)}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="section-text"
                variants={fadeIn('up', 16, 0.38)}
              >
                {card.description}
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutValuesSection;
