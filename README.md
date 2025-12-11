# Bauen - Architecture Landing Page

A modern, elegant landing page clone inspired by the Bauen architecture website, built with Vue 3, Pinia, and Vuetify.

## Features

- 🎨 Dark theme design with elegant animations
- 📱 Fully responsive layout
- 🎭 Hero slider with auto-play
- 🏗️ Projects showcase section
- 💼 Services section with hover effects
- 📰 News/Blog section
- 📧 Contact form
- 🎯 Clean architecture with Pinia state management
- 🎨 Vuetify 3 UI components

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Pinia** - State management
- **Vuetify 3** - Material Design component framework
- **Vite** - Fast build tool
- **Vue Router** - Official router for Vue.js

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue
│   │   └── AppFooter.vue
│   └── home/
│       ├── HeroSlider.vue
│       ├── ProjectCard.vue
│       ├── ServiceCard.vue
│       └── NewsCard.vue
├── stores/
│   ├── heroStore.js
│   ├── projectsStore.js
│   ├── servicesStore.js
│   └── newsStore.js
├── pages/
│   └── HomePage.vue
├── plugins/
│   └── vuetify.js
├── router/
│   └── index.js
├── styles/
│   └── main.scss
├── App.vue
└── main.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Features Breakdown

### Hero Slider
- Auto-playing carousel with smooth transitions
- Navigation arrows and pagination dots
- Responsive design with overlay effects

### Projects Section
- Grid layout showcasing architecture projects
- Hover effects with image zoom
- Category tags and project titles

### Services Section
- Three main service categories
- Icon-based design with numbered cards
- Smooth hover animations

### News Section
- Blog/news articles in card format
- Featured images with metadata
- Category tags and dates

### Contact Section
- Simple contact form
- Styled with Vuetify components
- Dark theme integration

## Customization

### Colors
Edit the theme colors in `src/plugins/vuetify.js`:
```javascript
colors: {
  primary: '#aa8453',
  background: '#0a0a0a',
  // ... more colors
}
```

### Content
Update store files in `src/stores/` to modify:
- Hero slides
- Projects
- Services
- News articles

## License

This is a demo project for educational purposes.

## Acknowledgments

Design inspiration from Bauen - Architecture & Construction WordPress theme by webRedox.
