# System Architecture Documentation

## 📐 Overview

This document describes the complete architecture of the TK Nuryanti Global Islamic Montessori School website, including design patterns, component structure, data flow, and best practices.

## 🎯 Architecture Principles

### 1. Server-First Approach
- **Server Components by Default**: Leveraging Next.js 15 App Router for optimal performance
- **Client Components When Needed**: Only for interactivity (forms, animations, modals)
- **Server Actions**: Handle form submissions and mutations server-side
- **API Routes**: RESTful endpoints for external data access

### 2. Progressive Enhancement
- Works without JavaScript (server-rendered content)
- Enhanced with client-side interactivity
- Optimized images with Next.js Image component
- Lazy loading for better performance

### 3. Separation of Concerns
- **Presentation Layer**: React components
- **Business Logic**: Server Actions and API Routes
- **Data Layer**: Prisma ORM with PostgreSQL
- **External Services**: Email, WhatsApp integrations

## 🏗 Application Layers

```
┌─────────────────────────────────────────────┐
│          Presentation Layer                  │
│  (React Components, Pages, Layouts)          │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Application Layer                   │
│  (Server Actions, API Routes, Hooks)         │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Business Logic Layer                │
│  (lib/email.ts, lib/whatsapp.ts, etc.)      │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Data Access Layer                   │
│  (Prisma Client, Database Queries)           │
└─────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────┐
│          Data Storage Layer                  │
│  (PostgreSQL Database)                       │
└─────────────────────────────────────────────┘
```

## 📁 Detailed File Structure

### App Directory (`/app`)

The `app` directory follows Next.js 15 App Router conventions:

```
app/
├── layout.tsx              # Root layout (Navbar, Footer, global metadata)
├── page.tsx                # Homepage (/)
├── globals.css             # Global styles, CSS variables
├── actions.ts              # Server Actions (registerStudent)
├── robots.ts               # robots.txt generation
├── sitemap.ts              # sitemap.xml generation
│
├── about/
│   └── page.tsx            # About page (/about)
├── classes/
│   └── page.tsx            # Classes page (/classes)
├── contact/
│   └── page.tsx            # Contact page (/contact)
├── games/
│   └── page.tsx            # Games/Materials page (/games)
├── teachers/
│   └── page.tsx            # Teachers page (/teachers)
│
└── api/                    # API Routes
    ├── programs/
    │   └── route.ts        # GET /api/programs
    └── testimonials/
        └── route.ts        # GET /api/testimonials
```

**Key Concepts:**
- **`layout.tsx`**: Wraps all pages, includes Navbar and Footer
- **`page.tsx`**: Individual route pages
- **Server Actions**: Functions marked with `'use server'` for mutations
- **API Routes**: RESTful endpoints using `route.ts` files

### Components Directory (`/components`)

Organized by complexity and reusability:

```
components/
├── Navbar.tsx              # Main navigation
├── Footer.tsx              # Footer with links and info
├── HeroSection.tsx         # Reusable hero component
├── RegistrationModal.tsx   # Student registration modal
├── FeaturedPrograms.tsx    # Programs showcase
├── Statistics.tsx          # School statistics display
├── Testimonials.tsx        # Testimonials carousel
│
├── about.tsx               # About page content (legacy)
├── classes.tsx             # Classes page content (legacy)
├── contact.tsx             # Contact page content (legacy)
├── games.tsx               # Games page content (legacy)
├── teachers.tsx            # Teachers page content (legacy)
│
└── ui/                     # Atomic UI components (Radix UI)
    ├── avatar.tsx
    ├── button.tsx
    ├── card.tsx
    ├── dialog.tsx
    ├── input.tsx
    ├── label.tsx
    ├── textarea.tsx
    ├── toast.tsx
    └── toaster.tsx
```

**Component Categories:**

1. **Layout Components**: Navbar, Footer
2. **Feature Components**: RegistrationModal, FeaturedPrograms, Statistics, Testimonials
3. **Shared Components**: HeroSection
4. **UI Components**: Atomic components from Radix UI
5. **Page Components**: Legacy components (should be moved to pages)

### Library Directory (`/lib`)

Utility functions and service integrations:

