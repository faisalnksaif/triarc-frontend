import { animate } from 'motion'

const animationSequences = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
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

export default {
  mounted(el, binding) {
    const animationType = binding.arg || 'fadeInUp'
    const delay = binding.modifiers.delay ? parseFloat(binding.value) * 100 : 0
    const sequence = animationSequences[animationType] || animationSequences.fadeInUp

    // Set initial state
    Object.assign(el.style, {
      opacity: '0',
      transform: getTransformFromInitial(sequence.initial)
    })

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              animate(el, sequence.animate, {
                ...sequence.transition,
                delay: delay / 1000 // Convert ms to seconds
              })
            }, delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    )

    observer.observe(el)
  }
}

function getTransformFromInitial(initial) {
  const transforms = []
  
  if (initial.x) transforms.push(`translateX(${initial.x}px)`)
  if (initial.y) transforms.push(`translateY(${initial.y}px)`)
  if (initial.scale) transforms.push(`scale(${initial.scale})`)
  
  return transforms.join(' ')
}
