import { animate } from 'motion'

export function useScrollAnimationMobile(elementRef, options = {}) {
  const defaultOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  let observer = null

  function setupObserver() {
    if (!elementRef.value) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.motionAnimation || 'fadeInUp'
          const delay = parseFloat(entry.target.dataset.motionDelay || '0') * 100
          
          triggerAnimation(entry.target, animationType, delay)
          observer?.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    observer.observe(elementRef.value)
  }

  function triggerAnimation(element, type, delay) {
    const animations = {
      pulse: {
        initial: { scale: 1, opacity: 0.8 },
        animate: [
          { scale: 1.05, opacity: 1 },
          { scale: 1, opacity: 0.8 }
        ],
        transition: { duration: 0.8, delay: delay / 1000 }
      },
      
      shimmer: {
        initial: { opacity: 0.5 },
        animate: [
          { opacity: 0.8 },
          { opacity: 1 },
          { opacity: 0.8 }
        ],
        transition: { duration: 1.2, delay: delay / 1000 }
      },
      
      slideAndFade: {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: delay / 1000 }
      },
      
      rotateIn: {
        initial: { opacity: 0, rotate: -10 },
        animate: { opacity: 1, rotate: 0 },
        transition: { duration: 0.8, delay: delay / 1000 }
      },

      expandBorder: {
        initial: { boxShadow: '0 0 0px rgba(170, 132, 83, 0.2)' },
        animate: { boxShadow: '0 0 20px rgba(170, 132, 83, 0.5)' },
        transition: { duration: 1, delay: delay / 1000 }
      },

      numCountUp: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay: delay / 1000 }
      }
    }

    const anim = animations[type] || animations.slideAndFade
    
    animate(
      element,
      anim.animate,
      anim.transition
    )
  }

  return { setupObserver }
}

// Utility for scroll-triggered text animations
export function animateTextOnScroll(elements) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const text = entry.target.textContent
          const chars = text.split('')
          
          entry.target.innerHTML = chars
            .map((char, i) => `<span style="opacity: 0; display: inline-block;">${char}</span>`)
            .join('')
          
          const spans = entry.target.querySelectorAll('span')
          spans.forEach((span, i) => {
            animate(
              span,
              { opacity: 1 },
              { duration: 0.05, delay: i * 0.02 }
            )
          })
          
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  elements.forEach(el => observer.observe(el))
}

// Staggered list animation
export function animateListOnScroll(container, itemSelector) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(itemSelector)
          
          items.forEach((item, i) => {
            animate(
              item,
              { opacity: 1, y: 0 },
              {
                initial: { opacity: 0, y: 20 },
                duration: 0.6,
                delay: i * 0.1
              }
            )
          })
          
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  observer.observe(container)
}
