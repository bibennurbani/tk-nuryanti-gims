# Project Improvements & Recommendations

## 📊 Overview

This document outlines recommended improvements for the TK Nuryanti GIMS website based on analysis of the current codebase, Next.js best practices, and modern web development standards.

---

## 🎯 Priority Levels

- **🔴 High Priority** - Critical for production, security, or user experience
- **🟡 Medium Priority** - Important but not urgent
- **🟢 Low Priority** - Nice to have, future enhancements

---

## 🔴 High Priority Improvements

### 1. Complete Database Integration

**Current Issue**: Database operations are commented out in the registration flow.

**File**: `app/actions.ts`

```typescript
// Currently commented:
// await createStudent(studentData);
```

**Recommendation**:

```typescript
// app/actions.ts
export async function registerStudent(formData: FormData) {
  // ... extract data

  try {
    // 1. Save to database
    const student = await createStudent(studentData);

    // 2. Send notifications
    await Promise.all([
      sendEmail(/* admin email */),
      sendEmail(/* confirmation email */),
      sendWhatsAppMessage(/* notification */),
    ]);

    return { success: true, studentId: student.id };
  } catch (error) {
    // Proper error handling
    logger.error('Registration failed:', error);
    return { success: false, error: 'Registration failed' };
  }
}
```

**Benefits**:

- Persist student data
- Track registrations
- Enable admin dashboard
- Generate reports

---

### 2. Error Handling & Logging

**Current Issue**: Minimal error handling, only console.error()

**Recommendation**: Implement proper error handling and logging

**Install Sentry** (Error Tracking):

```bash
pnpm add @sentry/nextjs
```

**Setup**:

```typescript
// lib/logger.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

export const logger = {
  error: (message: string, error: unknown) => {
    console.error(message, error);
    Sentry.captureException(error);
  },
  info: (message: string, data?: unknown) => {
    console.log(message, data);
  },
};
```

**Usage**:

```typescript
import { logger } from '@/lib/logger';

try {
  await sendEmail();
} catch (error) {
  logger.error('Email send failed', error);
  throw error;
}
```

---

### 3. Input Validation

**Current Issue**: No input validation on server actions

**Recommendation**: Use Zod for schema validation

```bash
pnpm add zod
```

**Implementation**:

```typescript
// lib/validations.ts
import { z } from 'zod';

export const studentRegistrationSchema = z.object({
  childName: z.string().min(2, 'Nama minimal 2 karakter').max(100),
  parentName: z.string().min(2, 'Nama minimal 2 karakter').max(100),
  email: z.string().email('Email tidak valid'),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,12}$/, 'Nomor telepon tidak valid'),
  address: z.string().min(10, 'Alamat minimal 10 karakter').max(500),
});

// app/actions.ts
export async function registerStudent(formData: FormData) {
  const rawData = {
    childName: formData.get('childName'),
    parentName: formData.get('parentName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
  };

  // Validate
  const validationResult = studentRegistrationSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const studentData = validationResult.data;
  // ... proceed with registration
}
```

---

### 4. Environment Variable Validation at Runtime

**Current Issue**: Environment validation exists but not called

**File**: `lib/env.ts`

**Recommendation**: Call validation at app startup

```typescript
// app/layout.tsx or lib/env.ts
import { validateEnv } from '@/lib/env';

// Run validation on import
validateEnv();

// Or with better error messages
export function validateEnv() {
  const required = {
    DATABASE_URL: 'Database connection string',
    SMTP_HOST: 'SMTP server hostname',
    SMTP_PORT: 'SMTP server port',
    SMTP_USER: 'SMTP username',
    SMTP_PASS: 'SMTP password',
    ADMIN_EMAIL: 'Administrator email',
    WHATSAPP_NUMBER: 'WhatsApp notification number',
  };

  const missing: string[] = [];

  for (const [key, description] of Object.entries(required)) {
    if (!process.env[key]) {
      missing.push(`${key} (${description})`);
    }
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables:\n${missing.join('\n')}`);
  }
}
```

---

### 5. Implement Rate Limiting

**Current Issue**: No rate limiting on registration or API endpoints

**Recommendation**: Add rate limiting to prevent spam

```bash
pnpm add @upstash/ratelimit @upstash/redis
```

**Implementation**:

```typescript
// lib/ratelimit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 h'), // 5 requests per hour
  analytics: true,
});

