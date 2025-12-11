import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeroStore = defineStore('hero', () => {
  const slides = ref([
    {
      id: 1,
      title: 'INNOVATE DESIGN',
      subtitle: 'IN TORONTO',
      description: 'Architecture viverra tellus nec massa dictum the euismoe. Curabitur viverra the posuere aukue velit.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80',
    },
    {
      id: 2,
      title: 'INNOVATE DESIGN',
      subtitle: 'IN CANADA',
      description: 'Architecture viverra tellus nec massa dictum the euismoe. Curabitur viverra the posuere aukue velit.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80',
    },
    {
      id: 3,
      title: 'INNOVATE DESIGN',
      subtitle: 'IN TORONTO',
      description: 'Architecture viverra tellus nec massa dictum the euismoe. Curabitur viverra the posuere aukue velit.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
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
