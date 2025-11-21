# API Documentation

## 📡 Overview

This document provides comprehensive documentation for all API endpoints, Server Actions, and data interfaces in the TK Nuryanti GIMS application.

## 🔐 API Authentication

**Current Status**: No authentication implemented.

**Recommendation**: Implement API key authentication or JWT tokens for production API endpoints.

## 📋 Table of Contents

1. [API Routes](#api-routes)
2. [Server Actions](#server-actions)
3. [Database Models](#database-models)
4. [External Integrations](#external-integrations)

---

## 🛣 API Routes

### GET /api/programs

Fetch all educational programs.

**Endpoint**: `/api/programs`

**Method**: `GET`

**Authentication**: None

**Response**:

```json
[
  {
    "id": "clx1234567890",
    "title": "Program Tahfidz",
    "description": "Menghafal Al-Quran dengan metode yang menyenangkan",
    "icon": "Book",
    "color": "bg-sunshine-yellow-300",
    "image": "/tahfidz-program.jpg"
  }
]
```

**Response Codes**:

- `200 OK`: Success
- `500 Internal Server Error`: Database error

**Implementation**:

```typescript
// app/api/programs/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const programs = await prisma.program.findMany();
  return NextResponse.json(programs);
}
```

**Usage Example**:

```typescript
const response = await fetch('/api/programs');
const programs = await response.json();
```

---

### GET /api/testimonials

Fetch all testimonials.

**Endpoint**: `/api/testimonials`

**Method**: `GET`

**Authentication**: None

**Response**:

```json
[
  {
    "id": "clx0987654321",
    "name": "Ibu Sarah",
    "role": "Orang Tua Murid",
    "image": "/parent-1.jpg",
    "quote": "Anak saya menjadi lebih mandiri..."
  }
]
```

**Response Codes**:

- `200 OK`: Success
- `500 Internal Server Error`: Database error

**Implementation**:

```typescript
// app/api/testimonials/route.ts
import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const testimonials = await prisma.testimonial.findMany();
  return NextResponse.json(testimonials);
}
```

---

## ⚡ Server Actions

Server Actions are server-side functions that handle form submissions and mutations.

### registerStudent

Handle student registration form submission.

**Function**: `registerStudent(formData: FormData)`

**File**: `app/actions.ts`

**Type**: Server Action (`'use server'`)

**Parameters**:

```typescript
FormData {
  childName: string      // Child's full name
  parentName: string     // Parent/guardian name
  email: string          // Parent's email address
  phone: string          // Contact phone number
  address: string        // Home address
}
```

**Returns**:

```typescript
{
  success: boolean; // true if registration succeeded
}
```

**Process Flow**:

1. Extract form data
2. ~~Save to database~~ (currently commented out)
3. Send email to admin (registrasi@nuryantiislamicmontessori.com)
4. Send confirmation email to parent
5. Send WhatsApp notification
6. Return success status

**Implementation**:

```typescript
'use server';

export async function registerStudent(formData: FormData) {
  const childName = formData.get('childName') as string;
  const parentName = formData.get('parentName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const address = formData.get('address') as string;

  const studentData = { childName, parentName, email, phone, address };

  try {
    // Database save (commented)
    // await createStudent(studentData);

    // Generate email content
    const registrationEmailContent = generateRegistrationEmailContent(studentData);
    const confirmationEmailContent = generateConfirmationEmailContent(
      parentName,
      childName
    );

    // Send emails
    await sendEmail(
      'registrasi@nuryantiislamicmontessori.com',
      'Pendaftaran Siswa Baru',
      registrationEmailContent
    );

    await sendEmail(
      email,
      'Terima Kasih atas Pendaftaran Anda',
      confirmationEmailContent
    );

    // Send WhatsApp message
    await sendWhatsAppMessage(registrationEmailContent);

    return { success: true };
  } catch (error) {
    console.error('Error processing registration:', error);
    return { success: false };
  }
}
```

**Usage Example**:

```typescript
'use client';

import { registerStudent } from '@/app/actions';

export function RegistrationForm() {
  const handleSubmit = async (formData: FormData) => {
    const result = await registerStudent(formData);

    if (result.success) {
      toast({
        title: 'Pendaftaran Berhasil!',
        description: 'Kami akan menghubungi Anda segera.',
      });
    } else {
      toast({
        title: 'Pendaftaran Gagal',
        description: 'Silakan coba lagi.',
        variant: 'destructive',
      });
    }
  };

  return (
    <form action={handleSubmit}>
      <input name='childName' required />
      <input name='parentName' required />
      <input name='email' type='email' required />
      <input name='phone' required />
      <textarea name='address' required />
      <button type='submit'>Daftar</button>
    </form>
  );
}
```

**Error Handling**:

- Catches all errors and returns `{ success: false }`
- Logs errors to console
- Recommended: Add proper error logging service (Sentry)

---

## 🗄 Database Models

All models defined in `prisma/schema.prisma`.

### Teacher Model

```prisma
model Teacher {
  id          String @id @default(cuid())
  name        String
  role        String
  image       String
  description String
}
```

**Fields**:

- `id`: Unique identifier (CUID)
- `name`: Teacher's full name
- `role`: Position/title (e.g., "Kepala Sekolah")
- `image`: Image URL/path
- `description`: Bio/experience description

**TypeScript Interface**:

```typescript
interface Teacher {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}
```

---

### Program Model

```prisma
model Program {
  id          String @id @default(cuid())
  title       String
  description String
  icon        String
  color       String
  image       String
}
```

**Fields**:

- `id`: Unique identifier (CUID)
- `title`: Program name
- `description`: Program description
- `icon`: Icon name (Lucide icon string)
- `color`: Tailwind color class
- `image`: Program image URL/path

**TypeScript Interface**:

```typescript
interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}
```

---

### Testimonial Model

```prisma
model Testimonial {
  id    String @id @default(cuid())
  name  String
  role  String
  image String
  quote String
}
```

**Fields**:

- `id`: Unique identifier (CUID)
- `name`: Person's name
- `role`: Role/relationship (e.g., "Orang Tua Murid")
- `image`: Profile image URL/path
- `quote`: Testimonial text

**TypeScript Interface**:

```typescript
interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}
```

---

### Game Model

```prisma
model Game {
  id          String @id @default(cuid())
  name        String
  image       String
  description String
  ageGroup    String
}
```

**Fields**:

- `id`: Unique identifier (CUID)
- `name`: Game/toy name
- `image`: Image URL/path
- `description`: Description of educational value
- `ageGroup`: Recommended age range (e.g., "3-5 tahun")

**TypeScript Interface**:

```typescript
interface Game {
  id: string;
  name: string;
  image: string;
  description: string;
  ageGroup: string;
}
```

---

### Student Model

```prisma
model Student {
  id         String @id @default(cuid())
  childName  String
  parentName String
  email      String
  phone      String
  address    String
}
```

**Fields**:

- `id`: Unique identifier (CUID)
- `childName`: Child's full name
- `parentName`: Parent/guardian name
- `email`: Parent's email
- `phone`: Contact phone number
- `address`: Home address

**TypeScript Interface**:

```typescript
interface Student {
  id: string;
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
}
```

**Note**: Currently not used (database save is commented out in registerStudent action).

---

## 🔗 External Integrations

### Email Service (Nodemailer)

**Configuration**: `lib/email.ts`

#### sendEmail Function

```typescript
async function sendEmail(to: string, subject: string, text: string): Promise<void>;
```

**Parameters**:

- `to`: Recipient email address
- `subject`: Email subject line
- `text`: Email body (plain text)

**Environment Variables Required**:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@example.com
```

**SMTP Configuration**:

```typescript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
```

**Error Handling**:

- Throws error if email fails to send
- Logs error to console

---

#### Email Templates

**Registration Email (to Admin)**:

```typescript
function generateRegistrationEmailContent(formData: {
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
}): string;
```

**Returns**:

```
Pendaftaran Siswa Baru:

Nama Anak: [childName]
Nama Orang Tua: [parentName]
Email: [email]
Nomor Telepon: [phone]
Alamat: [address]
```

---

**Confirmation Email (to Parent)**:

```typescript
function generateConfirmationEmailContent(parentName: string, childName: string): string;
```

**Returns**:

```
Kepada Yth. [parentName],

Terima kasih telah mendaftarkan [childName] di TK Nuryanti...
[Full template message]
```

---

### WhatsApp Integration

**Configuration**: `lib/whatsapp.ts`

#### sendWhatsAppMessage Function

```typescript
async function sendWhatsAppMessage(message: string): Promise<void>;
```

**Parameters**:

- `message`: Text message to send

**Environment Variables Required**:

```env
WHATSAPP_NUMBER=6281234567890
```

**Implementation Note**:
Current implementation details not visible in provided code. Likely uses WhatsApp Business API or third-party service.

---

## 📝 Request/Response Examples

### Complete Registration Flow

**1. User Submits Form**

```typescript
const formData = new FormData();
formData.append('childName', 'Ahmad Budi');
formData.append('parentName', 'Ibu Siti');
formData.append('email', 'siti@example.com');
formData.append('phone', '081234567890');
formData.append('address', 'Jl. Merdeka No. 123, Bandung');

const result = await registerStudent(formData);
```

**2. Server Processes**

- Validates form data
- Sends 2 emails (admin + parent)
- Sends WhatsApp notification
- Returns result

**3. Response**

```typescript
{
  success: true; // or false if error occurred
}
```

---

### Fetch Programs Example

**Request**:

```typescript
const response = await fetch('/api/programs');
const programs = await response.json();
```

**Response**:

```json
[
  {
    "id": "clx123",
    "title": "Program Tahfidz",
    "description": "Menghafal Al-Quran...",
    "icon": "Book",
    "color": "bg-sunshine-yellow-300",
    "image": "/tahfidz-program.jpg"
  },
  {
    "id": "clx124",
    "title": "Program Seni & Kreativitas",
    "description": "Mengembangkan bakat seni...",
    "icon": "Palette",
    "color": "bg-coral-pink-300",
    "image": "/art-program.jpg"
  }
]
```

---

## 🚨 Error Handling

### API Routes

```typescript
export async function GET() {
  try {
    const data = await prisma.model.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
```

### Server Actions

```typescript
export async function serverAction(formData: FormData) {
  try {
    // Process data
    return { success: true };
  } catch (error) {
    console.error('Action error:', error);
    return { success: false, error: 'Something went wrong' };
  }
}
```

---

## 🔮 Future API Endpoints (Recommendations)

### Authentication

```
POST /api/auth/login
POST /api/auth/register
POST /api/auth/logout
GET  /api/auth/me
```

### Admin Panel

```
GET    /api/admin/students
POST   /api/admin/students
PUT    /api/admin/students/:id
DELETE /api/admin/students/:id

GET    /api/admin/teachers
POST   /api/admin/teachers
PUT    /api/admin/teachers/:id
DELETE /api/admin/teachers/:id
```

### Dynamic Content

```
GET  /api/events
POST /api/events
GET  /api/gallery
POST /api/gallery/upload
```

### Analytics

```
GET /api/analytics/visitors
GET /api/analytics/registrations
```

---

## 📊 Rate Limiting (Recommended)

Currently not implemented. Recommended implementation:

```typescript
import { ratelimit } from '@/lib/ratelimit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  // Process request
}
```

---

## 🧪 Testing APIs

### Using cURL

```bash
# Get programs
curl http://localhost:3000/api/programs

# Get testimonials
curl http://localhost:3000/api/testimonials
```

### Using Postman

1. Import endpoints
2. Test GET/POST requests
3. Save as collection

### Using Jest

```typescript
import { GET } from '@/app/api/programs/route';

describe('Programs API', () => {
  it('returns programs array', async () => {
    const response = await GET();
    const data = await response.json();

    expect(Array.isArray(data)).toBe(true);
    expect(data[0]).toHaveProperty('title');
  });
});
```

---

**Last Updated**: November 21, 2025
