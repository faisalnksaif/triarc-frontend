<template>
  <section class="hero-slider">
    <div
      v-for="(slide, index) in slides"
      :key="slide.id"
      class="hero-slide"
      :class="{ active: index === currentSlide }"
      :style="{ backgroundImage: `url(${slide.image})` }"
    >
      <div class="hero-overlay"></div>
      <v-container class="hero-content">
        <v-row align="center" justify="center">
          <v-col cols="12" class="text-center">
            <transition name="slide-fade" mode="out-in">
              <div v-if="index === currentSlide" class="hero-text">
                <h1 class="hero-title">
                  {{ slide.title }}
                  <span class="hero-subtitle">{{ slide.subtitle }}</span>
                </h1>
                <p class="hero-description">{{ slide.description }}</p>
                <v-btn
                  size="large"
                  color="primary"
                  class="mt-8 hero-cta"
                  elevation="0"
                >
                  DISCOVER MORE
                </v-btn>
              </div>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Navigation Arrows -->
    <v-btn
      icon
      variant="text"
      class="hero-nav hero-nav--prev"
      @click="prevSlide"
    >
      <v-icon size="32">mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn
      icon
      variant="text"
      class="hero-nav hero-nav--next"
      @click="nextSlide"
    >
      <v-icon size="32">mdi-chevron-right</v-icon>
    </v-btn>

    <!-- Pagination Dots -->
    <div class="hero-pagination">
      <button
        v-for="(slide, index) in slides"
        :key="`dot-${slide.id}`"
        class="hero-dot"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useHeroStore } from '@/stores/heroStore'
import { storeToRefs } from 'pinia'

const heroStore = useHeroStore()
const { slides, currentSlide } = storeToRefs(heroStore)
const { nextSlide, prevSlide, goToSlide } = heroStore

let interval

onMounted(() => {
  // Auto-play slider every 5 seconds
  interval = setInterval(() => {
    nextSlide()
  }, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style scoped lang="scss">
.hero-slider {
  position: relative;
  height: 100vh;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 85vh;
  }
  
  @media (max-width: 600px) {
    height: 60vh;
  }
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  
  &.active {
    opacity: 1;
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.hero-content {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 1;
}

.hero-text {
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  font-size: 4rem;
  font-weight: 300;
  letter-spacing: 4px;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }
}

.hero-subtitle {
  display: block;
  color: #aa8453;
}

.hero-description {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.6;
  }
}

.hero-cta {
  padding: 1.5rem 3rem !important;
  font-size: 0.9rem;
  letter-spacing: 2px;
  font-weight: 600;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  line-height: 1;
  
  @media (max-width: 600px) {
    padding: 1rem 2rem !important;
    font-size: 0.8rem;
  }
}

.hero-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  color: white;
  
  &--prev {
    left: 2rem;
  }
  
  &--next {
    right: 2rem;
  }
  
  &:hover {
    background-color: rgba(170, 132, 83, 0.2);
  }
}

.hero-pagination {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 10;
}

.hero-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active,
  &:hover {
    background: #aa8453;
    border-color: #aa8453;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
