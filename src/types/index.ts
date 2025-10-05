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
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  href: string;
}

// Form Data Interfaces
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
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