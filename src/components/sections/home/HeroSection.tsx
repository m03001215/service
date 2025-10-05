'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSlider } from '@/hooks/useSlider';
import { SliderItem } from '@/types';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const sliderItems: SliderItem[] = [
    {
      id: '1',
      image: '/assets/images/hero-slide-1.jpg',
      alt: 'Hero slide 1',
    },
    {
      id: '2',
      image: '/assets/images/hero-slide-2.jpg',
      alt: 'Hero slide 2',
      hasPlayButton: true,
    },
    {
      id: '3',
      image: '/assets/images/hero-slide-3.jpg',
      alt: 'Hero slide 3',
    },
  ];

  const { currentSlide, nextSlide, prevSlide } = useSlider({
    totalSlides: sliderItems.length,
    autoPlay: true,
    autoPlayInterval: 5000,
  });

  return (
    <section
      className={`section ${styles.hero} has-bg-image`}
      aria-label="home"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className="h1 hero-title">
            Crafting project specific solutions with expertise.
          </h1>

          <p className={styles.heroText}>
            We&apos;re a creative company that focuses on establishing long-term
            relationships with customers.
          </p>

          <div className={styles.btnWrapper}>
            <Link href="/services" className="btn btn-primary">
              Explore Now
            </Link>

            <Link href="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>

        <div className={styles.heroSlider} data-slider>
          <div className={styles.sliderInner}>
            <ul
              className={styles.sliderContainer}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {sliderItems.map((item, index) => (
                <li key={item.id} className={styles.sliderItem}>
                  {item.hasPlayButton ? (
                    <div className={styles.heroCard}>
                      <figure
                        className="img-holder"
                        style={
                          {
                            '--width': 575,
                            '--height': 550,
                          } as React.CSSProperties
                        }
                      >
                        <Image
                          src={item.image}
                          width={575}
                          height={550}
                          alt={item.alt}
                          className="img-cover"
                          priority={index === 0}
                        />
                      </figure>

                      <button
                        className={styles.playBtn}
                        aria-label="play adex intro"
                        onClick={() => {
                          // Handle video play logic here
                        }}
                      >
                        <ion-icon name="play" aria-hidden={true}></ion-icon>
                      </button>
                    </div>
                  ) : (
                    <figure
                      className="img-holder"
                      style={
                        {
                          '--width': 575,
                          '--height': 550,
                        } as React.CSSProperties
                      }
                    >
                      <Image
                        src={item.image}
                        width={575}
                        height={550}
                        alt={item.alt}
                        className="img-cover"
                        priority={index === 0}
                      />
                    </figure>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {sliderItems.length > 1 && (
            <>
              <button
                className={`${styles.sliderBtn} ${styles.prev}`}
                aria-label="slide to previous"
                onClick={prevSlide}
              >
                <ion-icon name="arrow-back"></ion-icon>
              </button>

              <button
                className={`${styles.sliderBtn} ${styles.next}`}
                aria-label="slide to next"
                onClick={nextSlide}
              >
                <ion-icon name="arrow-forward"></ion-icon>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
