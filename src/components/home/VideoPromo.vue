<template>
  <section class="video-promo-section">
    <div class="video-promo-content">
      <div class="video-promo-overlay"></div>
      <div class="video-promo-inner">
        <blockquote class="promo-quote">
          <v-icon icon="mdi-format-quote-open" class="quote-icon quote-start"></v-icon>
          We deliver <span class="highlight-word">quality</span> work that reflects our <span class="highlight-word">pride</span> and meets our <span class="highlight-word pulse-word">customers'</span> expectations.
          <v-icon icon="mdi-format-quote-close" class="quote-icon quote-end"></v-icon>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
// No video; displaying company quote in promo section
</script>

<style scoped lang="scss">
.video-promo-section {
  position: relative;
  height: 500px;
  background-image: url('@/assets/images/EXTERIOR VIEW 1.jpg');
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
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.promo-quote {
  max-width: 900px;
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.7;
  text-align: center;
  margin: 0;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-style: italic;
  letter-spacing: 0.3px;
  padding: 1.5rem 2rem;
  /* Typing animation */
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #aa8453;
  animation: typing 5s steps(80, end), blink-caret 0.75s step-end infinite;
}

.highlight-word {
  color: #aa8453;
  font-weight: 500;
  font-style: normal;
}

.pulse-word {
  animation: word-pulse 2s ease-in-out infinite;
}

.quote-icon {
  color: #aa8453;
  opacity: 1;
}

.quote-start {
  margin-right: 0.5rem;
  font-size: 2rem;
  vertical-align: top;
}

.quote-end {
  margin-left: 0.5rem;
  font-size: 2rem;
  vertical-align: bottom;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #aa8453 }
}

@keyframes word-pulse {
  0%, 100% {
    transform: scale(1);
    text-shadow: 0 0 0 rgba(248, 248, 248, 0);
  }
  50% {
    transform: scale(2);
    text-shadow: 0 0 12px rgb(133, 95, 48);
  }
}

@media (max-width: 600px) {
  .promo-quote {
    font-size: 1.25rem;
    white-space: normal;
    animation: none;
    border-right: none;
    text-align: center;
    line-height: 1.6;
  }
  
  .quote-icon {
    font-size: 1rem;
  }
  
  .video-promo-inner {
    padding: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .promo-quote {
    animation: none;
    border-right: none;
    white-space: normal;
  }
}
</style>
