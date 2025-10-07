'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { getAdjacentProject } from '@/data/projects';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectDetailNavigation.scss';

interface ProjectDetailNavigationProps {
  currentSlug: string;
}

const ProjectDetailNavigation = ({
  currentSlug,
}: ProjectDetailNavigationProps) => {
  const { previous, next } = getAdjacentProject(currentSlug);

  if (!previous || !next) {
    return null;
  }

  return (
    <motion.section
      className="section project-detail-navigation"
      aria-label="Project navigation"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="container" variants={staggerContainer(0.22, 0.14)}>
        <motion.div className="nav-grid" variants={fadeIn('up', 22, 0.35)}>
          <motion.article className="nav-card" variants={fadeInScale(0.42)}>
            <span className="label">Previous project</span>
            <Link href={`/projects/${previous.slug}`} className="card-body">
              <figure className="card-banner">
                <Image
                  src={previous.heroImage}
                  width={420}
                  height={260}
                  alt={previous.title}
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h4">{previous.title}</h3>
                <p>{previous.subtitle}</p>
              </div>
              <span className="link">
                <ion-icon name="arrow-back-outline" aria-hidden={true} />
                View project
              </span>
            </Link>
          </motion.article>

          <motion.article
            className="nav-card"
            variants={fadeInScale(0.42, 0.12)}
          >
            <span className="label">Next project</span>
            <Link href={`/projects/${next.slug}`} className="card-body">
              <figure className="card-banner">
                <Image
                  src={next.heroImage}
                  width={420}
                  height={260}
                  alt={next.title}
                  className="img-cover"
                />
              </figure>
              <div className="card-content">
                <h3 className="h4">{next.title}</h3>
                <p>{next.subtitle}</p>
              </div>
              <span className="link">
                View project
                <ion-icon name="arrow-forward-outline" aria-hidden={true} />
              </span>
            </Link>
          </motion.article>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetailNavigation;
