# Portfolio Website - Muhammed Taher Khan

## Overview

A personal portfolio website for Muhammed Taher Khan, a Computer Science Engineering student from Bangladesh. The application showcases skills, provides an about section, and includes a contact form for visitors to reach out. Built as a full-stack TypeScript application with React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll reveals and page transitions
- **Smooth Scrolling**: react-scroll for anchor navigation
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL
- **API Design**: Type-safe API routes defined in `shared/routes.ts` with Zod schemas
- **Development Server**: Vite dev server with HMR, proxied through Express

### Project Structure
```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Route page components
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities and query client
├── server/          # Express backend
│   ├── routes.ts    # API endpoint definitions
│   ├── storage.ts   # Database access layer
│   └── db.ts        # Database connection
├── shared/          # Shared types and schemas
│   ├── schema.ts    # Drizzle database schemas
│   └── routes.ts    # API route definitions with Zod
└── migrations/      # Database migrations
```

### Database Schema
Two main tables:
- **skills**: Stores portfolio skills (id, name, category, icon name)
- **messages**: Stores contact form submissions (id, name, email, message, createdAt)

### API Endpoints
- `GET /api/skills` - Fetch all skills for display
- `POST /api/contact` - Submit contact form message

### Build System
- **Development**: Vite for frontend HMR, tsx for backend hot-reload
- **Production**: esbuild bundles server, Vite builds client to `dist/public`
- **Database**: `npm run db:push` uses Drizzle Kit to sync schema

## External Dependencies

### Database
- **PostgreSQL**: Primary database accessed via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries with automatic schema inference

### Frontend Libraries
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, forms, etc.)
- **react-icons**: Icon library for skill cards (FontAwesome, Simple Icons)
- **Framer Motion**: Animation library for scroll effects
- **react-scroll**: Smooth scrolling for navigation links

### Development Tools
- **Vite**: Frontend build tool with React plugin
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment

### Fonts
- Google Fonts: Inter (body), Poppins (headings) loaded via CSS