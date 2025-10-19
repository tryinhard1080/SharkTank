# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**WasteWise Demo App** is a React + TypeScript + Vite application for automating waste management contract and invoice analysis for property managers. The app demonstrates AI-powered document parsing, cost analysis, and portfolio-wide insights through an interactive demo interface.

## Development Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Technology Stack

- **Framework**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1 with custom design system
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.344.0

## Application Architecture

### Navigation Pattern
The app uses **state-based section routing** (no React Router) via `activeSection` state in `App.tsx`:

```typescript
// App.tsx manages navigation between these sections:
sections = [
  'landing',    // Process Overview (LandingSection.tsx)
  'scanner',    // Contract Demo (ScannerDemo.tsx)
  'invoice',    // Invoice Demo (InvoiceDemo.tsx)
  'compactor',  // Compactor Bid (CompactorBidComparison.tsx)
  'dashboard',  // Opportunities (CombinedDashboard.tsx)
  'warehouse',  // Data Warehouse (DataWarehouse.tsx)
  'report'      // Property Report (PropertyAnalysisReport.tsx)
]
```

To add a new section:
1. Create component in `src/components/`
2. Add section object to `sections` array in `App.tsx:16`
3. Add case to `renderActiveSection()` switch in `App.tsx:26`

### Component Organization

**Key Components:**
- **App.tsx**: Main container, section routing, mobile menu state
- **Header.tsx**: Fixed navigation bar with section switching
- **ScannerDemo.tsx**: Contract document parser with multi-step demo flow
- **InvoiceDemo.tsx**: Invoice analyzer (shares logic with ScannerDemo)
- **CombinedDashboard.tsx**: Animated KPI cards using Framer Motion
- **DataWarehouse.tsx**: Property portfolio table with sorting
- **PropertyAnalysisReport.tsx**: Detailed property-level reports

**Shared Components:**
- **KPICard.tsx**: Animated metric cards with count-up effects
- **DataTable.tsx**: Reusable table with column configuration
- **SavingsChart.tsx**: Visual breakdown of savings categories

### Data Flow
All data is currently **hardcoded in components** as mock data. No external API calls or state management library is used. Each component maintains its own local state with `useState`.

## Custom Design System (Updated Oct 2025)

### Modern Color Palette (tailwind.config.js)
**Primary Colors:**
```css
electric-blue: #0080FF    /* Primary CTA and highlights */
neon-green: #00FF88       /* Success states and savings */
sunset-coral: #FF6B6B     /* Alerts and urgency */
```

**Navy Gradient Scale:**
```css
navy-900: #00345B  /* Primary brand */
navy-800: #004A80  /* Secondary */
navy-700: #0066A5  /* Lighter accent */
navy-100: #E6F0F7  /* Light backgrounds */
```

**Extended Palette:**
```css
green-700: #2D6A4F    /* Deep green (legacy) */
green-600: #00D97E    /* Savings highlight */
green-500: #40916C    /* Success states */
green-100: #D8F3DC    /* Light backgrounds */

orange-600: #B87024   /* Bourbon orange (legacy) */
orange-500: #D68934   /* Lighter accent */
orange-100: #FDEEE0   /* Light backgrounds */

alert-red: #D62828    /* Critical alerts */
alert-yellow: #F77F00 /* Warnings */
```

### Typography
- **Headings**: Inter font-family, 60-72px for hero (text-5xl to text-7xl)
- **Body**: Roboto font-family, line-height 1.6-1.8
- **Gradient Text**: Used for hero headlines with electric-blue to neon-green

### Custom Animations
- `animate-pulse-glow`: Pulsing shadow for CTAs (2s infinite)
- `animate-count-up`: Number animation for KPIs (2s duration)
- `animate-fade-in`: Smooth entry (0.6s)
- `animate-slide-up`: Content slides up on load (0.6s)
- `animate-float`: Gentle floating motion (3s infinite)
- `animate-checkmark`: Animated checkmark with rotation (0.5s)

### Custom Shadows (Glassmorphism)
- `shadow-glow`: Blue glow effect (0 0 20px rgba(0, 128, 255, 0.5))
- `shadow-glow-green`: Green glow (0 0 20px rgba(0, 255, 136, 0.5))
- `shadow-float`: Floating card effect (0 20px 60px rgba(0, 0, 0, 0.15))
- `shadow-card`: Subtle card shadow (0 4px 20px rgba(0, 0, 0, 0.08))

### Backdrop Blur (Glassmorphism)
- `backdrop-blur-glass`: 20px blur for frosted glass effect
- `backdrop-blur-glass-sm`: 10px blur for subtle glass effect

## Important Patterns

### Adding Animated KPIs
Use the `AnimatedKPI` component from `CombinedDashboard.tsx` with delay prop for staggered animations:

