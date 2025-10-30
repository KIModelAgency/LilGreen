# Design Guidelines: Lil Green Kitchen Restaurant Website

## Design Approach
**Reference-Based**: Drawing inspiration from modern restaurant and healthy food brands like Sweetgreen, Plnt Burger, and By Chloe, combined with the clean aesthetics of contemporary lifestyle websites. The design emphasizes fresh, natural visuals with a warm, welcoming atmosphere that reflects the "plant-based kitchen inspired by nature" positioning.

## Brand Identity & Core Principles

**Positioning**: Plant-based kitchen inspired by nature with ALOHA spirit and #MAKEYOUHEALTHY philosophy

**Visual Direction**: Clean, bright, nature-inspired aesthetic with generous breathing room, celebrating fresh ingredients and seasonal offerings through vibrant food photography

**Key Values to Communicate**:
- Freshness and quality ingredients
- Seasonal and regional sourcing
- Health-conscious without compromise on taste
- Warmth and approachability (ALOHA spirit)

## Color System

**Primary Palette**:
- LGK Green: `#2E7D5B` - Primary brand color for CTAs, headers, active states
- LGK Leaf: `#7FBF8E` - Accent color for highlights, tags, secondary elements
- LGK Cream: `#FAF8F3` - Background color creating warm, natural canvas
- LGK Ink: `#0E1B14` - Primary text color, strong contrast for readability

**Application**:
- Use Green for primary buttons, navigation active states, and key CTAs
- Leaf for dietary tags (vegan, glutenfrei), filter chips, and decorative accents
- Cream as primary background with white cards for depth variation
- Ink for all body text and headings

## Typography System

**Font Families**:
- **Display**: Playfair Display for headlines (H1, H2) - elegant, confident, natural sophistication
- **UI/Body**: Inter for all interface text, navigation, body copy - clean, highly readable

**Hierarchy**:
- H1 (Hero Headlines): 4xl-6xl (responsive), Playfair Display, bold, generous line-height
- H2 (Section Headers): 3xl-4xl, Playfair Display, semibold
- H3 (Card/Component Titles): xl-2xl, Inter, semibold
- Body Text: base-lg, Inter, regular, optimal line-height (1.7) for readability
- UI Elements: sm-base, Inter, medium for buttons and labels
- Captions/Meta: sm, Inter, regular for supplementary information

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card gaps: gap-6 to gap-8
- Text margins: mb-4 for paragraphs, mb-6 for section breaks

**Container Strategy**:
- Max-width: max-w-7xl for main content areas
- Full-width sections with inner containers for visual interest
- Asymmetric layouts where appropriate (Story page)

**Grid System**:
- Menu items: 3-column grid (lg), 2-column (md), 1-column (mobile)
- Feature cards: 2-3 columns on desktop
- Location cards: Side-by-side on desktop, stacked on mobile

## Component Library

### Navigation
**Sticky Navbar**: 
- Initially transparent with white text over hero
- Becomes solid cream background with subtle shadow on scroll
- Logo left, navigation links center/right, Instagram icon and language toggle far right
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
**Large, Immersive Hero**:
- Full-viewport height (90vh) with high-quality food photography
- Headline overlaid with subtle blur background for text container
- Strong headline (Playfair Display, 5xl-6xl) with supporting subcopy
- Two primary CTAs: "Speisekarte ansehen" (Green) and "Standorte" (Leaf outline)
- Subtle parallax effect on background image (reduced-motion safe)

### Menu Components
**Category Tabs**: Horizontal tab navigation (Bowls, Salads, Smoothies, Bakery, Coffee) with active state in Green, smooth underline animation

**Filter Chips**: Rounded-full pills (vegan, glutenfrei, no refined sugar) in Leaf color, toggle selection with check icon, spring animation on click

**Menu Cards**: 
- Rounded-2xl cards with soft shadow (hover: lift effect)
- Food image at top (16:9 aspect ratio)
- Title, description, price layout
- Dietary tags as small badges
- Optional calorie/ingredient tooltip on hover

**Daily Specials**: Featured banner section with highlighted card treatment, subtle border in Green

