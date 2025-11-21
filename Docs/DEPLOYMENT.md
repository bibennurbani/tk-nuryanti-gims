# Deployment Guide

## 📦 Overview

This guide covers all deployment options for the TK Nuryanti GIMS application, from local development to production deployment on various platforms.

## 🎯 Deployment Options

1. **Vercel** (Recommended for Next.js)
2. **Docker on VPS** (Self-hosted)
3. **Railway/Render** (PaaS)
4. **AWS/GCP/Azure** (Cloud providers)

---

## 🚀 Option 1: Vercel Deployment (Recommended)

Vercel is the creator of Next.js and provides the best deployment experience.

### Prerequisites

- GitHub/GitLab/Bitbucket account
- Vercel account (free tier available)
- PostgreSQL database (Neon, Supabase, or Vercel Postgres)

### Step 1: Prepare Database

**Option A: Vercel Postgres**
```bash
# Install Vercel CLI
npm i -g vercel

# Link project
vercel link

# Create Postgres database
vercel postgres create
```

**Option B: External Database (Neon, Supabase)**
1. Create account at neon.tech or supabase.com
2. Create new PostgreSQL database
3. Copy connection string

### Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/tk-nuryanti-gims.git
git push -u origin main
```

### Step 3: Deploy to Vercel

**Via Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure project:
   - Framework: Next.js
   - Root Directory: ./
   - Build Command: `pnpm build`
   - Install Command: `pnpm install`

### Step 4: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/dbname

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@nuryantiislamicmontessori.com

# WhatsApp
WHATSAPP_NUMBER=6281234567890
```

### Step 5: Run Database Migrations

After first deployment:

```bash
# Via Vercel CLI
vercel env pull .env.local
pnpm prisma migrate deploy
pnpm db:seed
```

Or set up as build command in `package.json`:

```json
{
  "scripts": {
    "build": "prisma generate && prisma migrate deploy && next build"
  }
}
```

### Step 6: Custom Domain (Optional)

1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain: `nuryantiislamicmontessori.com`
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic)

### Vercel Deployment Checklist

- [ ] Database created and accessible
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Database seeded
- [ ] Custom domain configured (optional)
- [ ] Test registration form
- [ ] Verify email notifications work
- [ ] Check Google Tag Manager integration

---

## 🐳 Option 2: Docker Deployment on VPS

Deploy using Docker on your own VPS (DigitalOcean, Linode, AWS EC2, etc.).

### Prerequisites

- VPS with Ubuntu 20.04+ (2GB RAM minimum)
- Domain name pointed to VPS IP
- SSH access to VPS

### Step 1: Server Setup

```bash
# SSH into your server
ssh root@your-server-ip

# Update system
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y

# Create app directory
mkdir -p /opt/tk-nuryanti-gims
cd /opt/tk-nuryanti-gims
```

### Step 2: Setup PostgreSQL Database

**Option A: Managed Database (Recommended)**
Use managed PostgreSQL from DigitalOcean, AWS RDS, or similar.

**Option B: Docker PostgreSQL**
```yaml
# Add to docker-compose.prod.yml
services:
  postgres:
    image: postgres:15-alpine
    container_name: nuryanti-postgres
    environment:
      POSTGRES_DB: tk_nuryanti
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - proxy
    restart: unless-stopped

volumes:
  postgres_data:
```

### Step 3: Clone Repository

```bash
# Clone your repository
git clone https://github.com/bibennurbani/tk-nuryanti-gims.git .

# Create .env file
nano .env
```

### Step 4: Configure Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@postgres:5432/tk_nuryanti

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@nuryantiislamicmontessori.com

# WhatsApp
WHATSAPP_NUMBER=6281234567890

# PostgreSQL (if using Docker postgres)
POSTGRES_PASSWORD=your-secure-password
```

### Step 5: Setup Traefik (Reverse Proxy)

Create Traefik configuration:

```bash
mkdir -p /opt/traefik
cd /opt/traefik
nano docker-compose.yml
```

```yaml
version: '3.8'

