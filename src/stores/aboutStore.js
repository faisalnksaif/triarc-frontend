import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAboutStore = defineStore('about', () => {
  const aboutData = ref({
    title: 'ABOUT',
    subtitle: 'TRIARC',
    paragraphs: [
      'Triarc Infrastructure is a leading architecture and construction firm based in Vengara, specializing in innovative design solutions that blend functionality with aesthetic excellence.',
      'With years of experience in residential, commercial, and urban planning projects, we transform visions into reality through meticulous attention to detail and sustainable design practices.',
      'Our team of skilled architects and planners work collaboratively to deliver projects that exceed expectations, ensuring quality craftsmanship and timely completion.',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    imageCaption: 'VENGARA OFFICE',
  })

  return {
    aboutData,
  }
})
