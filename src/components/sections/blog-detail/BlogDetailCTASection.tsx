'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import type { BlogPostDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './BlogDetailCTASection.scss';

interface BlogDetailCTASectionProps {
  post: BlogPostDetail;
}

const BlogDetailCTASection = ({ post }: BlogDetailCTASectionProps) => {
  return (
    <motion.section
      className="blog-detail-cta"
      aria-label="Related call to action"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={staggerContainer(0.18, 0.16)}
    >
      <div className="container">
        <motion.div className="cta-panel" variants={fadeInScale(0.55, 0.25)}>
          <motion.h2
            className="h2 section-title"
            variants={fadeIn('up', 18, 0.35)}
          >
            {post.cta.heading}
          </motion.h2>
          <motion.div variants={fadeIn('up', 16, 0.45)}>
            <Link href={post.cta.buttonHref} className="btn btn-primary">
              {post.cta.buttonLabel}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogDetailCTASection;
