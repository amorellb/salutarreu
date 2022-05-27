import Head from 'next/head'
import Welcome from '../components/landing/Welcome'
import Carrusel from '../components/landing/Carrusel'
import Testimonials from '../components/landing/Testimonials'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salut Arreu</title>
        <meta name="description" content="Main page for Salut Arreu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <Welcome />
        <Container maxW={'7xl'} pt={16} as={Stack} spacing={12}>
          <Image
            src="https://github.com/amorellb/salutarreu/blob/main/public/images/landing/3.png?raw=true"
            alt="imagen lineas"
            position={'absolute'}
            zIndex={-1}
            left={0}
            top={-1100}
            w={'100%'}
            h={'95%'}
            opacity={'15%'}
          />
          <Image
            src="https://github.com/amorellb/salutarreu/blob/main/public/images/landing/3.png?raw=true"
            alt="imagen lineas"
            position={'absolute'}
            zIndex={-1}
            left={0}
            top={0}
            w={'100%'}
            h={'95%'}
            opacity={'15%'}
          />

          <Stack spacing={0} align={'start'} px="1rem" pb={'2rem'}>
            <Heading
              as={'h2'}
              lineHeight={1.1}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
              bgClip="text"
            >
              Servicios
            </Heading>
            <Text color={'brand.600'} fontSize={{ base: 'md', md: '2xl' }}>
              Disponemos de múltiples servicios para ofrecerte
            </Text>
          </Stack>
        </Container>
        <Carrusel />
        <Testimonials />
      </Box>
    </div>
  )
}