// app/actions.ts
export async function registerStudent(formData: FormData) {
  // Get IP or session identifier
  const identifier = headers().get('x-forwarded-for') ?? 'anonymous';

  const { success } = await ratelimit.limit(identifier);

  if (!success) {
    return {
      success: false,
      error: 'Terlalu banyak percobaan. Silakan coba lagi nanti.',
    };
  }

  // ... proceed with registration
}
```

---

### 6. Security Headers

**Current Issue**: Security headers only in Docker labels, not enforced in code

**Recommendation**: Add security headers in Next.js config

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## 🟡 Medium Priority Improvements

### 7. Implement Internationalization (i18n)

**Current Issue**: Translation files exist but not implemented

**Files**: `messages/en.json`, `messages/id.json`

**Recommendation**: Complete i18n implementation with next-intl

```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['id', 'en'],
  defaultLocale: 'id',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};

// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
```

---

### 8. Add Loading States

**Current Issue**: No loading indicators during form submission

**Recommendation**: Add proper loading states

```typescript
'use client';

import { useState } from 'react';
import { registerStudent } from '@/app/actions';
import { Button } from '@/components/ui/button';

export function RegistrationForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);

    try {
      const result = await registerStudent(formData);

      if (result.success) {
        toast.success('Pendaftaran berhasil!');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action={handleSubmit}>
      {/* fields */}
      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Mengirim...' : 'Daftar Sekarang'}
      </Button>
    </form>
  );
}
```

---

### 9. Optimize Images

**Current Issue**: Some images might not be optimized

**Recommendation**:

1. Use Next.js Image component everywhere
2. Optimize all images with proper formats

```typescript
// Always use next/image
import Image from 'next/image';

// Use priority for above-the-fold images
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
  quality={85}
/>

// Use lazy loading for below-the-fold images
<Image
  src="/gallery/image.jpg"
  alt="Gallery"
  width={400}
  height={300}
  loading="lazy"
/>
```

**Image Optimization Script**:

```bash
# Convert to WebP
pnpm add sharp
```

```javascript
// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/assets';
const outputDir = 'public/assets/optimized';

// Process all images
```

---

### 10. Add Sitemap and robots.txt

**Current Status**: Files exist but might need verification

**Recommendation**: Verify and enhance SEO files

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nuryantiislamicmontessori.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/classes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... other pages
  ];
}

// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://nuryantiislamicmontessori.com/sitemap.xml',
  };
}
```

---

### 11. Implement Admin Dashboard

**Current Issue**: No admin interface to view registrations

**Recommendation**: Create simple admin dashboard

```typescript
// app/admin/page.tsx (protected)
import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export default async function AdminDashboard() {
  // Add authentication check here

  const students = await prisma.student.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
  });

  return (
    <div className='container mx-auto py-8'>
      <h1>Pendaftaran Siswa Baru</h1>
      <table>
        <thead>
          <tr>
            <th>Nama Anak</th>
            <th>Nama Orang Tua</th>
            <th>Email</th>
            <th>Telepon</th>
            <th>Tanggal Daftar</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.childName}</td>
              <td>{student.parentName}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{new Date(student.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

### 12. Add Analytics

**Current Status**: Google Tag Manager installed

**Recommendation**: Add custom event tracking

```typescript
// lib/analytics.ts
export const trackEvent = (eventName: string, properties?: object) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Usage
trackEvent('registration_started');
trackEvent('registration_completed', { studentId: '123' });
trackEvent('page_view', { page: '/about' });
```

---

## 🟢 Low Priority Improvements

### 13. Add Unit Tests

**Recommendation**: Implement testing with Jest and React Testing Library

```bash
pnpm add -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

