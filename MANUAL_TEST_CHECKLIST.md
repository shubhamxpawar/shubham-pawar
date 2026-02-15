# Manual Test Checklist - Portfolio Clone

Use this checklist to manually verify all functionality before deployment.

---

## 🖥️ Desktop Testing (1024px+)

### Navigation Bar
- [ ] Navbar is fixed at top of viewport
- [ ] Name appears on left side
- [ ] Navigation links (Education, Experience, Projects) appear in center
- [ ] Social icons (GitHub, LinkedIn, Twitter) appear on right
- [ ] Clicking "Education" smoothly scrolls to education section
- [ ] Clicking "Experience" smoothly scrolls to experience section
- [ ] Clicking "Projects" smoothly scrolls to projects section
- [ ] Social icons open correct URLs in new tab
- [ ] Hover effects work on all links and icons
- [ ] Backdrop blur appears when scrolling down

### Hero Section
- [ ] Large tagline is visible and readable
- [ ] Key terms are emphasized with italic styling
- [ ] Section occupies at least 60vh
- [ ] Fade-in animation plays on page load
- [ ] Text is properly centered

### Education Section
- [ ] Section heading "Education" is visible
- [ ] Education card displays all information
- [ ] Card has subtle border
- [ ] Hover effect works (border highlight + scale)
- [ ] Layout is clean and readable

### Experience Section
- [ ] Section heading "Experience" is visible
- [ ] All experience entries are displayed
- [ ] Each card shows company, role, type, period, description
- [ ] Cards are arranged vertically
- [ ] Hover effects work on all cards
- [ ] Consistent styling with education cards

### Projects Section
- [ ] Section heading "Projects" is visible
- [ ] Projects are displayed in grid (3 columns)
- [ ] Each card shows image, title, description, technologies
- [ ] Image hover effect works (scale 1.05)
- [ ] Clicking card opens project URL (if available)
- [ ] Grid spacing is consistent

### Animations
- [ ] Page load animations are smooth and staggered
- [ ] Scroll-triggered animations work for sections
- [ ] All transitions are 200-300ms
- [ ] No layout shift during animations

---

## 📱 Mobile Testing (< 768px)

### Navigation Bar
- [ ] Navbar adapts to mobile layout
- [ ] Name is still visible on left
- [ ] Navigation links are simplified/smaller
- [ ] Social icons are hidden or moved
- [ ] All touch targets are at least 44x44px
- [ ] Smooth scroll still works

### Hero Section
- [ ] Tagline is readable at smaller size
- [ ] Text wraps properly
- [ ] Minimum 16px font size maintained
- [ ] Section still occupies significant space

### Education Section
- [ ] Card layout adapts to single column
- [ ] All information is readable
- [ ] Touch targets are adequate
- [ ] Spacing is appropriate

### Experience Section
- [ ] Cards stack vertically
- [ ] All information is readable
- [ ] No horizontal overflow
- [ ] Touch targets are adequate

### Projects Section
- [ ] Grid changes to single column
- [ ] Images scale properly
- [ ] Cards are tappable
- [ ] No horizontal overflow

---

## 📱 Tablet Testing (768px - 1024px)

### Projects Section
- [ ] Grid displays 2 columns
- [ ] Spacing is appropriate
- [ ] Images scale properly

### General Layout
- [ ] Content is centered with appropriate margins
- [ ] Typography scales appropriately
- [ ] No awkward breakpoints

---

## ⌨️ Keyboard Navigation

### Tab Order
- [ ] Tab key moves through elements in logical order
- [ ] Skip to content link appears on first Tab (if implemented)
- [ ] All interactive elements are focusable
- [ ] Tab order matches visual order

### Focus Indicators
- [ ] All focused elements have visible outline
- [ ] Focus indicators are at least 2px
- [ ] Focus indicators are clearly visible against background
- [ ] Focus indicators don't cause layout shift

### Keyboard Actions
- [ ] Enter key activates navigation links
- [ ] Enter key activates project cards
- [ ] Escape key closes modals (if any)
- [ ] Arrow keys work in appropriate contexts

---

## 🎨 Visual Design

### Typography
- [ ] Display font (Cormorant Garamond) loads correctly
- [ ] Body font (Inter) loads correctly
- [ ] Font sizes are appropriate at all breakpoints
- [ ] Line height is comfortable (1.7 for body text)
- [ ] Line length is limited (max 65-75 characters)
- [ ] Headings have proper hierarchy