### Location Cards
**Two-Column Layout** (Starnberg, Berg):
- Card-based design with rounded-2xl corners
- Address, opening hours table (day by day)
- Two action buttons: "Jetzt navigieren" (Google Maps link) and "Anrufen" (tel: link)
- Embedded static map image or simple map link with location pin icon
- Public transport/parking hints in smaller text

### Forms
**Catering & Contact Forms**:
- Clean, spacious input fields with labels above
- Rounded-lg inputs with subtle border
- Focus state: Green border with soft glow
- Primary submit button (Green, full-width on mobile)
- Validation messages in friendly tone
- Success state with checkmark animation

### Footer
**Comprehensive Multi-Column Footer**:
- Three-column layout (desktop): Locations info | Quick links | Social & Legal
- Both location addresses with abbreviated hours
- Email and Instagram prominently featured
- Legal links (Impressum, Datenschutz) in smaller text
- Background in slightly darker cream tone for distinction

### Testimonial Carousel
**Social Proof Section**:
- 3-5 customer quotes in card format
- Subtle auto-rotate with manual controls
- Customer name and optional photo
- Quote marks in Leaf accent color

### Miscellaneous Components
**Language Toggle**: Simple DE/EN switch (pill-style toggle in navbar)

**Tag/Badge System**: Small rounded-full badges for dietary labels, use Leaf background with white text

**CTA Buttons**: 
- Primary: Green background, white text, rounded-lg, px-8 py-3, hover lift
- Secondary: Leaf outline, Leaf text, rounded-lg, hover fill transition
- Buttons on images: Backdrop blur effect for text legibility

## Animations & Interactions

**Page Transitions**:
- Fade-in on section scroll reveal (Framer Motion)
- Stagger animations for menu grid items
- All animations respect prefers-reduced-motion

**Micro-Interactions**:
- Card hover: Slight lift (translateY -2px) with shadow increase
- Button hover: Subtle scale (1.02) with spring transition
- Filter chip toggle: Scale bounce effect
- Navbar scroll: Smooth background fade-in
- Tab switching: Slide content transition

**Hero Image**: Subtle parallax scroll effect (reduced-motion: static)

## Images

**Hero Image**: 
Large, full-width hero image featuring a vibrant, colorful bowl or salad with fresh ingredients in bright, natural lighting. Image should feel fresh, appetizing, and embody the "plant-based, nature-inspired" brand. Use high-resolution photography with generous negative space for text overlay.

**Menu Section Images**:
- Each menu item card features food photography (bowls, salads, smoothies)
- Consistent styling: bright, naturally lit, white/neutral backgrounds
- Square or 16:9 aspect ratio for uniformity
- Use lazy loading and responsive srcset

**Location Pages**:
- Storefront photos for each location (optional but recommended)
- Static map previews or embedded Google Maps

**Story Page**:
- Ingredient sourcing images (farmers markets, fresh produce)
- Team photos showing preparation or service
- Sustainability and values imagery

**General Image Strategy**:
- Prioritize authentic, high-quality food photography
- Maintain consistent color grading (bright, natural, slightly warm)
- Use aspect-ratio utilities to prevent layout shift
- Implement picture elements with webp/fallback formats

## Accessibility Standards

- Semantic HTML5 landmarks (header, nav, main, section, footer)
- Alt text for all images describing food items or context
- Focus indicators visible and distinct (Green outline)
- Color contrast minimum 4.5:1 for text
- ARIA labels for icon buttons and interactive elements
- Form labels and error messages clearly associated
- Keyboard navigation fully supported
- Reduced-motion preferences respected throughout

## Page-Specific Guidelines

**Home**: Hero + seasonal teaser + 3-column feature cards (fresh, seasonal, delicious) + Instagram feed preview + CTA sections

**Menu**: Full-page layout with sticky category tabs, filterable grid, daily specials callout

**Locations**: Two-location comparison with maps, side-by-side cards on desktop

**Story**: Narrative layout with alternating text/image sections, mission statement prominent, sustainability badges

**Catering**: Hero image of event setup + inquiry form + FAQ accordion

**Contact**: Form + FAQ accordion (allergens, payments, take-away) + contact details

This design system creates a warm, inviting, health-focused restaurant website that celebrates fresh ingredients while maintaining excellent usability and performance.