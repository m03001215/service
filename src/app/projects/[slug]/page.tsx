import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Layout from '@/components/Layout';
import ProjectDetailHeroSection from '@/components/sections/project-detail/ProjectDetailHeroSection';
import ProjectDetailMetricsSection from '@/components/sections/project-detail/ProjectDetailMetricsSection';
import ProjectDetailNavigation from '@/components/sections/project-detail/ProjectDetailNavigation';
import ProjectDetailOverviewSection from '@/components/sections/project-detail/ProjectDetailOverviewSection';
import ProjectDetailTestimonialSection from '@/components/sections/project-detail/ProjectDetailTestimonialSection';
import ProjectDetailTimelineSection from '@/components/sections/project-detail/ProjectDetailTimelineSection';
import { getProjectDetail, projectDetails } from '@/data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projectDetails.map(project => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProjectDetail(params.slug);

  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: [
        {
          url: project.heroImage,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.subtitle,
      images: [project.heroImage],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectDetail(params.slug);

  if (!project) {
    notFound();
  }

  const projectDetail = project;

  return (
    <Layout>
      <article className="project-detail-page">
        <ProjectDetailHeroSection project={projectDetail} />
        <ProjectDetailOverviewSection project={projectDetail} />
        <ProjectDetailMetricsSection project={projectDetail} />
        <ProjectDetailTimelineSection project={projectDetail} />
        <ProjectDetailTestimonialSection project={projectDetail} />
        <ProjectDetailNavigation currentSlug={projectDetail.slug} />
      </article>
    </Layout>
  );
}
