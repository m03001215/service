import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import BlogHeroSection from '@/components/sections/blog/BlogHeroSection';
import BlogNewsletterSection from '@/components/sections/blog/BlogNewsletterSection';
import BlogPostsSection from '@/components/sections/blog/BlogPostsSection';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay updated with the latest insights, trends, and tips from our digital experts.',
};

export default function Blog() {
  return (
    <Layout>
      <article className="blog-page">
        <BlogHeroSection />
        <BlogPostsSection />
        <BlogNewsletterSection />
      </article>
    </Layout>
  );
}
