<template>
  <div class="home-page">
    <AppHeader />

    <main>
      <!-- Hero Section -->
      <HeroSlider />

      <!-- About Section -->
      <AboutSection />

      <!-- Stats Section -->
      <StatsSection />

      <!-- Why Choose Us Section -->
      <WhyChooseUs />

      <!-- Projects Section -->
      <section id="projects" class="section projects-section">
        <div>
          <h2 v-motion:fadeInUp class="section-title text-center">OUR PROJECTS</h2>

          <div class="projects-subsection">
            <div class="projects-marquee" @mouseenter="marqueePaused = true" @mouseleave="marqueePaused = false">
              <div class="projects-track" :class="{ paused: marqueePaused }">
                <div v-for="(project, idx) in marqueeItems" :key="`marquee-${idx}-${project.id}`" class="projects-item">
                  <ProjectCard :project="project" />
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

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

 

      <!-- Video Promo Section -->
      <VideoPromo />



      <!-- Testimonials Section -->
      <section id="testimonials" class="section testimonials-section">
        <v-container>
          <h2 v-motion:fadeInUp class="section-title text-center">WHAT CLIENT'S SAY?</h2>
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
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSlider from '@/components/home/HeroSlider.vue'
import ProjectCard from '@/components/home/ProjectCard.vue'
import ServiceCard from '@/components/home/ServiceCard.vue'
import NewsCard from '@/components/home/NewsCard.vue'
import TestimonialCard from '@/components/home/TestimonialCard.vue'
import VideoPromo from '@/components/home/VideoPromo.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import StatsSection from '@/components/home/StatsSection.vue'
import WhyChooseUs from '@/components/home/WhyChooseUs.vue'
import CallToActionSection from '@/components/home/CallToActionSection.vue'
import ActiveAreasMap from '@/components/home/ActiveAreasMap.vue'
import { useProjectsStore } from '@/stores/projectsStore'
import { useServicesStore } from '@/stores/servicesStore'
import { useNewsStore } from '@/stores/newsStore'
import { useTestimonialsStore } from '@/stores/testimonialsStore'
import { ref, computed } from 'vue'

const projectsStore = useProjectsStore()
const servicesStore = useServicesStore()
const newsStore = useNewsStore()
const testimonialsStore = useTestimonialsStore()

const { finishedProjects, ongoingProjects, upcomingProjects } = storeToRefs(projectsStore)
const { services } = storeToRefs(servicesStore)
const { articles } = storeToRefs(newsStore)
const { testimonials } = storeToRefs(testimonialsStore)

const message = ref('')

// Marquee: duplicate items for seamless infinite scroll
const marqueePaused = ref(false)
const marqueeItems = computed(() => {
  const items = ongoingProjects.value || []
  // Duplicate list to allow continuous loop
  return [...items, ...items]
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
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
  animation-fill-mode: both;

  @media (max-width: 960px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    margin-bottom: 1.5rem;
  }

  &:nth-child(2) {
    animation-delay: 0.1s;
  }


  /* Marquee styles */
  .projects-marquee {
    overflow: hidden;
    width: 100%;
  }

  .projects-track {
    display: flex;
    gap: 0;
    will-change: transform;
    animation: marquee-scroll 25s linear infinite;
  }

  .projects-track.paused {
    animation-play-state: paused;
  }

  .projects-item {
    flex: 0 0 33.3333%;
    display: block;
  }

  .carousel-project-wrapper {
    width: 100%;
    display: block;
  }

  /* Ensure inner card/components expand to full column width */
  .projects-item>* {
    width: 100% !important;
  }

  .projects-item .v-card,
  .projects-item .project-card {
    width: 100% !important;
  }

  .projects-item img,
  .projects-item .v-img {
    width: 100% !important;
    height: auto;
  }

  @media (max-width: 960px) {
    .projects-item {
      flex: 0 0 50%;
    }
  }

  @media (max-width: 600px) {
    .projects-item {
      flex: 0 0 100%;
    }
  }

  @keyframes marquee-scroll {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }

  &:last-child {
    margin-bottom: 0;
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
