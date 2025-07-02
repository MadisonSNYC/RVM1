# CLAUDE_EARLYSHH_WEBSITE.md

This file provides guidance to Claude Code when working with the EarlyshhWebsite codebase and serves as the master development plan for refactoring and dashboard implementation.

## 📋 SESSION RULES

**MANDATORY WORKFLOW:**
1. **Task Completion Protocol**: After completing any task, ALWAYS return to this CLAUDE.md file and:
   - Mark the completed task with ✅ 
   - Add completion timestamp
   - Provide summary of what was accomplished
   - Note any issues encountered or deviations from plan

2. **Coding Standards**: ALWAYS follow these best practices:
   - Use TypeScript with strict typing
   - Follow component naming conventions (PascalCase for components)
   - Write clean, readable code with proper comments
   - Test changes before marking as complete
   - Follow Next.js App Router conventions
   - Use proper git commit messages

3. **Documentation Requirements**:
   - Update this file after each completed phase/step
   - Document any architectural decisions made
   - Note any dependencies or blockers discovered
   - Keep progress tracking accurate and current

4. **Quality Assurance**:
   - Run `npm run lint` before committing changes
   - Ensure TypeScript compilation succeeds
   - Test functionality in development environment
   - Follow security best practices (no hardcoded secrets)

5. **Communication Protocol**:
   - Provide clear status updates when completing tasks
   - Explain any deviations from the original plan
   - Ask for clarification if requirements are unclear
   - Report blockers immediately

**CURRENT SESSION FOCUS**: Phase 2 ✅ COMPLETED - Ready for Phase 3: Code Quality

## Project Overview

**EarlyshhWebsite** - Next.js 15 web platform for admin and brand dashboards to manage the partnership ecosystem. Companion to the iOS Partnership Platform with location-based partnership activation, QR code management, and user tier system integration.

## Current Status

**Deployment**: Vercel-ready, GitHub repository connected  
**Domain**: Needs connection to earlyshh.com  
**Architecture**: Next.js 15 + TypeScript + shadcn/ui + Tailwind CSS  
**Database**: Supabase integration planned (sync with iOS app)  

## Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Tech Stack

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

---

## 🚨 CRITICAL CODEBASE AUDIT FINDINGS

### Immediate Blockers (Fix Before Dashboard Development)

#### 1. **Duplicate File Conflicts** ⚠️
```
PROBLEM: Identical files in multiple locations
- /hooks/use-mobile.tsx vs /components/ui/use-mobile.tsx
- /hooks/use-toast.ts vs /components/ui/use-toast.ts  
- /app/globals.css vs /styles/globals.css

ACTION: Delete duplicates in /components/ui/, keep canonical in /hooks/
```

#### 2. **Disabled Error Checking** 🚨
```typescript
// next.config.mjs - DANGEROUS CONFIGURATION
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },     // ❌ REMOVE
  typescript: { ignoreBuildErrors: true }, // ❌ REMOVE
}
```

#### 3. **Generic Project Name** 📦
```json
// package.json
"name": "my-v0-project" // ❌ Should be "earlyshh-website"
```

### Architectural Issues

#### 1. **Monolithic Landing Page** (445+ lines)
```
app/page.tsx:
├── 80+ lines of static data arrays
├── 300+ lines of mixed UI/logic
├── No separation of concerns
└── Difficult to maintain/test
```

#### 2. **Missing Error Boundaries**
```
MISSING FILES:
- app/error.tsx (error handling)
- app/loading.tsx (loading states)  
- app/not-found.tsx (404 handling)
```

#### 3. **No Data Layer**
```
PROBLEM: Static content hardcoded in components
SOLUTION: Extract to /data directory with TypeScript interfaces
```

---

## 🎯 REFACTORING PLAN - PRIORITIZED

### **Phase 1: Critical Fixes (Week 1)** ✅ COMPLETED

#### Step 1.1: Remove Duplicate Files ✅ COMPLETED - July 2, 2025
```bash
# Delete duplicate hooks
rm components/ui/use-mobile.tsx  ✅ DONE
rm components/ui/use-toast.ts    ✅ DONE  
rm styles/globals.css            ✅ DONE

# Update all imports to canonical /hooks/ versions ✅ VERIFIED
```

#### Step 1.2: Enable Error Checking ✅ COMPLETED - July 2, 2025
```typescript
// next.config.mjs - FIXED VERSION ✅ IMPLEMENTED
const nextConfig = {
  images: { unoptimized: true }, // Keep only this
  // Removed eslint and typescript ignore flags ✅ DONE
}
```

**COMPLETION SUMMARY:**
- ✅ Removed all duplicate files (use-mobile.tsx, use-toast.ts, styles/globals.css)
- ✅ Fixed next.config.mjs by removing `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors`
- ✅ Installed all dependencies with `--legacy-peer-deps` to resolve date-fns conflicts
- ✅ Build now passes successfully with proper TypeScript and ESLint validation
- ✅ All changes committed to git with proper commit message
- ⚠️ Date-fns version conflict resolved using legacy peer deps (react-day-picker requires older version)

