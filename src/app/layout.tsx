import type { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | Adex Digital Studio',
    default: 'Adex • Digital Product Studio',
  },
  description:
    'Partner with Adex to design standout digital products, launch faster, and grow sustainably.',
  keywords: [
    'digital agency',
    'web design',
    'web development',
    'mobile app development',
    'UX/UI design',
    'branding',
    'digital marketing',
    'product development',
  ],
  authors: [{ name: 'Adex Digital Studio' }],
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adex-agency.com',
    siteName: 'Adex Digital Studio',
    title: 'Adex • Digital Product Studio',
    description:
      'Partner with Adex to design standout digital products, launch faster, and grow sustainably.',
    images: [
      {
        url: '/assets/images/hero-slide-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Adex Digital Studio - Crafting Digital Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adex • Digital Product Studio',
    description:
      'Partner with Adex to design standout digital products, launch faster, and grow sustainably.',
    images: ['/assets/images/hero-slide-1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon fallback */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/assets/images/hero-bg.jpg" />
        <link rel="preload" as="image" href="/assets/images/hero-slide-1.jpg" />
        <link rel="preload" as="image" href="/assets/images/hero-slide-2.jpg" />
        <link rel="preload" as="image" href="/assets/images/hero-slide-3.jpg" />

        {/* Ionicons */}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          async
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          defer
        ></script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
