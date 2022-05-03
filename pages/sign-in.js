/* import { getProviders, getSession } from 'next-auth/react' */
import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { validateLogIn } from '../validations/validateSignIn'

export default function SignIn() {
  return (
    <Container>
      <Formik
        initialValues={{
          email: 'kevinpuchaicela@gmail.com',
          password:
            '$2a$10$9SaRL118JraU/J0WDpizo.y.fMjo5MtnlEa6Oipeq60CJYog711Hu'
        }}
        validationSchema={validateLogIn()}
        onSubmit={async ({email, password}) => {
          /* const user = await fetch('/api/auth/sign-in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          })
          const session = await getSession({ req: user })
          console.log(session) */
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched
        }) => (
          <Box as="form" onSubmit={handleSubmit}>
            {console.log({ errors, touched })}
            <FormControl isRequired isInvalid={errors.email && touched.email}>
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
            <FormControl
              isRequired
              isInvalid={errors.password && touched.password}
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
            <Button type="submit">Iniciar Sesión</Button>
          </Box>
        )}
      </Formik>
    </Container>
  )
}

/* export async function getServerSideProps(context) {
  const session = await getSession(context)
  const providers = await getProviders()
  if (session) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
  return {
    props: { providers }
  }
} */
