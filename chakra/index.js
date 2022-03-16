import { extendTheme } from '@chakra-ui/react'

const overrides = {
  // Aquí se importará o se pondrá directamente el "customize" de chakra (colors, breakpoints, fonts, etc)
  fonts: {
    heading: 'AkzidenzGroteskBQ-Cnd, sans-serif',
    body: 'AkzidenzGroteskBQ-Reg, sans-serif'
  },
  colors: {
    brand: {
      300: '#82DEB8',
      400: '#66CAA5',
      500: '#4DB68B',
      600: '#347361',
      700: '#225347'
    }
  },
  components: {
    // componentes de chakra aquí
  }
}

export default extendTheme(overrides)
