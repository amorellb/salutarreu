import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '../chakra/index'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider {...theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
