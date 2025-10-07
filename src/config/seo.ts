import type { Metadata } from 'next';

// Base SEO configuration
export const siteConfig = {
  name: 'Adex Digital Studio',
  description:
    'Professional digital agency specializing in web development, design, and digital solutions. Transform your business with cutting-edge technology.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://adex-agency.com',
  ogImage: '/assets/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/adexstudio',
    github: 'https://github.com/adexstudio',
    linkedin: 'https://linkedin.com/company/adexstudio',
  },
};

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'digital agency',
    'web development',
    'web design',
    'UI/UX design',
    'mobile app development',
    'digital marketing',
    'SEO',
    'Next.js',
    'React',
    'TypeScript',
  ],
  authors: [{ name: 'Adex Digital Studio' }],
  creator: 'Adex Digital Studio',
  publisher: 'Adex Digital Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@adexstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};