### Colors
- [ ] Dark background (#0a0a0a) is consistent
- [ ] Text is readable (white/gray on dark)
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Hover states are visible
- [ ] Border colors are subtle but visible

### Spacing
- [ ] Consistent spacing between sections
- [ ] Appropriate padding in cards
- [ ] No elements touching viewport edges
- [ ] Generous whitespace around content

### Effects
- [ ] Background grain texture is visible but subtle
- [ ] Backdrop blur works on navbar
- [ ] Shadows are subtle and appropriate
- [ ] No visual glitches or artifacts

---

## 🔗 Data Integration

### Personal Information
- [ ] Name from lib/info.ts appears in navbar
- [ ] Summary from lib/info.ts appears in hero
- [ ] All social links work correctly
- [ ] Only provided social links are displayed

### Education Data
- [ ] Education information matches lib/info.ts
- [ ] All fields are displayed correctly
- [ ] No missing or incorrect data

### Experience Data
- [ ] All experience entries from lib/info.ts are displayed
- [ ] Data is in correct order
- [ ] All fields are populated correctly
- [ ] No missing entries

### Projects Data
- [ ] All projects from lib/info.ts are displayed
- [ ] Images load correctly (or placeholder shows)
- [ ] Technologies are displayed
- [ ] Links work correctly

---

## ♿ Accessibility

### Semantic HTML
- [ ] `<nav>` element used for navigation
- [ ] `<section>` elements used for major sections
- [ ] `<article>` elements used appropriately
- [ ] Heading hierarchy is correct (h1 → h2 → h3)

### ARIA Attributes
- [ ] Navigation has aria-label="Main navigation"
- [ ] Icon-only buttons have aria-label
- [ ] Decorative icons have aria-hidden="true"
- [ ] Images have alt text or aria-label

### Screen Reader Testing (if available)
- [ ] Page structure is announced correctly
- [ ] Navigation links are announced correctly
- [ ] All content is accessible
- [ ] No confusing or redundant announcements

---

## 🚀 Performance

### Page Load
- [ ] Page loads in under 3 seconds
- [ ] No flash of unstyled content (FOUC)
- [ ] Fonts load without layout shift
- [ ] Images load progressively

### Interactions
- [ ] Smooth scroll is smooth (no jank)
- [ ] Hover effects are instant
- [ ] Animations don't cause lag
- [ ] No console errors

### Build Output
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] Static files generated in /out directory
- [ ] File sizes are reasonable

---

## 🌐 Cross-Browser Testing

### Chrome/Edge
- [ ] All features work correctly
- [ ] Animations are smooth
- [ ] Layout is correct

### Firefox
- [ ] All features work correctly
- [ ] Animations are smooth
- [ ] Layout is correct

### Safari (Desktop)
- [ ] All features work correctly
- [ ] Backdrop blur works
- [ ] Animations are smooth
- [ ] Layout is correct

### Safari (iOS)
- [ ] Touch interactions work
- [ ] Smooth scroll works
- [ ] Layout is correct
- [ ] No viewport issues

### Chrome Mobile (Android)
- [ ] Touch interactions work
- [ ] Smooth scroll works
- [ ] Layout is correct
- [ ] No viewport issues

---

## 🎭 Edge Cases

### Empty Data
- [ ] Page handles missing social links gracefully
- [ ] Page handles missing project images gracefully
- [ ] No broken layouts with minimal data

### Long Content
- [ ] Long project descriptions don't break layout
- [ ] Long company names wrap properly
- [ ] Long URLs don't overflow

### Slow Network
- [ ] Page is usable while loading
- [ ] No broken images
- [ ] Graceful degradation

---

## 🔧 Technical Verification

### Static Export
- [ ] `npm run build` succeeds
- [ ] /out directory contains all files
- [ ] index.html is generated
- [ ] All assets are included

### TypeScript
- [ ] No compilation errors
- [ ] All types are correct
- [ ] No `any` types (unless necessary)

### Console
- [ ] No errors in browser console
- [ ] No warnings in browser console
- [ ] No 404s for assets

---

## ✅ Final Checks

- [ ] All personal information is accurate
- [ ] All links work correctly
- [ ] No placeholder text remains
- [ ] No TODO comments in code
- [ ] README is updated
- [ ] Deployment instructions are clear

---

## 📝 Notes

Use this section to document any issues found during testing:

```
Issue: [Description]
Severity: [Critical/High/Medium/Low]
Steps to Reproduce: [Steps]
Expected: [Expected behavior]
Actual: [Actual behavior]
```

---

**Testing Completed By:** _______________  
**Date:** _______________  
**Status:** [ ] Pass [ ] Fail [ ] Pass with Issues
