import { defineStore } from 'pinia'
import { ref } from 'vue'
import exterior1 from '@/assets/images/projects/1.jpg'
import exterior2 from '@/assets/images/projects/2.jpg'
import exterior3 from '@/assets/images/projects/3.jpg'
import exterior4 from '@/assets/images/projects/4.jpg'
import exterior5 from '@/assets/images/projects/5.jpg'

export const useHeroStore = defineStore('hero', () => {
  const slides = ref([
    {
      id: 1,
      title: 'Excellence In Execution',
      subtitle: 'Building Visions',
      description: 'Transforming architect visions into built reality. Expert construction execution with precision and quality at every stage.',
      image: exterior1,
    },
    {
      id: 2,
      title: 'Flawless Construction',
      subtitle: 'Perfect Delivery',
      description: 'From blueprint to completion—we execute architectural designs with uncompromising craftsmanship and technical expertise.',
      image: exterior2,
    },
    {
      id: 3,
      title: 'Construction Mastery',
      subtitle: 'On Time',
      description: 'Delivering world-class infrastructure through disciplined execution, rigorous quality control, and transparent project management.',
      image: exterior3,
    },
     {
      id: 4,
      title: 'Innovative Design Build',
      subtitle: 'Quality Assured',
      description: 'Creative solutions combined with robust execution. We turn complex architectural challenges into seamless, durable structures.',
      image: exterior4,
    },
     {
      id: 5,
      title: 'Sustainable Infrastructure',
      subtitle: 'Built to Last',
      description: 'Constructing resilient projects with environmental responsibility and long-term durability. Excellence that stands the test of time.',
      image: exterior5,
    },
  ])

  const currentSlide = ref(0)

  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length
  }

  const prevSlide = () => {
    currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
  }

  const goToSlide = (index) => {
    currentSlide.value = index
  }

  return {
    slides,
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
  }
})
