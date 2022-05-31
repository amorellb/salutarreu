import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import theme from '../chakra/index'
import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Fonts from '../components/Fonts'
import { useEffect } from 'react'
import { CookiesModal } from '../components/CookiesModal'

export default function SalutArreuApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    if (document.cookie.indexOf('cookies-consent=true') === -1) {
      onOpen()
    }
  }, [])

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <CookiesModal isOpen={isOpen} onClose={onClose} />
      </ChakraProvider>
    </SessionProvider>
  )
}
