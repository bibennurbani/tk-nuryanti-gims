# TK Nuryanti Global Islamic Montessori School - Complete Documentation

## 📚 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Getting Started](#getting-started)
5. [Development Guide](#development-guide)
6. [Deployment](#deployment)
7. [Documentation Index](#documentation-index)

## 🎯 Project Overview

**TK Nuryanti Global Islamic Montessori School** is a modern, full-stack web application built for a kindergarten school in Bandung, Indonesia. The website serves as the school's digital presence, showcasing their programs, facilities, teachers, and providing a student registration system.

### Key Features

- 🏫 **School Information Portal**: Complete information about the school, programs, and facilities
- 👨‍🏫 **Teacher Profiles**: Showcase qualified Montessori-certified teachers
- 🎮 **Educational Games Showcase**: Display Montessori educational materials and games
- 📝 **Student Registration System**: Online registration form with email and WhatsApp notifications
- 🌍 **Internationalization (i18n)**: Multi-language support (Indonesian/English)
- 📱 **Responsive Design**: Mobile-first, fully responsive UI
- 🔍 **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Cards
- 📊 **Statistics Dashboard**: Display school statistics and achievements
- 💬 **Testimonials**: Parent and student testimonials
- 📧 **Email Integration**: Automated email notifications using Nodemailer
- 📲 **WhatsApp Integration**: Registration notifications via WhatsApp
- 🎨 **Modern UI/UX**: Built with Tailwind CSS and Radix UI components
- ⚡ **Performance Optimized**: Next.js 15 with Turbopack support

### Project Purpose

This website aims to:

1. **Increase Visibility**: Provide online presence for the school
2. **Streamline Registration**: Simplify the student enrollment process
3. **Build Trust**: Showcase qualified teachers and proven methods
4. **Educate Parents**: Explain Montessori methodology and Islamic values integration
5. **Engage Community**: Share testimonials and success stories

## 🛠 Technology Stack

### Frontend

- **Framework**: Next.js 15.1.2 (App Router)
- **React**: 19.0.0
- **TypeScript**: 5.7.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI
- **Animations**: Framer Motion 11.18.2
- **Icons**: Lucide React 0.469.0
- **Font**: Nunito Sans (Google Fonts)

### Backend & Database

- **Database**: PostgreSQL
- **ORM**: Prisma 6.3.0
- **Server Actions**: Next.js Server Actions
- **API Routes**: Next.js API Routes

### Integrations

- **Email Service**: Nodemailer 6.10.0
- **Analytics**: Google Tag Manager
- **Internationalization**: next-intl 3.26.3

### Development Tools

- **Package Manager**: pnpm
- **Linting**: ESLint 9.19.0
- **Containerization**: Docker & Docker Compose
- **Version Control**: Git

### Deployment

- **Containerization**: Docker multi-stage builds
- **Orchestration**: Docker Compose
- **Reverse Proxy**: Traefik (configured in labels)
- **Health Checks**: Built-in Docker health checks

## 🏗 Project Architecture

### Directory Structure

```
tk-nuryanti-gims/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles & CSS variables
│   ├── actions.ts               # Server Actions for forms
│   ├── about/                   # About page
│   ├── classes/                 # Classes page
│   ├── contact/                 # Contact page
│   ├── games/                   # Games/Materials page
│   ├── teachers/                # Teachers page
│   └── api/                     # API Routes
│       ├── programs/            # Programs API
│       └── testimonials/        # Testimonials API
│
├── components/                   # React Components
│   ├── Navbar.tsx               # Navigation component
│   ├── Footer.tsx               # Footer component
│   ├── HeroSection.tsx          # Reusable hero section
│   ├── RegistrationModal.tsx    # Registration form modal
│   ├── FeaturedPrograms.tsx     # Programs showcase
│   ├── Statistics.tsx           # School statistics
│   ├── Testimonials.tsx         # Testimonials carousel
│   └── ui/                      # Reusable UI components (Radix)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── ...
│
├── lib/                          # Utility functions & configs
│   ├── db.ts                    # Database helpers (commented)
│   ├── email.ts                 # Email service & templates
│   ├── env.ts                   # Environment validation
│   ├── prisma.ts                # Prisma client singleton
│   ├── utils.ts                 # Utility functions (cn, etc.)
│   └── whatsapp.ts              # WhatsApp integration
│
├── prisma/                       # Database schema & migrations
│   ├── schema.prisma            # Database schema definition
│   └── seed.ts                  # Database seeding script
│
├── public/                       # Static assets
│   └── assets/                  # Images, icons, etc.
│       ├── games/
│       ├── kelas/
│       ├── mainan/
│       └── montessori/
│
├── messages/                     # i18n translation files
│   ├── en.json                  # English translations
│   └── id.json                  # Indonesian translations
│
├── hooks/                        # Custom React hooks
│   └── use-toast.ts             # Toast notification hook
│
├── scripts/                      # Utility scripts
│   └── backup-database.sh       # Database backup script
│
├── Docs/                         # Documentation (this folder)
│
├── docker-compose.yml            # Development Docker setup
├── docker-compose.prod.yml       # Production Docker setup
├── Dockerfile                    # Multi-stage Docker build
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies & scripts
└── .env                          # Environment variables

```

### Architecture Pattern

This project follows the **Next.js App Router** architecture with:

1. **Server Components by Default**: Pages are Server Components unless marked with 'use client'
2. **Server Actions**: Form submissions handled via Server Actions in `actions.ts`
3. **API Routes**: RESTful endpoints for data fetching
4. **Client-Side Interactivity**: Framer Motion for animations, modals, and interactive elements
5. **Atomic Design**: Components organized from atoms (ui/) to organisms (complex components)

### Data Flow

```
User Interaction
    ↓
Client Component (form, button, etc.)
    ↓
Server Action (app/actions.ts)
    ↓
Database Operation (Prisma) & External Services (Email, WhatsApp)
    ↓
Response to Client
    ↓
UI Update (Toast, Modal close, etc.)
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js** 18+ installed
- **pnpm** package manager installed
- **PostgreSQL** database (local or cloud)
- **Docker & Docker Compose** (optional, for containerized development)
- **Git** for version control

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/bibennurbani/tk-nuryanti-gims.git
   cd tk-nuryanti-gims
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/tk_nuryanti?schema=public"

   # Email Configuration (SMTP)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   ADMIN_EMAIL="admin@nuryantiislamicmontessori.com"

   # WhatsApp
   WHATSAPP_NUMBER="6281234567890"
   ```

4. **Set Up Database**

   Generate Prisma Client:

   ```bash
   pnpm prisma generate
   ```

   Run migrations:

   ```bash
   pnpm prisma migrate dev
   ```

   Seed the database:

   ```bash
   pnpm db:seed
   ```

5. **Run Development Server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Quick Start with Docker

```bash
# Start development environment
docker-compose up -d

# View logs
docker-compose logs -f

# Stop environment
docker-compose down
```

## 💻 Development Guide

### Available Scripts

```bash
# Development with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint

# Database migrations
pnpm db:migrate

# Seed database
pnpm db:seed
```

### Database Management

**View Database (Prisma Studio)**

```bash
pnpm prisma studio
```

**Create Migration**

```bash
pnpm prisma migrate dev --name migration_name
```

**Reset Database**

```bash
pnpm prisma migrate reset
```

### Adding New Features

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed architecture patterns and [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for step-by-step development workflows.

## 🚢 Deployment

### Docker Production Deployment

```bash
# Build and start production containers
docker-compose -f docker-compose.prod.yml up -d

# View production logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop production environment
docker-compose -f docker-compose.prod.yml down
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions including:

- Vercel deployment
- VPS/Cloud deployment
- Environment configuration
- Database setup
- SSL/TLS configuration
- Monitoring & logging

## 📖 Documentation Index

Complete documentation is available in the `Docs/` folder:

1. **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Detailed system architecture and design patterns
2. **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - API endpoints and server actions reference
3. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment guide
4. **[DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)** - Development workflows and best practices
5. **[DATABASE.md](./DATABASE.md)** - Database schema and Prisma guide
6. **[COMPONENTS.md](./COMPONENTS.md)** - Component library documentation
7. **[CONTRIBUTION.md](./CONTRIBUTION.md)** - How to contribute to this project
8. **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions
9. **[IMPROVEMENTS.md](./IMPROVEMENTS.md)** - Recommended improvements and future features

## 📝 License

This project is private and proprietary to TK Nuryanti Global Islamic Montessori School.

## 🤝 Support

For questions or support:

- Email: admin@nuryantiislamicmontessori.com
- Website: https://nuryantiislamicmontessori.com
- WhatsApp: +62 123 4567 890

---

**Last Updated**: November 21, 2025
**Version**: 1.2.3
