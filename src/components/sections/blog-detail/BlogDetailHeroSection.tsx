'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import type { BlogPostDetail } from '@/types';
import { fadeIn, fadeInScale, staggerContainer } from '@/utils/motion';

import './BlogDetailHeroSection.scss';

interface BlogDetailHeroSectionProps {
  post: BlogPostDetail;
}

const BlogDetailHeroSection = ({ post }: BlogDetailHeroSectionProps) => {
  return (
    <motion.section
      className="page-hero blog-detail-hero has-bg-image"
      aria-label={post.title}
      style={{ backgroundImage: `url('${post.heroImage}')` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      variants={staggerContainer(0.25, 0.16)}
    >
      <span className="blog-detail-hero__overlay" aria-hidden="true" />
      <motion.div
        className="container blog-detail-hero__content"
        variants={staggerContainer(0.18, 0.22)}
      >
        <motion.p
          className="section-subtitle"
          variants={fadeIn('up', 16, 0.35)}
        >
          {post.heroEyebrow}
        </motion.p>
        <motion.h1 className="h1 page-title" variants={fadeIn('up', 26, 0.45)}>
          {post.title}
        </motion.h1>
        <motion.p className="section-text" variants={fadeIn('up', 24, 0.55)}>
          {post.heroDescription}
        </motion.p>

        <motion.nav
          className="breadcrumb"
          aria-label="Breadcrumb"
          variants={fadeInScale(0.55, 0.75)}
        >
          <Link href="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <Link href="/blog" className="breadcrumb-link">
            Blog
          </Link>
          <span className="breadcrumb-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            {post.breadcrumbCurrent}
          </span>
        </motion.nav>

        <motion.div
          className="blog-detail-hero__meta"
          variants={fadeIn('up', 18, 0.65)}
        >
          <div className="meta-pill">
            <span className="meta-label">Author</span>
            <span className="meta-value">{post.author}</span>
          </div>
          <div className="meta-pill">
            <span className="meta-label">Published</span>
            <time className="meta-value" dateTime={post.date}>
              {post.dateLabel}
            </time>
          </div>
          <div className="meta-pill">
            <span className="meta-label">Reading time</span>
            <span className="meta-value">{post.readingTime}</span>
          </div>
        </motion.div>

        <motion.ul
          className="blog-detail-hero__topics"
          variants={fadeIn('up', 16, 0.75)}
        >
          {post.topics.map(topic => (
            <li key={topic} className="topic-chip">
              {topic}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default BlogDetailHeroSection;
