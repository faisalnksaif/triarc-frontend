<template>
  <v-card class="service-card" elevation="0">
    <div class="service-content">
      <div class="service-header">
        <v-icon :icon="service.icon" size="48" color="primary" class="service-icon" />
        <span class="service-number">{{ service.number }}</span>
      </div>
      <h3 class="service-title">{{ service.title }}</h3>
      <p class="service-description">{{ service.description }}</p>
      <v-btn
        variant="text"
        color="primary"
        class="service-link"
        append-icon="mdi-arrow-right"
      >
        LEARN MORE
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.service-card {
  background: #2f2f2f;
  padding: 3rem 2rem;
  height: 100%;
  transition: all 0.4s ease;
  border: 2px solid rgba(170, 132, 83, 0.2);
  border-radius: 4px;
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    animation: mobileRotateIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, #aa8453, transparent);
    transition: left 0.6s ease;
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
  
  &:hover {
    background: #3a3a3a;
    transform: translateY(-15px);
    border-color: #aa8453;
    box-shadow: 0 20px 40px rgba(170, 132, 83, 0.15);
    
    &::before {
      left: 100%;
    }
    
    .service-icon {
      color: #aa8453;
      transform: scale(1.15) rotate(-5deg);
    }
  }
}

.service-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.service-icon {
  transition: all 0.4s ease;
}

.service-number {
  font-size: 3rem;
  font-weight: 700;
  color: rgba(170, 132, 83, 0.2);
  line-height: 1;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.service-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.service-link {
  padding: 0;
  letter-spacing: 1px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
}
</style>
