'use client';

import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServicesProcessSection.scss';

const processSteps = [
  {
    id: 'discovery-sprints',
    title: 'Discovery sprints',
    description:
      'Two-week sprints align teams around customer outcomes, test riskiest assumptions, and provide a roadmap with prioritized experiments.',
    icon: 'clipboard-outline',
  },
  {
    id: 'integrated-squads',
    title: 'Integrated squads',
    description:
      'Cross-functional pods co-create with your stakeholders to deliver end-to-end features without the lift of hiring full-time.',
    icon: 'layers-outline',
  },
  {
    id: 'optimization-labs',
    title: 'Optimization labs',
    description:
      'Dedicated analysts automate reporting, monitor KPIs, and continuously tune experiences for conversion and retention.',
    icon: 'speedometer-outline',
  },
];

const ServicesProcessSection = () => {
  return (
    <motion.section
      className="services-process"
      id="engagements"
      aria-labelledby="process-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.2, 0.12)}>
        <motion.p
          className="section-subtitle"
          id="process-title"
          variants={fadeIn('up', 16, 0.35)}
        >
          How we work
        </motion.p>
        <motion.div variants={fadeIn('up', 18, 0.45)}>
          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 20, 0.5)}
          >
            Partnership models designed for momentum.
          </motion.h2>
          <motion.p className="section-text" variants={fadeIn('up', 20, 0.55)}>
            Whether you need early validation or long-term acceleration, we
            shape a delivery rhythm that keeps your team moving forward with
            clarity.
          </motion.p>
        </motion.div>

        <motion.div
          className="content-grid"
          variants={staggerContainer(0.18, 0.15)}
        >
          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              className="content-card process-card"
              variants={fadeInScale(0.5, 0.2 + index * 0.08)}
            >
              <div className="icon-badge" data-step={`0${index + 1}`}>
                <ion-icon name={step.icon} aria-hidden={true} />
              </div>
              <h3 className="h4 card-title">{step.title}</h3>
              <p className="section-text">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ServicesProcessSection;
