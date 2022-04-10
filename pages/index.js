import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Welcome from '../components/landing/Welcome'
import Carrusel from '../components/landing/Carrusel'
import Testimonials from '../components/landing/Testimonials'
import { Container, Heading, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Salut Arreu</title>
        <meta name="description" content="Main page for Salut Arreu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Welcome />
        <Container maxW={'7xl'} pt={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'start'} >
            <Heading
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              bgGradient='linear(to-r,brand.600, brand.500, brand.400, brand.300)'
              bgClip='text'>
              Servicios
            </Heading>
            <Text color={'brand.600'}>Disponemos de múltiples servicios para ofrecerte</Text>
          </Stack>
        </Container>
        <Carrusel />
        <Testimonials />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
