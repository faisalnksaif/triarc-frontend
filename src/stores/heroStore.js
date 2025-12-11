import { defineStore } from 'pinia'
import { ref } from 'vue'
import exterior1 from '@/assets/images/EXTERIOR VIEW 1.jpg'
import exterior2 from '@/assets/images/EXTERIOR VIEW 2.jpg'
import exterior3 from '@/assets/images/EXTERIOR VIEW 3.jpg'

export const useHeroStore = defineStore('hero', () => {
  const slides = ref([
    {
      id: 1,
      title: 'BUILDING EXCELLENCE',
      subtitle: 'CRAFTING FUTURES',
      description: 'Where architectural vision meets construction precision. Creating landmarks that define excellence in every detail.',
      image: exterior1,
    },
    {
      id: 2,
      title: 'INNOVATIVE STRUCTURES',
      subtitle: 'TIMELESS DESIGN',
      description: 'Transforming spaces with cutting-edge engineering and elegant architectural solutions that stand the test of time.',
      image: exterior2,
    },
    {
      id: 3,
      title: 'PRECISION CONSTRUCTION',
      subtitle: 'EXCEPTIONAL QUALITY',
      description: 'Delivering world-class infrastructure with uncompromising standards and meticulous attention to every project milestone.',
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
