import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#272727',
    surface: '#2f2f2f',
    primary: '#aa8453',
    secondary: '#3a3a3a',
    accent: '#aa8453',
    error: '#ff5252',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#fb8c00',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customDarkTheme',
    themes: {
      customDarkTheme,
    },
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'flat',
      style: 'display: flex; align-items: center; justify-content: center;',
    },
  },
})
