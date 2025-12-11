import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNewsStore = defineStore('news', () => {
  const articles = ref([
    {
      id: 1,
      title: 'Postmodern Architecture',
      category: 'Urban',
      date: 'September 19, 2021',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=600&q=80',
      excerpt: 'Exploring the evolution of postmodern architectural design.',
    },
    {
      id: 2,
      title: 'Modern Architecture Buildings',
      category: 'Planning',
      date: 'September 12, 2021',
      image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=600&q=80',
      excerpt: 'Innovative approaches to modern building design.',
    },
    {
      id: 3,
      title: 'Modern Architectural Structures',
      category: 'Architecture',
      date: 'September 30, 2021',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80',
      excerpt: 'Contemporary structures defining our skylines.',
    },
    {
      id: 4,
      title: 'Modernism in Architecture',
      category: 'Interior',
      date: 'September 26, 2021',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
      excerpt: 'Understanding the principles of modernist design.',
    },
  ])

  return {
    articles,
  }
})
