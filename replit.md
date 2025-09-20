# ProfolioX - Replit Setup Documentation

## Project Overview
ProfolioX is a modern portfolio website template built with Astro.js and Tailwind CSS v4. It features a clean, responsive design with sections for blog posts, store items, and work portfolio pieces. The template includes dark/light mode toggle, animations with AOS library, and modern typography.

## Recent Changes (September 20, 2025)
- **Replit Environment Setup**: Configured the project to run in Replit environment
- **Server Configuration**: Updated Astro config to bind to 0.0.0.0:5000 for Replit proxy compatibility
- **Workflow Setup**: Created "Astro Dev Server" workflow for development
- **Deployment Configuration**: Set up autoscale deployment with build and preview commands
- **URL Structure Simplified**: Changed URLs from `/work/home` to `/casestudies` and `/forms/contact` to `/contact`
- **Contact Page Redesign**: Removed forms and added contact details with social media icons
- **Case Study URLs**: Implemented descriptive URLs for work items (e.g., `/casestudies/sinequanone` instead of `/work/1`)
- **Redirects**: Added permanent redirects from old numbered URLs and `/work/` URLs to new `/casestudies/` URLs
- **Layout Updates**: Improved case study layout with full-width description and side-by-side project data and credits
- **Tools Field**: Added design tools information to project data showcasing tools like Figma, Miro, Adobe Creative Suite, etc.

## Project Architecture
- **Frontend Framework**: Astro.js v5.12.9 with modern ESM setup
- **Styling**: Tailwind CSS v4 (configuration in src/styles/global.css, no config file needed)
- **Content Management**: Markdown-based content in src/content/ directory
- **Build System**: Astro with Vite integration
- **Typography**: Geist font family for sans-serif and monospace

### Key Directories
- `src/pages/`: Route pages including index, blog, store, work sections
- `src/components/`: Reusable Astro components organized by functionality
- `src/content/`: Markdown content for blog posts, store items, and work pieces
- `src/layouts/`: Layout components for different page types
- `public/`: Static assets including images for blog, store, and work sections

## Development Setup
- **Server**: Runs on port 5000 with host 0.0.0.0 for Replit compatibility
- **Commands**: 
  - `npm run dev`: Start development server
  - `npm run build`: Build for production
  - `npm run preview`: Preview production build

## Deployment Configuration
- **Target**: Autoscale (suitable for static sites)
- **Build Command**: `npm run build`
- **Run Command**: `npm run preview`

## Key Features
- Responsive design with mobile navigation
- Dark/light mode toggle with localStorage persistence
- Search functionality for blog posts
- Pagination for blog, store, and work sections
- AOS animations
- Reusable component system (Text, Button, Wrapper components)
- SEO optimization with @astrolib/seo
- Sitemap generation

## User Preferences
- Modern, clean design aesthetic
- Component-based architecture
- TypeScript support with path aliases (@/* for src/*)
- Tailwind CSS v4 approach (styles in CSS file rather than config)