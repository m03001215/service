'use client';

import { motion } from 'framer-motion';

import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './BlogNewsletterSection.scss';

const BlogNewsletterSection = () => {
  return (
    <motion.section
      className="section blog-newsletter"
      aria-labelledby="newsletter-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={staggerContainer(0.24, 0.16)}
    >
      <div className="container">
        <motion.div className="content-grid" variants={fadeInScale(0.55, 0.25)}>
          <div className="blog-newsletter__copy">
            <motion.p
              className="section-subtitle"
              id="newsletter-title"
              variants={fadeIn('up', 14, 0.35)}
            >
              Stay ahead
            </motion.p>
            <motion.h2
              className="h2 section-title"
              variants={fadeIn('up', 18, 0.45)}
            >
              Get fresh thinking delivered monthly.
            </motion.h2>
            <motion.p
              className="section-text"
              variants={fadeIn('up', 20, 0.55)}
            >
              Join thousands of operators receiving actionable tactics on
              product, design, data, and go-to-market. No noise—just the
              experiments worth repeating.
            </motion.p>
          </div>

          <motion.form
            className="stacked-form"
            variants={fadeIn('up', 18, 0.45)}
          >
            <div className="form-group">
              <label className="form-label" htmlFor="newsletter-name">
                Name
              </label>
              <input
                id="newsletter-name"
                type="text"
                name="name"
                placeholder="Jane Doe"
                required
                className="input-field"
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="newsletter-email">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="input-field"
                autoComplete="email"
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary"
              variants={fadeIn('up', 16, 0.55)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogNewsletterSection;
