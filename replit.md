# Lil Green Kitchen - Restaurant Website

## Project Overview
A modern, high-performance restaurant website for Lil Green Kitchen, a plant-based kitchen in Starnberg and Berg, Germany. The website showcases their fresh bowls, salads, and smoothies with a focus on seasonal, regional ingredients and no refined sugar.

## Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion
- **i18n**: Custom context with JSON translations (DE/EN)
- **SEO**: React Helmet Async + JSON-LD structured data
- **Backend**: Express.js + In-memory storage

## Features
- ✅ Responsive multi-page application (Home, Menu, Locations, Story, Catering, Contact, Legal pages)
- ✅ Bilingual support (German default, English toggle)
- ✅ Interactive menu with category tabs and dietary filters (vegan, gluten-free, no refined sugar)
- ✅ Location information with Google Maps integration
- ✅ Catering inquiry form with validation
- ✅ Contact form with FAQ accordion
- ✅ Smooth animations with Framer Motion (reduced-motion safe)
- ✅ SEO optimization with meta tags and JSON-LD structured data
- ✅ Sticky navigation with scroll effects
- ✅ Comprehensive accessibility (ARIA labels, semantic HTML, keyboard navigation)

## Design System
### Brand Colors
- **Primary Green**: #2E7D5B (156 48% 33%)
- **Accent Leaf**: #7FBF8E (136 42% 65%)
- **Background Cream**: #FAF8F3 (40 43% 96%)
- **Text Ink**: #0E1B14 (150 45% 8%)

### Typography
- **Display**: Playfair Display (headlines)
- **UI/Body**: Inter (all interface text)

### Design Principles
- Clean, bright, nature-inspired aesthetic
- Generous white space with rounded-2xl cards
- Soft shadows and subtle micro-interactions
- Mobile-first responsive design

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── SEO.tsx
│   │   │   └── ui/          # Shadcn components
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Menu.tsx
│   │   │   ├── Locations.tsx
│   │   │   ├── Story.tsx
│   │   │   ├── Catering.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Impressum.tsx
│   │   │   └── Datenschutz.tsx
│   │   ├── contexts/        # React contexts
│   │   │   └── LanguageContext.tsx
│   │   ├── data/            # Static data files
│   │   │   ├── menu.json
│   │   │   ├── locations.json
│   │   │   └── translations/
│   │   └── lib/             # Utilities
│   └── public/              # Static assets
│       ├── robots.txt
│       └── sitemap.xml
├── server/
│   ├── routes.ts            # API endpoints
│   └── storage.ts           # Data storage interface
├── shared/
│   └── schema.ts            # Shared TypeScript types
└── attached_assets/
    └── generated_images/    # AI-generated food images
```

## API Routes (To be implemented in Phase 2)
- POST `/api/catering` - Submit catering inquiry
- POST `/api/contact` - Submit contact message

## Data Models
### Catering Inquiry
- name, email, phone, eventDate, guestCount, notes

### Contact Message
- name, email, subject, message

### Static Data (JSON)
- Menu items with categories, prices, dietary labels
- Locations with addresses, hours, contact info

## Running the Project
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Access at: http://localhost:5000

## Environment Variables
None required for basic functionality. Optional:
- Analytics tracking ID (can be added later)
- Google Maps API key (currently using Google Maps links)

## Recent Changes
- **Phase 1 Complete**: All frontend components, pages, and design system implemented
- Bilingual support with DE/EN translations
- SEO optimization with structured data
- Performance-focused with lazy loading and responsive images
- Accessibility features throughout

## Next Steps
- Phase 2: Implement backend API endpoints for form submissions
- Phase 3: Connect forms to backend, add loading states, architect review, and testing
