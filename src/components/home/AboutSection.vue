<template>
  <section id="about" class="about-section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="about-content">
            <h2 class="about-title">
              {{ aboutData.title }}
              <span class="about-subtitle">
                <template v-if="aboutData.subtitleIsImage">
                  <img :src="aboutData.subtitle" alt="Triarc logo" :width="aboutData.subtitleWidth || 100" class="about-subtitle-logo" />
                </template>
                <template v-else>
                  {{ aboutData.subtitle }}
                </template>
              </span>
            </h2>
            <div class="about-text">
              <p v-for="(paragraph, index) in aboutData.paragraphs" :key="index" class="about-paragraph">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="about-hero-callout">
            <div class="hero-icon">
              <v-icon size="56" color="primary">mdi-hammer-wrench</v-icon>
            </div>
            <h3 class="hero-headline">Excellence in Execution. Built to Last.</h3>
            <p class="hero-body">
              We excel in transforming architectural visions into built reality. With meticulous attention to quality, transparent project management, and deep construction expertise—every project is delivered with precision, predictability, and enduring value.
            </p>
            <div class="hero-tags">
              <!-- <span class="hero-tag">
                <v-icon size="18" color="primary">mdi-shield-check</v-icon>
                Construction Excellence
              </span>
              <span class="hero-tag">
                <v-icon size="18" color="primary">mdi-calendar-check</v-icon>
                On-Time Delivery
              </span> -->
              <!-- <span class="hero-tag">
                <v-icon size="18" color="primary">mdi-handshake</v-icon>
                Architect Partnership
              </span> -->
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
    padding: 3rem 0;
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

.about-subtitle-logo {
  vertical-align: middle;
  margin-left: -10px;
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

.about-hero-callout {
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  animation: slideInFromRight 0.8s ease-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (max-width: 768px) {
    animation: mobileGhostPulse 1.2s ease-out !important;
    padding: 1.5rem;
  }
}

.hero-icon {
  width: 68px;
  height: 68px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: rgba(170, 132, 83, 0.14);
  border: 1px solid rgba(170, 132, 83, 0.45);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
}

.hero-headline {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ffffff;
  line-height: 1.4;
}

.hero-body {
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  font-size: 1rem;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.9rem;
  background: rgba(170, 132, 83, 0.12);
  border: 1px solid rgba(170, 132, 83, 0.35);
  border-radius: 999px;
  color: #f5e9d8;
  font-size: 0.9rem;
  letter-spacing: 0.2px;
}
</style>
