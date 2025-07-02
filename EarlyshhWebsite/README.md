# Earlyshh Website

## Project Overview
Earlyshh Website is a Next.js 15 web platform providing admin and brand dashboards to manage the partnership ecosystem. This is the companion web platform to the iOS Partnership app, featuring location-based partnership activation, QR code management, and user tier system integration.

## 🚀 Current Status

### ✅ Phase 1: Critical Fixes (Completed - July 2, 2025)
- **Removed duplicate files**: Eliminated conflicting copies of use-mobile.tsx, use-toast.ts, and globals.css
- **Enabled error checking**: Fixed next.config.mjs to enable TypeScript and ESLint validation
- **Updated project configuration**: Changed package name from "my-v0-project" to "earlyshh-website"
- **Organized project structure**: Created docs/ directory and moved all documentation files
- **Clean build**: Project builds successfully with all validations enabled

### 🏗️ Next Phase: Component Decomposition
Ready to begin Phase 2 - breaking down the monolithic landing page into reusable components.

## 🛠 Tech Stack

### Core Framework
- **Next.js 15.2.4** - App Router with React 19
- **TypeScript 5** - Strict mode enabled
- **Tailwind CSS 3.4.17** - Utility-first styling
- **shadcn/ui** - Complete component library (50+ components)

### Key Libraries
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Hook Form + Zod** - Form handling and validation
- **Recharts** - Analytics/dashboard charts
- **Class Variance Authority** - Component variants
- **next-themes** - Dark/light theme support

## 📁 Project Structure

```
earlyshh-website/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Landing page (needs decomposition)
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── how-it-works/        # How it works page
│   └── globals.css          # Global styles
├── components/              # UI components
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx           # Site header
│   ├── footer.tsx           # Site footer
│   └── theme-provider.tsx   # Theme management
├── hooks/                   # Custom React hooks
│   ├── use-mobile.tsx       # Mobile detection hook
│   └── use-toast.ts         # Toast notifications
├── lib/                     # Utility functions
│   └── utils.ts            # Common utilities
├── docs/                    # Documentation
│   ├── ARCHITECTURE.md      # Architecture documentation
│   ├── TECHNICAL_ROADMAP.md # Development roadmap
│   └── Private & Shared/    # Additional docs
└── public/                  # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0+
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/MadisonSNYC/EarlyshhWebsite.git
cd EarlyshhWebsite

# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Open http://localhost:3000
```

### Available Scripts
```bash
npm run dev     # Start development server
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Run ESLint
```

## 🎯 Development Roadmap

### Phase 2: Component Decomposition (Next)
- Extract data layer from components
- Break down 445+ line landing page into focused components
- Add error boundaries and loading states
- Implement proper TypeScript interfaces

### Phase 3: Code Quality
- Abstract repeated patterns into reusable components
- Improve TypeScript strictness
- Add unit tests for utilities and hooks
- Implement performance optimizations

### Phase 4: Dashboard Development
- Admin dashboard for user and partnership management
- Brand dashboard for campaign creation and analytics
- Supabase integration for real-time data
- Role-based authentication system

## 🏗️ Planned Features

### Admin Dashboard
- User management (170M+ potential users)
- Partnership oversight with location tracking
- QR code management (TCB 8112 format)
- Analytics and reporting
- Brand verification workflow

### Brand Dashboard
- Campaign creation wizard
- Performance analytics
- User-generated content review
- Payment management ($2.00/partnership)
- Instagram integration monitoring

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:
```env
# Supabase (coming soon)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Other configs
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 📝 Contributing

1. Follow the coding standards in CLAUDE_EARLYSHH_WEBSITE.md
2. Run TypeScript and ESLint checks before committing
3. Update documentation when making architectural changes
4. Test all changes in development environment

## 🐛 Known Issues

- **date-fns version conflict**: Using --legacy-peer-deps due to react-day-picker requiring older version
- **Landing page needs decomposition**: Currently 445+ lines in single file
- **Missing error boundaries**: Need to add error.tsx, loading.tsx, not-found.tsx

## 📄 License

Private repository - All rights reserved

---

**Build Status**: ✅ Passing  
**Last Updated**: July 2, 2025  
**Maintained by**: Madison Raye Sutton

🤖 Generated with [Claude Code](https://claude.ai/code)  
Co-Authored-By: Claude <noreply@anthropic.com>