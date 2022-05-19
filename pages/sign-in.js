import { getSession, signIn } from 'next-auth/react'
import {
  Alert,
  AlertIcon,
  Avatar,
  AvatarGroup,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { validateLogIn } from '../validations/validateSignIn'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignIn() {
  const [errorLogin, setErrorLogin] = useState(false)
  const router = useRouter()

  const avatars = [
    {
      name: 'Antonio Morell',
      url: 'https://avatars.githubusercontent.com/u/74008183?v=4'
    },
    {
      name: 'Magi Payeras',
      url: 'https://media.discordapp.net/attachments/770716465941970955/957441418585067570/desconocido.jpeg?width=301&height=669'
    },
    {
      name: 'Kevin Puchaicela',
      url: 'https://avatars.githubusercontent.com/u/47866787?v=4'
    },
    {
      name: 'Victoria Pelaez',
      url: 'https://avatars.githubusercontent.com/u/73317705?s=400&u=636c6e048ef6e1936413e9fe5d5ebe7a7c23bbf1&v=4'
    }
  ]

  return (
    <Container
      as={SimpleGrid}
      maxW={'8xl'}
      columns={{ base: 1, md: 2 }}
      spacing={{ base: 10, lg: 32 }}
      py={'10rem'}
    >
      <Stack as={'section'} spacing={{ base: 10, md: 20 }}>
        <Heading
          paddingStart={8}
          marginTop={10}
          lineHeight={1.1}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl', xl: '6xl' }}
          bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
          bgClip="text"
        >
          Bienvenido a la famlia Salutarreu.
          <br />
          Aquí comienza tu aventura.
        </Heading>
        <Stack
          direction={'row'}
          spacing={4}
          align={'center'}
          alignSelf="center"
        >
          <AvatarGroup>
            {avatars.map(avatar => (
              <Avatar
                key={avatar.name}
                name={avatar.name}
                src={avatar.url}
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
                position={'relative'}
                zIndex={2}
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
                  left: 0
                }}
              />
            ))}
          </AvatarGroup>
          <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
            +
          </Text>
          <Flex
            align={'center'}
            justify={'center'}
            fontFamily={'heading'}
            fontSize={{ base: 'sm', md: 'lg' }}
            bg={'gray.800'}
            color={'white'}
            rounded={'full'}
            width={useBreakpointValue({ base: '44px', md: '60px' })}
            height={useBreakpointValue({ base: '44px', md: '60px' })}
            position={'relative'}
            _before={{
              content: '""',
              width: 'full',
              height: 'full',
              rounded: 'full',
              transform: 'scale(1.125)',
              bgGradient: 'linear(to-bl, orange.400,yellow.400)',
              position: 'absolute',
              zIndex: -1,
              top: 0,
              left: 0
            }}
          >
            YOU
          </Flex>
        </Stack>
      </Stack>

      <Stack
        as={'section'}
        justifyContent={'center'}
        bg={'gray.50'}
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        maxW={{ lg: 'lg' }}
      >
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={validateLogIn()}
          onSubmit={async ({ email, password }) => {
            const { error } = await signIn('credentials', {
              email,
              password,
              callbackUrl: '/',
              redirect: false
            })
            if (error) {
              setErrorLogin(error)
            } else {
              router.push('/')
            }
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            isSubmitting
          }) => (
            <VStack>
              <Heading
                color={'brand.600'}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                textAlign={'center'}
              >
                Iniciar Sesión
              </Heading>

              <VStack as="form" onSubmit={handleSubmit} py="4" w="full">
                {errorLogin && (
                  <Alert status="error">
                    <AlertIcon />
                    {errorLogin}
                  </Alert>
                )}
                <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    backgroundColor={'white'}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={errors.password && touched.password}
                  paddingBottom={6}
                >
                  <FormLabel>Contraseña</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  )}
                </FormControl>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  w="full"
                  bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
                  color="white"
                  _hover={{
                    bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                    boxShadow: 'xl'
                  }}
                >
                  Iniciar Sesión
                </Button>
              </VStack>
            </VStack>
          )}
        </Formik>
      </Stack>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
  return {
    props: {}
  }
}
