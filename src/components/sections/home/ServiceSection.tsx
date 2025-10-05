'use client';

import Link from 'next/link';
import { ServiceCard } from '@/types';
import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
  const services: ServiceCard[] = [
    {
      icon: 'call-outline',
      title: '24/7 Support',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      href: '/services#support',
    },
    {
      icon: 'shield-checkmark-outline',
      title: 'Secure Payments',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      href: '/services#payments',
    },
    {
      icon: 'cloud-download-outline',
      title: 'Daily Updates',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      href: '/services#updates',
    },
    {
      icon: 'pie-chart-outline',
      title: 'Market Research',
      description: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.',
      href: '/services#research',
    },
  ];

  return (
    <section className={`section ${styles.service}`} aria-labelledby="service-label">
      <div className="container">
        <p className="section-subtitle" id="service-label">
          What We Do?
        </p>

        <h2 className="h2 section-title">
          The service we offer is specifically designed to meet your needs.
        </h2>

        <ul className="grid-list">
          {services.map((service, index) => (
            <li key={index}>
              <div className={styles.serviceCard}>
                <div className={styles.cardIcon}>
                  <ion-icon name={service.icon} aria-hidden={true}></ion-icon>
                </div>

                <h3 className="h4 card-title">{service.title}</h3>

                <p className="card-text">{service.description}</p>

                <Link href={service.href} className={styles.btnText}>
                  <span className="span">Learn More</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden={true}></ion-icon>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;