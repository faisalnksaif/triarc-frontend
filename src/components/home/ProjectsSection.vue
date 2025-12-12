<template>
  <section id="projects" class="section projects-section">
    <div>
      <h2 v-motion:fadeInUp class="section-title text-center">OUR PROJECTS</h2>

      <div class="projects-subsection">
        <swiper
          :modules="modules"
          :slides-per-view="slidesPerView"
          :space-between="0"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :navigation="true"
          :pagination="{ clickable: true }"
          class="projects-swiper"
        >
          <swiper-slide v-for="project in ongoingProjects" :key="project.id">
            <ProjectCard :project="project" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { useDisplay } from 'vuetify'
import { useProjectsStore } from '@/stores/projectsStore'
import ProjectCard from '@/components/home/ProjectCard.vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const projectsStore = useProjectsStore()
const { ongoingProjects } = storeToRefs(projectsStore)
const { mdAndUp, smAndUp } = useDisplay()

const modules = [Autoplay, Navigation, Pagination]

const slidesPerView = computed(() => {
  if (mdAndUp.value) return 3
  if (smAndUp.value) return 2
  return 1
})
</script>

<style scoped lang="scss">
.projects-section {
  background-color: #272727;
  padding: 4rem 0 0 0;
  padding-bottom: 0 !important;

  @media (max-width: 960px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0;
  }
}

.projects-subsection {
  margin-bottom: 0 !important;
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;

  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }
}

.projects-swiper {
  width: 100%;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #aa8453;
  background: rgba(170, 132, 83, 0.15);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(170, 132, 83, 0.5);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(170, 132, 83, 0.25);
    box-shadow: 0 0 16px rgba(170, 132, 83, 0.3);
  }

  &::after {
    font-size: 20px;
  }
}

:deep(.swiper-pagination-bullet) {
  background: rgba(170, 132, 83, 0.5);
  transition: all 0.3s ease;

  &.swiper-pagination-bullet-active {
    background: #aa8453;
  }
}

.subsection-title {
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: #aa8453;
  text-align: center;
  margin-bottom: 2.5rem;
  position: relative;
  animation: fadeInDown 0.6s ease-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: #aa8453;
    animation: underlineExpand 0.8s ease-out 0.3s forwards;
    transform-origin: left;
    opacity: 0;
  }

  @media (max-width: 960px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
