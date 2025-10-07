// Navigation Link Interface
export interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

// Social Link Interface
export interface SocialLink {
  href: string;
  icon: string;
  label: string;
  target?: string;
  rel?: string;
}

// Service Card Interface
export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  href: string;
}

// Project Card Interface
export interface ProjectCard {
  id: string;
  image: string;
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
}

export interface ProjectMetric {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ProjectTimelineItem {
  id: string;
  title: string;
  description: string;
  duration: string;
}

export interface ProjectTestimonial {
  quote: string;
  person: string;
  role: string;
}

export interface ProjectHeroStat {
  label: string;
  value: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroEyebrow: string;
  heroImage: string;
  category: string;
  date: string;
  dateLabel: string;
  location?: string;
  services: string[];
  heroStats: ProjectHeroStat[];
  challenge: string;
  solution: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
  timeline: ProjectTimelineItem[];
  testimonial: ProjectTestimonial;
  nextProjectSlug?: string;
}

// Feature Card Interface
export interface FeatureCard {
  icon: string;
  text: string;
}

// Stats Card Interface
export interface StatsCard {
  number: string;
  label: string;
}

// Accordion Item Interface
export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  isExpanded?: boolean;
}

// Contact Info Interface
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}

// Blog Post Interface
export interface BlogSectionListItem {
  text: string;
  icon?: string;
}

export interface BlogSectionTimelineItem {
  marker: string;
  title: string;
  text: string;
}

export interface BlogSectionTable {
  headers: string[];
  rows: string[][];
}

export interface BlogSectionCard {
  title: string;
  text: string;
}

export type BlogAsideType =
  | 'list'
  | 'timeline'
  | 'tags'
  | 'table'
  | 'cards'
  | 'text';

export interface BlogSectionAside {
  type: BlogAsideType;
  title: string;
  description?: string;
  listItems?: BlogSectionListItem[];
  timelineItems?: BlogSectionTimelineItem[];
  tags?: string[];
  table?: BlogSectionTable;
  cards?: BlogSectionCard[];
  paragraphs?: string[];
}

export interface BlogSubsection {
  heading: string;
  paragraphs?: string[];
  listItems?: BlogSectionListItem[];
  timelineItems?: BlogSectionTimelineItem[];
}

export interface BlogContentSection {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: BlogSubsection[];
  table?: BlogSectionTable;
  aside?: BlogSectionAside;
}

export interface BlogPostDetail {
  slug: string;
  title: string;
  excerpt: string;
  heroEyebrow: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  breadcrumbCurrent: string;
  date: string;
  dateLabel: string;
  author: string;
  authorBio: string;
  readingTime: string;
  topics: string[];
  sections: BlogContentSection[];
  cta: {
    heading: string;
    buttonLabel: string;
    buttonHref: string;
  };
}

// Form Data Interfaces
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ProjectContactFormData {
  name: string;
  email: string;
  company?: string;
  budget: string;
  details: string;
  nda: boolean;
}

export interface NewsletterFormData {
  email: string;
}

// SEO Metadata Interface
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

// Component Props Interfaces
export interface LayoutProps {
  children: React.ReactNode;
  showPreloader?: boolean;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Slider Interface
export interface SliderProps {
  children: React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
}

export interface SliderItem {
  id: string;
  image: string;
  alt: string;
  hasPlayButton?: boolean;
}
