<template>
  <section ref="sectionRef" id="active-areas" class="active-areas-section" :class="{ 'is-visible': isVisible }">
    <div>

      <div class="map-wrapper">
        <div ref="mapContainer" class="map-container"></div>
        <div v-if="errorMsg" class="map-fallback">
          <p class="fallback-text">{{ errorMsg }}</p>
          <v-btn color="primary" size="small" class="mt-4" @click="initMap">Retry</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useDisplay } from 'vuetify'

// Provide your Mapbox access token via prop or env
// You can replace this with import.meta.env.VITE_MAPBOX_TOKEN
const props = defineProps({
  accessToken: { type: String, default: '' },
})

const mapContainer = ref(null)
const sectionRef = ref(null)
let map
let animationFrameId
const errorMsg = ref('')
const isVisible = ref(false)
const mapLoaded = ref(false)
const { mobile } = useDisplay()

// Approximate coordinates for operating areas
const activeAreas = [
  { id: 'mysore', name: 'Mysore', coords: [76.6394, 12.2958] },
  { id: 'bangalore', name: 'Bangalore', coords: [77.5946, 12.9716] },
  { id: 'bangalore-kanakpura', name: 'Bangalore - Kanakpura', coords: [77.4188, 12.5466] },
  { id: 'bangalore-sarjapur', name: 'Bangalore - Sarjapur', coords: [77.7835, 12.8628] },
  { id: 'bangalore-devanahalli', name: 'Bangalore - Devanahalli', coords: [77.711, 13.246] },
  { id: 'bangalore-whitefield', name: 'Bangalore - Whitefield', coords: [77.7499, 12.9698] },
  { id: 'bangalore-chikkathirupathi', name: 'Bangalore - Chikkathirupathi', coords: [77.905, 12.8735] },
  { id: 'coimbatore', name: 'Coimbatore', coords: [76.9558, 11.0168] },
  { id: 'coimbatore-nallampalayam', name: 'Coimbatore - Nallampalayam', coords: [76.9516, 11.0723] },
  { id: 'coimbatore-kalapatti', name: 'Coimbatore - Kalapatti', coords: [77.0265, 11.0654] },
  { id: 'madurai', name: 'Madurai', coords: [78.1198, 9.9252] },
  { id: 'mettupalayam', name: 'Mettupalayam', coords: [76.9348, 11.2997] },
  { id: 'sirumugai', name: 'Sirumugai', coords: [77.0015, 11.3215] },
  { id: 'thrissur', name: 'Thrissur', coords: [76.2144, 10.5276] },
  { id: 'adatt', name: 'Adatt', coords: [76.152, 10.605] },
  { id: 'ernakulam', name: 'Ernakulam', coords: [76.2999, 9.9816] },
  { id: 'edapally', name: 'Edapally', coords: [76.307, 10.029] },
  { id: 'maradu', name: 'Maradu', coords: [76.3299, 9.9386] },
  { id: 'kozhikode', name: 'Kozhikode', coords: [75.7804, 11.2588] },
  { id: 'chevarambalam', name: 'Chevarambalam', coords: [75.826, 11.277] },
  { id: 'pantheerankavu', name: 'Pantheerankavu', coords: [75.8439, 11.2196] },
  { id: 'malappuram', name: 'Malappuram', coords: [76.0711, 11.051] },
  { id: 'vengara', name: 'Vengara', coords: [75.9642, 11.0496] },
  { id: 'tirurangadi', name: 'Tirurangadi', coords: [75.9552, 11.1111] },
  { id: 'achanambalam', name: 'Achanambalam', coords: [75.926, 11.05] },
  { id: 'kottakal', name: 'Kottakal', coords: [76.0003, 10.994] },
  { id: 'melattur', name: 'Melattur', coords: [76.2667, 11.0667] },
  { id: 'manjeri', name: 'Manjeri', coords: [76.1196, 11.1187] },
  { id: 'pandimuttam', name: 'Pandimuttam', coords: [76.064, 10.991] },
  { id: 'moonniyoor', name: 'Moonniyoor', coords: [75.9064, 11.1135] },
  { id: 'palakkad', name: 'Palakkad', coords: [76.6548, 10.7867] },
]

onMounted(() => {
  // Setup Intersection Observer for scroll animation
  if (sectionRef.value) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(sectionRef.value)
  }
  
  initMap()
})

// Watch for visibility and animate maxZoom when section comes into view
watch([isVisible, mapLoaded], ([visible, loaded]) => {
  if (visible && loaded && map) {
    console.log('Starting zoom animation...')
    // Add small delay to ensure map is fully ready
    setTimeout(() => {
      const startTime = Date.now()
      const duration = 1000
      const targetMaxZoom = 15//mobile.value ? 8 : 4
      
      const animateZoom = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Animate zoom from 0 to 3
        const currentZoom = progress * 6
        // Animate maxZoom from 0 to targetMaxZoom (6 on mobile, 4 on desktop)
        const currentMaxZoom = progress * targetMaxZoom
        
        console.log('Zoom:', currentZoom, 'MaxZoom:', currentMaxZoom)
        map.setZoom(currentZoom)
        map.setMaxZoom(currentMaxZoom)
        
        if (progress < 1) {
          requestAnimationFrame(animateZoom)
        } else {
          console.log('Zoom animation complete')
        }
      }
      
      animateZoom()
    }, 100)
  }
})

