# Complete Animation Utilities Reference

## Desktop/Desktop + Mobile Animations

### Motion Directive (Desktop - Hover + Scroll)
```vue
<!-- Triggered on scroll into view -->
<h2 v-motion:fadeInUp class="title">Hello</h2>
<h2 v-motion:slideInLeft class="title">Hello</h2>
<h2 v-motion:cyberFade class="title">Hello</h2>

<!-- With staggered delays -->
<div v-for="(item, i) in items">
  <div v-motion:cyberFade="{ delay: i * 100 }">
    {{ item }}
  </div>
</div>
```

## Mobile-First Animations

### Scroll-Triggered Mobile Classes
```vue
<!-- Simple scroll animation -->
<div class="mobile-slide-in">Content</div>

<!-- With stagger for groups -->
<div v-for="(item, i) in items" :class="['mobile-slide-in', `stagger-${i + 1}`]">
  {{ item }}
</div>
```

## Available Animation Types

### Motion Directive Types (Desktop)
| Animation | Effect | Best For |
|-----------|--------|----------|
| `fadeInUp` | Fade + slide up | General elements |
| `fadeInDown` | Fade + slide down | Titles |
| `slideInLeft` | Slide from left + fade | Left-aligned content |
| `slideInRight` | Slide from right + fade | Right-aligned content |
| `scaleIn` | Zoom in effect | Cards, images |
| `cyberFade` | Fade + scale + Y-movement | Futuristic feel |
| `glitchIn` | Digital glitch effect | Special emphasis |
| `neonGlow` | Brightness animation | Text highlights |
| `blurIn` | Blur-to-clear | Depth effects |
| `floatIn` | Smooth floating entrance | Elegant elements |

### Mobile Animation Classes
| Class | Animation | Duration | Best For |
|-------|-----------|----------|----------|
| `.mobile-slide-in` | Scale + slide + fade | 0.8s | Project/service cards |
| `.mobile-rotate-in` | Rotate + scale + fade | 0.8s | Service features |
| `.mobile-liquid-swipe` | Clip-path reveal | 0.8s | News articles |
| `.mobile-pulse` | Border pulse glow | 2.5s | Stats/numbers |
| `.mobile-ghost-pulse` | Blur fade-in | 1.2s | Images/features |
| `.mobile-float-up` | Smooth float up | 0.8s | Testimonials |
| `.mobile-shimmer` | Gradient sweep | 3s | Subtle highlight |
| `.mobile-count-up` | Slide up + fade | 0.8s | Numbers |
| `.mobile-rotate-in` | Rotate + scale | 0.8s | Emphasis elements |
| `.mobile-text-wave` | Up/down wave | 1s | Text effects |

### Stagger Delays
```html
<!-- Automatic staggered animation delays -->
<div class="stagger-1">First item (0.1s delay)</div>
<div class="stagger-2">Second item (0.2s delay)</div>
<div class="stagger-3">Third item (0.3s delay)</div>
<!-- ... stagger-4 through stagger-6 available -->
```

## Components Using Animations

### ProjectCard.vue
```scss
// Desktop: scaleIn
// Mobile: mobileCardSlide
animation: mobileCardSlide 0.8s cubic-bezier(...);
```

### ServiceCard.vue
```scss
// Desktop: fadeInUp + hover effects
// Mobile: mobileRotateIn
animation: mobileRotateIn 0.8s cubic-bezier(...);
```

### NewsCard.vue
```scss
// Desktop: fadeInUp
// Mobile: mobileLiquidSwipe
animation: mobileLiquidSwipe 0.8s ease-out;
```

### StatsSection.vue
```scss
// Desktop: fadeInUp
// Mobile: mobilePulseGlow (continuous)
animation: mobilePulseGlow 2.5s ease-in-out infinite;
```

### AboutSection.vue
```scss
// Content: slideInFromLeft → mobileFloatUp (mobile)
// Image: slideInFromRight → mobileGhostPulse (mobile)
```

### TestimonialCard.vue
```scss
// Desktop: scaleIn
// Mobile: mobileFloatUp
animation: mobileFloatUp 0.8s cubic-bezier(...);
```

### WhyChooseUs.vue
```scss
// Desktop: fadeInUp
// Mobile: mobileGhostPulse
animation: mobileGhostPulse 1.2s ease-out;
```

## Combining Animations

### Stacked Classes
```html
<!-- Multiple animations stacked -->
<div class="mobile-slide-in stagger-2">Content</div>

<!-- With motion directive -->
<div v-motion:fadeInUp class="mobile-slide-in">Content</div>
```

### Conditional Animations
```vue
<template>
  <div :class="isMobile ? 'mobile-slide-in' : 'hover-effect'">
    Content
  </div>
</template>

<script>
const isMobile = window.innerWidth < 768
</script>
```

## Motion Composition API Usage

```vue
<script setup>
import { useScrollAnimationMobile } from '@/composables/useMobileScrollAnimation'

// For custom scroll animations
const { setupObserver } = useScrollAnimationMobile(elementRef, {
  threshold: 0.2
})

onMounted(() => {
  setupObserver()
})
</script>
```

## Animation Timing Guide

| Duration | Use Case |
|----------|----------|
| 0.3s | Quick interactions, micro-animations |
| 0.6s | Fast entrances, transitions |
| 0.8s | Standard animations, scroll triggers |
| 1s | Smooth flowing animations |
| 1.2s | Elegant, slower reveals |
| 2.5s-3s | Infinite loops, pulse effects |

## Easing Functions Used

| Easing | Best For |
|--------|----------|
| `ease-out` | Deceleration, natural feel |
| `ease-in-out` | Smooth, balanced motion |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` | Spring-like, bouncy animations |
| `linear` | Consistent speed (shimmer) |

## Performance Optimization

### GPU-Accelerated Properties
- `transform` (translate, scale, rotate)
- `opacity`
- `filter`

### Avoid (causes repaints)
- `width`, `height`, `top`, `left`
- `font-size`, `padding`, `margin`
- `background-color` (use opacity instead)

## Responsive Breakpoints

All mobile animations trigger at:
- **@media (max-width: 768px)**: Tablet/large mobile
- **@media (max-width: 600px)**: Mobile/small screens

Override desktop animations with `!important` flag on mobile for consistency.

## Testing Animations

### Chrome DevTools
1. Open DevTools → Performance tab
2. Record animation sequence
3. Check FPS (should be 60fps)
4. Monitor GPU usage

### Mobile Testing
Use browser DevTools mobile emulation to test animations on:
- iPhone SE (375px)
- iPhone 12 (390px)
- Samsung Galaxy S20 (360px)
- iPad (768px)
- iPad Pro (1024px)

## Troubleshooting

### Animation Not Playing
- Check if `animation-fill-mode: both` is set
- Verify Intersection Observer threshold is appropriate
- Ensure element is visible on scroll

### Jank/Stutter
- Reduce animation complexity
- Use GPU-accelerated properties only
- Check CPU usage in DevTools
- Reduce infinite animation loops

### Mobile Lag
- Remove box-shadow during animation
- Reduce filter blur effect
- Consider disabling on low-end devices
- Use `prefers-reduced-motion` check
