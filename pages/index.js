import {
  Box,
  Container,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { useEffect } from 'react'

import Welcome from '../components/landing/Welcome'
import Carrusel from '../components/landing/Carrusel'
import Testimonials from '../components/landing/Testimonials'

export default function Home(props) {
  const user = props ? props.user : null
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [isModalFired, setModalFired] = useState()

  // Cookies usage
  useEffect(() => {
    if (!user) {
      // if (!isModalFired) {
      onOpen()
      // setModalFired(true)
      // }
    }
  }, [])

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

        {/* Cookies modal */}
        <CookiesModal isOpen={isOpen} onClose={onClose} />
      </Box>
    </div>
  )
}

function CookiesModal({ isOpen, onClose }) {
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <ModalHeader>Esta página utiliza cookies</ModalHeader>
          <Text>
            Las cookies de este sitio web son puramente técnicas y necesarias
            para el correcto funcionamiento del mismo.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const user = session ? session.user : null

  return {
    props: {
      user: user
    }
  }
}
