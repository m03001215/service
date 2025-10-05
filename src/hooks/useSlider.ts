'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseSliderOptions {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  totalSlides: number;
}

export const useSlider = ({ 
  autoPlay = false, 
  autoPlayInterval = 3000,
  totalSlides 
}: UseSliderOptions) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev: number) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev: number) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || totalSlides <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide, totalSlides]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
  };
};