#### Step 1.3: Fix Project Configuration ✅ COMPLETED - July 2, 2025
```json
// package.json - UPDATE ✅ DONE
{
  "name": "earlyshh-website",
  "description": "Earlyshh Web Platform - Admin and Brand Dashboards",
  "repository": "https://github.com/MadisonSNYC/EarlyshhWebsite.git"
}
```

#### Step 1.4: Clean Project Root ✅ COMPLETED - July 2, 2025
```bash
# Remove archive files ✅ DONE
rm "earlyshh-landing (1).zip"
rm ComprehesizeReport.zip

# Create docs directory and move documentation ✅ DONE
mkdir docs
mv ARCHITECTURE.md docs/
mv TECHNICAL_ROADMAP.md docs/
mv "Private & Shared/" docs/
# Also moved AI Coding Best Practices PDF ✅ DONE
```

**PHASE 1 COMPLETION SUMMARY:**
- ✅ All duplicate files removed
- ✅ Error checking enabled in next.config.mjs
- ✅ Package.json properly configured with project name and metadata
- ✅ Project root cleaned and organized with docs/ directory
- ✅ All builds passing successfully
- ✅ Ready to proceed with Phase 2: Component Decomposition

### **Phase 2: Component Decomposition (Week 2)** ✅ COMPLETED

#### Step 2.1: Extract Data Layer ✅ COMPLETED - July 2, 2025
```typescript
// Create data/benefits.ts
export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
}

export const whyChooseEarlyshhBenefits: Benefit[] = [...]
```

#### Step 2.2: Decompose Landing Page ✅ COMPLETED - July 2, 2025
```
NEW STRUCTURE:
components/sections/
├── HeroSection.tsx
├── BenefitsSection.tsx
├── FeaturesSection.tsx
├── StepsSection.tsx
├── IndustryInsightsSection.tsx
└── CTASection.tsx

app/page.tsx (orchestration only - <50 lines)
```

#### Step 2.3: Add Error Handling ✅ COMPLETED - July 2, 2025
```typescript
// app/error.tsx
'use client'
export default function Error({ error, reset }: ErrorProps) {
  return <ErrorBoundary error={error} reset={reset} />
}

// app/loading.tsx
export default function Loading() {
  return <LoadingSpinner />
}

// app/not-found.tsx
export default function NotFound() {
  return <NotFoundPage />
}
```

**PHASE 2 COMPLETION SUMMARY:**
- ✅ **Massive code reduction**: Landing page from 445+ lines to 21 lines
- ✅ **Data layer extracted**: 4 organized TypeScript interface files in /data
- ✅ **7 section components**: All designs preserved, better maintainability
- ✅ **Complete error boundaries**: error.tsx, loading.tsx, not-found.tsx with brand styling
- ✅ **3 reusable UI components**: FeatureCard, SectionHeader, GradientButton
- ✅ **Build successful**: All functionality working, designs identical
- ✅ **Improved architecture**: Clean separation of concerns, easy to maintain
- ✅ **Original backup preserved**: app/page.tsx.backup contains original design

### **Phase 3: Code Quality (Week 3)**

#### Step 3.1: Abstract Repeated Patterns
```typescript
// components/ui/feature-card.tsx
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: 'benefit' | 'feature' | 'step';
}

// lib/design-tokens.ts
export const gradients = {
  primary: 'from-pink-500 via-purple-600 to-blue-600',
  secondary: 'from-sky-400 to-cyan-400',
} as const;
```

#### Step 3.2: Improve TypeScript
```typescript
// Enable stricter rules in tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### **Phase 4: Dashboard Preparation (Week 4)**

#### Step 4.1: State Management Setup
```bash
npm install zustand @tanstack/react-query
```

```typescript
// lib/stores/dashboard-store.ts
interface DashboardState {
  user: User | null;
  partnerships: Partnership[];
  analytics: AnalyticsData;
}
```

#### Step 4.2: API Layer Foundation
```typescript
// lib/api/client.ts
export class ApiClient {
  constructor(private supabase: SupabaseClient) {}
  
