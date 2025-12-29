'use client';

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';

import './HeroSection.scss';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev: number) => (prev >= 2 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev: number) => (prev <= 0 ? 2 : prev - 1));
  }, []);

  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      className="section hero has-bg-image"
      aria-label="home"
      style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Algorithmic Trading Solutions & Web and Mobile Applications
            Development Service
          </h1>

          <p className="hero-text">
            Specialized in MetaTrader / MQL, TradingView / PineScript,
            NinjaTrader, Python, and custom trading platforms. We also deliver
            cutting-edge web and mobile applications to power your business.
          </p>

          <div className="btn-wrapper">
            {/* <a href="services" className="btn btn-primary">
              Explore Now
            </a> */}

            <a href="contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-slider" data-slider>
          <div className="slider-inner">
            <ul
              className="slider-container"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              <li className="slider-item">
                <figure
                  className="img-holder"
                  style={
                    {
                      '--width': '575',
                      '--height': '550',
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src="/assets/images/hero-slide-1.jpg"
                    width={575}
                    height={550}
                    alt="Algorithmic trading platform with charts and trading indicators"
                    className="img-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </figure>
              </li>

              <li className="slider-item">
                <figure
                  className="img-holder"
                  style={
                    {
                      '--width': '575',
                      '--height': '550',
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src="/assets/images/hero-slide-2.jpg"
                    width={575}
                    height={550}
                    alt="Algorithmic trading systems and automated trading solutions"
                    className="img-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </figure>
              </li>

              <li className="slider-item">
                <figure
                  className="img-holder"
                  style={
                    {
                      '--width': '575',
                      '--height': '550',
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src="/assets/images/hero-slide-3.jpg"
                    width={575}
                    height={550}
                    alt="Web and mobile development services for trading applications"
                    className="img-cover"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </figure>
              </li>
            </ul>
          </div>

          <button
            className="slider-btn prev"
            aria-label="slide to previous"
            onClick={prevSlide}
          >
            <ion-icon name="arrow-back"></ion-icon>
          </button>

          <button
            className="slider-btn next"
            aria-label="slide to next"
            onClick={nextSlide}
          >
            <ion-icon name="arrow-forward"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
