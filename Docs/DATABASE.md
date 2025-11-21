# Database Documentation

## 📊 Overview

This document provides comprehensive information about the database schema, Prisma ORM usage, and data management for the TK Nuryanti GIMS application.

## 🗄 Database Technology

- **Database**: PostgreSQL (version 15+)
- **ORM**: Prisma 6.3.0
- **Migration Tool**: Prisma Migrate
- **Client**: @prisma/client

## 📋 Database Schema

### Entity Relationship Diagram

```
┌──────────────┐
│   Teacher    │
├──────────────┤
│ id (PK)      │
│ name         │
│ role         │
│ image        │
│ description  │
└──────────────┘

┌──────────────┐
│   Program    │
├──────────────┤
│ id (PK)      │
│ title        │
│ description  │
│ icon         │
│ color        │
│ image        │
└──────────────┘

┌──────────────┐
│ Testimonial  │
├──────────────┤
│ id (PK)      │
│ name         │
│ role         │
│ image        │
│ quote        │
└──────────────┘

┌──────────────┐
│     Game     │
├──────────────┤
│ id (PK)      │
│ name         │
│ image        │
│ description  │
│ ageGroup     │
└──────────────┘

┌──────────────┐
│   Student    │
├──────────────┤
│ id (PK)      │
│ childName    │
│ parentName   │
│ email        │
│ phone        │
│ address      │
└──────────────┘
```

## 📝 Schema Definition

### Complete Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Teacher {
  id          String @id @default(cuid())
  name        String
  role        String
  image       String
  description String
}

model Program {
  id          String @id @default(cuid())
  title       String
  description String
  icon        String
  color       String
  image       String
}

model Testimonial {
  id    String @id @default(cuid())
  name  String
  role  String
  image String
  quote String
}

model Game {
  id          String @id @default(cuid())
  name        String
  image       String
  description String
  ageGroup    String
}

model Student {
  id         String @id @default(cuid())
  childName  String
  parentName String
  email      String
  phone      String
  address    String
}
```

## 🔍 Model Details

### Teacher Model

**Purpose**: Store information about school teachers and staff.

**Fields**:

- `id` (String, PK): Unique identifier using CUID
- `name` (String): Teacher's full name
- `role` (String): Position/title (e.g., "Kepala Sekolah")
- `image` (String): Path to profile image
- `description` (String): Bio and experience

**Example Data**:

```json
{
  "id": "clx123abc",
  "name": "Ibu Siti Nurhaliza",
  "role": "Kepala Sekolah",
  "image": "/teacher-1.jpg",
  "description": "Berpengalaman lebih dari 15 tahun..."
}
```

**Queries**:

```typescript
// Get all teachers
const teachers = await prisma.teacher.findMany();

// Get one teacher
const teacher = await prisma.teacher.findUnique({
  where: { id: 'clx123abc' },
});

// Create teacher
const teacher = await prisma.teacher.create({
  data: {
    name: 'Ibu Sarah',
    role: 'Guru Kelas',
    image: '/teacher.jpg',
    description: 'Bio text',
  },
});
```

---

### Program Model

**Purpose**: Store educational programs offered by the school.

**Fields**:

- `id` (String, PK): Unique identifier
- `title` (String): Program name
- `description` (String): Program details
- `icon` (String): Lucide icon name
- `color` (String): Tailwind color class
- `image` (String): Program image path

**Example Data**:

```json
{
  "id": "clx456def",
  "title": "Program Tahfidz",
  "description": "Menghafal Al-Quran dengan metode yang menyenangkan",
  "icon": "Book",
  "color": "bg-sunshine-yellow-300",
  "image": "/tahfidz-program.jpg"
}
```

**Queries**:

```typescript
// Get all programs
const programs = await prisma.program.findMany();

