import {
  Heading,
  Text,
  Container,
  Button,
  SimpleGrid,
  useBreakpointValue,
  Stack,
  chakra,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import Link from 'next/link'

const ArticleList = () => {
  const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
  });

  return (
    <Container
      as={'section'}
      maxW={'9xl'}
      pt={{ base: '2rem' }}
      mb={{ base: '0rem', md: '8rem' }}
      w={'100vw'}
      display={'flex'}
      flexDirection={'column'}>
      <Container
        mt={{ base: '3rem', md: '5rem' }} >
        <ChakraBox
          animate={{
            x: [-1000, 10]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: 0,
          }}
          backgroundImage={'/images/logo/imagotip/imagotip_fonstransparent.png'}
          justifyContent="center"
          backgroundSize={'cover'}
          bgRepeat={'no-repeat'}
          width="100%"
          height={{ base: "40vh", md: '50vh' }}>
        </ChakraBox>
      </Container>
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
        pe={'10px'}
      >
        ¡BIENVENIDO A SALUT ARREU!
      </Heading>
      <Stack
        color={'brand.600'}
        fontWeight={700}
        lineHeight={1.2}
        textAlign="center"
        fontSize={useBreakpointValue({ base: 'xl', md: '4xl' })}
        mb="10">
        <Text>No solo es ponerse en forma, es un estilo de vida.</Text>
        <Text
          as="h2"
          fontStyle={'italic'}>
          Un estilo de vida saludable.
        </Text>
        <Text>
          Acercate a nuestro centro y déjate guiar por nuestro entrenador.
        </Text>
      </Stack>
      <Container
        as={SimpleGrid}
        maxW={'5xl'}
        columns={{ base: 1, md: 2 }}
        gap={{ base: 5, lg: 20 }}>
        <Link
          href={'/aboutUs#contactar'}
          style={{ textDecoration: 'none' }}
          maxW={{ base: '5xl', lg: 'md' }}
          passHref>
          <Button
            as={'a'}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight={400}
            variant={'solid'}
            colorScheme={'brand.400'}
            isFullWidth>
            Contactar
          </Button>
        </Link>
        <Link
          href={'/sign-in'}
          style={{ textDecoration: 'none' }}
          maxW={{ base: '5xl', lg: 'md' }}
          passHref>
          <Button
            as={'a'}
            bg={'white'}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight={400}
            variant={'outline'}
            colorScheme={'brand'}
            isFullWidth>
            Iniciar sesión
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default ArticleList;