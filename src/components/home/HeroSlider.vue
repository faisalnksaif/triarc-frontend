<template>
  <section class="hero-slider">
    <!-- Futuristic Grid Background -->
    <div class="grid-overlay"></div>

    <div v-for="(slide, index) in slides" :key="slide.id" class="hero-slide" :class="{ active: index === currentSlide }"
      :style="{ backgroundImage: `url(${slide.image})` }">
      <!-- Enhanced Overlay with Strong Gradient -->
      <div class="hero-overlay"></div>
      <div class="hero-glow-effect"></div>

      <div class="hero-content">
        <transition name="slide-fade" mode="out-in">
          <div v-if="index === currentSlide" class="hero-text">
            <!-- Cyber Line Top -->
            <!-- <div class="cyber-line-top"></div> -->

            <h1 class="hero-title">
              {{ slide.title }}
              <span class="hero-subtitle">{{ slide.subtitle }}</span>
            </h1>

            <p class="hero-description">{{ slide.description }}</p>

            <!-- Cyber Line Bottom -->
            <!-- <div class="cyber-line-bottom"></div> -->
          </div>
        </transition>
      </div>
    </div>

    <!-- Navigation Arrows with Glow -->
    <v-btn icon variant="text" class="hero-nav hero-nav--prev" @click="prevSlide">
      <v-icon size="32">mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn icon variant="text" class="hero-nav hero-nav--next" @click="nextSlide">
      <v-icon size="32">mdi-chevron-right</v-icon>
    </v-btn>

    <!-- Enhanced Pagination Dots -->
    <div class="hero-pagination">
      <button v-for="(slide, index) in slides" :key="`dot-${slide.id}`" class="hero-dot"
        :class="{ active: index === currentSlide }" @click="goToSlide(index)"></button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useHeroStore } from '@/stores/heroStore'
import { storeToRefs } from 'pinia'

const heroStore = useHeroStore()
const { slides, currentSlide } = storeToRefs(heroStore)
const { nextSlide, prevSlide, goToSlide } = heroStore

const emit = defineEmits(['images-loaded'])
const imagesLoadedCount = ref(0)

let interval

const checkImagesLoaded = () => {
  imagesLoadedCount.value++
  if (imagesLoadedCount.value === slides.value.length) {
    emit('images-loaded')
  }
}

onMounted(() => {
  // Track image loads
  slides.value.forEach((slide) => {
    const img = new Image()
    img.onload = checkImagesLoaded
    img.onerror = checkImagesLoaded // Also count errors to avoid infinite wait
    img.src = slide.image
  })

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
// Keyframe animations
@keyframes gridFloat {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(20px, -20px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes glowPulse {

  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 0.6;
  }
}

@keyframes lineGlow {

  0%,
  100% {
    box-shadow: 0 0 5px rgba(170, 132, 83, 0.4), 0 0 10px rgba(170, 132, 83, 0.2);
  }

  50% {
    box-shadow: 0 0 15px rgba(170, 132, 83, 0.6), 0 0 25px rgba(170, 132, 83, 0.4);
  }
}

@keyframes scanlineMove {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100vh);
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

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-slider {
  position: relative;
  height: 90vh;
  overflow: hidden;
  background-color: #0a0e27;

  @media (max-width: 768px) {
    height: 90vh;
  }

  @media (max-width: 600px) {
    height: 90vh;
  }
}

// Grid Overlay
.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(0deg,
      rgba(170, 132, 83, 0.03) 0px,
      rgba(170, 132, 83, 0.03) 1px,
      transparent 1px,
      transparent 60px),
    repeating-linear-gradient(90deg,
      rgba(170, 132, 83, 0.03) 0px,
      rgba(170, 132, 83, 0.03) 1px,
      transparent 1px,
      transparent 60px);
  z-index: 0;
  animation: gridFloat 30s linear infinite;
  pointer-events: none;
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

// Enhanced Overlay with Strong Dark Gradient
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg,
      rgba(0, 0, 0, 0.92),
      rgba(170, 132, 83, 0.05) 30%,
      rgba(0, 0, 0, 0.90));
  z-index: 1;
}

// Glow Effect
.hero-glow-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  // background: radial-gradient(circle,
  //     rgba(170, 132, 83, 0.15),
  //     rgba(170, 132, 83, 0.05),
  //     transparent);
  z-index: 2;
  animation: glowPulse 4s ease-in-out infinite;
  pointer-events: none;
}

// Cyber Lines
.cyber-line-top,
.cyber-line-bottom {
  width: 200px;
  height: 2px;
  margin: 0 0 1.5rem 0;
  background: linear-gradient(90deg,
      transparent,
      #aa8453,
      transparent);
  animation: lineGlow 2s infinite;
  box-shadow: 0 0 10px rgba(170, 132, 83, 0.6), 0 0 20px rgba(170, 132, 83, 0.4);
}

.cyber-line-bottom {
  margin: 1.5rem 0 0 0;
}

.hero-content {
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  z-index: 3;
  max-width: 500px;

  @media (max-width: 1024px) {
    bottom: 3rem;
    right: 3rem;
    left: auto;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    bottom: 2rem;
    right: auto;
    left: 2rem;
    max-width: 90%;
  }

  @media (max-width: 600px) {
    bottom: 1.5rem;
    right: auto;
    left: 1.5rem;
    max-width: calc(100% - 3rem);
  }
}

.hero-text {
  animation: fadeInUp 1s ease-out;
  backdrop-filter: blur(2px);
  padding: 2rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  text-align: left;
  // box-shadow: -10px 0 30px rgba(0, 0, 0, 0.8);
}

.hero-title {
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-transform: capitalize;

  // text-align: right;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    text-align: right;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    text-align: left;
  }

  @media (max-width: 600px) {
    font-size: 1.25rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    text-align: left;
  }
}

.hero-subtitle {
  font-family: 'Poppins', sans-serif;
  display: block;
  text-transform: capitalize;
  color: rgba(170, 132, 83, 0.6);
  font-weight: 500;
}

.hero-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  // max-width: 400px;
  margin-left: auto;
  line-height: 1.6;
  text-shadow:
    0 0 8px rgba(170, 132, 83, 0.4),
    2px 2px 4px rgba(0, 0, 0, 0.8);
  // text-align: right;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    max-width: 350px;
    margin-left: auto;
    text-align: right;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 100%;
    margin-left: 0;
    text-align: left;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    line-height: 1.5;
    text-align: left;
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
  transition: all 0.3s ease;

  &--prev {
    left: 2rem;

    @media (max-width: 600px) {
      left: 0.5rem;
    }
  }

  &--next {
    right: 2rem;

    @media (max-width: 600px) {
      right: 0.5rem;
    }
  }

  &:hover {
    background-color: rgba(170, 132, 83, 0.3);
    box-shadow: 0 0 15px rgba(170, 132, 83, 0.5);
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
  border: 2px solid rgba(170, 132, 83, 0.6);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(170, 132, 83, 0.3);

  &.active,
  &:hover {
    background: #aa8453;
    border-color: #aa8453;
    box-shadow: 0 0 12px rgba(170, 132, 83, 0.8);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.8s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(150px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}
</style>