```
lib/
├── db.ts           # Database helper functions (currently commented)
├── email.ts        # Nodemailer configuration and email templates
├── env.ts          # Environment variable validation
├── prisma.ts       # Prisma Client singleton pattern
├── utils.ts        # Utility functions (cn for className merging)
└── whatsapp.ts     # WhatsApp API integration
```

**Best Practices:**
- Keep business logic separate from UI components
- Use singleton pattern for Prisma Client
- Validate environment variables at startup
- Create reusable service functions

### Prisma Directory (`/prisma`)

Database schema and migrations:

```
prisma/
├── schema.prisma   # Database schema definition
├── seed.ts         # Database seeding script
└── migrations/     # Database migration history (auto-generated)
```

## 🔄 Data Flow Patterns

### 1. Server Component Data Fetching

```typescript
// app/teachers/page.tsx
import prisma from '@/lib/prisma';

export default async function TeachersPage() {
  // Direct database query in Server Component
  const teachers = await prisma.teacher.findMany();
  
  return (
    <div>
      {teachers.map(teacher => (
        <TeacherCard key={teacher.id} {...teacher} />
      ))}
    </div>
  );
}
```

**Advantages:**
- No API route needed
- Faster initial page load
- Better SEO (fully server-rendered)
- Automatic request deduplication

### 2. Client Component with Server Action

```typescript
// components/RegistrationModal.tsx
'use client';

import { registerStudent } from '@/app/actions';

export function RegistrationModal() {
  const handleSubmit = async (formData: FormData) => {
    const result = await registerStudent(formData);
    
    if (result.success) {
      // Show success message
    }
  };
  
  return (
    <form action={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

**Flow:**
1. User fills form
2. Form submitted to Server Action
3. Server Action processes data (database, email, WhatsApp)
4. Returns result to client
5. Client updates UI

### 3. API Route Pattern

```typescript
// app/api/programs/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const programs = await prisma.program.findMany();
  return NextResponse.json(programs);
}
```

**Use Cases:**
- External API consumption
- Webhooks
- Third-party integrations
- Mobile app endpoints

## 🎨 Styling Architecture

### Tailwind CSS Configuration

```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        cream: { 50, 100, 200 },
        'pastel-green': { 300, 400, 500, 600 },
        'pastel-blue': { 300, 400, 500, 600 },
        'sunshine-yellow': { 300, 400, 500 },
        'coral-pink': { 300, 400, 500 },
      },
    },
  },
};
```

### CSS Variables (globals.css)

```css
:root {
  --cream-50: 45 30% 97%;
  --cream-100: 45 30% 94%;
  --pastel-green-500: 142 70% 65%;
  /* ... */
}
```

### Component Styling Pattern

```typescript
import { cn } from '@/lib/utils';

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg",  // Base styles
        "bg-pastel-green-500",    // Color
        "hover:bg-pastel-green-600", // Hover state
        className                  // Allow override
      )}
      {...props}
    />
  );
}
```

## 🔐 Security Architecture

### Environment Variables

All sensitive data stored in environment variables:
```env
DATABASE_URL=            # Database connection
SMTP_HOST/PORT/USER/PASS # Email credentials
ADMIN_EMAIL              # Admin contact
WHATSAPP_NUMBER          # WhatsApp integration
```

### Server-Side Validation

```typescript
// lib/env.ts
export function validateEnv() {
  const required = ['SMTP_HOST', 'SMTP_PORT', ...];
  
  for (const env of required) {
    if (!process.env[env]) {
      throw new Error(`Missing: ${env}`);
    }
  }
}
```

### Input Sanitization

- Server Actions validate all form inputs
- Prisma provides SQL injection protection
- TypeScript ensures type safety

## 🚀 Performance Optimizations

### 1. Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/assets/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority  // For LCP images
/>
```

### 2. Code Splitting

- Automatic with Next.js App Router
- Client components loaded separately
- Dynamic imports for large components

### 3. Database Optimization

```typescript
// Good: Select only needed fields
const users = await prisma.user.findMany({
  select: { id: true, name: true }
});

// Bad: Fetch all fields
const users = await prisma.user.findMany();
```

### 4. Static Generation

