# Adex Digital Studio - Agency Website

A modern, responsive agency website built with Next.js 14, TypeScript, and SCSS. This project showcases digital services, portfolio projects, and provides a professional online presence for Adex Digital Studio.

## 🚀 Features

- **Server-Side Rendering (SSR)** with Next.js 14
- **TypeScript** for type safety and better developer experience
- **SCSS Modules** for component-scoped styling
- **Responsive Design** optimized for all devices
- **SEO Optimized** with Next.js Metadata API & next-seo
- **Image Optimization** with Next.js Image component (AVIF/WebP)
- **Interactive Components** with smooth animations
- **Modern Performance** with optimized loading and caching
- **Security Hardened** with comprehensive security headers
- **Code Quality** with ESLint, TypeScript, and Prettier

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** SCSS/Sass with CSS Modules
- **Icons:** Ionicons
- **Fonts:** Google Fonts (Manrope)
- **Package Manager:** Yarn
- **Linting:** ESLint + Prettier
- **SEO:** next-seo, next-sitemap
- **Validation:** Zod
- **Development:** Hot reload with Next.js dev server

## 📚 Documentation

- **[QUICK-REFERENCE.md](QUICK-REFERENCE.md)** - Quick reference guide (English/Tiếng Việt)
- **[OPTIMIZATION-SUMMARY.md](OPTIMIZATION-SUMMARY.md)** - Full optimization summary
- **[TOM-TAT-TOI-UU.md](TOM-TAT-TOI-UU.md)** - Tóm tắt tối ưu hóa (Tiếng Việt)
- **[docs/CONFIGURATION.md](docs/CONFIGURATION.md)** - Complete configuration guide
- **[docs/RECOMMENDED-PACKAGES.md](docs/RECOMMENDED-PACKAGES.md)** - Additional packages guide
- **[docs/RELEASE.md](docs/RELEASE.md)** - Release workflow documentation

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── blog/              # Blog page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Layout.tsx         # Page layout wrapper
│   └── sections/          # Page sections
│       └── home/          # Home page sections
├── hooks/                 # Custom React hooks
│   ├── useScroll.ts       # Scroll position hook
│   ├── useSlider.ts       # Image slider hook
│   └── useAccordion.ts    # Accordion functionality
├── styles/                # Global styles and utilities
│   ├── globals.scss       # Global styles
│   ├── _variables.scss    # SCSS variables
│   └── _mixins.scss       # SCSS mixins
├── types/                 # TypeScript type definitions
│   ├── index.ts           # Main type definitions
│   └── ion-icon.d.ts      # Ionicons type declarations
└── utils/                 # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/trinhquocthinh/Agency.git
   cd agency-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

### Development
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server

### Code Quality
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn lint:strict` - Run ESLint with no warnings allowed
- `yarn type-check` - Run TypeScript type checking
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

### Release Management
- `yarn release` - Create a patch release (1.0.0 → 1.0.1)
- `yarn release:patch` - Create a patch release
- `yarn release:minor` - Create a minor release (1.0.0 → 1.1.0)
- `yarn release:major` - Create a major release (1.0.0 → 2.0.0)

### Utilities
- `yarn clean` - Clean build directories
- `yarn analyze` - Analyze bundle size

See [docs/RELEASE.md](docs/RELEASE.md) for detailed release workflow documentation.

## 🎨 Customization

### Colors & Branding

Update brand colors in `src/styles/_variables.scss`:

```scss
// Primary brand colors
$violet-blue-crayola: hsla(234, 50%, 64%, 1);
$charcoal: hsla(218, 22%, 26%, 1);
$white: hsla(0, 0%, 100%, 1);
```

### Typography

Modify fonts in `src/app/layout.tsx` and `src/styles/_variables.scss`:

```scss
$ff-manrope: 'Manrope', sans-serif;
```

### Content

Update website content by editing the respective page files in `src/app/`:
- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Services: `src/app/services/page.tsx`
- etc.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 575px and below
- Tablet: 576px - 991px
- Desktop: 992px - 1199px
- Large Desktop: 1200px and above

## 🔧 Component Architecture

### Reusable Components

- **Header**: Navigation with mobile menu
- **Footer**: Site footer with newsletter signup
- **Layout**: Page wrapper with common elements
- **Sections**: Modular page sections

### Custom Hooks

- **useScroll**: Track scroll position for sticky header
- **useSlider**: Image carousel functionality
- **useAccordion**: Expandable content sections

## 🌐 SEO & Performance

- **Metadata API**: Dynamic meta tags for each page
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Google Fonts with display swap
- **Core Web Vitals**: Optimized for performance metrics

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings** (auto-detected for Next.js)
3. **Deploy** with automatic CI/CD

### Other Platforms

The project supports deployment on:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted servers

Build command: `yarn build`
Output directory: `.next`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Adex Digital Studio**
- Website: [https://adex-agency.com](https://adex-agency.com)
- Email: info@email.com
- Phone: 00 (123) 456 78 90

## 🙏 Acknowledgments

- Design inspiration from modern agency websites
- Next.js team for the amazing framework
- Ionicons for beautiful icons
- Google Fonts for typography

---

Built with ❤️ by [Adex Digital Studio](https://github.com/trinhquocthinh)