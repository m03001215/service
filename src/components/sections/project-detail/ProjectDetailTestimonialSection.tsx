'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import type { ProjectDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectDetailTestimonialSection.scss';

interface ProjectDetailTestimonialSectionProps {
  project: ProjectDetail;
}

const ProjectDetailTestimonialSection = ({
  project,
}: ProjectDetailTestimonialSectionProps) => (
  <motion.section
    className="section project-detail-testimonial"
    aria-labelledby="project-testimonial-title"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <motion.div className="container" variants={staggerContainer(0.26, 0.16)}>
      <motion.div className="testimonial-card" variants={fadeInScale(0.52)}>
        <motion.div className="quote-icon" variants={fadeIn('up', 20, 0.25)}>
          <ion-icon name="chatbubbles-outline" aria-hidden={true} />
        </motion.div>
        <motion.blockquote
          className="quote"
          cite={project.testimonial.person}
          variants={fadeIn('up', 24, 0.4)}
        >
          “{project.testimonial.quote}”
        </motion.blockquote>
        <motion.div className="person" variants={fadeIn('up', 20, 0.5)}>
          <span className="name">{project.testimonial.person}</span>
          <span className="role">{project.testimonial.role}</span>
        </motion.div>
      </motion.div>

      <motion.div className="cta-card" variants={fadeInScale(0.55, 0.16)}>
        <div>
          <p className="section-subtitle" id="project-testimonial-title">
            Partner with Adex
          </p>
          <h2 className="h3">Let’s explore what’s next together.</h2>
          <p className="section-text">
            Share your roadmap and we’ll map a co-creation path tailored to your
            team’s ambition, pace, and constraints.
          </p>
        </div>
        <Link className="btn btn-primary" href="/contact">
          Start a project
        </Link>
      </motion.div>
    </motion.div>
  </motion.section>
);

export default ProjectDetailTestimonialSection;
