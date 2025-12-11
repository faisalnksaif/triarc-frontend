import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const finishedProjects = ref([
    {
      id: 1,
      title: 'LUXURY VILLA',
      category: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    },
    {
      id: 2,
      title: 'GRAND HOTEL',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    },
    {
      id: 3,
      title: 'MODERN RESIDENCE',
      category: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    },
    {
      id: 4,
      title: 'BUSINESS CENTER',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80',
    },
  ])

  const ongoingProjects = ref([
    {
      id: 5,
      title: 'TECH PARK',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    },
    {
      id: 6,
      title: 'APARTMENT COMPLEX',
      category: 'RESIDENTIAL',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    },
    {
      id: 7,
      title: 'SHOPPING MALL',
      category: 'COMMERCIAL',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    },
  ])

  const upcomingProjects = ref([
    {
      id: 8,
      title: 'ECO RESORT',
      category: 'HOSPITALITY',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80',
    },
    {
      id: 9,
      title: 'MEDICAL CENTER',
      category: 'HEALTHCARE',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    },
    {
      id: 10,
      title: 'SPORTS COMPLEX',
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
