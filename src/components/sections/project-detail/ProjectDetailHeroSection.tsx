'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import type { ProjectDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectDetailHeroSection.scss';

interface ProjectDetailHeroSectionProps {
  project: ProjectDetail;
}

const ProjectDetailHeroSection = ({
  project,
}: ProjectDetailHeroSectionProps) => {
  const primaryStat = project.heroStats[0];

  return (
    <motion.section
      className="project-detail-hero"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
      aria-label={`${project.title} hero`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="ambient-glow" aria-hidden="true" />
      <div className="texture" aria-hidden="true" />

      <motion.div
        className="container hero-layout"
        variants={staggerContainer(0.24, 0.12)}
      >
        <motion.div
          className="hero-content"
          variants={staggerContainer(0.18, 0.08)}
        >
          <motion.nav
            className="breadcrumb"
            aria-label="Breadcrumb"
            variants={fadeIn('up', 16, 0.2)}
          >
            <Link href="/projects" className="breadcrumb-link">
              <ion-icon name="arrow-back-outline" aria-hidden={true} />
              Projects
            </Link>
            <span className="breadcrumb-divider" aria-hidden="true">
              /
            </span>
            <span className="breadcrumb-current" aria-current="page">
              {project.title}
            </span>
          </motion.nav>

          <motion.p className="hero-eyebrow" variants={fadeIn('up', 20, 0.35)}>
            {project.heroEyebrow}
          </motion.p>
          <motion.h1 className="h1" variants={fadeIn('up', 26, 0.45)}>
            {project.title}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeIn('up', 24, 0.55)}>
            {project.subtitle}
          </motion.p>

          <motion.div className="hero-meta" variants={fadeIn('up', 20, 0.6)}>
            <div className="meta-item">
              <ion-icon name="pricetag-outline" aria-hidden={true} />
              <span>{project.category}</span>
            </div>
            <div className="meta-item">
              <ion-icon name="calendar-outline" aria-hidden={true} />
              <time dateTime={project.date}>{project.dateLabel}</time>
            </div>
            {project.location ? (
              <div className="meta-item">
                <ion-icon name="location-outline" aria-hidden={true} />
                <span>{project.location}</span>
              </div>
            ) : null}
          </motion.div>

          <motion.ul className="service-tags" variants={fadeIn('up', 20, 0.68)}>
            {project.services.map(service => (
              <li key={service}>
                <ion-icon name="sparkles-outline" aria-hidden={true} />
                <span>{service}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero-stats" variants={fadeIn('up', 24, 0.78)}>
            {project.heroStats.map((stat, index) => (
              <motion.div
                key={`${stat.label}-${stat.value}`}
                className="hero-stat"
                variants={fadeInScale(0.45, 0.1 * index)}
              >
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-media" variants={fadeInScale(0.55, 0.2)}>
          <motion.figure className="hero-figure" variants={fadeInScale(0.5)}>
            <Image
              src={project.heroImage}
              width={720}
              height={480}
              alt={project.title}
              className="img-cover"
              priority
            />
          </motion.figure>

          {primaryStat ? (
            <motion.div
              className="media-badge"
              variants={fadeIn('up', 20, 0.35)}
            >
              <span className="badge-label">Headline impact</span>
              <span className="badge-value">{primaryStat.value}</span>
              <span className="badge-meta">{primaryStat.label}</span>
            </motion.div>
          ) : null}

          {project.location ? (
            <motion.div
              className="media-location"
              variants={fadeIn('up', 20, 0.45)}
            >
              <ion-icon name="pin-outline" aria-hidden={true} />
              <span>{project.location}</span>
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetailHeroSection;
