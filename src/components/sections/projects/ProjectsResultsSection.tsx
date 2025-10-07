'use client';

import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectsResultsSection.scss';

const results = [
  {
    id: 'arr-lift',
    icon: 'trending-up-outline',
    title: '+38% average ARR lift',
    description:
      'North-star metrics trends within the first two quarters of partnership across SaaS and subscription clients.',
  },
  {
    id: 'time-to-launch',
    icon: 'timer-outline',
    title: '4.5 months to launch',
    description:
      'Median time from kickoff to MVP release using integrated squads embedded across design, product, and engineering.',
  },
  {
    id: 'zero-regressions',
    icon: 'shield-checkmark-outline',
    title: 'Zero critical regressions',
    description:
      'Blue/green deploys, automated rollback, and continuous delivery pipelines keep releases calm and confident.',
  },
];

const ProjectsResultsSection = () => {
  return (
    <motion.section
      className="section projects-results"
      aria-labelledby="projects-results-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.18, 0.12)}>
        <motion.div className="section-header" variants={fadeIn('up', 18, 0.4)}>
          <p className="section-subtitle" id="projects-results-title">
            Outcomes
          </p>
          <h2 className="h2 section-title">
            Independent teams measuring what matters.
          </h2>
        </motion.div>

        <motion.div
          className="content-grid"
          variants={staggerContainer(0.18, 0.18)}
        >
          {results.map((item, index) => (
            <motion.article
              key={item.id}
              className="content-card result-card"
              variants={fadeInScale(0.45, 0.35 + index * 0.1)}
            >
              <div className="icon-badge">
                <ion-icon name={item.icon} aria-hidden={true} />
              </div>
              <h3 className="h4 card-title">{item.title}</h3>
              <p className="section-text">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsResultsSection;
