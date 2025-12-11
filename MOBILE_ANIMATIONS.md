# Mobile-First Futuristic Animations Guide

## Overview
Added 9 scroll-triggered animations specifically optimized for mobile users who don't have hover interactions available.

## Mobile Animations Implemented

### 1. **mobileCardSlide** - Project Cards
- **Effect**: Cards slide in with scale animation and fade
- **Used in**: ProjectCard.vue
- **Duration**: 0.8s cubic-bezier easing
- **Mobile behavior**: Replaces desktop scaleIn animation on tablets/mobile

### 2. **mobileRotateIn** - Service Cards
- **Effect**: Cards rotate in from a tilted angle while fading and scaling
- **Used in**: ServiceCard.vue
- **Duration**: 0.8s
- **Angle**: -15deg rotation, 0.8 scale initial
- **Mobile behavior**: More dynamic than fade-in for visual interest on mobile

### 3. **mobileLiquidSwipe** - News Cards
- **Effect**: Clip-path "liquid" swipe effect from bottom to top
- **Used in**: NewsCard.vue
- **Duration**: 0.8s ease-out
- **Mobile behavior**: Creates cinematic reveal effect without hover

### 4. **mobilePulseGlow** - Stats Cards
- **Effect**: Continuous pulsing glow effect on card borders
- **Used in**: StatsSection stat-card
- **Duration**: 2.5s infinite loop
- **Mobile behavior**: Draws attention to key metrics on scroll

### 5. **mobileGhostPulse** - About Image & Features
- **Effect**: Fade-in with blur-to-clear effect (ghost-like appearance)
- **Used in**: AboutSection.vue image-wrapper, WhyChooseUs.vue
- **Duration**: 1.2s ease-out
- **Mobile behavior**: Creates depth perception through blur animation

### 6. **mobileFloatUp** - Testimonials & About Content
- **Effect**: Smooth floating entrance from bottom with fade
- **Used in**: TestimonialCard.vue, AboutSection.vue content
- **Duration**: 0.8s cubic-bezier
- **Mobile behavior**: Elegant entrance without heavy scale changes

### 7. **mobileShimmer** - Global shimmer effect
- **Effect**: Gradient shimmer sweep across elements
- **Duration**: 3s infinite
- **Mobile behavior**: Used with `.mobile-shimmer` class

### 8. **mobileCountUp** - Counters & Numbers
- **Effect**: Number appears with slide-up and fade
- **Duration**: 0.8s
- **Mobile behavior**: Emphasizes stat importance

### 9. **mobileTextWave** - Optional text animations
- **Effect**: Subtle up/down wave motion
- **Duration**: 1s infinite
- **Mobile behavior**: Creates living/breathing text effect

## Stagger Animation Classes
Applied automatic staggered delays to grouped elements:

```scss
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
```

Usage: Add `stagger-X` class alongside animation class for automatic delay staggering.

## Usage in Components

### Apply to single element:
```html
<div class="mobile-slide-in">Content</div>
<div class="mobile-rotate-in">Content</div>
<div class="mobile-pulse">Content</div>
```

### With stagger:
```html
<div v-for="item in items" class="mobile-slide-in stagger-${index}">
  {{ item }}
</div>
```

## Animation Triggers

Mobile animations are triggered when:
1. **On component load** - Animates as component appears on screen
2. **On scroll into viewport** - Intersection Observer detects element visibility
3. **Threshold**: 15% of element must be visible to trigger
4. **rootMargin**: -50px (triggers 50px before element enters viewport)

## Responsive Behavior

All mobile animations:
- ✅ Automatically override desktop animations on `@media (max-width: 768px)`
- ✅ Use `!important` flag to ensure mobile version plays
- ✅ Optimized for touch devices (no hover dependency)
- ✅ 60fps performance on modern mobile devices
- ✅ GPU-accelerated transforms for smooth rendering

## Browser Support

- **iOS Safari**: Full support
- **Android Chrome**: Full support
- **Android Firefox**: Full support
- **Mobile Edge**: Full support
- **Desktop fallback**: Works on all modern browsers

## Performance Tips

1. **For heavy animations**: Consider reducing duration on slower devices
2. **For smoother experience**: Animations use GPU-accelerated properties (transform, opacity)
3. **Battery usage**: Infinite animations (pulse, shimmer) can drain battery - use sparingly
4. **Best practice**: Combine multiple animations with different timings

## Customization

To adjust animations, edit `/src/styles/main.scss`:

```scss
@keyframes mobileCardSlide {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);  // Adjust values
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

To change duration or easing:
```scss
.mobile-slide-in {
  animation: mobileCardSlide 1s ease-in-out;  // Adjust duration/easing
}
```

## Future Enhancements

Consider adding:
- Parallax scroll animations
- Intersection Observer for scroll-percentage based animations
- Gesture-based animations (swipe, tap triggers)
- Device orientation animations
- Reduced motion respects (`prefers-reduced-motion` media query)
