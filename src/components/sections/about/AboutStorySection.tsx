'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';

import { useAccordion } from '@/hooks/useAccordion';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './AboutStorySection.scss';

const storyAccordionItems = [
  {
    id: 'about-human-centered',
    title: 'Human-centered research',
    content:
      'Every engagement begins with empathy interviews, product audits, and market immersion. We keep customers in the conversation from discovery workshops through ongoing iteration.',
  },
  {
    id: 'about-cross-functional',
    title: 'Cross-functional teaming',
    content:
      'Designers, engineers, and product strategists collaborate daily to remove silos, ship faster, and keep delivery quality consistent across platforms.',
  },
  {
    id: 'about-measurable-impact',
    title: 'Measurable impact',
    content:
      'Success is defined by outcomes. We bake experimentation, analytics, and continuous delivery into the process so every release moves the metrics that matter.',
  },
];

const AboutStorySection = () => {
  const { toggleAccordion, isExpanded } = useAccordion(
    storyAccordionItems[0].id
  );
  const items = useMemo(() => storyAccordionItems, []);

  return (
    <motion.section
      className="section about-story"
      id="story"
      aria-labelledby="story-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="container" variants={staggerContainer(0.24, 0.12)}>
        <motion.figure
          className="about-banner"
          variants={fadeIn('right', 40, 0.6)}
        >
          <Image
            src="/assets/images/about-banner.png"
            width={800}
            height={580}
            alt="Our studio"
            className="w-100"
            priority
          />
        </motion.figure>

        <motion.div
          className="about-content"
          variants={staggerContainer(0.18, 0.18)}
        >
          <motion.p
            className="section-subtitle"
            id="story-title"
            variants={fadeIn('up', 16, 0.4)}
          >
            Our Story
          </motion.p>
          <motion.div
            className="section-heading"
            variants={fadeIn('up', 22, 0.5)}
          >
            <motion.h2
              className="h2 section-title"
              variants={fadeIn('up', 26, 0.55)}
            >
              From a boutique studio to a global innovation partner.
            </motion.h2>
            <motion.p className="section-text" variants={fadeIn('up', 26, 0.6)}>
              What began as a small group of product enthusiasts has evolved
              into a multidisciplinary agency trusted by teams across four
              continents. Along the way we’ve built a reputation for translating
              complex business problems into experiences that feel effortless
              for the people who use them.
            </motion.p>
          </motion.div>

          <motion.ul
            className="accordion-list"
            variants={staggerContainer(0.14, 0.2)}
          >
            {items.map(item => {
              const expanded = isExpanded(item.id);

              return (
                <motion.li
                  key={item.id}
                  className="about-item"
                  variants={fadeInScale(0.5)}
                >
                  <motion.article
                    className={`accordion-card ${expanded ? 'expanded' : ''}`}
                    data-accordion
                    layout
                    transition={{
                      layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    }}
                  >
                    <h3 className="card-title">
                      <button
                        className="accordion-btn"
                        onClick={() => toggleAccordion(item.id)}
                        data-accordion-btn
                        aria-expanded={expanded}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-trigger`}
                      >
                        <ion-icon
                          name="chevron-down-outline"
                          aria-hidden={true}
                          class="down"
                        />
                        <span className="span h5">{item.title}</span>
                      </button>
                    </h3>

                    <p
                      className="accordion-content"
                      id={`${item.id}-content`}
                      role="region"
                      aria-labelledby={`${item.id}-trigger`}
                    >
                      {item.content}
                    </p>
                  </motion.article>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutStorySection;
