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
          <Heading
            as="i"
            color={'brand.400'}
            fontWeight={800}
            lineHeight={1.2}
            textAlign="center"
            fontSize={useBreakpointValue({ base: '3xl', md: '6xl' })}
            mb="7"
          >
            ¡BIENVENIDO A SALUT ARREU!
          </Heading>
          <Stack
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            textAlign="center"
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            mb="10"
          >
            <Text>No solo es ponerse en forma, es un estilo de vida.</Text>
            <Text as="ins"> Un estilo de vida saludable.</Text>
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
