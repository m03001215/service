'use client';

import { motion } from 'framer-motion';

import type { ProjectDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectDetailOverviewSection.scss';

interface ProjectDetailOverviewSectionProps {
  project: ProjectDetail;
}

const ProjectDetailOverviewSection = ({
  project,
}: ProjectDetailOverviewSectionProps) => {
  return (
    <motion.section
      className="section project-detail-overview"
      aria-labelledby="project-overview-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className="container" variants={staggerContainer(0.24, 0.12)}>
        <motion.header
          className="overview-header"
          variants={fadeIn('up', 20, 0.4)}
        >
          <p className="section-subtitle">Overview</p>
          <h2 className="h2" id="project-overview-title">
            {project.description}
          </h2>
        </motion.header>

        <motion.div className="overview-grid" variants={fadeIn('up', 22, 0.45)}>
          <div className="overview-card">
            <h3 className="h4">Challenge</h3>
            <p>{project.challenge}</p>
          </div>

          <div className="overview-card">
            <h3 className="h4">Partnership snapshot</h3>
            <ul className="pill-list">
              {project.services.map(service => (
                <li key={service}>
                  <ion-icon
                    name="checkmark-circle-outline"
                    aria-hidden={true}
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div className="columns" variants={fadeIn('up', 24, 0.55)}>
          <motion.div className="column-card" variants={fadeInScale(0.45)}>
            <h3 className="h4">What we built</h3>
            <ul className="bullet-list">
              {project.solution.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="column-card" variants={fadeInScale(0.45, 0.1)}>
            <h3 className="h4">Impact</h3>
            <ul className="bullet-list">
              {project.outcomes.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetailOverviewSection;
