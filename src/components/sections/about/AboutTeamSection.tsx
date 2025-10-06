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
    <section className="section about-team" aria-labelledby="team-title">
      <div className="container">
        <div className="team-header">
          <p className="section-subtitle" id="team-title">
            Leadership
          </p>
          <div className="team-heading">
            <h2 className="h2 section-title">
              Meet the people guiding our craft.
            </h2>
            <p className="section-text">
              Our leadership team pairs market intuition with deep delivery
              experience. They coach every engagement, ensuring strategy and
              execution stay tightly linked.
            </p>
          </div>
        </div>

        <ul className="grid-list team-grid">
          {teamMembers.map(member => (
            <li key={member.name}>
              <article className="team-card">
                <div className="team-avatar" aria-hidden="true">
                  {member.initials}
                </div>
                <h3 className="h4 card-title">{member.name}</h3>
                <p className="card-text">{member.role}</p>
                <p className="section-text">{member.bio}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutTeamSection;
