import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useServicesStore = defineStore('services', () => {
  const services = ref([
    {
      id: 1,
      title: 'COMMERCIAL PROJECTS',
      description: 'Execution of offices, retail spaces, mixed-use developments, and business parks with high-efficiency delivery and quality finishes.',
      number: '01',
      icon: 'mdi-briefcase',
    },
    {
      id: 2,
      title: 'INSTITUTIONAL PROJECTS',
      description: 'Delivery of schools, hospitals, government facilities, and public infrastructure with rigorous compliance and safety standards.',
      number: '02',
      icon: 'mdi-domain',
    },
    {
      id: 3,
      title: 'RESIDENTIAL PROJECTS',
      description: 'Construction of villas, apartments, gated communities, and premium residences with precision craftsmanship and on-time delivery.',
      number: '03',
      icon: 'mdi-home-city',
    }
  ])

  return {
    services,
  }
})