services:
  traefik:
    image: traefik:v2.10
    container_name: traefik
    command:
      - "--api.dashboard=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.http.address=:80"
      - "--entrypoints.https.address=:443"
      - "--certificatesresolvers.letsencrypt.acme.email=admin@nuryantiislamicmontessori.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/acme.json"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=http"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./acme.json:/acme.json
    networks:
      - proxy
    restart: unless-stopped

networks:
  proxy:
    external: true
```

```bash
# Create network
docker network create proxy

# Create acme.json
touch acme.json
chmod 600 acme.json

# Start Traefik
docker-compose up -d
```

### Step 6: Deploy Application

```bash
cd /opt/tk-nuryanti-gims

# Build and start
docker-compose -f docker-compose.prod.yml up -d

# View logs
docker-compose -f docker-compose.prod.yml logs -f

# Check status
docker-compose -f docker-compose.prod.yml ps
```

### Step 7: SSL Certificate

SSL is automatically handled by Traefik with Let's Encrypt. Ensure:
- Domain DNS points to server IP
- Ports 80 and 443 are open
- Wait a few minutes for certificate generation

### Step 8: Database Backup Setup

```bash
# Make backup script executable
chmod +x scripts/backup-database.sh

# Setup cron job for daily backups
crontab -e

# Add this line (daily at 1 AM)
0 1 * * * /opt/tk-nuryanti-gims/scripts/backup-database.sh
```

### Docker VPS Deployment Checklist

- [ ] VPS provisioned and accessible via SSH
- [ ] Docker and Docker Compose installed
- [ ] PostgreSQL database set up
- [ ] Traefik reverse proxy configured
- [ ] Repository cloned
- [ ] Environment variables configured
- [ ] Application containers running
- [ ] SSL certificate obtained
- [ ] Database migrations run
- [ ] Database seeded
- [ ] Backup script configured
- [ ] Test website access
- [ ] Test registration form
- [ ] Monitor logs for errors

---

## 🚂 Option 3: Railway Deployment

Railway provides easy deployment with PostgreSQL included.

### Step 1: Setup Railway

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository

### Step 2: Add PostgreSQL

1. In your Railway project, click "+ New"
2. Select "Database" → "PostgreSQL"
3. Railway automatically creates DATABASE_URL

### Step 3: Configure Environment Variables

In Railway dashboard → Variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@nuryantiislamicmontessori.com
WHATSAPP_NUMBER=6281234567890
```

### Step 4: Configure Build

Railway auto-detects Next.js. Ensure `package.json` has:

```json
{
  "scripts": {
    "build": "prisma generate && prisma migrate deploy && next build",
    "start": "next start"
  }
}
```

### Step 5: Deploy

Railway automatically deploys on git push. Domain provided or add custom domain.

---

## ☁️ Option 4: AWS Deployment

Deploy on AWS using ECS/Fargate or EC2.

### Using AWS ECS (Elastic Container Service)

**Prerequisites:**
- AWS account
- AWS CLI installed
- Docker image pushed to ECR

**Steps:**
1. Create RDS PostgreSQL instance
2. Push Docker image to ECR
3. Create ECS cluster
4. Create task definition
5. Create service with load balancer
6. Configure environment variables
7. Set up CloudWatch logging

Detailed AWS deployment is complex and beyond this guide's scope. Refer to AWS documentation.

---

## 🔧 Post-Deployment Tasks

### 1. Verify Application Health

```bash
# Check application is responding
curl https://nuryantiislamicmontessori.com

# Check health endpoint (if implemented)
curl https://nuryantiislamicmontessori.com/api/health
```

### 2. Test Registration Flow

1. Fill out registration form
2. Submit form
3. Verify email received (admin)
4. Verify confirmation email (parent)
5. Check WhatsApp notification

### 3. Monitor Logs

**Vercel:**
```bash
vercel logs
```

**Docker:**
```bash
docker-compose -f docker-compose.prod.yml logs -f
```

**Railway:**
View in Railway dashboard

### 4. Setup Monitoring

**Option A: UptimeRobot**
- Free tier available
- Monitor website uptime
- Email alerts on downtime

**Option B: Sentry**
- Error tracking
- Performance monitoring
- Free tier available

**Option C: LogTail/BetterStack**
- Log aggregation
- Real-time monitoring

### 5. Performance Optimization

