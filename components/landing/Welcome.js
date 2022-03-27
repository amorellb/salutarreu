import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading
} from '@chakra-ui/react'

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'100vw'}
      h={'100vh'}
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
          <Heading as='i'
            bgGradient='linear(to-l, black, brand.400,brand.600, brand.300, brand.500,brand.300,brand.400, brand.600, brand.500, brand.400, brand.300,brand.600, black)'
            bgClip='text'
            fontWeight='900'
            lineHeight={1.2}
            textAlign="center"
            fontSize={useBreakpointValue({ base: '5xl', md: '8xl' })}
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
            <Text as="i"> Un estilo de vida saludable.</Text>
            <Text>
              Acercate a nuestro centro y déjate guiar por nuestro entrenador.
            </Text>
          </Stack>
          <Stack direction={'row'} justify="center">
            <Button variant={'solid'} colorScheme={'brand'} isFullWidth>
              Registrarse
            </Button>
            <Button
              bg={'white'}
              colorScheme={'brand'}
              variant="outline"
              isFullWidth
            >
              Iniciar Sesión
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
