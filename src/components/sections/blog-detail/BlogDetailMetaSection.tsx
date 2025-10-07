'use client';

import { motion } from 'framer-motion';

import type { BlogPostDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './BlogDetailMetaSection.scss';

interface BlogDetailMetaSectionProps {
  post: BlogPostDetail;
}

const BlogDetailMetaSection = ({ post }: BlogDetailMetaSectionProps) => {
  return (
    <motion.section
      className="section blog-detail-meta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={staggerContainer(0.24, 0.18)}
    >
      <div className="container blog-detail-meta__grid">
        <motion.div
          className="blog-detail-meta__author"
          variants={fadeIn('up', 18, 0.3)}
        >
          <p className="section-subtitle">By {post.author}</p>
          <p className="section-text">{post.authorBio}</p>
        </motion.div>

        <motion.ul
          className="blog-detail-meta__list"
          variants={fadeInScale(0.55, 0.35)}
        >
          <li className="detail-item">
            <span className="meta-label">Published</span>
            <time className="meta-value" dateTime={post.date}>
              {post.dateLabel}
            </time>
          </li>
          <li className="detail-item">
            <span className="meta-label">Reading time</span>
            <span className="meta-value">{post.readingTime}</span>
          </li>
          <li className="detail-item">
            <span className="meta-label">Topics</span>
            <span className="meta-value">{post.topics.join(', ')}</span>
          </li>
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default BlogDetailMetaSection;
