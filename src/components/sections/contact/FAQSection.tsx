'use client';

import { useMemo } from 'react';

import { useAccordion } from '@/hooks/useAccordion';

import './FAQSection.scss';

const faqItems = [
  {
    id: 'contact-start-date',
    title: 'How soon can we begin?',
    content:
      'After a short discovery call we can usually mobilize a squad within two weeks. Tight timelines? Let us know and we’ll share a rapid kickoff plan.',
  },
  {
    id: 'contact-collaboration',
    title: 'Can you work with our internal team?',
    content:
      'Absolutely. We regularly integrate with product, engineering, and growth teams to embed new rituals, tooling, and ways of working.',
  },
  {
    id: 'contact-post-launch',
    title: 'Do you handle post-launch optimization?',
    content:
      'Yes. Our optimization labs offer ongoing experimentation, analytics, and engineering support to keep your product learning and improving.',
  },
];

const FAQSection = () => {
  const { toggleAccordion, isExpanded } = useAccordion(faqItems[0].id);

  const items = useMemo(() => faqItems, []);

  return (
    <section className="section contact-faq" aria-labelledby="faq-title">
      <div className="container">
        <p className="section-subtitle" id="faq-title">
          FAQs
        </p>
        <div className="faq-header">
          <h2 className="h2 section-title">
            Answers to common partnership questions.
          </h2>
          <p className="section-text">
            Here’s what teams typically ask before we collaborate. Not seeing
            your question? Drop it in the message above and we’ll include it in
            our first reply.
          </p>
        </div>

        <ul className="faq-list">
          {items.map(item => {
            const expanded = isExpanded(item.id);

            return (
              <li key={item.id} className="faq-item">
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
    </section>
  );
};

export default FAQSection;