// Update program
const program = await prisma.program.update({
  where: { id: 'clx456def' },
  data: { title: 'New Title' },
});
```

---

### Testimonial Model

**Purpose**: Store parent and student testimonials.

**Fields**:

- `id` (String, PK): Unique identifier
- `name` (String): Person's name
- `role` (String): Relationship (e.g., "Orang Tua Murid")
- `image` (String): Profile photo path
- `quote` (String): Testimonial text

**Example Data**:

```json
{
  "id": "clx789ghi",
  "name": "Ibu Sarah",
  "role": "Orang Tua Murid",
  "image": "/parent-1.jpg",
  "quote": "Anak saya menjadi lebih mandiri..."
}
```

---

### Game Model

**Purpose**: Catalog Montessori educational materials and games.

**Fields**:

- `id` (String, PK): Unique identifier
- `name` (String): Game/material name
- `image` (String): Image path
- `description` (String): Educational value description
- `ageGroup` (String): Recommended age range

**Example Data**:

```json
{
  "id": "clx012jkl",
  "name": "Puzzle Peta Dunia",
  "image": "/game-world-map.jpg",
  "description": "Membantu anak belajar geografi...",
  "ageGroup": "4-6 tahun"
}
```

---

### Student Model

**Purpose**: Store student registration information.

**Fields**:

- `id` (String, PK): Unique identifier
- `childName` (String): Child's full name
- `parentName` (String): Parent/guardian name
- `email` (String): Parent's email
- `phone` (String): Contact number
- `address` (String): Home address

**Example Data**:

```json
{
  "id": "clx345mno",
  "childName": "Ahmad Budi",
  "parentName": "Ibu Siti",
  "email": "siti@example.com",
  "phone": "081234567890",
  "address": "Jl. Merdeka No. 123, Bandung"
}
```

**Note**: Currently not actively used (database operations commented out).

## 🛠 Prisma Client Usage

### Initialization

```typescript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
```

**Why Singleton Pattern?**

- Prevents multiple instances in development (hot reload)
- Reduces database connections
- Improves performance

### Common Operations

#### Create

```typescript
const student = await prisma.student.create({
  data: {
    childName: 'Ahmad',
    parentName: 'Ibu Siti',
    email: 'siti@example.com',
    phone: '081234567890',
    address: 'Bandung',
  },
});
```

#### Read

```typescript
// Find all
const students = await prisma.student.findMany();

// Find with conditions
const students = await prisma.student.findMany({
  where: {
    email: {
      contains: '@gmail.com',
    },
  },
  orderBy: {
    childName: 'asc',
  },
  take: 10, // limit
  skip: 0, // offset
});

// Find one
const student = await prisma.student.findUnique({
  where: { id: 'clx123' },
});

// Find first matching
const student = await prisma.student.findFirst({
  where: { email: 'test@example.com' },
});
```

#### Update

```typescript
const student = await prisma.student.update({
  where: { id: 'clx123' },
  data: { phone: '081999999999' },
});
```

#### Delete

```typescript
const student = await prisma.student.delete({
  where: { id: 'clx123' },
});

// Delete many
const result = await prisma.student.deleteMany({
  where: {
    email: {
      endsWith: '@tempmail.com',
    },
  },
});
```

#### Advanced Queries

```typescript
// Select specific fields
const students = await prisma.student.findMany({
  select: {
    id: true,
    childName: true,
    parentName: true,
    // email, phone, address excluded
  },
});

// Count
const count = await prisma.student.count();

// Aggregate
const result = await prisma.student.aggregate({
  _count: true,
});
```

## 🔄 Database Migrations

### Creating Migrations

```bash
# Create migration from schema changes
pnpm prisma migrate dev --name add_created_at_field

# Preview migration without applying
pnpm prisma migrate dev --create-only
```

### Applying Migrations

```bash
# Development
pnpm prisma migrate dev

