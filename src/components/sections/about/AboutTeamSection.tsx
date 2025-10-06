'use client';

import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './AboutTeamSection.scss';

const teamMembers = [
  {
    initials: 'AL',
    name: 'Ariana Lewis',
    role: 'Founder & Chief Strategist',
    bio: 'Ariana partners with executive teams to translate business goals into repeatable product playbooks.',
  },
  {
    initials: 'DM',
    name: 'Darius Moore',
    role: 'Head of Product Design',
    bio: 'Darius blends systems thinking with craft to help teams ship delightful end-to-end experiences.',
  },
  {
    initials: 'SY',
    name: 'Sonia Yamada',
    role: 'Director of Engineering',
    bio: 'Sonia leads our distributed engineering teams focused on reliability, security, and sustainable velocity.',
  },
];

const AboutTeamSection = () => {
  return (
    <motion.section
      className="section about-team"
      aria-labelledby="team-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="container" variants={staggerContainer(0.22, 0.1)}>
        <motion.div className="team-header" variants={fadeIn('up', 22, 0.45)}>
          <motion.p
            className="section-subtitle"
            id="team-title"
            variants={fadeIn('up', 18, 0.45)}
          >
            Leadership
          </motion.p>
          <motion.div className="team-heading" variants={fadeIn('up', 24, 0.5)}>
            <motion.h2
              className="h2 section-title"
              variants={fadeIn('up', 24, 0.55)}
            >
              Meet the people guiding our craft.
            </motion.h2>
            <motion.p className="section-text" variants={fadeIn('up', 22, 0.6)}>
              Our leadership team pairs market intuition with deep delivery
              experience. They coach every engagement, ensuring strategy and
              execution stay tightly linked.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.ul
          className="grid-list team-grid"
          variants={staggerContainer(0.16, 0.3)}
        >
          {teamMembers.map(member => (
            <motion.li key={member.name} variants={fadeIn('up', 28, 0.4)}>
              <motion.article
                className="team-card"
                variants={fadeInScale(0.55)}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <motion.div
                  className="team-avatar"
                  aria-hidden="true"
                  variants={fadeIn('up', 12, 0.35)}
                >
                  {member.initials}
                </motion.div>
                <motion.h3
                  className="h4 card-title"
                  variants={fadeIn('up', 18, 0.4)}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="card-text"
                  variants={fadeIn('up', 16, 0.45)}
                >
                  {member.role}
                </motion.p>
                <motion.p
                  className="section-text"
                  variants={fadeIn('up', 16, 0.5)}
                >
                  {member.bio}
                </motion.p>
              </motion.article>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default AboutTeamSection;
