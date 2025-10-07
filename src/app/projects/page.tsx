import type { Metadata } from 'next';

import Layout from '@/components/Layout';
import ProjectsCTASection from '@/components/sections/projects/ProjectsCTASection';
import ProjectsHeroSection from '@/components/sections/projects/ProjectsHeroSection';
import ProjectsHighlightsSection from '@/components/sections/projects/ProjectsHighlightsSection';
import ProjectsResultsSection from '@/components/sections/projects/ProjectsResultsSection';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore our portfolio of successful digital projects and case studies.',
};

export default function Projects() {
  return (
    <Layout>
      <article className="projects-page">
        <ProjectsHeroSection />
        <ProjectsHighlightsSection />
        <ProjectsResultsSection />
        <ProjectsCTASection />
      </article>
    </Layout>
  );
}
