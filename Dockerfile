# Stage 1: Build
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Add dependencies for Prisma and better performance
RUN apk add --no-cache libc6-compat openssl1.1-compat

# Copy package.json, package-lock.json, and pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml ./

# Install dependencies using the lock file
RUN pnpm install --frozen-lockfile

# Copy the rest of the application source code
COPY . .

# Build the Next.js app
RUN pnpm prisma generate && pnpm build

# Stage 2: Production
FROM node:18-alpine AS runtime

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Add required dependencies for production
RUN apk add --no-cache libc6-compat openssl1.1-compat

# Create a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy only the necessary files from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/tsconfig.json ./

# Set permissions for the non-root user
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port the app runs on
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Health check configuration
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start the application
CMD ["pnpm", "start"]