```typescript
<AnimatedKPI
  title="Metric Name"
  value={1234}
  prefix="$"
  suffix=""
  icon={DollarSign}
  color="text-green-600"
  bgColor="bg-green-50"
  trend="vs last month"
  delay={200} // Stagger by 200ms
/>
```

### Document Scanning Demo Pattern
Both `ScannerDemo.tsx` and `InvoiceDemo.tsx` follow this flow:
1. Initial state with upload button
2. Click triggers scanning animation (progress bar 0-100%)
3. Display parsed fields with status badges (risk/opportunity/neutral)
4. Show KPI cards and comparison data
5. Reset button returns to step 1

### Status Badge Colors
```typescript
'Flagged' | 'Risk' → red/orange
'Opportunity' → green
'Expiring Soon' → yellow/orange
'Active' | 'Verified' → green
'Neutral' → gray
```

## Common Modifications

### Updating Mock Data
Property/contract/invoice data is embedded in component files. To update:
- **CombinedDashboard.tsx:137-185**: Property data array
- **DataWarehouse.tsx:9-101**: Extended property listings
- **ScannerDemo.tsx**: Contract parsing fields and KPIs
- **InvoiceDemo.tsx**: Invoice-specific fields

### Adding New Icons
All icons use Lucide React:
```typescript
import { IconName } from 'lucide-react';
<IconName className="w-6 h-6 text-blue-600" />
```

### Responsive Breakpoints (Tailwind defaults)
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## Known Limitations

1. **No URL-based routing**: Browser back button doesn't work, no deep linking
2. **No state management**: Data duplicated across components
3. **Code duplication**: ScannerDemo and InvoiceDemo share 90% of logic
4. **Upload buttons non-functional**: Currently cosmetic, no file handling
5. **No error boundaries**: Component failures not handled gracefully

## Branding Notes

- Product name: **WasteWise** (some legacy references to "Advantage Waste Analyzer" may exist)
- Target audience: Property managers
- Logo location: `/public/image.png`
- Key value props: Time savings (47.3 hrs/month), Cost reduction (23.5%), Compliance monitoring

## File Structure

```
src/
├── components/       # All React components
├── App.tsx          # Main app container, section routing
├── main.tsx         # React root entry point
├── index.css        # Tailwind imports + custom styles
└── vite-env.d.ts    # Vite type definitions
```

## Configuration Files

- **vite.config.ts**: Excludes lucide-react from optimization
- **tailwind.config.js**: Custom colors, fonts, animations
- **tsconfig.json**: References app and node configs
- **eslint.config.js**: React-specific linting rules

## Development Notes

- **Port**: Dev server runs on `http://localhost:5173`
- **Hot reload**: Vite HMR enabled for fast development
- **TypeScript**: Strict mode not fully enabled, some loose typing exists
- **Dependencies**: Run `npm install` if node_modules missing
- **Build**: `npm run build` - Successfully compiles (7.56s, ~358 KB JS bundle)

## Design Philosophy (2025 Update)

**Color Usage Guidelines:**
- **Electric Blue (#0080FF)**: Primary CTAs, active states, technology highlights
- **Neon Green (#00FF88)**: Savings indicators, success states, positive metrics
- **Sunset Coral (#FF6B6B)**: Urgent alerts, expiring contracts, warnings
- **Navy Gradients**: Headers, backgrounds, professional elements
- **Glassmorphism**: Use backdrop-blur-glass on floating cards for modern premium feel

**Animation Best Practices:**
- Use `transform` and `opacity` for GPU acceleration
- Apply `animate-float` to icons for subtle engagement
- Use `animate-pulse-glow` on primary CTAs to draw attention
- Stagger animations with delay props (200ms, 400ms, 600ms, etc.)
- Number counters should animate on visibility (existing pattern in CombinedDashboard)

**Component Styling Patterns:**
- Cards: `bg-white/90 backdrop-blur-glass-sm shadow-card hover:shadow-float hover:scale-105`
- CTAs: `bg-electric-blue text-white shadow-glow animate-pulse-glow hover:scale-105`
- Active nav: `bg-electric-blue shadow-glow transform scale-105`
- Icons in cards: `group-hover:animate-float group-hover:scale-110`

## Recent Updates (Oct 2025)

**Phase 1 Quick Wins Completed:**
- ✅ Modernized color palette (electric blue, neon green, sunset coral)
- ✅ Enhanced typography (60-72px hero headlines with gradients)
- ✅ Implemented glassmorphism effects on cards
- ✅ Added animated checkmarks and floating icons
- ✅ Updated CTA buttons with pulsing glow effects
- ✅ Improved value proposition messaging
- ✅ Enhanced header and navigation with modern styling
- ✅ Updated dashboard KPI cards with gradient backgrounds

See `IMPROVEMENTS_SUMMARY.md` for detailed changelog and `Warp.md` for comprehensive project analysis and feature roadmap.
