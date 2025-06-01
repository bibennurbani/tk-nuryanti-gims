# TK Nuryanti Global Islamic Montessori School

This project is a website for TK Nuryanti Global Islamic Montessori School, built with Next.js, React, and Prisma ORM. It showcases the school's programs, facilities, and provides a registration system for new students.

## Technologies Used

- Next.js 15.1.4
- React 18
- TypeScript
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- Docker (for development database)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or later)
- pnpm
- Docker and Docker Compose
- Git

## Getting Started

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/tk-nuryanti-gims.git
cd tk-nuryanti-gims
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up your environment variables by creating a `.env` file based on `.env.example`.

4. Initialize the database:

```bash
# Generate Prisma client
pnpm prisma generate

# Run database migrations
pnpm prisma migrate dev

# Seed the database with initial data
pnpm db:seed
```

5. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

```
tk-nuryanti-gims/
├── app/                # Next.js application pages & routes
├── components/         # Reusable UI components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions & shared code
├── messages/           # Internationalization messages
├── prisma/             # Database schema & migrations
│   ├── schema.prisma   # Prisma database schema
│   └── seed.ts         # Database seeding script
├── public/             # Static assets
├── scripts/            # Utility scripts
│   └── backup-database.sh  # Database backup script
├── .env.example        # Example environment variables
├── docker-compose.yml       # Development Docker configuration
├── docker-compose.prod.yml  # Production Docker configuration
└── Dockerfile          # Docker build configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Docker Deployment

This project is set up for deployment using Docker and Docker Compose. Both development and production configurations are available.

### Environment Setup

1. Create a `.env` file based on the `.env.example` template:

```bash
cp .env.example .env
```

2. Update the `.env` file with your specific configuration values:

```
DATABASE_URL="postgresql://username:password@postgres-hostname:5432/database-name?schema=public"
SMTP_HOST="mail.example.com"
SMTP_PORT=587
SMTP_USER="user@example.com"
SMTP_PASS="your-smtp-password"
ADMIN_EMAIL="admin@example.com"
WHATSAPP_NUMBER="621234567890"
```

### Development Deployment

For local development with Docker:

```bash
# Build and start the containers
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the containers
docker-compose down
```

### Production Deployment

For production deployment with enhanced features like database migrations, backups, and security:

```bash
# Build and start the production environment
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Stop the production environment
docker-compose -f docker-compose.prod.yml down
```

### Database Management

The production setup includes:

1. **Automatic Migrations**: The database schema is automatically updated on deployment
2. **Scheduled Backups**: Daily database backups at 1:00 AM
3. **Manual Backups**: Run a backup anytime using:

```bash
./scripts/backup-database.sh
```

### Containers Structure

- **nuryanti-gims**: Main application container running the Next.js app
- **nuryanti-db-migration**: Handles database migrations and seeding (runs once)
- **nuryanti-backup**: (Production only) Manages scheduled database backups

### Security Features

The production Docker setup includes:

- Non-root user execution
- HTTP security headers via Traefik
- Health checks for container monitoring
- Persistent volumes for data security

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
