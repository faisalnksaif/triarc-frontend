import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useServicesStore = defineStore('services', () => {
  const services = ref([
    {
      id: 1,
      title: 'ARCHITECTURE',
      description: 'Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.',
      number: '01',
      icon: 'mdi-office-building',
    },
    {
      id: 2,
      title: 'INTERIOR DESIGN',
      description: 'Interior bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.',
      number: '02',
      icon: 'mdi-sofa',
    },
    {
      id: 3,
      title: 'URBAN DESIGN',
      description: 'Urban bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.',
      number: '03',
      icon: 'mdi-city',
    },
  ])

  return {
    services,
  }
})
