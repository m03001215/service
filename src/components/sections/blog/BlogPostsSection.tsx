'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';

import { getSortedBlogPosts } from '@/data/blog';
import { fadeIn, staggerContainer } from '@/utils/motion';

import './BlogPostsSection.scss';

const BlogPostsSection = () => {
  const posts = getSortedBlogPosts();

  return (
    <motion.section
      className="section blog-list"
      aria-labelledby="latest-posts"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.24, 0.12)}
    >
      <div className="container">
        <motion.p
          className="section-subtitle"
          id="latest-posts"
          variants={fadeIn('up', 16, 0.25)}
        >
          Latest posts
        </motion.p>
        <motion.h2
          className="h2 section-title"
          variants={fadeIn('up', 20, 0.35)}
        >
          Sharp perspectives on design, engineering, and growth.
        </motion.h2>

        <motion.ul
          className="grid-list"
          variants={staggerContainer(0.16, 0.25)}
        >
          {posts.map((post, index) => (
            <motion.li
              key={post.slug}
              variants={fadeIn('up', 26, 0.25 + index * 0.08)}
            >
              <article className="blog-card">
                <Link href={`/blog/${post.slug}`} className="blog-card__media">
                  <div
                    className="img-holder"
                    style={{ '--width': 560, '--height': 350 } as CSSProperties}
                  >
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      width={560}
                      height={350}
                      className="img-cover"
                      priority={index === 0}
                    />
                  </div>
                  <span className="blog-card__badge">{post.heroEyebrow}</span>
                </Link>
                <div className="blog-card__content">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-card__title"
                  >
                    <h3 className="h3">{post.title}</h3>
                  </Link>
                  <p className="card-text">{post.excerpt}</p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="calendar-outline" aria-hidden={true} />
                      <time className="meta-text" dateTime={post.date}>
                        {post.dateLabel}
                      </time>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon
                        name="person-circle-outline"
                        aria-hidden={true}
                      />
                      <span className="meta-text">{post.author}</span>
                    </li>
                  </ul>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default BlogPostsSection;
