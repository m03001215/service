import type { Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

export const fadeIn = (
  direction: Direction = 'up',
  distance = 24,
  duration = 0.6,
  delay = 0
): Variants => {
  let x = 0;
  let y = 0;

  if (direction === 'left') {
    x = distance;
  } else if (direction === 'right') {
    x = -distance;
  } else if (direction === 'up') {
    y = distance;
  } else if (direction === 'down') {
    y = -distance;
  }

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren = 0.16,
  delayChildren = 0.12
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeInScale = (duration = 0.6, delay = 0): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});
