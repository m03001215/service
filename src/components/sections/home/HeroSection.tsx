import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Partner with Adex to design standout digital products
          </h1>
          <p className={styles.subtitle}>
            Launch faster, and grow sustainably with our expert team.
          </p>
          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
