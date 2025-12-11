<template>
  <v-card class="news-card" elevation="0">
    <v-img
      :src="article.image"
      :alt="article.title"
      height="280"
      cover
      class="news-image"
    />
    <div class="news-content">
      <div class="news-meta">
        <span class="news-category">{{ article.category }}</span>
        <span class="news-date">{{ article.date }}</span>
      </div>
      <h3 class="news-title">{{ article.title }}</h3>
      <p class="news-excerpt">{{ article.excerpt }}</p>
      <v-btn
        variant="text"
        color="primary"
        class="news-link"
        append-icon="mdi-arrow-right"
      >
        READ MORE
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.news-card {
  background: #2f2f2f;
  overflow: hidden;
  transition: all 0.4s ease;
  border: 1px solid rgba(170, 132, 83, 0.2);
  border-radius: 4px;
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
  
  @media (max-width: 768px) {
    animation: mobileLiquidSwipe 0.8s ease-out !important;
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
  
  &:hover {
    transform: translateY(-8px);
    border-color: #aa8453;
    border-top: 3px solid #aa8453;
    box-shadow: 0 20px 40px rgba(170, 132, 83, 0.15);
    
    .news-image {
      transform: scale(1.08);
    }
    
    .news-title {
      color: #aa8453;
    }
  }
}

.news-image {
  transition: transform 0.6s ease;
}

.news-content {
  padding: 2rem;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(170, 132, 83, 0.2);
}

.news-category {
  color: #aa8453;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.news-date {
  color: rgba(255, 255, 255, 0.5);
}

.news-title {
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.news-excerpt {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.news-link {
  padding: 0;
  letter-spacing: 1px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
}
</style>
