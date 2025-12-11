<template>
  <section id="about" class="about-section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="about-content">
            <h2 class="about-title">
              {{ aboutData.title }} <span class="about-subtitle">{{ aboutData.subtitle }}</span>
            </h2>
            <div class="about-text">
              <p v-for="(paragraph, index) in aboutData.paragraphs" :key="index" class="about-paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="about-image-wrapper">
            <v-img
              :src="aboutData.image"
              :alt="aboutData.imageCaption"
              cover
              class="about-image"
            />
            <div class="about-image-caption">
              {{ aboutData.imageCaption }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { useAboutStore } from '@/stores/aboutStore'
import { storeToRefs } from 'pinia'

const aboutStore = useAboutStore()
const { aboutData } = storeToRefs(aboutStore)
</script>

<style scoped lang="scss">
.about-section {
  padding: 8rem 0;
  background-color: #272727;
  
  @media (max-width: 960px) {
    padding: 5rem 0;
  }
}

.about-content {
  padding-right: 3rem;
  animation: slideInFromLeft 0.8s ease-out;
  
  @media (max-width: 768px) {
    animation: mobileFloatUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }
  
  @media (max-width: 960px) {
    padding-right: 0;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }
}

.about-title {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 3px;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
  
  @media (max-width: 960px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
}

.about-subtitle {
  display: inline;
  color: #aa8453;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 600px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
}

.about-paragraph {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
  animation: fadeInUp 0.8s ease-out 0.3s both;
  
  @media (max-width: 600px) {
    font-size: 1rem;
    line-height: 1.6;
  }
}

.about-image-wrapper {
  position: relative;
  overflow: hidden;
  animation: slideInFromRight 0.8s ease-out;
  
  @media (max-width: 768px) {
    animation: mobileGhostPulse 1.2s ease-out !important;
  }
  
  &:hover {
    .about-image {
      transform: scale(1.08);
    }
  }
}

.about-image {
  width: 100%;
  height: 500px;
  transition: transform 0.6s ease;
  
  @media (max-width: 960px) {
    height: 400px;
  }
}

.about-image-caption {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  letter-spacing: 2px;
  font-weight: 500;
  
  @media (max-width: 600px) {
    bottom: 1rem;
    right: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
  }
}
</style>
