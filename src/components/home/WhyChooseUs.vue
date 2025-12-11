<template>
  <section class="team-highlights">
    <v-container>
      <h2 v-motion:fadeInUp class="section-title text-center">WHY CHOOSE US</h2>
      
      <v-row>
        <v-col v-for="(feature, index) in features" :key="feature.id" cols="12" md="6" lg="4">
          <div v-motion:cyberFade="{ delay: index * 80 }" class="feature-card">
            <div class="feature-icon">
              <v-icon :icon="feature.icon" size="40"></v-icon>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-text">{{ feature.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    icon: 'mdi-lightbulb-on',
    title: 'INNOVATIVE DESIGN',
    description: 'Cutting-edge architectural solutions that push creative boundaries while maintaining functionality.'
  },
  {
    id: 2,
    icon: 'mdi-handshake',
    title: 'CLIENT FOCUSED',
    description: 'Your vision is our priority. We collaborate closely to ensure every detail meets your expectations.'
  },
  {
    id: 3,
    icon: 'mdi-chart-line',
    title: 'PROVEN TRACK RECORD',
    description: 'Decades of experience delivering exceptional projects on time and within budget.'
  },
  {
    id: 4,
    icon: 'mdi-leaf',
    title: 'SUSTAINABLE DESIGN',
    description: 'Environmentally conscious architecture that balances modern aesthetics with eco-friendly practices.'
  },
  {
    id: 5,
    icon: 'mdi-tools',
    title: 'TECHNICAL EXPERTISE',
    description: 'Advanced building technologies and construction methods for superior quality results.'
  },
  {
    id: 6,
    icon: 'mdi-shield-check',
    title: 'QUALITY ASSURANCE',
    description: 'Rigorous quality control at every stage ensures excellence in every completed project.'
  }
])
</script>

<style scoped lang="scss">
.team-highlights {
  padding: 6rem 0;
  background-color: #272727;
  
  @media (max-width: 960px) {
    padding: 4rem 0;
  }
}

.feature-card {
  padding: 2.5rem 2rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(170, 132, 83, 0.2);
  border-radius: 4px;
  text-align: center;
  transition: all 0.4s ease;
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    animation: mobileGhostPulse 1.2s ease-out !important;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(170, 132, 83, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: all 0.6s ease;
  }
  
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  
  &:nth-child(6) {
    animation-delay: 0.6s;
  }
  
  &:hover {
    background: rgba(170, 132, 83, 0.08);
    border-color: #aa8453;
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(170, 132, 83, 0.2), 0 0 20px rgba(170, 132, 83, 0.1);
    
    &::before {
      opacity: 1;
      top: 50%;
      left: 50%;
    }
    
    .feature-icon {
      color: #aa8453;
      transform: scale(1.3) rotate(10deg);
      text-shadow: 0 0 20px rgba(170, 132, 83, 0.6);
    }
    
    .feature-title {
      color: #aa8453;
    }
  }
}

.feature-icon {
  color: rgba(170, 132, 83, 0.8);
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
  filter: drop-shadow(0 0 5px rgba(170, 132, 83, 0.3));
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.feature-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  margin: 0;
}
</style>
