import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  SimpleGrid,
  Container,
  Link
} from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'100vw'}
      h={'110vh'}
      backgroundImage={'/images/landing/portada.jpg'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'5xl'} align={'flex-center'} spacing={9}>
          <Heading
            as="h1"
            bgGradient="linear(to-l, black, brand.400,brand.600, brand.300, brand.500,brand.300,brand.400, brand.600, brand.500, brand.400, brand.300,brand.600, black)"
            bgClip="text"
            fontWeight="900"
            lineHeight={1.2}
            textAlign="center"
            fontSize={useBreakpointValue({ base: '5xl', md: '8xl' })}
            fontStyle={'italic'}
            mb="3"
          >
            ¡BIENVENIDO A SALUT ARREU!
          </Heading>
          <Stack
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            textAlign="center"
            fontSize={useBreakpointValue({ base: 'xl', md: '4xl' })}
            mb="10"
          >
            <Text>No solo es ponerse en forma, es un estilo de vida.</Text>
            <Text as="h2" fontStyle={'italic'}>
              Un estilo de vida saludable.
            </Text>
            <Text>
              Acercate a nuestro centro y déjate guiar por nuestro entrenador.
            </Text>
          </Stack>
          <Container as={SimpleGrid} maxW={'5xl'} columns={{ base: 1, md: 2 }}>
            <Link
              href={'/aboutUs#contactar'}
              style={{ textDecoration: 'none' }}
            >
              <Button
                fontSize={'sm'}
                fontWeight={400}
                variant={'solid'}
                colorScheme={'brand.400'}
                isFullWidth
              >
                Contactar
              </Button>
            </Link>
            <Link href={'/sign-in'} style={{ textDecoration: 'none' }}>
              <Button
                bg={'white'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'outline'}
                colorScheme={'brand'}
                isFullWidth
              >
                Iniciar sesión
              </Button>
            </Link>
          </Container>
        </Stack>
      </VStack>
    </Flex>
  )
}
