<template>
  <div class="home-page">
    <!-- Loading Overlay -->
    <Transition name="loader-fade">
      <div v-if="showLoading" class="loading-overlay" :class="{ 'loading-overlay--animating': animatingLogo }">
        <div class="loading-background"></div>
        <div class="loading-logo" :style="logoStyle">
          <img src="@/assets/images/logo.png" alt="Triarc Loading" class="loading-logo-img" />
          <v-progress-circular v-if="showLoading && !animatingLogo" indeterminate color="#aa8453" class="loading-spinner" />
        </div>
      </div>
    </Transition>

    <AppHeader />

    <main>
      <!-- Hero Section -->
      <HeroSlider @images-loaded="onHeroImagesLoaded" />

      <!-- About Section -->
      <AboutSection />

      <!-- Stats Section -->
      <StatsSection />

      <!-- Why Choose Us Section -->
      <WhyChooseUs />

      <!-- Projects Section -->
      <ProjectsSection />

           <!-- Active Areas Map -->
      <ActiveAreasMap />

      <!-- Services Section -->
      <section id="services" class="section services-section">
        <v-container>
          <h2 v-motion:fadeInDown class="section-title text-center">OUR SERVICES</h2>
          <v-row>
            <v-col v-for="(service, index) in services" :key="service.id" cols="12" md="4">
              <div v-motion:cyberFade="{ delay: index * 100 }">
                <ServiceCard :service="service" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- News Section -->
      <!-- <section id="news" class="section news-section">
        <v-container>
          <h2 class="section-title text-center">CURRENT NEWS</h2>
          <v-row>
            <v-col
              v-for="article in articles"
              :key="article.id"
              cols="12"
              sm="6"
              md="3"
            >
              <NewsCard :article="article" />
            </v-col>
          </v-row>
        </v-container>
      </section> -->

 

      <!-- Company Quote Section -->
      <CompanyQuote />



      <!-- Testimonials Section -->
      <section id="testimonials" class="section testimonials-section">
        <v-container>
          <h2 v-motion:fadeInUp class="section-title text-center">WHAT CLIENTS SAY?</h2>
          <v-row justify="center">
            <v-col v-motion:scaleIn cols="12" md="10" lg="8">
              <v-carousel height="auto" hide-delimiter-background show-arrows="hover" class="testimonials-carousel"
                cycle interval="5000">
                <v-carousel-item v-for="testimonial in testimonials" :key="testimonial.id">
                  <TestimonialCard :testimonial="testimonial" />
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Call to Action Section -->
      <CallToActionSection />

      <!-- Contact Section -->
      <section id="contact" class="section contact-section">
        <v-container>
          <v-row justify="center">
            <v-col v-motion:slideInUp cols="12" md="8" lg="6">
              <h2 class="section-title text-center">GET IN TOUCH</h2>
              <v-card class="contact-card" elevation="0">
                <v-card-text>
                  <v-form @submit.prevent="sendWhatsApp">
                    <v-row>
                      <v-col cols="12">
                        <v-textarea v-model="message" label="Your Message" variant="outlined" color="primary"
                          rows="6" />
                      </v-col>
                      <v-col cols="12">
                        <v-btn type="submit" color="primary" size="large" block class="contact-submit"
                          prepend-icon="mdi-whatsapp">
                          SEND VIA WHATSAPP
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </main>

    <AppFooter />

    <!-- Floating WhatsApp Button -->
    <v-btn icon size="x-large" color="primary" class="whatsapp-float" href="https://wa.me/919995884477" target="_blank"
      elevation="8">
      <v-icon size="32">mdi-whatsapp</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref, onMounted, onBeforeUnmount, computed, defineAsyncComponent } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSlider from '@/components/home/HeroSlider.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'

// Lazy load below-the-fold components
const WhyChooseUs = defineAsyncComponent(() => import('@/components/home/WhyChooseUs.vue'))
const ProjectsSection = defineAsyncComponent(() => import('@/components/home/ProjectsSection.vue'))
const ActiveAreasMap = defineAsyncComponent(() => import('@/components/home/ActiveAreasMap.vue'))
const ServiceCard = defineAsyncComponent(() => import('@/components/home/ServiceCard.vue'))
const CompanyQuote = defineAsyncComponent(() => import('@/components/home/CompanyQuote.vue'))
const TestimonialCard = defineAsyncComponent(() => import('@/components/home/TestimonialCard.vue'))
const CallToActionSection = defineAsyncComponent(() => import('@/components/home/CallToActionSection.vue'))
import { useServicesStore } from '@/stores/servicesStore'
import { useNewsStore } from '@/stores/newsStore'
import { useTestimonialsStore } from '@/stores/testimonialsStore'