# Production
pnpm prisma migrate deploy
```

### Migration Files

Located in `prisma/migrations/`:

```
migrations/
├── 20240101120000_init/
│   └── migration.sql
├── 20240102120000_add_student/
│   └── migration.sql
└── migration_lock.toml
```

### Resetting Database

```bash
# WARNING: Deletes all data
pnpm prisma migrate reset
```

## 🌱 Database Seeding

### Seed Script

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Seed Teachers
  await prisma.teacher.createMany({
    data: [
      {
        name: 'Ibu Siti Nurhaliza',
        role: 'Kepala Sekolah',
        image: '/teacher-1.jpg',
        description: 'Berpengalaman lebih dari 15 tahun...',
      },
      // More teachers...
    ],
  });

  // Seed other models...
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

### Running Seed

```bash
pnpm db:seed
```

## 💾 Database Backup & Restore

### Backup

```bash
# Using pg_dump
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql

# Or use the provided script
./scripts/backup-database.sh
```

### Restore

```bash
# Restore from backup
psql $DATABASE_URL < backup-20240101.sql
```

### Automated Backups

See `docker-compose.prod.yml` for automated daily backups.

## 🔍 Prisma Studio

Interactive database browser:

```bash
pnpm prisma studio
```

Opens at http://localhost:5555

Features:

- View all tables and data
- Edit records
- Create new records
- Delete records
- Filter and search

## 📊 Schema Evolution Best Practices

### Adding Fields

```prisma
model Student {
  id         String @id @default(cuid())
  // ... existing fields
  createdAt  DateTime @default(now())  // New field
  updatedAt  DateTime @updatedAt       // Auto-update
}
```

### Making Fields Optional

```prisma
model Student {
  id      String  @id @default(cuid())
  phone   String?  // Made optional with ?
}
```

### Adding Indexes

```prisma
model Student {
  id    String @id @default(cuid())
  email String @unique  // Unique constraint

  @@index([childName])   // Index for faster queries
}
```

### Adding Relations

```prisma
model Student {
  id       String   @id @default(cuid())
  classId  String
  class    Class    @relation(fields: [classId], references: [id])
}

model Class {
  id       String    @id @default(cuid())
  name     String
  students Student[]
}
```

## 🚨 Common Issues & Solutions

### Issue: "Migration failed to apply"

**Solution**:

```bash
# Reset database (development only)
pnpm prisma migrate reset

# Or manually fix migration
pnpm prisma migrate resolve --rolled-back "migration_name"
```

### Issue: "Can't reach database server"

**Check**:

1. DATABASE_URL is correct
2. Database is running
3. Network/firewall allows connection

**Test connection**:

```bash
pnpm prisma db push
```

### Issue: "Prisma Client not generated"

**Solution**:

```bash
pnpm prisma generate
```

### Issue: "Schema drift detected"

Happens when database schema doesn't match migrations.

**Solution**:

```bash
pnpm prisma migrate dev
```

## 📈 Performance Tips

### 1. Select Only Needed Fields

```typescript
// Instead of fetching all fields
const students = await prisma.student.findMany();

// Select only needed
const students = await prisma.student.findMany({
  select: { id: true, childName: true },
});
```

### 2. Use Indexes

```prisma
model Student {
  email String

  @@index([email])  // Index frequently queried fields
}
```

### 3. Connection Pooling

Prisma has built-in connection pooling. Configure if needed:

```env
DATABASE_URL="postgresql://user:pass@host:5432/db?connection_limit=10"
```

### 4. Batch Operations

```typescript
// Instead of multiple creates
for (const data of dataArray) {
  await prisma.student.create({ data });
}

// Use createMany
await prisma.student.createMany({
  data: dataArray,
});
```

## 🔐 Security Considerations

1. **Never expose DATABASE_URL** in client-side code
2. **Use environment variables** for credentials
3. **Validate input** before database operations
4. **Use Prisma's type safety** to prevent SQL injection
5. **Implement access control** for sensitive operations
6. **Regular backups** to prevent data loss
7. **Encrypt sensitive data** if needed (use Prisma field-level encryption)

## 📚 Additional Resources

- **Prisma Docs**: https://www.prisma.io/docs
- **Prisma Schema Reference**: https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
- **PostgreSQL Docs**: https://www.postgresql.org/docs/

---

**Last Updated**: November 21, 2025
