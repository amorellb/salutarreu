import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  SimpleGrid,
  Stack,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Formik } from 'formik'

import {
  validateProfileData,
  validateUserData
} from '../../validations/validateUserInfo'

export default function UserInfo(props) {
  const { user } = props
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  const birthDateESFormatted = user.birthDate
    ? new Intl.DateTimeFormat('es-ES', options).format(new Date(user.birthDate))
    : ''

  const handleClick = () => setShow(!show)
  const [show, setShow] = useState(false)

  const router = useRouter()
  const toast = useToast()

  return (
    <Container as={SimpleGrid}>
      <Formik
        enableReinitialize
        initialValues={{
          name: user.name ? user.name : '',
          email: user.email ? user.email : '',
          password: '',
          avatar: user.avatar ? user.avatar : ''
        }}
        validationSchema={validateProfileData()}
        onSubmit={async ({ name, email, password, avatar }) => {
          password = password || user.password
          try {
            const { error } = await fetch(`/api/user/${user.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name,
                email,
                password,
                avatar
              })
            }).then(res => res.json())
            if (error) {
              toast({
                title: 'Parece que el correo ya está en uso',
                status: 'error',
                duration: 3000,
                isClosable: true
              })
              return
            }
            toast({
              title: 'Los datos del perfil se han actualizado correctamente',
              status: 'success',
              duration: 3000,
              isClosable: true
            })
            if (user.email !== email) {
              signIn('change_email_signin', {
                email
              })
            } else {
              router.replace(router.asPath)
            }
          } catch (error) {
            throw new Error(error)
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
          isSubmitting,
          initialValues
        }) => (
          <Stack>
            <Heading
              as={'h1'}
              fontStyle="italic"
              lineHeight={1.1}
              fontSize={{ base: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.700, brand.600, brand.400, brand.300)"
              bgClip="text"
              textAlign={'center'}
            >
              Datos del perfil
            </Heading>

            <VStack as="form" onSubmit={handleSubmit} py="4" w="full">
              <FormControl
                isInvalid={errors.name && touched.name}
                paddingBottom={4}
              >
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  backgroundColor={'white'}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.email && touched.email}
                paddingBottom={4}
              >
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
                paddingBottom={4}
              >
                <FormLabel htmlFor="password">Nueva Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={show ? 'text' : 'password'}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={'************'}
                  />
                  <InputRightElement me={'1rem'} mt=".27rem">
                    <Box h="1.75rem" onClick={handleClick}>
                      {show ? <ViewOffIcon /> : <ViewIcon />}
                    </Box>
                  </InputRightElement>
                </InputGroup>
                <small>
                  <Text>
                    Dejar en blanco para mantener la contraseña actual.
                  </Text>
                </small>
                {errors.password && touched.password && (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.avatar && touched.avatar}
                paddingBottom={4}
              >
                <FormLabel htmlFor="avatar">Foto de perfil</FormLabel>
                <Input
                  id="avatar"
                  type="string"
                  name="avatar"
                  value={values.avatar}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.avatar && touched.avatar && (
                  <FormErrorMessage>{errors.avatar}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={
                  initialValues.name === values.name &&
                  initialValues.email === values.email &&
                  initialValues.avatar === values.avatar &&
                  initialValues.password === values.password
                }
                w="full"
                bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
                color="white"
                _hover={{
                  bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                  boxShadow: 'xl'
                }}
                fontSize={{ base: 'lg', md: 'xl' }}
              >
                Modificar datos del perfil
              </Button>
            </VStack>
          </Stack>
        )}
      </Formik>

      <Formik
        enableReinitialize
        initialValues={{
          DNI: user.DNI ? user.DNI : '',
          phone: user.phone ? user.phone : '',
          address: user.address ? user.address : '',
          zipCode: user.zipCode ? user.zipCode : '',
          birthDate: birthDateESFormatted || ''
        }}
        validationSchema={validateUserData()}
        onSubmit={async ({ DNI, phone, address, zipCode, birthDate }) => {
          const birthDateArray = birthDate.split('/')
          const month = birthDateArray[0]
          birthDateArray[0] = birthDateArray[1]
          birthDateArray[1] = month
          const birthDateUSFormatted = birthDateArray.join('/')
          try {
            const { error } = await fetch(`/api/user/${user.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                DNI,
                phone,
                address,
                zipCode,
                birthDate: new Date(birthDateUSFormatted || "")
              })
            }).then(res => res.json())
            if (error) {
              toast({
                title: error,
                status: 'success',
                duration: 3000,
                isClosable: true
              })
              return
            }
            toast({
              title: 'Los datos del perfil se han actualizado correctamente',
              status: 'success',
              duration: 3000,
              isClosable: true
            })
          } catch (error) {
            throw new Error(error)
          }
          router.push(router.asPath)
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          isSubmitting,
          initialValues
        }) => (
          <Stack marginTop={'8rem'}>
            <Heading
              as={'h2'}
              pe={'15px'}
              fontStyle="italic"
              lineHeight={1.1}
              fontSize={{ base: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.700, brand.600, brand.400, brand.300)"
              bgClip="text"
              textAlign={'center'}
            >
              Datos personales
            </Heading>

            <VStack as="form" onSubmit={handleSubmit} py="4" w="full">
              <FormControl
                isInvalid={errors.DNI && touched.DNI}
                paddingBottom={4}
              >
                <FormLabel htmlFor="dni">DNI</FormLabel>
                <Input
                  id="DNI"
                  type="text"
                  name="DNI"
                  value={values.DNI}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  backgroundColor={'white'}
                />
                <FormErrorMessage>{errors.DNI}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.phone && touched.phone}
                paddingBottom={4}
              >
                <FormLabel htmlFor="phone">Teléfono</FormLabel>
                <InputGroup>
                  <InputLeftAddon
                    bg={'gray.100'}
                    borderRadius="10px 0 0 10px"
                    px={'.5rem'}
                  >
                    +34
                  </InputLeftAddon>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {errors.phone && touched.phone && (
                  <FormErrorMessage>{errors.phone}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.address && touched.address}
                paddingBottom={4}
              >
                <FormLabel htmlFor="address">Dirección</FormLabel>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.address && touched.address && (
                  <FormErrorMessage>{errors.address}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.zipCode && touched.zipCode}
                paddingBottom={4}
              >
                <FormLabel htmlFor="zipCode">Código postal</FormLabel>
                <Input
                  id="zipCode"
                  type="number"
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.zipCode && touched.zipCode && (
                  <FormErrorMessage>{errors.zipCode}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.birthDate && touched.birthDate}
                paddingBottom={4}
              >
                <FormLabel htmlFor="birthDate">Fecha de nacimiento</FormLabel>
                <Input
                  id="birthDate"
                  type="text"
                  name="birthDate"
                  value={values.birthDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small>
                  <Text>Formato de fecha: dd/mm/aaaa</Text>
                </small>
                {errors.birthDate && touched.birthDate && (
                  <FormErrorMessage>{errors.birthDate}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                isLoading={isSubmitting}
                disabled={
                  initialValues.DNI === values.DNI &&
                  initialValues.phone === values.phone &&
                  initialValues.address === values.address &&
                  initialValues.zipCode === values.zipCode &&
                  initialValues.birthDate === values.birthDate
                }
                w="full"
                bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
                color="white"
                _hover={{
                  bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                  boxShadow: 'xl'
                }}
                fontSize={{ base: 'lg', md: 'xl' }}
              >
                Modificar datos personales
              </Button>
            </VStack>
          </Stack>
        )}
      </Formik>
    </Container>
  )
}
