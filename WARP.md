# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (opens on http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

### Package Management
The project supports multiple package managers:
- npm (default, uses package-lock.json)
- bun (uses bun.lock)
- Use consistent package manager throughout development

## Project Architecture

### Framework & Tech Stack
- **Next.js 15** with App Router (React 19)
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** with custom design system
- **shadcn/ui** components with custom VW branding
- **Framer Motion** for animations and micro-interactions
- **OpenLayers** for interactive mapping functionality

### Project Structure
```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.tsx         # Root layout with VW branding
│   ├── page.tsx          # Homepage with component composition
│   └── globals.css       # Global styles and Tailwind config
├── components/            # React components
│   ├── ui/               # shadcn/ui base components
│   ├── HeroSection.tsx   # Landing hero with search functionality
│   ├── PredictiveMap.tsx # OpenLayers interactive map
│   ├── AIPredictions.tsx # AI forecast visualizations
│   ├── IQDriveIntegration.tsx # VW vehicle connectivity
│   ├── HostDashboard.tsx # Parking host management
│   ├── Navigation.tsx    # Site navigation
│   └── Footer.tsx        # Site footer
├── lib/
│   └── utils.ts         # Utility functions (cn helper)
├── hooks/               # Custom React hooks
└── visual-edits/        # Visual editing components
```

### Design System & Branding
- **VW Brand Colors**: 
  - Primary Blue: `#00B1EB`
  - Dark Blue: `#001E50`
  - Secondary: `#003D82`
- **Component Library**: shadcn/ui with "new-york" style variant
- **Animation Library**: Framer Motion for premium feel
- **Custom Classes**: Glass morphism effects, gradient utilities, premium shadows

### Key Features
1. **Predictive Parking Marketplace**: AI-powered parking availability forecasting
2. **OpenLayers Integration**: Interactive maps with real-time parking spot visualization
3. **VW IQ.DRIVE Integration**: Vehicle connectivity features
4. **Responsive Design**: Mobile-first approach with premium animations
5. **Visual Editing Support**: Component tagging for live editing

### Database & Auth (Configured but not yet implemented)
- **Database**: Drizzle ORM with LibSQL client
- **Authentication**: better-auth v1.3.10
- **Payment**: Stripe integration ready

### Special Configuration
- **Turbopack**: Enabled for faster development builds
- **TypeScript**: Build errors ignored for development speed
- **ESLint**: Build warnings ignored, custom rules for imports
- **Component Tagger**: Visual editing loader for JSX/TSX files
- **Remote Images**: Allow all domains for flexible image sources

### Development Notes
- Path alias `@/*` maps to `src/*`
- Component files use "use client" directive for interactivity
- Heavy use of motion animations for premium feel
- Custom Tailwind utilities for VW brand styling
- OpenLayers maps centered on Times Square for demo data

### Testing & Quality
- No specific test framework configured yet
- ESLint with Next.js recommended rules
- Custom import rules for better code organization
- TypeScript strict mode enabled