'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './ServiceOverviewSection.scss';

const services = [
  {
    id: 'support',
    title: '24/7 Support Desk',
    description:
      'Embedded specialists triage incidents, monitor uptime, and coach your team on best practices around the clock.',
    icon: 'call-outline',
    actionLabel: 'Talk to an expert',
    href: '/contact#quote',
    accent: 'linear-gradient(135deg, #2a4af4, #7a5af8)',
  },
  {
    id: 'payments',
    title: 'Secure Commerce',
    description:
      'Payment architects harden your platform with tokenized checkout, risk scoring, and compliance support for new markets.',
    icon: 'shield-checkmark-outline',
    actionLabel: 'View engagements',
    href: '#engagements',
    accent: 'linear-gradient(135deg, #4ac8ff, #2a4af4)',
  },
  {
    id: 'updates',
    title: 'Continuous Delivery',
    description:
      'Automated pipelines, QA accelerators, and release coaching keep new value shipping without sacrificing quality.',
    icon: 'cloud-download-outline',
    actionLabel: 'See how it works',
    href: '/projects',
    accent: 'linear-gradient(135deg, #53f3c3, #2a9cf4)',
  },
  {
    id: 'research',
    title: 'Insights & Strategy',
    description:
      'Product strategists pair qualitative research with market sizing to prioritize the bets with the highest impact.',
    icon: 'pie-chart-outline',
    actionLabel: 'Explore insights',
    href: '/blog',
    accent: 'linear-gradient(135deg, #ff8b64, #f459a8)',
  },
];

const ServiceOverviewSection = () => {
  return (
    <motion.section
      className="section service services-overview"
      aria-labelledby="service-overview-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="container" variants={staggerContainer(0.18, 0.1)}>
        <motion.p
          className="section-subtitle"
          id="service-overview-title"
          variants={fadeIn('up', 16, 0.35)}
        >
          Service Overview
        </motion.p>
        <motion.h2
          className="h2 section-title"
          variants={fadeIn('up', 24, 0.45)}
        >
          A flexible operating model that scales with your ambitions.
        </motion.h2>

        <motion.ul className="grid-list" variants={staggerContainer(0.2, 0.2)}>
          {services.map((service, index) => (
            <motion.li
              key={service.id}
              id={service.id}
              variants={fadeIn('up', 22, 0.35 + index * 0.1)}
            >
              <motion.article
                className="service-card"
                style={{ ['--card-accent' as string]: service.accent }}
                variants={fadeInScale(0.45)}
              >
                <motion.div
                  className="card-icon"
                  variants={fadeIn('up', 16, 0.4)}
                >
                  <ion-icon name={service.icon} aria-hidden={true} />
                </motion.div>
                <motion.h3
                  className="h4 card-title"
                  variants={fadeIn('up', 16, 0.45)}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="card-text"
                  variants={fadeIn('up', 16, 0.5)}
                >
                  {service.description}
                </motion.p>
                <motion.div variants={fadeIn('up', 16, 0.55)}>
                  <Link href={service.href} className="btn-text">
                    <span className="span">{service.actionLabel}</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden={true} />
                  </Link>
                </motion.div>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default ServiceOverviewSection;
