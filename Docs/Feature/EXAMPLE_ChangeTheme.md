# Theme Switcher Feature

**Status**: 🔵 Planning (Example)  
**Priority**: Medium  
**Estimated Effort**: 3-5 days  
**Created**: November 21, 2025

---

## 📋 Overview

Add the ability for users to switch between light and dark themes (or custom color schemes) to improve user experience and accessibility.

---

## 🎯 Problem Statement

Currently, the website only supports a single light theme. Users who prefer dark mode or have accessibility needs cannot customize the visual appearance to their preference. This feature will:

1. Improve accessibility for users with visual sensitivities
2. Reduce eye strain in low-light environments
3. Provide a modern user experience
4. Align with user expectations for modern websites

---

## 👥 User Stories

### As a visitor:

- I want to toggle between light and dark themes so that I can read content comfortably in different lighting conditions
- I want my theme preference to be remembered so that I don't have to change it every visit
- I want smooth transitions when changing themes so that the experience feels polished

### As a parent browsing at night:

- I want to use dark mode so that I don't disturb my sleeping child with bright screen light
- I want the theme to match my system preference automatically

### As a user with visual sensitivity:

- I want to choose a high-contrast theme so that I can read content more easily
- I want reduced motion options if available

---

## ✅ Requirements

### Functional Requirements

1. **Theme Options**:

   - The system shall support at least 2 themes: Light and Dark
   - Optional: Support for custom school-branded themes (e.g., "Montessori Green")

2. **Theme Switcher UI**:

   - The theme switcher shall be accessible from the navigation bar
   - The current theme shall be visually indicated
   - The switcher shall be intuitive and require only one click to change

3. **Persistence**:

   - User theme preference shall be stored in localStorage
   - Theme preference shall persist across browser sessions
   - Optional: For logged-in users, store preference in database

4. **System Integration**:

   - The theme shall respect system preference (prefers-color-scheme) by default
   - Users shall be able to override system preference
   - All pages and components shall support all themes

5. **Visual Consistency**:
   - All colors shall have appropriate light/dark variants
   - Images and logos shall be theme-aware if needed
   - Contrast ratios shall meet WCAG 2.1 AA standards

### Non-Functional Requirements

1. **Performance**:

   - Theme changes shall be instantaneous (< 100ms)
   - No flash of unstyled content (FOUC) on page load
   - Theme switching shall not cause layout shifts

2. **Accessibility**:

   - Theme switcher shall be keyboard accessible
   - Theme switcher shall have proper ARIA labels
   - Focus indicators shall be visible in all themes

3. **Browser Support**:

   - Support all modern browsers (Chrome, Firefox, Safari, Edge)
   - Graceful degradation for older browsers

4. **Maintainability**:
   - Use CSS variables for theme values
   - Centralized theme configuration
   - Easy to add new themes in the future

---

## 🎨 Design Specifications

### Color Schemes

**Light Theme** (Current - Default):

```css
--background: 0 0% 100%           /* White */
--foreground: 0 0% 10%            /* Dark gray */
--primary: 142 70% 65%            /* Pastel green */
--muted: 0 0% 96%                 /* Light gray */
```

**Dark Theme** (New):

```css
--background: 0 0% 10%            /* Dark gray */
--foreground: 0 0% 98%            /* Off-white */
--primary: 142 70% 55%            /* Adjusted green */
--muted: 0 0% 15%                 /* Darker gray */
```

**Optional: Montessori Theme**:

```css
--primary: 142 70% 65%            /* Montessori green */
--secondary: 35 100% 95%          /* Warm beige */
--accent: 25 85% 60%              /* Warm orange */
```

### UI Components

**Theme Switcher Location**:

- Desktop: Top-right corner of navbar, next to navigation links
- Mobile: In mobile menu, below navigation links

**Switcher Design**:

```
Option 1: Icon Toggle (Sun/Moon)
┌─────────────┐
│  ☀️ | 🌙    │  Click to toggle
└─────────────┘

Option 2: Dropdown Menu
┌──────────────────┐
│ Theme: Light ▼   │
├──────────────────┤
│ ○ Light          │
│ ● Dark           │
│ ○ Auto (System)  │
└──────────────────┘

Option 3: Segmented Control
┌────────────────────────┐
│ Light | Dark | System  │
└────────────────────────┘
```

**Preferred**: Option 2 (Dropdown) for extensibility

---

