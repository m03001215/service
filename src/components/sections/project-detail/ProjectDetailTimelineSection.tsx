'use client';

import { motion } from 'framer-motion';

import type { ProjectDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectDetailTimelineSection.scss';

interface ProjectDetailTimelineSectionProps {
  project: ProjectDetail;
}

const ProjectDetailTimelineSection = ({
  project,
}: ProjectDetailTimelineSectionProps) => (
  <motion.section
    className="section project-detail-timeline"
    aria-labelledby="project-timeline-title"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.div className="container" variants={staggerContainer(0.26, 0.16)}>
      <motion.header
        className="timeline-header"
        variants={fadeIn('up', 20, 0.4)}
      >
        <p className="section-subtitle" id="project-timeline-title">
          Delivery timeline
        </p>
        <h2 className="h2">
          A cadence designed to ship momentum every sprint.
        </h2>
        <p className="section-text">
          Embedded squads pair strategy, design, and engineering to keep
          decisions tight and learning loops active from the first week.
        </p>
      </motion.header>

      <motion.ol className="timeline-list" variants={fadeIn('up', 22, 0.5)}>
        {project.timeline.map((item, index) => (
          <motion.li
            key={item.id}
            className="timeline-item"
            variants={fadeInScale(0.42, index * 0.1)}
          >
            <div className="timeline-marker">
              <span>{index + 1}</span>
              <div className="connector" aria-hidden="true" />
            </div>
            <div className="timeline-content">
              <header>
                <h3 className="h4">{item.title}</h3>
                <span className="duration">{item.duration}</span>
              </header>
              <p>{item.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </motion.div>
  </motion.section>
);

export default ProjectDetailTimelineSection;
