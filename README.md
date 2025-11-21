# TK Nuryanti Global Islamic Montessori School

> **Modern, full-stack web application** for TK Nuryanti Global Islamic Montessori School in Bandung, Indonesia.

[![Next.js](https://img.shields.io/badge/Next.js-15.1.2-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3.0-2D3748)](https://www.prisma.io/)

## 📚 Documentation

**Complete documentation is available in the [`Docs/`](./Docs) folder:**

- 📖 **[Complete Documentation](./Docs/README.md)** - Full project documentation
- 🏗 **[Architecture Guide](./Docs/ARCHITECTURE.md)** - System design and patterns
- 🔌 **[API Documentation](./Docs/API_DOCUMENTATION.md)** - API reference
- 🚀 **[Deployment Guide](./Docs/DEPLOYMENT.md)** - How to deploy
- 🗄 **[Database Guide](./Docs/DATABASE.md)** - Database schema and usage
- 🤝 **[Contribution Guide](./Docs/CONTRIBUTION.md)** - How to contribute
- 💡 **[Improvements](./Docs/IMPROVEMENTS.md)** - Recommended enhancements
- 📊 **[Project Analysis](./Docs/PROJECT_ANALYSIS.md)** - Complete project analysis
- ⚡ **[Quick Reference](./Docs/QUICK_REFERENCE.md)** - Quick command reference

## ✨ Features

- 🏫 **School Information Portal** - Complete information about programs and facilities
- 👨‍🏫 **Teacher Profiles** - Showcase Montessori-certified teachers
- 🎮 **Educational Games** - Display Montessori materials
- 📝 **Student Registration** - Online enrollment with notifications
- 🌍 **Internationalization** - Multi-language support (ID/EN)
- 📱 **Responsive Design** - Mobile-first, fully responsive
- 🔍 **SEO Optimized** - Complete meta tags and structured data
- 📧 **Email Integration** - Automated notifications
- 📲 **WhatsApp Integration** - Instant messaging

## 🛠 Technologies Used

- **Frontend**: Next.js 15.1.2, React 19, TypeScript 5.7.3
- **Styling**: Tailwind CSS 3.4.17, Radix UI, Framer Motion
- **Backend**: Next.js Server Actions, API Routes
- **Database**: PostgreSQL, Prisma ORM 6.3.0
- **Deployment**: Docker, Docker Compose
- **Email**: Nodemailer
- **Analytics**: Google Tag Manager

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL database
- Docker (optional)

### Installation

```bash
# 1. Clone repository
git clone https://github.com/bibennurbani/tk-nuryanti-gims.git
cd tk-nuryanti-gims

# 2. Install dependencies
pnpm install

# 3. Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Setup database
pnpm prisma generate
pnpm prisma migrate dev
pnpm db:seed

# 5. Start development server
pnpm dev

```

Open [http://localhost:3000](http://localhost:3000)

> 📘 **For detailed setup instructions, see [Documentation](./Docs/README.md)**

## 📖 Project Structure

```
tk-nuryanti-gims/
├── app/                # Next.js App Router (pages, layouts, API)
├── components/         # React components
├── lib/                # Utility functions & configurations
├── prisma/             # Database schema & migrations
├── public/             # Static assets
├── messages/           # i18n translations
├── Docs/               # 📚 Complete documentation
└── scripts/            # Utility scripts
```

## 🔧 Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm db:seed      # Seed database
pnpm db:migrate   # Run database migrations
```

## 🐳 Docker Deployment

```bash
# Development
docker-compose up -d

# Production
docker-compose -f docker-compose.prod.yml up -d
```

> 📘 **For complete deployment guide, see [Deployment Documentation](./Docs/DEPLOYMENT.md)**

## 🤝 Contributing

We welcome contributions! Please see our [Contribution Guide](./Docs/CONTRIBUTION.md) for details.

## 📊 Current Status

**Version**: 1.2.3  
**Status**: ✅ Production Ready (with recommended improvements)  
**Last Updated**: November 21, 2025

### What's Working

- ✅ Homepage with all sections
- ✅ All informational pages (About, Classes, Games, Teachers, Contact)
- ✅ Student registration form
- ✅ Email notifications
- ✅ WhatsApp integration
- ✅ Responsive design
- ✅ SEO optimization
- ✅ Docker deployment

### Recommended Improvements

- 🔄 Complete database integration (currently commented out)
- 🔄 Add input validation
- 🔄 Implement error logging
- 🔄 Add rate limiting
- 🔄 Complete i18n implementation
- 🔄 Add admin dashboard
- 🔄 Implement testing

> 📘 **See [Improvements Documentation](./Docs/IMPROVEMENTS.md) for complete list**

## 📞 Support

- **Website**: https://nuryantiislamicmontessori.com
- **Email**: admin@nuryantiislamicmontessori.com
- **Documentation**: [Complete Docs](./Docs/README.md)

## 📄 License

This project is private and proprietary to TK Nuryanti Global Islamic Montessori School.

---

**Built with ❤️ using Next.js 15, React 19, and TypeScript**
