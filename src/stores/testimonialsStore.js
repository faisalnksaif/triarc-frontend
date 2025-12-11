import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestimonialsStore = defineStore('testimonials', () => {
  const testimonials = ref([
    {
      id: 1,
      text: 'Urban dapibus augue metus the nec feugiat erat hendrerit nec. Duis ve ante the lemon sanleo nec feugiat erat hendrerit necuis ve ante.',
      author: 'Jessica Smith',
      role: 'Alsa Manager',
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      id: 2,
      text: 'Architecture viverra tellus nec massa dictum the euismoe. Curabitur viverra the posuere aukue velit. Duis ve ante the lemon sanleo nec feugiat.',
      author: 'Michael Johnson',
      role: 'Project Director',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 3,
      text: 'Excellent work and attention to detail. The team delivered beyond our expectations and created something truly remarkable for our project.',
      author: 'Sarah Williams',
      role: 'CEO, BuildCorp',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  ])

  return {
    testimonials,
  }
})
