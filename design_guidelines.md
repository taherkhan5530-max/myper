# Professional Portfolio/Services Website Design Guidelines

## Design Approach
**Reference-Based: Modern Agency Portfolio**
Drawing inspiration from contemporary portfolio leaders (Awwwards winners, Dribbble top portfolios) with emphasis on sophisticated layouts and content hierarchy. The design will balance professional credibility with creative presentation, using established patterns from successful service-based portfolios.

**Core Principles:**
- Clean, spacious layouts with strategic content density
- Visual hierarchy through typography and spacing
- Card-based service presentation for scannability
- Professional trust-building through structured information

## Typography System

**Font Families:**
- Primary: Inter (CDN: Google Fonts) - Headers, navigation, UI elements
- Secondary: Source Sans Pro - Body text, descriptions

**Hierarchy:**
- H1 (Hero): 3.5rem (56px), font-weight 700, letter-spacing -0.02em
- H2 (Section Headers): 2.5rem (40px), font-weight 600
- H3 (Card Titles): 1.5rem (24px), font-weight 600
- Body Large: 1.125rem (18px), font-weight 400, line-height 1.7
- Body: 1rem (16px), font-weight 400, line-height 1.6
- Small: 0.875rem (14px), font-weight 400

## Layout System

**Spacing Scale:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-8 (desktop), p-6 (mobile)
- Element gaps: gap-8 between major elements, gap-4 for related items

**Container Widths:**
- Max content width: max-w-7xl (1280px)
- Form containers: max-w-2xl (672px)
- Text content: max-w-3xl for readability

**Grid Systems:**
- Services: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Use grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pattern

## Component Library

**Header Navigation:**
Fixed position with backdrop blur, height 80px. Logo left-aligned, navigation links centered or right-aligned, CTA button far right. Include subtle shadow on scroll. Navigation links should have understated hover states (slight opacity shift).

**Hero Section:**
Full-width, min-height 85vh. Two-column layout: left side contains headline, subheadline (2-3 lines max), and primary CTA button. Right side features large hero image with subtle shadow. Buttons over hero image require backdrop-blur-md background treatment.

**Services Cards:**
Three cards in grid layout. Each card: icon (Heroicons via CDN, 48px size), service title (H3), description (2-3 lines), subtle hover elevation (translate-y -2px, enhanced shadow). Cards have light background with border, generous internal padding (p-8).

**Contact Form:**
Centered, max-w-2xl container. Fields: Name, Email, Message (textarea). Each input has label above, consistent height (48px for inputs, 120px for textarea), border styling. Submit button full-width at bottom. Include optional contact details sidebar if space permits.

**Footer:**
Three-column layout: Company info/logo, Quick links, Social media icons. Background slightly darker than body. Height py-16.

## Animations

Minimal, purposeful animations only:
- Smooth scroll behavior for anchor links
- Card hover: subtle lift with transition-all duration-300
- Button hover: slight scale (1.02) with smooth transition
- Form focus states: border color transition

## Images

**Hero Image:**
Large, high-quality professional photograph positioned right side of hero section. Dimensions: approximately 600x700px. Subject: workspace, modern office environment, or abstract professional imagery. Treatment: slight shadow (shadow-2xl), subtle rounded corners (rounded-lg).

**Service Card Icons:**
Use Heroicons library - professionally relevant icons (e.g., chart-bar, light-bulb, code-bracket). Size: w-12 h-12. Place above card title with mb-4 spacing.

**Optional Portfolio Showcase:**
If adding work samples section below services, use 2-column masonry grid with project thumbnails. Each thumbnail: 16:9 aspect ratio, rounded corners, hover overlay effect.

## Responsive Breakpoints

- Mobile: < 768px - Single column, stacked layout, reduced padding
- Tablet: 768px - 1024px - Two columns where applicable
- Desktop: > 1024px - Full three-column layouts, maximum spacing

## Accessibility

- All interactive elements minimum 44px touch target
- Form labels explicitly associated with inputs
- Focus states visible on all interactive elements (ring-2 ring-offset-2)
- Semantic HTML structure throughout
- ARIA labels where necessary