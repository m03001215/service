'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ProjectsHighlightsSection.scss';

const highlights = [
  {
    id: 'ligula',
    title: 'Ligula tristique quis risus',
    description:
      'Guided onboarding, behavioral lifecycle messaging, and a launch strategy that lifted activation by 32% for a SaaS scale-up.',
    image: '/assets/images/blog-1.jpg',
    category: 'SaaS Platform',
    date: '2023-10-14',
    dateLabel: '14 Oct 2023',
  },
  {
    id: 'nullam',
    title: 'Nullam id dolor elit id nibh',
    description:
      'Headless commerce foundations and localized storefronts rolled out across three regions in under six months.',
    image: '/assets/images/blog-2.jpg',
    category: 'Retail',
    date: '2024-03-29',
    dateLabel: '29 Mar 2024',
  },
  {
    id: 'ultricies',
    title: 'Ultricies fusce porta elit',
    description:
      'Clinician dashboards and unified data layers enabling proactive care workflows for a health-tech pioneer.',
    image: '/assets/images/blog-3.jpg',
    category: 'Health Tech',
    date: '2024-01-08',
    dateLabel: '08 Jan 2024',
  },
  {
    id: 'habit',
    title: 'Habit-forming productivity app',
    description:
      'A personalization engine and mobile design system powering over one million daily rituals for a VC-backed startup.',
    image: '/assets/images/blog-4.jpg',
    category: 'Mobile',
    date: '2023-06-02',
    dateLabel: '02 Jun 2023',
  },
];

const ProjectsHighlightsSection = () => {
  return (
    <motion.section
      className="section projects-highlights"
      aria-labelledby="projects-highlights-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div className="container" variants={staggerContainer(0.22, 0.12)}>
        <motion.div
          className="section-heading"
          variants={fadeIn('up', 20, 0.4)}
        >
          <p className="section-subtitle" id="projects-highlights-title">
            Project Highlights
          </p>
          <h2 className="h2 section-title">
            A few recent launches shaped alongside our partners.
          </h2>
          <p className="section-text">
            Each engagement pairs embedded product strategists, design leads,
            and seasoned engineers to move metrics that matter—while
            transferring modern delivery rituals to your team.
          </p>
        </motion.div>

        <motion.ul
          className="grid-list"
          variants={staggerContainer(0.18, 0.16)}
        >
          {highlights.map((item, index) => (
            <motion.li
              key={item.id}
              variants={fadeIn('up', 22, 0.4 + index * 0.08)}
            >
              <motion.article
                className="project-card"
                variants={fadeInScale(0.5)}
              >
                <figure className="card-banner">
                  <span className="badge" aria-hidden="true">
                    {index + 1}
                  </span>
                  <Image
                    src={item.image}
                    width={560}
                    height={350}
                    alt={item.title}
                    className="img-cover"
                    priority={index === 0}
                  />
                </figure>

                <div className="card-content">
                  <div className="meta-row">
                    <div className="badge-pill">
                      <ion-icon name="calendar-outline" aria-hidden={true} />
                      <time dateTime={item.date}>{item.dateLabel}</time>
                    </div>
                    <div className="badge-pill">
                      <ion-icon name="sparkles-outline" aria-hidden={true} />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  <h3 className="h3 card-title">
                    <Link href={`/projects/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="card-text">{item.description}</p>

                  <Link href={`/projects/${item.id}`} className="btn-text">
                    <span className="span">View case study</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden={true} />
                  </Link>
                </div>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsHighlightsSection;
