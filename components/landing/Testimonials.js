
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = (props) => {
  return <Box>{props.children}</Box>;
};

const TestimonialContent = (props) => {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
      }}
    >
      {props.children}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {props.children}
    </Heading>
  );
};

const TestimonialText = (props) => {
  return (
    <Text
      textAlign={'start'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {props.children}
    </Text>
  );
};

const TestimonialAvatar = (props) => {
  return (
    <Flex align={'center'} mt={12} direction={'column'}>
      <Avatar
        w={'70px'}
        h={'70px'}
        src={props.src}
        alt={props.name}
        mb={2}
        _before={{
          content: '""',
          width: 'full',
          height: 'full',
          rounded: 'full',
          transform: 'scale(1.125)',
          bgGradient: 'linear(to-bl, brand.300,brand.600)',
          position: 'absolute',
          zIndex: -1,
          top: 0,
          left: 0,
        }}
      />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{props.name}</Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'start'}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            bgGradient='linear(to-r,brand.600, brand.500, brand.400, brand.300)'
            bgClip='text'>
            Testimonios
          </Heading>
          <Text color={'brand.600'}>Nuestros clientes te cuentan su experiencia</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mejora progresiva</TestimonialHeading>
              <TestimonialText>
                Mis dolores de espalda se han visto reducidos gracias al entrenamiento funcional. Fortalecer poco a poco la musculatura ha hecho desaparecer los dolores que me impedían realizar actividades físicas como ir en bici.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://avatars.githubusercontent.com/u/74008183?v=4'
              }
              name={'Antonio Morell'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Una rutina apropiada</TestimonialHeading>
              <TestimonialText>
                Tantas horas en el ordenador no es bueno. Por eso recurrí a Salutarreu. Sabía que me proporcionarían un rutina de ejercicios que mejoraría mi calidad de vida, complementándola con el ejercicio físico que necesitaba.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://avatars.githubusercontent.com/u/47866787?v=4'
              }
              name={'Kevin Puchaicela'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Poco a poco y con buena letra</TestimonialHeading>
              <TestimonialText>
                En Salutarreu estoy consiguiendo logros. Necesitaba mejorar mi mobilidad y bajar de peso. La rutina que han ideado para mí y el apoyo con el que me tratan están haciendo que esté motivada y siga luchando para llegar a mis objetivos.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://avatars.githubusercontent.com/u/73317705?s=400&u=636c6e048ef6e1936413e9fe5d5ebe7a7c23bbf1&v=4'
              }
              name={'Maria Victoria Peláez'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}