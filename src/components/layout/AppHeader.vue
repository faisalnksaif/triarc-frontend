<template>
  <v-app-bar
    app
    flat
    color="transparent"
    height="80"
    class="header"
    :class="{ 'header--scrolled': scrolled }"
  >
    <v-container fluid class="px-8">
      <v-row align="center" no-gutters>
        <v-col cols="auto">
          <div class="logo">
            <span class="logo-text">TRIARC</span>
          </div>
        </v-col>

        <v-spacer />

        <v-col cols="auto" class="d-none d-md-flex">
          <nav class="nav-menu">
            <a href="#" class="nav-link">HOME</a>
            <a href="#about" class="nav-link">ABOUT</a>
            <a href="#projects" class="nav-link">PROJECTS</a>
            <a href="#services" class="nav-link">SERVICES</a>
            <a href="#news" class="nav-link">NEWS</a>
            <a href="#contact" class="nav-link">CONTACT</a>
          </nav>
        </v-col>

        <v-col cols="auto" class="d-md-none">
          <v-btn icon @click="drawer = !drawer">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
    width="300"
    class="mobile-menu"
  >
    <v-list>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :href="item.href"
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const drawer = ref(false)

const menuItems = [
  { title: 'HOME', href: '#' },
  { title: 'ABOUT', href: '#about' },
  { title: 'PROJECTS', href: '#projects' },
  { title: 'SERVICES', href: '#services' },
  { title: 'NEWS', href: '#news' },
  { title: 'CONTACT', href: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.header {
  transition: all 0.3s ease;
  animation: slideInFromLeft 0.6s ease-out;
  
  &--scrolled {
    background-color: rgba(39, 39, 39, 0.95) !important;
    backdrop-filter: blur(10px);
  }
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #aa8453;
}

.nav-menu {
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #aa8453;
    transition: width 0.4s ease;
  }
  
  &:hover {
    color: #aa8453;
    
    &::after {
      width: 100%;
    }
  }
}

.mobile-menu {
  background-color: #2f2f2f;
}
</style>
