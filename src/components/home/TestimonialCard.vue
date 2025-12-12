<template>
  <v-card class="testimonial-card" elevation="0">
    <v-card-text class="testimonial-content">
      <p class="testimonial-text">{{ testimonial.text }}</p>
      
      <div class="testimonial-author">
        <v-avatar size="60" class="testimonial-avatar" :color="testimonial.avatar ? undefined : '#aa8453'">
          <v-img v-if="testimonial.avatar" :src="testimonial.avatar" :alt="testimonial.author" cover />
          <span v-else class="avatar-initials">{{ testimonial.initials }}</span>
        </v-avatar>
        <div class="testimonial-info">
          <h4 class="testimonial-name">{{ testimonial.author }}</h4>
          <span class="testimonial-role">{{ testimonial.role }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.testimonial-card {
  background: transparent;
  padding: 2rem 1rem;
  height: 100%;
  animation: scaleIn 0.6s ease-out;
  
  @media (max-width: 768px) {
    animation: mobileFloatUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.4s ease;
  }
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.testimonial-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.15rem;
  line-height: 1.8;
  margin: 0;
  min-height: 100px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-avatar {
  border: 2px solid #aa8453;
}

.avatar-initials {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.testimonial-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.testimonial-name {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
}

.testimonial-role {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}
</style>