## 🔧 Technical Specification

### Architecture Decision

Use **CSS Variables + next-themes** library for theme management.

**Why next-themes?**

- Prevents FOUC (flash of unstyled content)
- Syncs with system preferences
- Provides React hooks for theme control
- Lightweight and well-maintained

### Installation

```bash
pnpm add next-themes
```

### Data Model

No database changes needed for basic implementation.

**Optional: For logged-in users**:

```prisma
model User {
  id            String  @id @default(cuid())
  // ... other fields
  themePreference String? @default("system") // "light" | "dark" | "system"
}
```

### Implementation Structure

```typescript
lib / theme.ts; // Theme configuration

components / ThemeProvider.tsx; // Wrapper component
ThemeSwitcher.tsx; // Switcher UI component

app / globals.css; // Theme CSS variables
layout.tsx; // Wrap app with ThemeProvider
```

### CSS Variables Setup

```css
/* app/globals.css */

:root {
  /* Light theme (default) */
  --background: 0 0% 100%;
  --foreground: 0 0% 10%;
  --primary: 142 70% 65%;
  /* ... all other colors */
}

[data-theme='dark'] {
  /* Dark theme overrides */
  --background: 0 0% 10%;
  --foreground: 0 0% 98%;
  --primary: 142 70% 55%;
  /* ... all other colors */
}

/* Smooth transitions */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

### Components

**ThemeProvider.tsx**:

```typescript
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

**ThemeSwitcher.tsx**:

```typescript
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded ${theme === 'light' ? 'bg-primary' : ''}`}
        aria-label='Light theme'>
        <Sun className='w-5 h-5' />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded ${theme === 'dark' ? 'bg-primary' : ''}`}
        aria-label='Dark theme'>
        <Moon className='w-5 h-5' />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded ${theme === 'system' ? 'bg-primary' : ''}`}
        aria-label='System theme'>
        <Monitor className='w-5 h-5' />
      </button>
    </div>
  );
}
```

**Layout Integration**:

```typescript
// app/layout.tsx
import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html lang='id' suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute='data-theme'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### API Endpoints

None required for basic implementation.

**Optional: For syncing with user profile**:

```typescript
// app/api/user/theme/route.ts
export async function POST(request: Request) {
  const { theme } = await request.json();
  const userId = await getCurrentUserId();

  await prisma.user.update({
    where: { id: userId },
    data: { themePreference: theme },
  });

  return NextResponse.json({ success: true });
}
```

---

## 📝 Implementation Plan

### Phase 1: Setup & Configuration (Day 1)

- [x] Install next-themes package
- [ ] Create ThemeProvider component
- [ ] Update root layout to include ThemeProvider
- [ ] Define CSS variables for light theme
- [ ] Define CSS variables for dark theme
- [ ] Test theme switching in isolation

### Phase 2: UI Implementation (Day 2)

- [ ] Create ThemeSwitcher component
- [ ] Design and implement switcher UI
- [ ] Add icons (Sun, Moon, Monitor)
- [ ] Integrate switcher into Navbar
- [ ] Make switcher responsive (mobile/desktop)
- [ ] Add transition animations

### Phase 3: Theme Refinement (Day 3)

- [ ] Audit all components for theme compatibility
- [ ] Update custom colors for dark theme
- [ ] Ensure proper contrast ratios
- [ ] Test with different color combinations
- [ ] Handle theme-aware images (logos, etc.)
- [ ] Fix any visual inconsistencies

### Phase 4: Testing (Day 4)

- [ ] Test on all major browsers
- [ ] Test system preference detection
- [ ] Test localStorage persistence
- [ ] Test keyboard accessibility
- [ ] Test with screen readers
- [ ] Performance testing (no FOUC)

### Phase 5: Documentation & Deployment (Day 5)

- [ ] Update component documentation
- [ ] Add theme switcher to user guide
- [ ] Create PR with all changes
- [ ] Code review
- [ ] Deploy to staging
- [ ] Final testing
- [ ] Deploy to production

---

## 🧪 Testing Strategy

### Unit Tests

```typescript
// __tests__/ThemeSwitcher.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('renders theme toggle buttons', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByLabelText('Light theme')).toBeInTheDocument();
    expect(screen.getByLabelText('Dark theme')).toBeInTheDocument();
  });

  it('changes theme on button click', () => {
    render(<ThemeSwitcher />);
    const darkButton = screen.getByLabelText('Dark theme');
    fireEvent.click(darkButton);
    // Assert theme changed
  });
});
```

