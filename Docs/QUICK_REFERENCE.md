# Quick Reference Guide

## 🚀 Quick Start Commands

```bash
# Install dependencies
pnpm install

# Setup database
pnpm prisma generate
pnpm prisma migrate dev
pnpm db:seed

# Start development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# View database
pnpm prisma studio

# Lint code
pnpm lint
```

---

## 📁 Important File Locations

| What | Where |
|------|-------|
| **Pages** | `app/*/page.tsx` |
| **Components** | `components/` |
| **Server Actions** | `app/actions.ts` |
| **API Routes** | `app/api/*/route.ts` |
| **Database Schema** | `prisma/schema.prisma` |
| **Environment Config** | `.env` |
| **Tailwind Config** | `tailwind.config.ts` |
| **TypeScript Config** | `tsconfig.json` |
| **Docker Config** | `docker-compose.yml` / `Dockerfile` |

---

## 🔧 Common Tasks

### Add a New Page

```typescript
// app/new-page/page.tsx
export default function NewPage() {
  return (
    <div className="container mx-auto py-20">
      <h1>New Page</h1>
    </div>
  );
}
```

### Add a New Component

```typescript
// components/MyComponent.tsx
interface MyComponentProps {
  title: string;
}

export function MyComponent({ title }: MyComponentProps) {
  return <div>{title}</div>;
}
```

### Add a Server Action

```typescript
// app/actions.ts
'use server';

export async function myAction(formData: FormData) {
  const data = formData.get('field');
  // Process data
  return { success: true };
}
```

### Add an API Route

```typescript
// app/api/my-route/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ data: 'value' });
}
```

### Add a Database Model

```prisma
// prisma/schema.prisma
model MyModel {
  id    String @id @default(cuid())
  name  String
  // ... other fields
}
```

Then run:
```bash
pnpm prisma migrate dev --name add_my_model
```

---

## 🗄 Database Quick Commands

```bash
# Generate Prisma Client
pnpm prisma generate

# Create migration
pnpm prisma migrate dev --name migration_name

# Apply migrations (production)
pnpm prisma migrate deploy

# Reset database (WARNING: deletes all data)
pnpm prisma migrate reset

# Seed database
pnpm db:seed

# Open Prisma Studio
pnpm prisma studio
```

---

## 🐳 Docker Quick Commands

```bash
# Development
docker-compose up -d
docker-compose down
docker-compose logs -f

# Production
docker-compose -f docker-compose.prod.yml up -d
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml logs -f

# Rebuild containers
docker-compose up -d --build
```

---

## 🎨 Styling Quick Reference

### Custom Colors

```typescript
// Available Tailwind classes
bg-cream-50, bg-cream-100, bg-cream-200
bg-pastel-green-300, bg-pastel-green-400, bg-pastel-green-500
bg-pastel-blue-300, bg-pastel-blue-400, bg-pastel-blue-500
bg-sunshine-yellow-300, bg-sunshine-yellow-400
bg-coral-pink-300, bg-coral-pink-400
```

### Common Patterns

```typescript
// Container
<div className="container mx-auto px-4">

// Section spacing
<section className="py-20">

// Card
<Card className="p-6 hover:shadow-lg transition-shadow">

// Button
<Button className="px-6 py-3 bg-pastel-green-500 hover:bg-pastel-green-600">
```

---

## 🔍 Troubleshooting

### Port already in use
```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Prisma Client not working
```bash
pnpm prisma generate
```

### Environment variables not loading
```bash
# Check .env file exists
# Restart dev server
# Verify variable names match exactly
```

### Docker container won't start
```bash
docker-compose logs <service-name>
docker-compose restart <service-name>
```

---

## 📚 Documentation Index

- **[README](./README.md)** - Project overview
- **[ARCHITECTURE](./ARCHITECTURE.md)** - System design
- **[API_DOCUMENTATION](./API_DOCUMENTATION.md)** - API reference
- **[DEPLOYMENT](./DEPLOYMENT.md)** - Deploy guide
- **[DATABASE](./DATABASE.md)** - Database guide
- **[CONTRIBUTION](./CONTRIBUTION.md)** - How to contribute
- **[IMPROVEMENTS](./IMPROVEMENTS.md)** - Recommendations
- **[PROJECT_ANALYSIS](./PROJECT_ANALYSIS.md)** - Full analysis

---

## 🌐 Useful URLs (Development)

- **App**: http://localhost:3000
- **Prisma Studio**: http://localhost:5555
- **API Docs**: http://localhost:3000/api (if implemented)

---

## 📞 Get Help

- **GitHub Issues**: Report bugs or request features
- **Email**: admin@nuryantiislamicmontessori.com
- **Documentation**: Check `Docs/` folder

---

## 🎯 Next Steps for New Developers

1. ✅ Read [README.md](./README.md)
2. ✅ Setup local environment
3. ✅ Read [ARCHITECTURE.md](./ARCHITECTURE.md)
4. ✅ Review [CONTRIBUTION.md](./CONTRIBUTION.md)
5. ✅ Check [IMPROVEMENTS.md](./IMPROVEMENTS.md) for tasks
6. ✅ Start coding!

---

**Last Updated**: November 21, 2025
