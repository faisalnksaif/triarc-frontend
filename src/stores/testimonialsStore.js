import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTestimonialsStore = defineStore('testimonials', () => {
  const testimonials = ref([
    {
      id: 1,
      text: 'triarc Infrastructure delivered exceptional quality on our commercial project. Their attention to detail and commitment to timelines was outstanding. The team transformed our architect\'s vision into reality with precision and professionalism.',
      author: 'Rajesh Kumar',
      role: 'Director, Kumar Enterprises',
      avatar: null,
      initials: 'RK',
    },
    {
      id: 2,
      text: 'We entrusted triarc with our institutional building project in Bangalore, and they exceeded all expectations. Their execution expertise and quality craftsmanship are truly world-class. Highly recommended for any construction project.',
      author: 'Priya Menon',
      role: 'Principal, Vidya Academy',
      avatar: null,
      initials: 'PM',
    },
    {
      id: 3,
      text: 'Working with triarc was a seamless experience. From the initial planning to final handover, their team showed remarkable professionalism. The residential complex they built for us stands as a testament to their quality work.',
      author: 'Arun Sharma',
      role: 'Managing Partner, Sharma Constructions',
      avatar: null,
      initials: 'AS',
    },
    {
      id: 4,
      text: 'triarc\'s execution of our hospitality project in Coimbatore was flawless. They maintained the highest standards throughout and delivered on time. Their expertise in transforming designs into reality is impressive.',
      author: 'Lakshmi Iyer',
      role: 'Owner, Heritage Hotels',
      avatar: null,
      initials: 'LI',
    },
  ])

  return {
    testimonials,
  }
})
