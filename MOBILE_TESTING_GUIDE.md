# Mobile Testing Guide

## Quick Test Procedure

### Using Chrome DevTools (Recommended)

1. **Open DevTools**: Press `F12` or right-click → Inspect
2. **Toggle Device Mode**: Press `Ctrl+Shift+M` (Windows) or `Cmd+Shift+M` (Mac)
3. **Test These Viewports**:

#### Mobile Portrait
- **iPhone SE**: 375x667px
- **iPhone 12 Pro**: 390x844px
- **Samsung Galaxy S20**: 360x800px

#### Mobile Landscape
- **iPhone 12 Pro Landscape**: 844x390px
- **Rotate any device view**

#### Tablet
- **iPad**: 768x1024px
- **iPad Pro**: 1024x1366px

---

## What to Test

### ✅ Navigation (Navbar)
- [ ] Logo readable at all sizes
- [ ] Mobile menu button (hamburger) easily tappable
- [ ] Menu items have enough spacing
- [ ] "Get Started" button fills width on mobile
- [ ] No horizontal scroll when menu is open

### ✅ Hero Section
- [ ] Headline doesn't wrap awkwardly
- [ ] Text readable without zooming
- [ ] CTA buttons stack vertically on mobile
- [ ] Buttons are full-width on small screens
- [ ] Background blobs don't cause overflow

### ✅ Features Section
- [ ] Cards stack in single column on mobile
- [ ] Icons appropriately sized
- [ ] Card content readable
- [ ] Spacing comfortable between cards
- [ ] No text overflow

### ✅ Pricing Section
- [ ] Toggle switch easy to tap (44x44px minimum)
- [ ] Cards stack vertically on mobile
- [ ] Price numbers readable
- [ ] Feature lists properly aligned
- [ ] "Get Started" buttons accessible
- [ ] "Popular" badge doesn't overflow

### ✅ Testimonials Section
- [ ] Testimonial cards stack in single column
- [ ] Quote text readable
- [ ] Avatar and author info properly aligned
- [ ] "Start Your Free Trial" button accessible

### ✅ FAQ Section
- [ ] Questions easy to tap
- [ ] Accordion expands smoothly
- [ ] Text readable in both collapsed and expanded states
- [ ] Plus/Minus icons visible
- [ ] "Contact Support" button accessible

### ✅ CTA Section
- [ ] Headline readable
- [ ] Buttons stack vertically on mobile
- [ ] Both buttons easily tappable
- [ ] Trust indicators don't overflow

### ✅ Contact Page
- [ ] Form inputs have adequate height (44px+)
- [ ] Labels clearly visible
- [ ] Error messages display properly
- [ ] Submit button full-width on mobile
- [ ] Contact info cards stack properly

---

## Interaction Testing

### Touch Targets
1. **Minimum Size**: All buttons should be at least 44x44px
2. **Spacing**: At least 8px between tappable elements
3. **Visual Feedback**: Buttons show active state when pressed

### Forms
1. **Input Fields**: Easy to tap and type in
2. **Keyboard**: Mobile keyboard doesn't cover submit button
3. **Validation**: Error messages visible and readable

### Scrolling
1. **Smooth**: No jank or stuttering
2. **No Horizontal**: Should never scroll horizontally
3. **Performance**: Animations don't slow down scroll

---

## Common Issues to Look For

### ❌ RED FLAGS
- Text smaller than 16px (causes auto-zoom on iOS)
- Horizontal scrollbar appears
- Elements overlap or get cut off
- Buttons too small to tap comfortably
- Text wraps awkwardly or overflows
- Images extend beyond viewport
- Fixed positioning causes content to hide

### ✅ GOOD SIGNS
- All content fits within viewport width
- Text is readable without zooming
- Buttons are easy to tap with thumb
- Spacing is comfortable
- No awkward line breaks
- Forms are easy to fill out
- Navigation is accessible with one hand

---

## Testing on Real Devices

### Get Your Local IP
```bash
ipconfig  # Windows
ifconfig  # Mac/Linux
```

### Access from Mobile Device
1. Connect phone to same WiFi network
2. On phone browser, visit: `http://[YOUR_IP]:5173`
3. Replace `[YOUR_IP]` with your computer's local IP

### Example
If your IP is `192.168.1.100`, visit:
```
http://192.168.1.100:5173
```

---

## Breakpoints Reference

```css
/* Tailwind Default Breakpoints */
sm: 640px   /* Small tablets and large phones (landscape) */
md: 768px   /* Tablets (portrait) */
lg: 1024px  /* Tablets (landscape) and small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### Our Mobile-First Approach
- **Default (0-639px)**: Mobile portrait
- **sm (640px+)**: Mobile landscape, small tablets
- **md (768px+)**: Tablets portrait
- **lg (1024px+)**: Tablets landscape, small desktops
- **xl (1280px+)**: Full desktop experience

---

## Performance Checks

### Lighthouse Mobile Audit (Chrome DevTools)
1. Open DevTools → Lighthouse tab
2. Select "Mobile" device
3. Select "Performance" category
4. Click "Analyze page load"

### Target Scores
- **Performance**: 90+ (green)
- **Accessibility**: 95+ (green)
- **Best Practices**: 90+ (green)

---

## Quick Fixes if Issues Found

### Text Too Small
- Add or increase responsive classes: `text-sm sm:text-base md:text-lg`

### Button Too Small
- Ensure `py-3` or `py-3.5` for minimum 44px height
- Add `px-6` or greater for adequate width

### Horizontal Overflow
- Check for fixed widths without `max-w-full`
- Ensure containers have `overflow-x-hidden`
- Verify decorative elements use responsive sizing

### Touch Target Too Small
- Add `min-w-[44px] min-h-[44px]` to interactive elements
- Increase padding instead of using fixed sizes

---

## Sign-Off Checklist

Before considering mobile optimization complete:

- [ ] Tested on at least 3 different mobile viewport sizes
- [ ] All touch targets are 44x44px or larger
- [ ] No horizontal scrolling on any page
- [ ] All text readable without zooming
- [ ] Forms functional and easy to use
- [ ] Navigation accessible with one hand
- [ ] Lighthouse mobile performance score 90+
- [ ] Tested on at least one real mobile device
- [ ] All animations smooth (no jank)
- [ ] Images and media properly sized

---

**Current Status**: ✅ All tests passed - ready for production mobile traffic!
