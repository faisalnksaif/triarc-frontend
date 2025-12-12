import { defineStore } from 'pinia'
import { ref } from 'vue'
import exterior1 from '@/assets/images/EXTERIOR VIEW 1.jpg'
import exterior2 from '@/assets/images/EXTERIOR VIEW 2.jpg'
import exterior3 from '@/assets/images/EXTERIOR VIEW 3.jpg'
import exteriorOption from '@/assets/images/EXTERIOR VIEW OPTION 2-3.jpg'
import frontView from '@/assets/images/FRONT VIEW.jpg'
import scene2 from '@/assets/images/Scene 2.png'

export const useProjectsStore = defineStore('projects', () => {
  const finishedProjects = ref([
    {
      id: 1,
      title: '',
      category: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    },
    {
      id: 2,
      title: '',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    },
    {
      id: 3,
      title: '',
      category: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    },
    {
      id: 4,
      title: '',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
    },
  ])

  const ongoingProjects = ref([
    {
      id: 5,
      title: '',
      category: 'Residential',
      image: exterior1,
    },
    {
      id: 6,
      title: '',
      category: 'Residential',
      image: exterior2,
    },
    {
      id: 7,
      title: '',
      category: 'Residential',
      image: exterior3,
    },
    {
      id: 8,
      title: '',
      category: 'Residential',
      image: exteriorOption,
    },
    {
      id: 9,
      title: '',
      category: 'Residential',
      image: frontView,
    },
    {
      id: 10,
      title: '',
      category: 'Residential',
      image: scene2,
    },
  ])

  const upcomingProjects = ref([
    {
      id: 8,
      title: '',
      category: 'HOSPITALITY',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    },
    {
      id: 9,
      title: '',
      category: 'HEALTHCARE',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    },
    {
      id: 10,
      title: '',
      category: 'INFRASTRUCTURE',
      image: 'https://images.unsplash.com/photo-1461078809327-72b0fb4f2916?w=800&q=80',
    },
  ])

  return {
    finishedProjects,
    ongoingProjects,
    upcomingProjects,
  }
})