```bash
# Run Lighthouse audit
npx lighthouse https://nuryantiislamicmontessori.com

# Check bundle size
pnpm build && npx @next/bundle-analyzer
```

---

## 🔒 Security Checklist

- [ ] Environment variables secured (not in code)
- [ ] Database password is strong
- [ ] SSL/TLS certificate active
- [ ] SMTP credentials secured
- [ ] Database not publicly accessible
- [ ] Security headers configured (see docker-compose.prod.yml)
- [ ] Regular dependency updates (`pnpm update`)
- [ ] Rate limiting implemented (recommended)
- [ ] Input validation on all forms
- [ ] SQL injection protection (Prisma handles this)
- [ ] XSS protection (React handles this)

---

## 📊 Monitoring & Maintenance

### Daily Tasks
- Monitor error logs
- Check email delivery
- Verify site accessibility

### Weekly Tasks
- Review registration submissions
- Check disk space (if self-hosted)
- Review analytics

### Monthly Tasks
- Update dependencies
- Review and apply security patches
- Database backup verification
- Performance audit

### Database Backups

**Automatic Backups (Docker):**
```bash
# Backup script runs daily via cron
# Backups stored in ./backups/
```

**Manual Backup:**
```bash
# Docker deployment
./scripts/backup-database.sh

# Or manually
pg_dump $DATABASE_URL > backup-$(date +%Y%m%d).sql
```

**Restore from Backup:**
```bash
# Restore database
psql $DATABASE_URL < backup-20240101.sql
```

---

## 🆘 Troubleshooting

### Issue: Build Fails

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

### Issue: Database Connection Failed

**Check:**
- DATABASE_URL format correct
- Database is running
- Firewall allows connection
- Credentials are correct

**Test Connection:**
```bash
pnpm prisma db push
```

### Issue: Email Not Sending

**Check:**
- SMTP credentials correct
- Port 587 not blocked
- Gmail: Enable "App Passwords"
- Check spam folder

**Test:**
```bash
# Use nodemailer test in Node REPL
node
> require('./lib/email').sendEmail('test@example.com', 'Test', 'Body')
```

### Issue: Environment Variables Not Loading

**Check:**
- `.env` file exists
- Variable names match exactly
- No spaces around `=`
- Restart application after changes

### Issue: Docker Container Not Starting

```bash
# Check logs
docker-compose logs nuryanti-gims

# Check container status
docker ps -a

# Restart container
docker-compose restart nuryanti-gims
```

---

## 🔄 Continuous Deployment

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Run tests
        run: pnpm test # if tests exist
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Docker Auto-Deploy

```bash
# On VPS, setup git webhook listener
# Or use GitHub Actions to SSH and pull

# In GitHub Actions:
- name: Deploy to VPS
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.VPS_HOST }}
    username: ${{ secrets.VPS_USER }}
    key: ${{ secrets.SSH_KEY }}
    script: |
      cd /opt/tk-nuryanti-gims
      git pull
      docker-compose -f docker-compose.prod.yml up -d --build
```

---

## 📈 Scaling Considerations

### When to Scale

- Response time > 3 seconds
- CPU usage > 80%
- Memory usage > 80%
- Database connections maxed out

### Scaling Options

**Vercel:**
- Automatically scales
- Upgrade plan for higher limits

**Docker/VPS:**
- Vertical: Upgrade server resources
- Horizontal: Add more servers with load balancer
- Database: Use read replicas
- Cache: Add Redis for sessions/queries

**Database:**
- Connection pooling (Prisma built-in)
- Read replicas for heavy reads
- Upgrade to larger instance

---

## 🎓 Best Practices

1. **Always use environment variables** for secrets
2. **Never commit `.env`** to version control
3. **Test in staging** before production deploy
4. **Monitor logs** regularly
5. **Keep dependencies updated**
6. **Backup database** before migrations
7. **Use health checks** for monitoring
8. **Implement graceful shutdown**
9. **Document deployment process**
10. **Have rollback plan ready**

---

## 📞 Support Resources

- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Vercel Docs**: https://vercel.com/docs
- **Docker Docs**: https://docs.docker.com
- **Prisma Deployment**: https://www.prisma.io/docs/guides/deployment
- **Railway Docs**: https://docs.railway.app

---

**Last Updated**: November 21, 2025
