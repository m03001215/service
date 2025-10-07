'use client';

import { motion } from 'framer-motion';

import type { ProjectDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectDetailMetricsSection.scss';

interface ProjectDetailMetricsSectionProps {
  project: ProjectDetail;
}

const ProjectDetailMetricsSection = ({
  project,
}: ProjectDetailMetricsSectionProps) => {
  return (
    <motion.section
      className="section project-detail-metrics"
      aria-labelledby="project-metrics-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="container" variants={staggerContainer(0.2, 0.12)}>
        <motion.header
          className="metrics-header"
          variants={fadeIn('up', 20, 0.35)}
        >
          <p className="section-subtitle" id="project-metrics-title">
            Key metrics
          </p>
          <h2 className="h2 section-title">
            Measuring outcomes that move the business forward.
          </h2>
        </motion.header>

        <motion.ul
          className="metrics-grid"
          variants={staggerContainer(0.16, 0.2)}
        >
          {project.metrics.map((metric, index) => (
            <motion.li
              key={metric.id}
              className="metrics-card"
              variants={fadeInScale(0.45, index * 0.08)}
            >
              <span className="metric-value">{metric.value}</span>
              <h3 className="h4 metric-label">{metric.label}</h3>
              <p className="metric-description">{metric.description}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetailMetricsSection;
