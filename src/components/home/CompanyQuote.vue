<template>
  <section class="company-quote-section">
    <div class="quote-content">
      <div class="quote-overlay"></div>
      <div class="quote-inner">
        <blockquote class="quote-text">
          <v-icon icon="mdi-format-quote-open" class="quote-icon quote-start"></v-icon>
          We deliver <span class="highlight-word">quality</span> work that reflects our <span class="highlight-word">pride</span> and meets our <span class="highlight-word pulse-word">client's</span> expectations.
          <v-icon icon="mdi-format-quote-close" class="quote-icon quote-end"></v-icon>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.company-quote-section {
  position: relative;
  height: 500px;
  background-image: url('@/assets/images/projects/2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  @media (max-width: 960px) {
    height: 400px;
    background-attachment: scroll;
  }
}

.quote-content {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}

.quote-inner {
  position: relative;
  z-index: 1;
  padding: 2rem;
}

.quote-text {
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
    transform: scale(1.2);
    text-shadow: 0 0 12px rgba(170, 132, 83, 0.6);
  }
}

@media (max-width: 600px) {
  .quote-text {
    font-size: 1.25rem;
    white-space: normal;
    animation: none;
    border-right: none;
    line-height: 1.6;
  }
  
  .quote-icon {
    font-size: 1.5rem;
  }
  
  .quote-inner {
    padding: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .quote-text {
    animation: none;
    border-right: none;
    white-space: normal;
  }
  
  .pulse-word {
    animation: none;
  }
}
</style>
