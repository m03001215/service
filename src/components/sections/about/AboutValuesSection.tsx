import './AboutValuesSection.scss';

const valueCards = [
  {
    icon: 'sparkles-outline',
    title: 'Curiosity first',
    description:
      'We continually explore emerging technologies, design languages, and behavioral trends to uncover new opportunities for our clients.',
  },
  {
    icon: 'people-outline',
    title: 'Radical collaboration',
    description:
      'Co-creation sessions, transparent tooling, and inclusive rituals keep everyone centered on the same goals.',
  },
  {
    icon: 'rocket-outline',
    title: 'Momentum matters',
    description:
      'We prototype quickly, iterate frequently, and celebrate shipping value every sprint.',
  },
];

const AboutValuesSection = () => {
  return (
    <section className="section about-values" aria-labelledby="values-title">
      <div className="container">
        <div className="values-header">
          <p className="section-subtitle" id="values-title">
            What drives us
          </p>
          <h2 className="h2 section-title">
            Principles that keep our teams inspired and aligned.
          </h2>
        </div>

        <div className="content-grid values-grid">
          {valueCards.map(card => (
            <article key={card.title} className="content-card value-card">
              <div className="icon-badge" aria-hidden="true">
                <ion-icon name={card.icon}></ion-icon>
              </div>
              <h3 className="h4 card-title">{card.title}</h3>
              <p className="section-text">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