### Integration Tests

- [ ] Theme persists across page navigation
- [ ] Theme loads correctly on initial page load
- [ ] System preference is detected correctly
- [ ] Theme changes are reflected immediately

### Manual Testing Checklist

- [ ] All pages display correctly in light theme
- [ ] All pages display correctly in dark theme
- [ ] Theme switcher is visible on all pages
- [ ] No FOUC (flash of unstyled content) on page load
- [ ] Theme preference persists after browser refresh
- [ ] System preference detection works
- [ ] Keyboard navigation works
- [ ] Mobile responsiveness is maintained
- [ ] Transitions are smooth
- [ ] Colors have adequate contrast

### Accessibility Testing

- [ ] WCAG 2.1 AA contrast ratios met
- [ ] Screen reader announces theme changes
- [ ] Keyboard-only navigation works
- [ ] Focus indicators visible in all themes
- [ ] No motion for users with prefers-reduced-motion

---

## ✅ Acceptance Criteria

This feature is complete when:

- [ ] Users can toggle between light, dark, and system themes
- [ ] Theme preference is saved and persists across sessions
- [ ] All pages and components work correctly in all themes
- [ ] No visual bugs or inconsistencies
- [ ] Contrast ratios meet WCAG AA standards
- [ ] Theme switcher is accessible via keyboard
- [ ] No performance issues (FOUC, layout shifts)
- [ ] Documentation is updated
- [ ] Tests pass
- [ ] Code is reviewed and approved

---

## 🔗 Dependencies

### Required

- next-themes package
- Lucide React icons (already installed)
- CSS custom properties support (all modern browsers)

### Optional

- User authentication system (for database persistence)
- User profile API (for syncing preferences)

---

## ⚠️ Risks & Mitigations

| Risk                                | Likelihood | Impact | Mitigation                                            |
| ----------------------------------- | ---------- | ------ | ----------------------------------------------------- |
| FOUC (Flash of Unstyled Content)    | Medium     | High   | Use next-themes which prevents FOUC                   |
| Color contrast issues               | Low        | Medium | Test with contrast checker tools                      |
| Performance degradation             | Low        | Low    | Use CSS variables, avoid JS re-renders                |
| Third-party component compatibility | Medium     | Medium | Audit and test all Radix UI components                |
| Image theme compatibility           | Low        | Low    | Use SVGs with currentColor or provide themed versions |

---

## 📊 Success Metrics

### Technical Metrics

- Page load time impact: < 50ms
- Theme switch time: < 100ms
- Lighthouse accessibility score: 100
- Zero console errors/warnings

### User Metrics (if analytics available)

- Theme preference distribution
- Theme switch frequency
- User engagement with feature

---

## 🚀 Rollout Plan

### Staging Deployment

1. Deploy to staging environment
2. Internal testing (1-2 days)
3. Fix any issues found
4. Get stakeholder approval

### Production Deployment

1. Deploy during low-traffic period
2. Monitor error logs
3. Collect initial user feedback
4. Make adjustments if needed

### Rollback Plan

If critical issues occur:

1. Revert the deployment
2. Fix issues in development
3. Re-test and re-deploy

---

## 📚 Future Enhancements

### Phase 2 (Future)

- [ ] Additional theme options (High Contrast, Sepia)
- [ ] Custom color picker for power users
- [ ] Theme preview before applying
- [ ] Scheduled theme switching (auto-dark at night)

### Phase 3 (Future)

- [ ] Per-page theme overrides
- [ ] Export/import theme settings
- [ ] Community-created themes

---

## 📎 Notes

- Consider adding theme switcher to mobile menu as well
- May want to hide theme switcher for print styles
- Consider email template theming for transactional emails
- Keep color naming semantic (primary, secondary) not color-specific

---

## 📞 Questions/Decisions Needed

1. ✅ **Confirmed**: Support Light, Dark, and System themes
2. ✅ **Confirmed**: Use dropdown menu for switcher UI
3. ⏳ **Pending**: Should we sync theme to database for logged-in users?
4. ⏳ **Pending**: Do we need theme support in email templates?
5. ⏳ **Pending**: Should we add more color scheme options beyond light/dark?

---

**Created**: November 21, 2025  
**Last Updated**: November 21, 2025  
**Next Review**: Before implementation start
