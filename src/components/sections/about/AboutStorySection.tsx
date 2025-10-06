'use client';

import Image from 'next/image';
import { useMemo } from 'react';

import { useAccordion } from '@/hooks/useAccordion';

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
    <section
      className="section about-story"
      id="story"
      aria-labelledby="story-title"
    >
      <div className="container">
        <figure className="about-banner">
          <Image
            src="/assets/images/about-banner.png"
            width={800}
            height={580}
            alt="Our studio"
            className="w-100"
            priority
          />
        </figure>

        <div className="about-content">
          <p className="section-subtitle" id="story-title">
            Our Story
          </p>
          <div className="section-heading">
            <h2 className="h2 section-title">
              From a boutique studio to a global innovation partner.
            </h2>
            <p className="section-text">
              What began as a small group of product enthusiasts has evolved
              into a multidisciplinary agency trusted by teams across four
              continents. Along the way we’ve built a reputation for translating
              complex business problems into experiences that feel effortless
              for the people who use them.
            </p>
          </div>

          <ul className="accordion-list">
            {items.map(item => {
              const expanded = isExpanded(item.id);

              return (
                <li key={item.id} className="about-item">
                  <article
                    className={`accordion-card ${expanded ? 'expanded' : ''}`}
                    data-accordion
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
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
