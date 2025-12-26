import type { Metadata } from 'next';

// Base SEO configuration
export const siteConfig = {
  name: 'Greenbillion Digital Studio',
  description:
    'Professional digital agency specializing in algorithmic trading, web and mobile development.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://greenbillion.vercel.app',
  ogImage: '/assets/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/greenbillion',
    github: 'https://github.com/greenbillion',
    linkedin: 'https://linkedin.com/company/greenbillion',
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
  authors: [{ name: 'Greenbillion Digital Studio' }],
  creator: 'Greenbillion Digital Studio',
  publisher: 'Greenbillion Digital Studio',
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
    creator: '@greenbillion',
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
