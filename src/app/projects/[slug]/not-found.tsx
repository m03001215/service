import Link from 'next/link';

import Layout from '@/components/Layout';

export default function ProjectNotFound() {
  return (
    <Layout>
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="section-subtitle">Project not found</p>
          <h1 className="h2" style={{ marginBlock: '16px' }}>
            We couldn’t find that case study.
          </h1>
          <p className="section-text" style={{ marginBlockEnd: '24px' }}>
            The project you’re looking for might have moved or no longer exists.
            Explore our latest work instead.
          </p>
          <Link className="btn btn-primary" href="/projects">
            Back to projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}
