# Recommended Additional Packages for Next.js

## 🔐 Security & Validation

### 1. Input Validation & Sanitization
```bash
yarn add zod                    # ✅ Already installed
yarn add validator              # String validators & sanitizers
yarn add dompurify             # XSS protection for HTML
yarn add @types/dompurify -D
```

### 2. Authentication & Authorization
```bash
yarn add next-auth             # Authentication for Next.js
yarn add @auth/core
yarn add bcryptjs              # Password hashing
yarn add @types/bcryptjs -D
yarn add jsonwebtoken          # JWT tokens
yarn add @types/jsonwebtoken -D
```

### 3. Rate Limiting & CSRF Protection
```bash
yarn add rate-limiter-flexible # Rate limiting
yarn add csrf                  # CSRF protection
yarn add helmet                # Additional security headers
```

## 📧 Email & Communication

```bash
yarn add nodemailer            # Email sending
yarn add @types/nodemailer -D
yarn add react-email           # React email templates
yarn add @react-email/components
```

## 📊 Analytics & Monitoring

```bash
yarn add @vercel/analytics     # Vercel Analytics
yarn add @vercel/speed-insights # Speed Insights
yarn add @sentry/nextjs        # Error tracking
yarn add react-ga4             # Google Analytics 4
```

## 🎨 UI & Styling (Optional)

```bash
# CSS-in-JS
yarn add styled-components
yarn add @types/styled-components -D

# UI Component Libraries
yarn add @radix-ui/react-*     # Headless UI components
yarn add @headlessui/react     # Headless UI by Tailwind
yarn add class-variance-authority # CVA for variants
yarn add clsx tailwind-merge   # Class name utilities

# Animation
yarn add framer-motion         # ✅ Already installed
yarn add react-spring          # Spring animations
```

## 📝 Forms & Data Management

```bash
yarn add react-hook-form       # ✅ Already installed
yarn add @hookform/resolvers   # ✅ Already installed
yarn add react-select          # Advanced select components
yarn add react-datepicker      # Date picker
yarn add @types/react-datepicker -D
```

## 🗄️ State Management

```bash
yarn add zustand               # Lightweight state management
yarn add @tanstack/react-query # Server state management
yarn add jotai                 # Atomic state management
```

## 🌐 Internationalization (i18n)

```bash
yarn add next-intl             # i18n for Next.js App Router
yarn add @formatjs/intl        # Number/date formatting
```

## 📱 PWA & Mobile

```bash
yarn add next-pwa              # Progressive Web App
yarn add @ducanh2912/next-pwa  # Next.js 14+ PWA support
yarn add workbox-webpack-plugin -D
```

## 🔍 SEO & Schema

```bash
yarn add next-seo              # ✅ Already installed
yarn add next-sitemap          # ✅ Already installed
yarn add schema-dts            # Google structured data types
```

## 🛠️ Development Tools

```bash
yarn add -D @next/bundle-analyzer  # ✅ Already installed
yarn add -D webpack-bundle-analyzer
yarn add -D @types/node            # ✅ Already installed
yarn add -D prettier-plugin-tailwindcss # If using Tailwind
```

## 🧪 Testing

```bash
# Unit & Integration Testing
yarn add -D @testing-library/react
yarn add -D @testing-library/jest-dom
yarn add -D @testing-library/user-event
yarn add -D jest
yarn add -D jest-environment-jsdom
yarn add -D @types/jest

# E2E Testing
yarn add -D @playwright/test    # Playwright
yarn add -D cypress             # Cypress
```

## 📦 Database & ORM

```bash
# PostgreSQL
yarn add @vercel/postgres      # Vercel Postgres
yarn add pg
yarn add @types/pg -D

# MongoDB
yarn add mongodb
yarn add mongoose
yarn add @types/mongoose -D

# ORM
yarn add prisma -D             # Prisma ORM
yarn add @prisma/client
yarn add drizzle-orm           # Drizzle ORM
```

## 🚀 Performance & Optimization

```bash
yarn add next-compose-plugins  # Compose Next.js plugins
yarn add @plaiceholder/next    # Blur placeholder images
yarn add sharp                 # ✅ Already installed
```

## 📄 Content Management

```bash
yarn add contentlayer          # Content layer for MDX
yarn add next-mdx-remote       # MDX remote content
yarn add gray-matter           # Parse frontmatter
yarn add reading-time          # Calculate reading time
yarn add rehype-*              # HTML processors
yarn add remark-*              # Markdown processors
```

## 🎯 Analytics & Tracking

```bash
yarn add @analytics/google-analytics
yarn add @analytics/google-tag-manager
yarn add mixpanel-browser
yarn add @types/mixpanel-browser -D
yarn add posthog-js            # PostHog analytics
```

## 🔔 Notifications & Toast

```bash
yarn add react-hot-toast       # Toast notifications
yarn add sonner                # Minimalist toast
```

## 📅 Utilities

```bash
yarn add date-fns              # Date utilities
yarn add dayjs                 # Lightweight date library
yarn add lodash                # Utility functions
yarn add @types/lodash -D
yarn add nanoid                # Unique ID generator
```

## 🌍 API & HTTP

```bash
yarn add axios                 # HTTP client
yarn add swr                   # Data fetching (by Vercel)
yarn add ky                    # Fetch wrapper
```

## 🎪 Media & Files

```bash
yarn add react-dropzone        # Drag & drop file uploads
yarn add react-player          # Video player
yarn add react-image-gallery   # Image gallery
```

## 💳 Payment Integration

```bash
yarn add stripe                # Stripe payments
yarn add @stripe/stripe-js
yarn add @stripe/react-stripe-js
```

## 🗺️ Maps

```bash
yarn add @vis.gl/react-google-maps  # Google Maps
yarn add leaflet                     # Leaflet maps
yarn add react-leaflet
yarn add @types/leaflet -D
```

## Priority Installation Recommendations

### Must Have (High Priority)
```bash
# Security & Validation
yarn add validator dompurify
yarn add @types/dompurify -D

# Analytics
yarn add @vercel/analytics @vercel/speed-insights

# Error Tracking
yarn add @sentry/nextjs

# State Management
yarn add zustand @tanstack/react-query

# Testing
yarn add -D @testing-library/react @testing-library/jest-dom jest
```

### Nice to Have (Medium Priority)
```bash
# Authentication
yarn add next-auth

# Email
yarn add nodemailer react-email
yarn add @types/nodemailer -D

# Notifications
yarn add react-hot-toast

# Date Utilities
yarn add date-fns
```

### Optional (Based on Requirements)
```bash
# Database (choose one)
yarn add prisma @prisma/client -D

# PWA
yarn add @ducanh2912/next-pwa

# i18n
yarn add next-intl

# CMS
yarn add contentlayer
```

## Installation Commands

### Quick Start (Essential packages only)
```bash
yarn add validator dompurify @vercel/analytics @vercel/speed-insights zustand @tanstack/react-query react-hot-toast date-fns
yarn add -D @types/dompurify
```

### Full Stack Setup
```bash
# Add authentication, database, and email
yarn add next-auth prisma bcryptjs nodemailer react-email
yarn add -D @prisma/client @types/bcryptjs @types/nodemailer
```

### Testing Setup
```bash
yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom @types/jest @playwright/test
```