  partnerships = {
    list: () => this.supabase.from('partnerships').select('*'),
    create: (data: CreatePartnershipData) => {...},
  }
}
```

---

## 🏗️ DASHBOARD ARCHITECTURE PLAN

### Admin Dashboard Requirements

#### Core Features Needed:
- **User Management**: 170M+ potential users, tier system management
- **Partnership Oversight**: Location-based (500ft/1000ft) activation tracking  
- **QR Code Management**: TCB 8112 Universal Digital Coupon system
- **Analytics Dashboard**: Revenue, engagement, geographic metrics
- **Brand Verification**: Quality assurance workflow

#### Technical Structure:
```
app/admin/
├── dashboard/
│   ├── page.tsx (overview)
│   ├── users/page.tsx (user management) 
│   ├── partnerships/page.tsx (partnership oversight)
│   ├── analytics/page.tsx (metrics & reporting)
│   └── brands/page.tsx (brand verification)
├── layout.tsx (admin auth wrapper)
└── loading.tsx
```

### Brand Dashboard Requirements

#### Core Features Needed:
- **Campaign Creation**: Partnership setup with location targeting
- **Performance Analytics**: ROI tracking, engagement metrics  
- **Content Review**: User-generated content approval
- **Payment Management**: Performance-based pricing ($2.00/partnership)
- **Instagram Integration**: Story sharing compliance monitoring

#### Technical Structure:
```
app/brand/
├── dashboard/
│   ├── page.tsx (overview)
│   ├── campaigns/page.tsx (campaign management)
│   ├── analytics/page.tsx (performance metrics)
│   ├── content/page.tsx (UGC review)
│   └── billing/page.tsx (payment management)
├── layout.tsx (brand auth wrapper)
└── loading.tsx
```

### Database Integration

#### Supabase Schema (sync with iOS app):
```sql
-- Users table
users: id, instagram_handle, tier_status, location, metrics

-- Partnerships table  
partnerships: id, brand_id, location, requirements, status, metrics

-- QR Codes table (TCB 8112 format)
qr_codes: id, partnership_id, code, expiration, redemption_status

-- Analytics table
analytics: partnership_id, impressions, clicks, conversions, revenue
```

#### Authentication Strategy:
```typescript
// Role-based access control
type UserRole = 'admin' | 'brand' | 'user'
type AdminPermissions = 'user_management' | 'partnership_oversight' | 'analytics'
type BrandPermissions = 'campaign_creation' | 'content_review' | 'analytics'
```

---

## 🚀 IMPLEMENTATION ROADMAP

### Sprint 1: Foundation (Week 1-2)
- [ ] Complete Phase 1 critical fixes
- [ ] Set up Supabase database
- [ ] Create authentication system
- [ ] Basic admin dashboard structure

### Sprint 2: Admin Dashboard (Week 3-4)  
- [ ] User management interface
- [ ] Partnership oversight panel
- [ ] Basic analytics dashboard
- [ ] QR code management system

### Sprint 3: Brand Dashboard (Week 5-6)
- [ ] Campaign creation wizard
- [ ] Performance analytics interface
- [ ] Content review system
- [ ] Payment management panel

### Sprint 4: Integration & Polish (Week 7-8)
- [ ] iOS app API integration
- [ ] Real-time data synchronization
- [ ] Instagram API integration  
- [ ] Production deployment

---

## 🔍 DEVELOPMENT GUIDELINES

### Code Quality Standards
1. **TypeScript**: All components must have proper interfaces
2. **Testing**: Unit tests required for all utilities and hooks
3. **Performance**: Lazy load dashboard components
4. **Accessibility**: All UI components must be WCAG compliant
5. **Security**: No hardcoded secrets, proper sanitization

### Component Architecture
```typescript
// Standard component structure
interface ComponentProps {
  // Explicit prop types
}

export function Component({ ...props }: ComponentProps) {
  // Hooks at top
  // Event handlers
  // Render logic
}

export default Component;
```

### Error Handling
```typescript
// Standard error boundary pattern
try {
  await apiCall();
} catch (error) {
  console.error('Operation failed:', error);
  toast.error('Operation failed. Please try again.');
}
```

---

## 📋 NEXT IMMEDIATE ACTIONS

### Before Starting Dashboard Development:
1. **Complete Phase 1 fixes** (critical blockers)
2. **Set up proper TypeScript configuration**  
3. **Create component decomposition plan**
4. **Set up Supabase account and database**

### Dashboard Development Preparation:
1. **Define data models and API endpoints**
2. **Create authentication flow mockups**
3. **Plan role-based routing structure**
4. **Set up analytics tracking requirements**

---

## 🎯 SUCCESS CRITERIA

### Refactoring Complete When:
- [ ] No duplicate files remain
- [ ] TypeScript/ESLint errors enabled and resolved
- [ ] Landing page decomposed into <10 focused components
- [ ] Data layer extracted with proper interfaces
- [ ] Error boundaries and loading states implemented

### Dashboard Ready When:
- [ ] Admin can manage users, partnerships, and QR codes
- [ ] Brands can create campaigns and view analytics
- [ ] Real-time data sync with iOS app functional  
- [ ] Role-based authentication and authorization working
- [ ] Production deployment stable and monitored

---

**Current Status**: Foundation refactoring required before dashboard development  
**Next Priority**: Execute Phase 1 critical fixes immediately  
**Target**: Dashboard MVP ready for pilot launch by target date