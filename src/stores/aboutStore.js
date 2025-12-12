import { defineStore } from 'pinia'
import { ref } from 'vue'
import logo from '@/assets/images/logo.png'

export const useAboutStore = defineStore('about', () => {
  const aboutData = ref({
    title: `The triarc Story`,
    subtitle: '',
    subtitleIsImage: true,
    subtitleWidth: 100,
    paragraphs: [
      'Triarc Infrastructure is a leading construction execution company operating across Kerala, Karnataka, and Tamil Nadu. We specialize exclusively in transforming architects’ designs into high-quality built structures, ensuring every project is delivered with precision, reliability, and exceptional craftsmanship.',
      'Our capabilities span residential, commercial, industrial, and institutional developments. Working closely with architects and project owners, we transform approved drawings into structurally sound, aesthetically refined, and functionally efficient buildings. Our strength lies in managing complex site operations, coordinating multidisciplinary teams, and maintaining strict quality and safety standards across multiple states.',
      'With a skilled workforce and well-structured project management processes, we ensure seamless execution from foundation to finishing. Every project is handled with a commitment to uphold the architect’s vision while meeting stringent timelines, budget expectations, and long-term durability requirements.',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    imageCaption: 'SOUTH INDIA OPERATIONS',
  })

  return {
    aboutData,
  }
})
