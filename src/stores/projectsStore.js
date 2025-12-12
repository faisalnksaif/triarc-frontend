import { defineStore } from 'pinia'
import { ref } from 'vue'

import exterior1 from '@/assets/images/projects/1.jpg'
import exterior2 from '@/assets/images/projects/2.jpg'
import exterior3 from '@/assets/images/projects/3.jpg'
import exterior4 from '@/assets/images/projects/4.jpg'
import exterior5 from '@/assets/images/projects/5.jpg'

export const useProjectsStore = defineStore('projects', () => {

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
      image: exterior4,
    },
    {
      id: 9,
      title: '',
      category: 'Residential',
      image: exterior5,
    },
  ])

  return {
    ongoingProjects,
  }
})
