import { Metadata } from 'next';
import Layout from '@/components/Layout';
import AboutHeroSection from '@/components/sections/about/AboutHeroSection';
import AboutStorySection from '@/components/sections/about/AboutStorySection';
import AboutValuesSection from '@/components/sections/about/AboutValuesSection';
import AboutTeamSection from '@/components/sections/about/AboutTeamSection';
import AboutCTASection from '@/components/sections/about/AboutCTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn more about Adex Digital Studio - our story, mission, and the team behind our success.',
};

export default function About() {
  return (
    <Layout>
      <article className="about-page">
        <AboutHeroSection />
        <AboutStorySection />
        <AboutValuesSection />
        <AboutTeamSection />
        <AboutCTASection />
      </article>
    </Layout>
  );
}
