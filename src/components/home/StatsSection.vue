<template>
  <section class="stats-section">
    <v-container>
      <h2 v-motion:fadeInDown class="stats-title">KEY METRICS</h2>
      <v-row justify="center">
        <v-col v-for="(stat, index) in stats" :key="stat.id" cols="12" sm="6" md="3" class="stat-col">
          <div v-motion:cyberFade="{ delay: index * 100 }" class="stat-card">
            <div class="stat-icon">
              <v-icon :icon="stat.icon" size="48"></v-icon>
            </div>
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  {
    id: 1,
    icon: 'mdi-briefcase',
    number: '150+',
    label: 'COMPLETED PROJECTS'
  },
  {
    id: 2,
    icon: 'mdi-account-group',
    number: '50+',
    label: 'TEAM MEMBERS'
  },
  {
    id: 3,
    icon: 'mdi-trophy',
    number: '25+',
    label: 'AWARDS WON'
  },
  {
    id: 4,
    icon: 'mdi-star',
    number: '4.9/5',
    label: 'CLIENT RATING'
  }
])
</script>

<style scoped lang="scss">
.stats-section {
  padding: 6rem 0;
  background-color: #1f1f1f;
  position: relative;
  
  @media (max-width: 960px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 600px) {
    padding: 2rem 0;
  }
}

.stats-title {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 960px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}

.stat-col {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
  
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
}

.stat-card {
  text-align: center;
  padding: 2rem;
  transition: all 0.4s ease;
  border: 1px solid rgba(170, 132, 83, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.02);
  
  @media (max-width: 768px) {
    animation: mobilePulseGlow 2.5s ease-in-out infinite !important;
  }
  
  @media (max-width: 600px) {
    padding: 1.5rem;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(170, 132, 83, 0.8);
    background: rgba(170, 132, 83, 0.05);
    box-shadow: 0 15px 35px rgba(170, 132, 83, 0.15);
    
    .stat-icon {
      color: #aa8453;
      transform: scale(1.15) rotate(10deg);
    }
    
    .stat-number {
      text-shadow: 0 0 10px rgba(170, 132, 83, 0.5);
    }
  }
}

.stat-icon {
  color: rgba(170, 132, 83, 0.8);
  margin-bottom: 1.5rem;
  transition: all 0.4s ease;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #aa8453;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
}

.stat-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1px;
  text-transform: uppercase;
  
  @media (max-width: 600px) {
    font-size: 0.8rem;
    letter-spacing: 0.5px;
  }
}
</style>
