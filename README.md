# Juggernaut Industries Limited

A modern, responsive corporate website for Juggernaut Industries Limited - Nigeria's leading mining and exploration services company.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **UI Components:** Radix UI primitives
- **Language:** TypeScript

## Design System

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#0D1B2A` | Primary background, headers |
| Steel Blue | `#1B3A5C` | Secondary text, accents |
| Industrial Gold | `#E8A317` | CTAs, highlights, accents |
| Off White | `#FAF9F6` | Light backgrounds |
| Light Gray | `#C5C6C7` | Muted text |

### Typography
- **Display:** Headlines and titles
- **Heading:** Subtitles, labels (tracking: `0.15em` - `0.2em`)
- **Body:** Content text

## Project Structure

```
juggernautind/
├── app/
│   ├── about/
│   │   ├── our-story/
│   │   └── team/
│   ├── careers/
│   ├── contact/
│   ├── media/
│   ├── news/
│   ├── projects/
│   │   └── [id]/
│   ├── services/
│   │   └── [slug]/
│   ├── error.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── animations/
│   │   └── scroll-reveal.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── bracket-text.tsx
│       ├── gold-dot.tsx
│       ├── loader.tsx
│       ├── page-header.tsx
│       └── ...
├── config/
│   ├── projects.ts
│   ├── services.ts
│   └── site.ts
├── lib/
│   └── utils.ts
└── public/
    └── [images]
```

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, services, projects |
| About | `/about` | Company overview, vision, mission |
| Our Story | `/about/our-story` | Company history and timeline |
| Team | `/about/team` | Leadership team profiles |
| Services | `/services` | All service areas |
| Service Detail | `/services/[slug]` | Individual service pages |
| Projects | `/projects` | Project portfolio |
| Project Detail | `/projects/[id]` | Individual project pages |
| Careers | `/careers` | Job application form |
| Contact | `/contact` | Contact information and form |
| News | `/news` | Company news and updates |
| Media | `/media` | Image and video galleries |

## Services

1. **Mining & Exploration** - Mineral exploration, drilling, geophysics
2. **Agriculture** - Rice, Palm Oil, Shea Butter production
3. **Construction** - Infrastructure and engineering
4. **Solar & Electrification** - Renewable energy solutions
5. **Oil & Gas** - Energy sector services

## Key Components

### UI Components
- `PageHeader` - Consistent page headers with breadcrumbs
- `BracketText` - Decorative section headers
- `GoldDot` - Bullet point styling
- `ScrollReveal` - Scroll-triggered animations
- `Loader` - Loading states (minimal, default, page)

### Layout
- `Header` - Glassmorphism navigation with dropdowns
- `Footer` - Company info, links, newsletter

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Configuration

Site configuration is centralized in `/config/site.ts`:
- Company info
- Navigation structure
- Hero content
- Stats

Services data in `/config/services.ts`
Projects data in `/config/projects.ts`

## Features

- Responsive design (mobile-first)
- Smooth scroll animations
- Glassmorphism UI elements
- Dynamic routing for services/projects
- SEO-friendly structure
- Loading and error states
- Accessible navigation

## Contact

**Juggernaut Industries Limited**
- Address: 3 Wiser Estate, Off Regent School Road, Mabushi - Abuja, FCT, Nigeria
- Email: info@juggernautind.com
- Phone: +234 7052 4401 33
- Website: [juggernautind.com](https://juggernautind.com)
