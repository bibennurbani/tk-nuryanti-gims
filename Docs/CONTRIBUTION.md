# Contributing to TK Nuryanti GIMS

Thank you for your interest in contributing to the TK Nuryanti Global Islamic Montessori School website! This document provides guidelines and instructions for contributing to this project.

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Testing Guidelines](#testing-guidelines)
8. [Documentation](#documentation)

---

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of experience level, background, or identity.

### Expected Behavior

- Be respectful and constructive in communications
- Welcome newcomers and help them get started
- Focus on what's best for the project and community
- Accept constructive criticism gracefully
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Trolling, insulting, or derogatory remarks
- Publishing others' private information
- Any conduct that would be inappropriate in a professional setting

---

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- Node.js 18+ installed
- pnpm package manager
- Git installed and configured
- Code editor (VS Code recommended)
- Basic knowledge of:
  - React and Next.js
  - TypeScript
  - Tailwind CSS
  - Prisma ORM

### Fork and Clone

1. **Fork the Repository**

   - Visit https://github.com/bibennurbani/tk-nuryanti-gims
   - Click "Fork" button in the top-right corner

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/tk-nuryanti-gims.git
   cd tk-nuryanti-gims
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/bibennurbani/tk-nuryanti-gims.git
   ```

### Local Setup

1. **Install Dependencies**

   ```bash
   pnpm install
   ```

2. **Setup Environment Variables**

   ```bash
   cp .env.example .env
   # Edit .env with your local configuration
   ```

3. **Setup Database**

   ```bash
   pnpm prisma generate
   pnpm prisma migrate dev
   pnpm db:seed
   ```

4. **Start Development Server**

   ```bash
   pnpm dev
   ```

5. **Open Browser**
   Navigate to http://localhost:3000

---

## 💻 Development Workflow

### Branch Strategy

We use a simplified Git Flow:

- `main` - Production-ready code
- `develop` - Integration branch for features (if exists)
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates
- `refactor/*` - Code refactoring

### Creating a Feature Branch

```bash
# Update your local main
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/your-feature-name

# Or for bug fix
git checkout -b fix/bug-description
```

### Making Changes

1. **Make your changes** in the feature branch
2. **Test thoroughly** - ensure nothing breaks
3. **Follow coding standards** (see below)
4. **Commit frequently** with clear messages
5. **Keep commits focused** - one logical change per commit

### Keeping Your Branch Updated

```bash
# Fetch upstream changes
git fetch upstream

# Rebase your branch on main
git rebase upstream/main

# Or merge if you prefer
git merge upstream/main
```

### Pushing Changes

```bash
# Push to your fork
git push origin feature/your-feature-name
```

---

## 📝 Coding Standards

### TypeScript

- **Use TypeScript** for all new code
- **Avoid `any` type** - use proper types
- **Define interfaces** for complex objects
- **Use type inference** where obvious

**Good:**

```typescript
interface StudentData {
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
}

function registerStudent(data: StudentData): Promise<{ success: boolean }> {
  // Implementation
}
```

**Bad:**

```typescript
function registerStudent(data: any): any {
  // Implementation
}
```

### React Components

#### Server Components (Default)

```typescript
// app/teachers/page.tsx
import prisma from '@/lib/prisma';

export default async function TeachersPage() {
  const teachers = await prisma.teacher.findMany();

  return (
    <div className='container mx-auto py-20'>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} {...teacher} />
      ))}
    </div>
  );
}
```

#### Client Components (When Needed)

```typescript
'use client';

import { useState } from 'react';

export default function InteractiveComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>;
}
```

**Use Client Components Only For:**

- Event handlers (onClick, onChange, etc.)
- State (useState, useReducer)
- Effects (useEffect)
- Browser APIs
- Animations

### Component Structure

```typescript
// 1. Imports
import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

// 2. Type definitions
interface ComponentProps {
  title: string;
  children: ReactNode;
  className?: string;
}

// 3. Component
export function Component({ title, children, className }: ComponentProps) {
  // 4. Hooks (if client component)

  // 5. Event handlers

  // 6. Render
  return (
    <div className={cn('base-styles', className)}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### Styling with Tailwind

- **Use Tailwind classes** for styling
- **Use `cn()` utility** for conditional classes
- **Keep classes organized** - layout, spacing, colors, typography
- **Use custom colors** from tailwind.config.ts

**Good:**

```typescript
<div className={cn(
  'container mx-auto px-4',     // Layout
  'py-8 md:py-12',               // Spacing (responsive)
  'bg-white rounded-lg',         // Appearance
  'text-gray-800',               // Typography
  isActive && 'border-green-500' // Conditional
)}>
```

**Bad:**

```typescript
<div className="container mx-auto px-4 py-8 md:py-12 bg-white rounded-lg text-gray-800">
```

### Naming Conventions

- **Components**: PascalCase (`UserProfile`, `RegistrationModal`)
- **Files**: Same as component (`UserProfile.tsx`)
- **Functions**: camelCase (`handleSubmit`, `fetchUserData`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_URL`)
- **CSS classes**: kebab-case (only for custom classes)
- **Database models**: PascalCase (`Teacher`, `Student`)

### File Organization

```typescript
// Group imports logically
// 1. React/Next.js
import { useState } from 'react';
import Image from 'next/image';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Local components
import { Button } from '@/components/ui/button';

// 4. Utils and types
import { cn } from '@/lib/utils';
import type { Teacher } from '@prisma/client';

// 5. Assets
import logo from '@/public/logo.png';
```

### Comments

- **Use comments sparingly** - code should be self-documenting
- **Explain "why", not "what"**
- **Document complex logic**
- **Add JSDoc for exported functions**

```typescript
/**
 * Registers a new student and sends notification emails
 * @param formData - Form data containing student information
 * @returns Success status of the registration
 */
export async function registerStudent(formData: FormData) {
  // Implementation
}
```

---

## 📝 Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, missing semi-colons, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks (dependencies, configs, etc.)

### Scopes (Optional)

- `auth` - Authentication
- `ui` - User interface
- `db` - Database
- `api` - API routes
- `components` - Components
- `email` - Email service
- `whatsapp` - WhatsApp integration

### Examples

```bash
# Good commits
git commit -m "feat(registration): add student registration form"
git commit -m "fix(email): correct SMTP configuration"
git commit -m "docs: update deployment guide"
git commit -m "refactor(components): extract HeroSection component"

# Bad commits
git commit -m "update stuff"
git commit -m "fix bug"
git commit -m "WIP"
```

### Commit Message Rules

1. **Subject line**:

   - Imperative mood ("add", not "added" or "adds")
   - No period at the end
   - Max 72 characters
   - Capitalize first letter

2. **Body** (optional):

   - Explain what and why, not how
   - Wrap at 72 characters
   - Separate from subject with blank line

3. **Footer** (optional):
   - Reference issues: `Closes #123`
   - Breaking changes: `BREAKING CHANGE: description`

---

## 🔄 Pull Request Process

### Before Submitting

- [ ] Code follows project style guidelines
- [ ] All tests pass (if applicable)
- [ ] New code has appropriate tests (if applicable)
- [ ] Documentation updated (if needed)
- [ ] Commits are clean and well-described
- [ ] Branch is up-to-date with main

### Creating Pull Request

1. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

2. **Open Pull Request**

   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the template

3. **PR Title Format**

   ```
   [Type] Brief description

   Examples:
   [Feature] Add student registration modal
   [Fix] Correct email template formatting
   [Docs] Update README with setup instructions
   ```

4. **PR Description Template**

   ```markdown
   ## Description

   Brief description of what this PR does

   ## Changes

   - Change 1
   - Change 2
   - Change 3

   ## Screenshots (if applicable)

   [Add screenshots]

   ## Testing

   How to test these changes

   ## Related Issues

   Closes #123
   ```

### Review Process

1. **Wait for review** - Maintainers will review your PR
2. **Address feedback** - Make requested changes
3. **Keep discussion professional** - Be open to suggestions
4. **Update PR** - Push additional commits if needed
5. **Approval** - Once approved, PR will be merged

### After Merge

```bash
# Update your local main
git checkout main
git pull upstream main

# Delete feature branch
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
```

---

## 🧪 Testing Guidelines

### Manual Testing

Before submitting PR, test:

1. **Core Functionality**

   - [ ] All pages load without errors
   - [ ] Navigation works correctly
   - [ ] Forms submit successfully
   - [ ] Email notifications sent
   - [ ] Images load properly

2. **Responsive Design**

   - [ ] Mobile (375px width)
   - [ ] Tablet (768px width)
   - [ ] Desktop (1024px+ width)

3. **Cross-Browser**

   - [ ] Chrome
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge

4. **Accessibility**
   - [ ] Keyboard navigation works
   - [ ] Screen reader friendly
   - [ ] Proper ARIA labels
   - [ ] Good color contrast

### Automated Tests (Future)

When tests are implemented:

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test registration.test.ts

# Run with coverage
pnpm test:coverage
```

### Writing Tests (Recommended)

```typescript
// __tests__/registration.test.ts
import { registerStudent } from '@/app/actions';

describe('Student Registration', () => {
  it('should successfully register a student', async () => {
    const formData = new FormData();
    formData.append('childName', 'Test Child');
    formData.append('parentName', 'Test Parent');
    formData.append('email', 'test@example.com');
    formData.append('phone', '081234567890');
    formData.append('address', 'Test Address');

    const result = await registerStudent(formData);

    expect(result.success).toBe(true);
  });
});
```

---

## 📚 Documentation

### When to Update Documentation

Update docs when you:

- Add new features
- Change existing behavior
- Add/modify API endpoints
- Update deployment process
- Add environment variables
- Change configuration

### Documentation Files

- `README.md` - Project overview and quick start
- `Docs/ARCHITECTURE.md` - System architecture
- `Docs/API_DOCUMENTATION.md` - API reference
- `Docs/DEPLOYMENT.md` - Deployment instructions
- `Docs/CONTRIBUTION.md` - This file
- Code comments - Complex logic explanation

### Documentation Style

- Write in clear, simple English
- Use code examples
- Include screenshots for UI changes
- Keep it up-to-date
- Use proper markdown formatting

---

## 🐛 Reporting Bugs

### Before Reporting

1. Check existing issues
2. Try to reproduce the bug
3. Gather relevant information

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:

1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**

- Browser: [e.g. Chrome 120]
- OS: [e.g. macOS 14]
- Version: [e.g. 1.2.3]

**Additional context**
Any other information about the problem.
```

---

## 💡 Suggesting Features

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Describe alternatives you've considered**
Alternative solutions or features you've considered.

**Additional context**
Any other context, mockups, or screenshots.
```

---

## 🎯 Project Priorities

Current focus areas:

1. **Core Functionality** - Registration, email, WhatsApp
2. **Performance** - Page load speed, optimization
3. **Accessibility** - WCAG 2.1 compliance
4. **SEO** - Search engine optimization
5. **Documentation** - Comprehensive guides

---

## 📞 Getting Help

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - Questions and general discussion
- **Email** - admin@nuryantiislamicmontessori.com

### Questions?

Don't hesitate to ask! We welcome:

- Beginner questions
- Clarification requests
- Suggestions for improvement
- Feedback on documentation

---

## 🏆 Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Contributors page (if created)

Thank you for contributing to TK Nuryanti GIMS! 🎉

---

**Last Updated**: November 21, 2025
