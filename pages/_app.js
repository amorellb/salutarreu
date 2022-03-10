import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '../chakra/index'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider {...theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
