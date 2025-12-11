<template>
  <footer class="footer">
    <v-container>
      <v-row class="footer-content">
        <v-col cols="12" md="4" class="text-center">
          <div class="footer-info">
            <v-icon color="primary" size="24">mdi-phone</v-icon>
            <div class="footer-info-text">
              <span class="footer-label">Phone</span>
              <a href="tel:+91-1234567890" class="footer-link">+91-1234567890</a>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <div class="footer-info">
            <v-icon color="primary" size="24">mdi-whatsapp</v-icon>
            <div class="footer-info-text">
              <span class="footer-label">WhatsApp</span>
              <a href="https://wa.me/911234567890" target="_blank" class="footer-link">+91-1234567890</a>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <div class="footer-info">
            <v-icon color="primary" size="24">mdi-map-marker</v-icon>
            <div class="footer-info-text">
              <span class="footer-label">Our Address</span>
              <span class="footer-text">Vengara, Kerala, India</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-8" color="rgba(255, 255, 255, 0.1)" />

      <v-row>
        <v-col cols="12" class="text-center">
          <p class="footer-copyright">
            © Copyright {{ currentYear }} Triarc. All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped lang="scss">
.footer {
  background-color: #1f1f1f;
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-content {
  margin-bottom: 2rem;
}

.footer-info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.footer-info-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.footer-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #aa8453;
  }
}

.footer-text {
  color: #ffffff;
  font-size: 1.05rem;
}

.footer-copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  margin: 0;
}
</style>
