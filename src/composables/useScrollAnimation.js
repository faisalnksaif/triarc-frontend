import { onMounted, onUnmounted, ref } from 'vue'
import { animate } from 'motion'

export function useScrollAnimation(elementRef, options = {}) {
  const isVisible = ref(false)
  const observer = ref(null)

  const defaultOptions = {
    threshold: 0.2,
    rootMargin: '0px',
    ...options
  }

  onMounted(() => {
    if (!elementRef.value) return

    observer.value = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          
          // Trigger animation when element becomes visible
          if (options.onVisible) {
            options.onVisible(entry.target)
          }
        }
      })
    }, defaultOptions)

    observer.value.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return { isVisible }
}

// Predefined animation sequences
export const animationSequences = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  },
  
  fadeInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  },
  
  slideInLeft: {
    initial: { opacity: 0, x: -80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  },
  
  slideInRight: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  },
  
  // Futuristic animations
  glitchIn: {
    initial: { opacity: 0, x: 0 },
    animate: [
      { opacity: 0.8, x: -5 },
      { opacity: 0.6, x: 5 },
      { opacity: 1, x: 0 }
    ],
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  
  neonGlow: {
    initial: { opacity: 0, filter: 'brightness(0.5)' },
    animate: { opacity: 1, filter: 'brightness(1)' },
    transition: { duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  },
  
  cyberFade: {
    initial: { opacity: 0, y: 60, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.8, ease: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  },
  
  floatIn: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.17, 0.67, 0.83, 0.67] }
  },

  blurIn: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { opacity: 1, filter: 'blur(0px)' },
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}

export function applyMotionAnimation(element, sequence = 'fadeInUp', delay = 0) {
  if (!element) return

  const anim = animationSequences[sequence] || animationSequences.fadeInUp
  
  animate(
    element,
    anim.animate,
    {
      ...anim.transition,
      delay
    }
  )
}
