<template>
  <v-card
    class="project-card mobile-slide-in"
    elevation="0"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="project-image-wrapper">
      <v-img
        :src="project.image"
        :alt="project.title"
        height="400"
        cover
        class="project-image"
        :class="{ 'project-image--hover': hover }"
      />
      <div class="project-overlay" :class="{ 'project-overlay--hover': hover }">
        <div class="project-info">
          <span class="project-category">{{ project.category }}</span>
          <h3 class="project-title">{{ project.title }}</h3>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const hover = ref(false)
</script>

<style scoped lang="scss">
.project-card {
  background: transparent;
  cursor: pointer;
  overflow: hidden;
  animation: scaleIn 0.6s ease-out;
  border: 1px solid rgba(170, 132, 83, 0.2);
  border-radius: 4px;
  transition: all 0.4s ease;
  
  @media (max-width: 768px) {
    animation: mobileCardSlide 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }
  
  &:hover {
    transform: translateY(-8px);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border-color: rgba(170, 132, 83, 0.6);
    box-shadow: 0 15px 35px rgba(170, 132, 83, 0.1);
  }
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
}

.project-image {
  transition: transform 0.6s ease;
  
  &--hover {
    transform: scale(1.1);
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
  
  &--hover {
    opacity: 1;
  }
}

.project-info {
  width: 100%;
}

.project-category {
  font-size: 0.875rem;
  color: #aa8453;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 300;
  color: #ffffff;
  letter-spacing: 1px;
  margin: 0;
}
</style>
