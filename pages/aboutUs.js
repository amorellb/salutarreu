import {
  Container,
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
  Input,
  Button,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

import AboutHero from '../components/about/AboutHero'
import TrainerValues from '../components/about/TrainerValues'

export default function AboutUs() {
  return (
    <Box as={'main'}>
      <Box as="section" textAlign={'center'} py={'10rem'}>
        <Image
          margin={'auto'}
          width="200px"
          src="/images/logo/imagotip/imagotip_fonstransparent.png"
          alt="Corporative logo image"
        />
        <Stack>
          <Heading
            as={'h1'}
            pe={'15px'}
            fontStyle="italic"
            lineHeight={1.1}
            fontSize={{ base: '5xl', lg: '7xl' }}
            bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
            bgClip="text"
          >
            Jaume Gelabert
          </Heading>
          <Text fontWeight={'bold'} fontSize={{ base: '2xl', lg: '4xl' }}>
            Entrenador.
          </Text>
          <Text fontSize={'1.5rem'} color={'gray.300'}>
            Guapo, sexy y atlético. ¿Qué más necesitas en un entrenador? ¡Vente
            pacá a ponerte bien chuleta!
          </Text>
        </Stack>
      </Box>
      <Container as={'section'} maxW={'7xl'}>
        <AboutHero />
      </Container>
      <Container as={'section'} mt={'5rem'} pb={'5rem'} maxW={'7xl'}>
        <Heading
          as="h2"
          lineHeight={1.1}
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
          bgClip="text"
        >
          <Text>Valores</Text>
        </Heading>
        <Flex
          textAlign={'center'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={10}
          marginTop={10}
        >
          {brandValues.map(value => (
            <TrainerValues key={value.title} brandValue={value} />
          ))}
        </Flex>
      </Container>
      <Container id="contactar" as={'section'} my={'5rem'} maxW={'7xl'}>
        <Heading
          as="h2"
          lineHeight={1.1}
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
          bgClip="text"
        >
          <Text>Contáctanos</Text>
        </Heading>
        <Box as={'form'} marginTop={10}>
          <Stack>
            <FormControl isRequired>
              <FormLabel
                as="label"
                htmlFor="contact-name"
                marginTop={'15px'}
                color={'brand.600'}
                fontSize={'1.2rem'}
                fontStyle={'italic'}
              >
                Nombre
              </FormLabel>
              <Input
                id="contact-name"
                name="contact-name"
                placeholder="Nombre"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                as="label"
                htmlFor="contact-email"
                color={'brand.600'}
                fontSize={'1.2rem'}
                fontStyle={'italic'}
              >
                Email
              </FormLabel>
              <Input
                id="contact-email"
                name="contact-email"
                placeholder="Email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                as="label"
                htmlFor="contact-message"
                color={'brand.600'}
                fontSize={'1.2rem'}
                fontStyle={'italic'}
              >
                Mensaje
              </FormLabel>
              <Input
                id="contact-message"
                name="contact-message"
                as={'textarea'}
                rows={10}
              />
            </FormControl>

            <Button
              type="submit"
              bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
              color="white"
              _hover={{
                bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                boxShadow: 'xl'
              }}
              isFullWidth
            >
              Enviar
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

const brandValues = [
  {
    icon: '🏆',
    title: 'Competitividad',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, dolore eveniet vel ducimus laborum facere voluptas, quod...'
  },
  {
    icon: '📈',
    title: 'Mejora',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, dolore eveniet vel ducimus laborum facere voluptas, quod...'
  },
  {
    icon: '💪',
    title: 'Rendimiento',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia, dolore eveniet vel ducimus laborum facere voluptas, quod...'
  }
]
