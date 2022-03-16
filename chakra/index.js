import { extendTheme } from '@chakra-ui/react'

const overrides = {
  // Aquí se importará o se pondrá directamente el "customize" de chakra (colors, breakpoints, fonts, etc)
  fonts: {
    heading: 'AkzidenzGroteskBQ-Cnd, sans-serif',
    body: 'AkzidenzGroteskBQ-Reg, sans-serif'
  },
  colors: {
    brand: {}
  },
  components: {
    // componentes de chakra aquí
  }
}

export default extendTheme(overrides)
