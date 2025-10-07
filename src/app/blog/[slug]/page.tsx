import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Layout from '@/components/Layout';
import BlogDetailBodySection from '@/components/sections/blog-detail/BlogDetailBodySection';
import BlogDetailCTASection from '@/components/sections/blog-detail/BlogDetailCTASection';
import BlogDetailHeroSection from '@/components/sections/blog-detail/BlogDetailHeroSection';
import BlogDetailMetaSection from '@/components/sections/blog-detail/BlogDetailMetaSection';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Article not found',
    };
  }

  return {
    title: post.title,
    description: post.heroDescription,
    openGraph: {
      title: post.title,
      description: post.heroDescription,
      images: [
        {
          url: post.heroImage,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.heroDescription,
      images: [post.heroImage],
    },
  };
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const blogPost = post;

  return (
    <Layout>
      <article className="blog-detail-page">
        <BlogDetailHeroSection post={blogPost} />
        <BlogDetailMetaSection post={blogPost} />
        <BlogDetailBodySection post={blogPost} />
        <BlogDetailCTASection post={blogPost} />
      </article>
    </Layout>
  );
}
