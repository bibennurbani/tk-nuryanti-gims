# Stage 1: Build
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json, package-lock.json, and pnpm-lock.yaml
COPY package*.json pnpm-lock.yaml ./

# Install dependencies using the lock file
RUN pnpm install --frozen-lockfile --prod

# Copy the rest of the application source code
COPY . .

# Build the Next.js app
RUN pnpm build

# Stage 2: Production
FROM node:18-alpine AS runtime

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy only the necessary files from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["pnpm", "start"]