```typescript
// app/about/page.tsx
export default function AboutPage() {
  // Statically generated at build time
  return <About />;
}
```

## 🧪 Testing Strategy (Recommended)

### Unit Tests
- Test utility functions in `/lib`
- Test individual components
- Use Jest + React Testing Library

### Integration Tests
- Test Server Actions
- Test API routes
- Test form submissions

### E2E Tests
- Test critical user flows
- Use Playwright or Cypress
- Test registration process

## 📦 Deployment Architecture

### Docker Multi-Stage Build

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
# Install deps, build app

# Stage 2: Production
FROM node:18-alpine AS runtime
# Copy only production files
# Run as non-root user
```

### Production Stack

```
┌─────────────────┐
│     Traefik     │ (Reverse Proxy, SSL)
└────────┬────────┘
         │
┌────────▼────────┐
│   Next.js App   │ (Docker Container)
└────────┬────────┘
         │
┌────────▼────────┐
│   PostgreSQL    │ (Database)
└─────────────────┘
```

## 🔄 State Management

### Server State
- Managed by React Server Components
- No client-side state management library needed
- Data fetching happens on server

### Client State
- Minimal client state (form inputs, modals)
- React hooks (useState, useReducer)
- No Redux/Zustand needed for this app

### Form State
- Controlled by HTML form elements
- Server Actions handle submissions
- Toast notifications for feedback

## 🌐 Internationalization (i18n)

### Current Setup

```typescript
// messages/en.json & messages/id.json
{
  "layout": {
    "home": "Home",
    "about": "About",
    // ...
  }
}
```

### Usage Pattern (Not Currently Implemented)

```typescript
import { useTranslations } from 'next-intl';

export function Component() {
  const t = useTranslations('layout');
  return <h1>{t('home')}</h1>;
}
```

**Note**: Translation files exist but aren't actively used. Implementation needed.

## 📊 Analytics & Monitoring

### Google Tag Manager

```typescript
// app/layout.tsx
import { GoogleTagManager } from '@next/third-parties/google';

<GoogleTagManager gtmId='GTM-P6NVZ3VX' />
```

### Health Checks

```yaml
# docker-compose.yml
healthcheck:
  test: ["CMD", "wget", "--spider", "http://localhost:3000/"]
  interval: 30s
  timeout: 10s
  retries: 3
```

## 🔧 Development Patterns

### Component Creation Pattern

1. **Server Component (default)**
```typescript
// No 'use client'
export default async function ServerComponent() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

2. **Client Component (when needed)**
```typescript
'use client';

export default function ClientComponent() {
  const [state, setState] = useState();
  return <div onClick={() => setState(...)}>...</div>;
}
```

### Server Action Pattern

```typescript
'use server';

export async function actionName(formData: FormData) {
  // 1. Extract data
  const field = formData.get('field') as string;
  
  // 2. Validate
  if (!field) throw new Error('Invalid');
  
  // 3. Process
  await processData(field);
  
  // 4. Return result
  return { success: true };
}
```

## 📚 Best Practices Summary

1. **Use Server Components by default** - Client components only for interactivity
2. **Colocate related files** - Keep components close to where they're used
3. **Validate environment variables** - Fail fast on missing config
4. **Type everything** - Leverage TypeScript fully
5. **Optimize images** - Always use Next.js Image component
6. **Handle errors gracefully** - Provide user-friendly error messages
7. **Keep components small** - Single responsibility principle
8. **Document complex logic** - Add comments for non-obvious code
9. **Test critical paths** - Especially registration flow
10. **Monitor performance** - Use Next.js built-in analytics

## 🔮 Future Architecture Considerations

1. **State Management**: If app grows, consider Zustand or Jotai
2. **API Layer**: Create dedicated API layer for complex operations
3. **Caching Strategy**: Implement Redis for session/data caching
4. **Microservices**: Split email/WhatsApp into separate services
5. **Real-time Features**: Add WebSocket support for live updates
6. **Testing Infrastructure**: Set up CI/CD with automated tests
7. **Monitoring**: Add Sentry or similar for error tracking
8. **Performance**: Implement ISR (Incremental Static Regeneration)

---

**Last Updated**: November 21, 2025
