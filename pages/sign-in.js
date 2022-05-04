import { getSession, signIn } from 'next-auth/react'
import {
  Alert,
  AlertIcon,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { validateLogIn } from '../validations/validateSignIn'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SignIn() {
  const [errorLogin, setErrorLogin] = useState(false)
  const router = useRouter()
  return (
    <Container>
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
          <VStack
            minHeight="calc(100vh - var(--chakra-sizes-header))"
            justifyContent={'center'}
          >
            <Heading>Iniciar Sesión</Heading>
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
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={errors.password && touched.password}>
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
              <Button type="submit" isLoading={isSubmitting} w="full">
                Iniciar Sesión
              </Button>
            </VStack>
          </VStack>
        )}
      </Formik>
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