const servicesStore = useServicesStore()
const newsStore = useNewsStore()
const testimonialsStore = useTestimonialsStore()

const { services } = storeToRefs(servicesStore)
const { articles } = storeToRefs(newsStore)
const { testimonials } = storeToRefs(testimonialsStore)

const message = ref('')
const showLoading = ref(true)
const animatingLogo = ref(false)
const imagesLoaded = ref(false)

const logoStyle = computed(() => ({
  transform: animatingLogo.value ? 'translate(calc(-50vw + 56px), calc(-50vh + 40px)) scale(0.4)' : 'translate(0, 0) scale(1)',
  opacity: animatingLogo.value ? 0 : 1,
}))

const onHeroImagesLoaded = () => {
  imagesLoaded.value = true
  setTimeout(() => {
    animatingLogo.value = true
  }, 300)
  setTimeout(() => {
    showLoading.value = false
  }, 1200)
}

onMounted(() => {
  const maxWaitTimeout = setTimeout(() => {
    if (showLoading.value) {
      showLoading.value = false
    }
  }, 5000)

  onBeforeUnmount(() => clearTimeout(maxWaitTimeout))
})

const sendWhatsApp = () => {
  const phoneNumber = '919995884477' // WhatsApp number (with country code, no + or spaces)
  const text = encodeURIComponent(message.value || 'Hello, I would like to inquire about your services.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`
  window.open(whatsappUrl, '_blank')
}
</script>

<style scoped lang="scss">
.home-page {
  background-color: #272727;
}

.section {
  padding: 6rem 0;

  @media (max-width: 960px) {
    padding: 3rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
}

.services-section {
  background-color: #1f1f1f;
  position: relative;
  padding: 4rem 0;

  @media (max-width: 960px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(170, 132, 83, 0.4), transparent);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(170, 132, 83, 0.4), transparent);
  }
}

.news-section {
  background-color: #272727;
  position: relative;
  padding: 4rem 0;

  @media (max-width: 960px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(170, 132, 83, 0.4), transparent);
  }
}

.contact-section {
  background-color: #1f1f1f;
  position: relative;
  padding: 4rem 0;

  @media (max-width: 960px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(170, 132, 83, 0.4), transparent);
  }
}

.testimonials-section {
  background-color: #2f2f2f;
  padding: 5rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(170, 132, 83, 0.4), transparent);
  }

  @media (max-width: 960px) {
    padding: 3rem 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 0;
  }
}

.testimonials-carousel {
  background: transparent;

  :deep(.v-carousel__controls) {
    background: transparent;
  }

  :deep(.v-btn) {
    color: #aa8453;
  }

  :deep(.v-carousel__controls__item) {
    color: rgba(255, 255, 255, 0.3);
  }

  :deep(.v-carousel__controls__item--active) {
    color: #aa8453;
  }
}

.projects-carousel {
  background: transparent;

  :deep(.v-carousel__controls) {
    background: transparent;
  }

  :deep(.v-btn) {
    color: #aa8453;
  }

  :deep(.v-carousel__controls__item) {
    color: rgba(255, 255, 255, 0.3);
  }

  :deep(.v-carousel__controls__item--active) {
    color: #aa8453;
  }
}

.carousel-project-wrapper {
  padding: 1rem;
}

.contact-card {
  background-color: #2f2f2f;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
}

.contact-submit {
  letter-spacing: 2px;
  font-weight: 600;
  padding: 1.5rem !important;
}

:deep(.v-field) {
  border-radius: 0;
}

.loader-fade-enter-active {
  transition: opacity 0.3s ease;
}

.loader-fade-leave-active {
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.loader-fade-enter-from {
  opacity: 0;
}

.loader-fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;

  &.loading-overlay--animating {
    pointer-events: none;
  }
}

.loading-background {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 70%);
  animation: backgroundPulse 2s ease-in-out infinite;
}

@keyframes backgroundPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

.loading-logo {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -75px;
  margin-top: -75px;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, opacity;
  
  &::before {
    content: '';
    position: absolute;
    inset: -30px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(170, 132, 83, 0.15) 0%, transparent 70%);
    animation: logoGlow 2s ease-in-out infinite;
  }
}

@keyframes logoGlow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

.loading-logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(1.1) drop-shadow(0 0 20px rgba(170, 132, 83, 0.3));
  animation: logoFloat 3s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.loading-spinner {
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

:deep(.v-field__outline) {
  --v-field-border-opacity: 0.2;
}

:deep(.v-label) {
  color: rgba(255, 255, 255, 0.6);
}

.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 24px rgba(170, 132, 83, 0.5) !important;
  }

  @media (max-width: 600px) {
    bottom: 20px;
    right: 20px;
  }
}
</style>
