<template>
  <section class="call-to-action-section">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="cta-content">
            <h2 class="cta-title">Ready to Start Your Next Project?</h2>
            <p class="cta-description">
              Let's work together to bring your architectural vision to life. Contact us today for a free consultation.
            </p>
            <div class="cta-buttons">
              <v-btn
                size="large"
                color="primary"
                class="cta-btn cta-btn--primary"
                href="#contact"
              >
                GET A QUOTE
              </v-btn>
              <v-btn
                size="large"
                variant="outlined"
                class="cta-btn cta-btn--secondary"
                href="#projects"
              >
                VIEW OUR WORK
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped lang="scss">
.call-to-action-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #1f1f1f 0%, #272727 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 960px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 600px) {
    padding: 2rem 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(170, 132, 83, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 1;
  animation: slideInFromLeft 0.8s ease-out;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
  
  @media (max-width: 960px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
}

.cta-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  line-height: 1.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 960px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.3s both;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
}

.cta-btn {
  padding: 1.5rem 3rem !important;
  font-size: 0.95rem;
  letter-spacing: 2px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &--primary {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(170, 132, 83, 0.3);
    }
  }
  
  &--secondary {
    border-color: #aa8453;
    color: #aa8453;
    
    &:hover {
      background-color: rgba(170, 132, 83, 0.1);
      border-color: #aa8453;
      transform: translateY(-3px);
    }
  }
}
</style>
