<template>
  <section class="video-promo-section">
    <div class="video-promo-content">
      <div class="video-promo-overlay"></div>
      <div class="video-promo-inner">
        <v-btn
          icon
          size="80"
          class="video-play-button"
          elevation="0"
          @click="openVideo"
        >
          <v-icon size="40" color="white">mdi-play</v-icon>
        </v-btn>
        <h3 class="video-promo-text">VIEW PROMO VIDEO</h3>
      </div>
    </div>
  </section>
</template>

<script setup>
const openVideo = () => {
  // In a real application, this would open a video modal
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
}
</script>

<style scoped lang="scss">
.video-promo-section {
  position: relative;
  height: 500px;
  background-image: url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  @media (max-width: 960px) {
    height: 400px;
    background-attachment: scroll;
  }
}

.video-promo-content {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-promo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.video-promo-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.video-play-button {
  background-color: rgba(170, 132, 83, 0.9) !important;
  transition: all 0.4s ease;
  animation: floatAnimation 3s ease-in-out infinite;
  
  &:hover {
    background-color: #aa8453 !important;
    transform: scale(1.15);
    animation: none;
    box-shadow: 0 0 30px rgba(170, 132, 83, 0.5);
  }
}

.video-promo-text {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
}
</style>
