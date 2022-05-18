import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Welcome from '../components/landing/Welcome'
import Carrusel from '../components/landing/Carrusel'
import Testimonials from '../components/landing/Testimonials'
import { Container, Heading, Image, Stack, Text } from '@chakra-ui/react'

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
          <Image
            src="https://github.com/amorellb/salutarreu/blob/main/public/images/lines/3.png?raw=true"
            alt="imagen lineas"
            position={'absolute'}
            zIndex={-1}
            left={0}
            top={0}
            w={'100%'}
            h={'100%'}
            opacity={'15%'}
          />

          <Stack spacing={0} align={'start'}>
            <Heading
              as={'h2'}
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
              bgClip="text"
            >
              Servicios
            </Heading>
            <Text color={'brand.600'}>
              Disponemos de múltiples servicios para ofrecerte
            </Text>
          </Stack>
        </Container>
        <Carrusel />
        <Testimonials />
      </main>
    </div>
  )
}
