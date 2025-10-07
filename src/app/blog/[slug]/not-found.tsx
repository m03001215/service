import Link from 'next/link';

import Layout from '@/components/Layout';

export default function BlogNotFound() {
  return (
    <Layout>
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-subtitle">Article not found</p>
          <h1 className="h2" style={{ marginBlock: '16px' }}>
            We couldn’t find that story.
          </h1>
          <p className="section-text" style={{ marginBlockEnd: '24px' }}>
            The article you’re looking for might have moved or no longer exists.
            Explore more insights from our team instead.
          </p>
          <Link className="btn btn-primary" href="/blog">
            Back to blog
          </Link>
        </div>
      </section>
    </Layout>
  );
}
