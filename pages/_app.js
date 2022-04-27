import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import theme from '../chakra/index'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Fonts from '../components/Fonts'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