```javascript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

---

### 14. Implement Email Templates (HTML)

**Current Issue**: Plain text emails

**Recommendation**: Use React Email for beautiful email templates

```bash
pnpm add react-email @react-email/components
```

```typescript
// emails/registration-confirmation.tsx
import { Body, Container, Head, Heading, Html, Text } from '@react-email/components';

interface EmailProps {
  parentName: string;
  childName: string;
}

export default function RegistrationEmail({ parentName, childName }: EmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'sans-serif' }}>
        <Container>
          <Heading>Terima kasih, {parentName}!</Heading>
          <Text>Kami telah menerima pendaftaran untuk {childName}.</Text>
          {/* Styled email content */}
        </Container>
      </Body>
    </Html>
  );
}
```

---

### 15. Add Blog/News Section

**Recommendation**: Add content management for news and updates

```prisma
// prisma/schema.prisma
model Post {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  content     String
  excerpt     String
  image       String?
  published   Boolean  @default(false)
  publishedAt DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

### 16. Implement Search Functionality

**Recommendation**: Add search for programs, teachers, etc.

```typescript
// app/api/search/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  const results = await prisma.$transaction([
    prisma.program.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
    }),
    prisma.teacher.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
        ],
      },
    }),
  ]);

  return NextResponse.json(results);
}
```

---

### 17. Add Social Sharing

**Recommendation**: Add Open Graph tags and social share buttons

```typescript
// Already implemented in layout.tsx, add share buttons:
'use client';

export function ShareButtons({ url, title }: { url: string; title: string }) {
  return (
    <div>
      <button
        onClick={() => {
          navigator.share({ url, title });
        }}>
        Bagikan
      </button>
    </div>
  );
}
```

---

### 18. Progressive Web App (PWA)

**Recommendation**: Make website installable as PWA

```bash
pnpm add next-pwa
```

```javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

module.exports = withPWA({
  // Next.js config
});
```

---

## 📈 Performance Optimizations

### 19. Database Query Optimization

```typescript
// Instead of this:
const teachers = await prisma.teacher.findMany();

// Do this (select only needed fields):
const teachers = await prisma.teacher.findMany({
  select: {
    id: true,
    name: true,
    role: true,
    image: true,
    // Don't fetch description if not needed
  },
});
```

---

### 20. Implement Caching

**Recommendation**: Use Next.js caching strategies

```typescript
// Revalidate every hour
export const revalidate = 3600;

// Or use fetch with cache
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 3600 },
});
```

---

## 🔧 Code Quality Improvements

### 21. Add ESLint Rules

```javascript
// .eslintrc.js
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/no-unescaped-entities': 'off',
  },
};
```

---

### 22. Add Prettier

```bash
pnpm add -D prettier eslint-config-prettier
```

```javascript
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

---

## 📝 Implementation Roadmap

### Phase 1: Critical (Week 1-2)

- [ ] Complete database integration
- [ ] Add input validation
- [ ] Implement error handling and logging
- [ ] Add rate limiting
- [ ] Security headers

### Phase 2: Important (Week 3-4)

- [ ] Loading states
- [ ] Complete i18n
- [ ] Admin dashboard
- [ ] Image optimization
- [ ] SEO enhancements

### Phase 3: Enhancement (Week 5-8)

- [ ] Email templates
- [ ] Testing infrastructure
- [ ] Blog/news section
- [ ] PWA features
- [ ] Advanced analytics

---

## 🎓 Best Practices to Follow

1. **Always use TypeScript** - No `any` types
2. **Server Components first** - Client components only when needed
3. **Validate all inputs** - Never trust user input
4. **Handle errors gracefully** - User-friendly messages
5. **Test before deploy** - Manual or automated
6. **Monitor performance** - Use Lighthouse regularly
7. **Keep dependencies updated** - Security patches
8. **Document changes** - Update docs
9. **Follow accessibility standards** - WCAG 2.1
10. **Optimize for mobile** - Mobile-first approach

---

**Last Updated**: November 21, 2025