async function initMap() {
  errorMsg.value = ''
  try {
    if (!mapContainer.value) throw new Error('Map container not ready')
    // Load Mapbox GL via CDN if not present
    const MAPBOX_VERSION = 'v2.15.0'
    if (!window.mapboxgl) {
      await loadCSSOnce('mapbox-gl-css', `https://api.mapbox.com/mapbox-gl-js/${MAPBOX_VERSION}/mapbox-gl.css`)
      await loadScript(`https://api.mapbox.com/mapbox-gl-js/${MAPBOX_VERSION}/mapbox-gl.js`)
    }

    const token = props.accessToken || (import.meta.env && import.meta.env.VITE_MAPBOX_TOKEN) || ''
    if (!token) {
      errorMsg.value = 'Map cannot load: missing Mapbox token.'
      return
    }
    window.mapboxgl.accessToken = token

    // Remove existing map instance before re-init
    if (map) {
      try { map.remove() } catch {}
      map = null
    }

    map = new window.mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [77.5, 12.5],
      zoom: 0,
      maxZoom: 0,
      attributionControl: false,
      scrollZoom: false,
      doubleClickZoom: false,
      touchZoom: true,
      dragPan: false,
      dragRotate: false,
      keyboard: false,
    })

    map.on('load', () => {
      console.log('Map loaded')
      mapLoaded.value = true
      const bounds = new window.mapboxgl.LngLatBounds()

      // Add yellow circle dots for active areas
      const circles = {
        type: 'FeatureCollection',
        features: activeAreas.map((area) => ({
          type: 'Feature',
          properties: { name: area.name },
          geometry: { type: 'Point', coordinates: area.coords },
        })),
      }
      
      activeAreas.forEach((area) => {
        bounds.extend(area.coords)
      })

      map.addSource('active-circles', { type: 'geojson', data: circles })
      
      // Outer pulse ring
      map.addLayer({
        id: 'active-circles-pulse',
        type: 'circle',
        source: 'active-circles',
        paint: {
          'circle-radius': 10,
          'circle-color': '#aa8453',
          'circle-opacity': 0.3,
          'circle-blur': 0.5,
        },
      })
      
      // Main active dots
      map.addLayer({
        id: 'active-circles-layer',
        type: 'circle',
        source: 'active-circles',
        paint: {
          'circle-radius': 3,
          'circle-color': '#aa8453',
          'circle-opacity': 0.5,
          'circle-stroke-width': 0,
          'circle-stroke-color': '#aa8453',
          'circle-stroke-opacity': 0.8,
        },
      })

      // Animate the heartbeat effect
      let pulseSize = 4
      let growing = true
      
      const animateHeartbeat = () => {
        if (growing) {
          pulseSize += 0.15
          if (pulseSize >= 7) growing = false
        } else {
          pulseSize -= 0.15
          if (pulseSize <= 4) growing = true
        }
        
        map.setPaintProperty('active-circles-pulse', 'circle-radius', pulseSize)
        map.setPaintProperty('active-circles-pulse', 'circle-opacity', 0.4 - (pulseSize - 4) * 0.08)
        
        requestAnimationFrame(animateHeartbeat)
      }
      
      animateHeartbeat()

      if (!bounds.isEmpty()) {
        map.fitBounds(bounds, { padding: 10, maxZoom: 0, duration: 1200 })
      }
    })

    map.on('error', (e) => {
      console.error('Mapbox GL error:', e?.error || e)
      errorMsg.value = 'Map failed to load. Please retry or check network.'
    })
  } catch (e) {
    console.error('Map init error:', e)
    errorMsg.value = 'Map initialization failed.'
  }
}

onUnmounted(() => {
  if (map) map.remove()
})

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = (err) => reject(err)
    document.body.appendChild(s)
  })
}

function loadCSSOnce(id, href) {
  return new Promise((resolve) => {
    if (document.getElementById(id)) return resolve()
    const link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.href = href
    link.onload = () => resolve()
    document.head.appendChild(link)
  })
}
</script>

<style scoped lang="scss">
.active-areas-section {
  background-color: #272727;
}

.map-wrapper {
  position: relative;
}

.map-container {
  height: 420px;
  overflow: hidden;
}

.map-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
}

.fallback-text {
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}


:global(.mapboxgl-marker .map-marker) {
  position: relative;
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #aa8453;
  box-shadow: 0 0 12px rgba(170, 132, 83, 0.6);
  transform-origin: center;
  animation: marker-pulse 2s ease-in-out infinite;
  will-change: transform, box-shadow;
}

:global(.mapboxgl-marker .map-marker)::after {
  content: '';
  position: absolute;
  inset: -7px;
  border-radius: 50%;
  border: 1px solid rgba(170, 132, 83, 0.7);
  opacity: 0.7;
  animation: marker-wave 2s ease-out infinite;
  will-change: transform, opacity;
}

@keyframes marker-pulse {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 12px rgba(170, 132, 83, 0.6);
  }
  50% {
    transform: scale(1.6);
    box-shadow: 0 0 18px rgba(170, 132, 83, 0.85);
  }
}

@keyframes marker-wave {
  0% {
    transform: scale(0.6);
    opacity: 0.7;
  }
  70% {
    transform: scale(2.1);
    opacity: 0;
  }
  100% {
    transform: scale(2.1);
    opacity: 0;
  }
}
</style>
