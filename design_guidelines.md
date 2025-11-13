# Strimdex Design Guidelines

## Design Approach
**Selected System:** Modern Fintech Design (inspired by Stripe, Cash App, Revolut)  
**Rationale:** Strimdex is a utility-focused fintech platform where trust, efficiency, and data clarity are paramount. Users need to quickly complete transactions, monitor balances, and track earnings with confidence. The design must communicate security while remaining approachable.

## Typography System

**Font Family:** Inter (Google Fonts) - exceptional readability for financial data
- Headings: Inter 600-700 (Semibold to Bold)
- Body: Inter 400-500 (Regular to Medium)
- Numbers/Currency: Inter 600 (Semibold) - tabular figures for alignment

**Hierarchy:**
- Hero Headlines: text-5xl to text-6xl, font-bold
- Page Titles: text-3xl to text-4xl, font-semibold
- Section Headers: text-xl to text-2xl, font-semibold
- Card Titles: text-lg, font-semibold
- Body Text: text-base, font-normal
- Small Text/Meta: text-sm, font-medium
- Wallet Amounts: text-4xl to text-5xl, font-bold
- Transaction Values: text-lg, font-semibold

## Spacing System

**Tailwind Units:** 2, 3, 4, 6, 8, 12, 16, 24
- Compact spacing (cards, buttons): p-3, p-4, gap-2, gap-3
- Standard sections: py-12, py-16
- Component gaps: space-y-4, space-y-6
- Grid gaps: gap-4, gap-6

## Layout Architecture

**Container Strategy:**
- Marketing pages: max-w-7xl mx-auto px-4
- Dashboard content: max-w-6xl mx-auto px-4
- Forms/Cards: max-w-2xl

**Grid Patterns:**
- Dashboard stats: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Marketplace: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Task cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Transaction lists: Single column with dividers

## Core Components

**Navigation:**
- Top navbar: Sticky, 64px height, logo left, primary actions right
- Dashboard sidebar: 240px wide desktop, collapsible on tablet, bottom nav on mobile
- Breadcrumbs: For deep navigation in admin/SME panels

**Cards:**
- Standard: rounded-xl, p-6, shadow-sm with subtle border
- Stat cards: Compact height, large numbers prominent, trend indicators
- Transaction rows: Horizontal layout, icon left, details center, amount right
- Product cards: Image top (aspect-ratio-square), content below, CTA button

**Wallet Display:**
- Hero section in dashboard: Large balance with currency symbol, gradient background treatment
- Available vs Locked balance clearly separated
- Quick actions row beneath (Add Funds, Withdraw, Transfer)

**Buttons:**
- Primary CTAs: px-6 py-3, rounded-lg, font-semibold
- Secondary: Similar size with outline variant
- Icon buttons: p-3, rounded-lg
- Transaction buttons: Full width on mobile, inline on desktop

**Forms:**
- Input fields: h-12, px-4, rounded-lg, border focus states
- Labels: text-sm font-medium, mb-2
- Grouped inputs: space-y-4
- Payment forms: Card-style with clear steps

**Tables/Lists:**
- Transaction history: Alternating row treatment, sticky headers
- Responsive: Card layout on mobile, table on desktop
- Sortable headers with icons

## Page-Specific Layouts

**Landing Page:**
- Hero: 80vh height, centered headline + subheadline, dual CTA buttons (Register as User / Register as SME), large hero image showcasing mobile app interface
- How It Works: 3-column grid on desktop with numbered steps, icons, and descriptions
- Features Grid: 2x2 grid of benefit cards with icons
- VTU Services Showcase: Horizontal scroll cards on mobile, 4-column grid on desktop
- Social Proof: Centered stats (users, transactions, cashback paid)
- CTA Section: Gradient background, centered content, prominent signup button

**Dashboard (User):**
- Wallet card: Top hero section, prominent balance, quick action buttons
- Stats row: 4 cards - Cashback Earned, Referrals, Tasks Completed, Total Spent
- Quick Actions Grid: 2x4 grid of service buttons (Airtime, Data, Cable TV, etc.)
- Recent Activity: List with last 5 transactions, "View All" link
- Active Tasks: 2-3 task cards with progress indicators

**VTU Services Pages:**
- Service selector: Tab navigation or icon grid at top
- Form area: Centered, max-w-md, single column with clear labels
- Recent transactions sidebar on desktop
- Cashback indicator: Prominent display of "Earn X% cashback"

**Marketplace:**
- Filter sidebar: Left column, collapsible on mobile
- Product grid: Responsive columns with hover states
- Category tabs: Horizontal scroll on mobile
- Product detail: 2-column layout, image gallery left, details + purchase right

**Micro-Tasks:**
- Available tasks list: Cards with task type icon, title, reward amount, difficulty badge
- Progress tracking: Visual progress bars for multi-step tasks
- Task detail: Full-width card with requirements, steps, reward breakdown

**Admin Dashboard:**
- Stats overview: 6-column metric cards at top
- Data tables: Full-width with filters, search, pagination
- Action panels: Right sidebar for quick actions
- Charts: Card-contained, 2-column grid on desktop

## Icons
**Library:** Heroicons (outline for navigation, solid for actions)
- Wallet: Currency icon
- Transactions: Arrow up/down
- Tasks: Clipboard checklist
- Referrals: User group
- VTU Services: Phone, TV, Lightning bolt

## Images

**Hero Image (Landing):** 
Mockup of Strimdex mobile app interface showing wallet dashboard with balance and recent cashback earnings. Position: Right side of hero on desktop (50% width), full width below headline on mobile. Style: Modern smartphone mockup with subtle shadow, angled slightly for depth.

**Feature Illustrations:**
Simple line art illustrations for "How It Works" steps - user registration, completing transaction, earning cashback. Clean, minimal style consistent with fintech aesthetic.

**No large decorative images needed** for dashboard/app sections - focus on data clarity and functional UI.

## Accessibility
- WCAG AA contrast ratios for all text
- Focus states: 2px outline offset by 2px
- Touch targets: Minimum 44px height for all interactive elements
- Form validation: Clear error messages below inputs
- Loading states: Skeleton screens for data-heavy pages

## Animation Principles
**Minimal and Purposeful:**
- Wallet balance updates: Number counting animation
- Transaction success: Subtle checkmark animation
- Page transitions: Simple fade, no complex animations
- Micro-interactions: Button press states only
- No parallax, no scroll-triggered animations

This design system prioritizes **trust, speed, and clarity** - essential for a financial platform where users manage real money and complete frequent transactions.