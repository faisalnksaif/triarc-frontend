import { defineStore } from 'pinia'
import { ref } from 'vue'
import exterior1 from '@/assets/images/EXTERIOR VIEW 1.jpg'
import exterior2 from '@/assets/images/EXTERIOR VIEW 2.jpg'
import exterior3 from '@/assets/images/EXTERIOR VIEW 3.jpg'
import surya from '@/assets/images/SURYA.jpg'

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
      image: surya,
    },
    {
      id: 3,
      title: 'Construction Mastery',
      subtitle: 'On Time',
      description: 'Delivering world-class infrastructure through disciplined execution, rigorous quality control, and transparent project management.',
      image: exterior3,
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
