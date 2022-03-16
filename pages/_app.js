import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import theme from '../chakra/index'

import Head from 'next/head'

import Header from '../components/Header'
import Fonts from '../components/Fonts'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider {...theme}>
      <Fonts />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
