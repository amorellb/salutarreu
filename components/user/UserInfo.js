import { useState } from 'react'
import { Formik } from 'formik'

import {
  Alert,
  AlertIcon,
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
  Text,
  VStack
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

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

  const [successUpdateProfile, setSuccessUpdateProfile] = useState(false)
  const [successUpdatePersonal, setSuccessUpdatePersonal] = useState(false)
  const [errorUpdateProfile, setErrorUpdateProfile] = useState(false)
  const [errorUpdatePersonal, setErrorUpdatePersonal] = useState(false)

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Container as={SimpleGrid} >
      <Formik
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
            const res = await fetch(`/api/user/${user.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name,
                email,
                password,
                avatar
              })
            })
            if (res.status === 200) {
              setSuccessUpdateProfile(
                'Los datos del perfil se han actualizado correctamente'
              )
            } else {
              setErrorUpdateProfile('Ops! Algo ha ido mal 💀')
            }
          } catch (error) {
            console.error(error)
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
          isSubmitting
        }) => (
          <VStack>
            <Heading
              as={'h1'}
              lineHeight={1.1}
              fontSize={{ base: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
              bgClip="text"
            >
              Datos del perfil
            </Heading>

            <VStack as="form" onSubmit={handleSubmit} py="4" w="full">
              {errorUpdateProfile && (
                <Alert status="error">
                  <AlertIcon />
                  {errorUpdateProfile}
                </Alert>
              )}
              {successUpdateProfile && (
                <Alert status="success">
                  <AlertIcon />
                  {successUpdateProfile}
                </Alert>
              )}
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
                w="full"
                bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
                color="white"
                _hover={{
                  bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                  boxShadow: 'xl'
                }}
              >
                Modificar datos del perfil
              </Button>
            </VStack>
          </VStack>
        )}
      </Formik>

      <Formik
        initialValues={{
          dni: user.DNI ? user.DNI : '',
          phone: user.phone ? user.phone : '',
          address: user.address ? user.address : '',
          zipCode: user.zipCode ? user.zipCode : '',
          birthDate: birthDateESFormatted || ''
        }}
        validationSchema={validateUserData()}
        onSubmit={async ({ dni, phone, address, zipCode, birthDate }) => {
          const birthDateArray = birthDate.split('/')
          const month = birthDateArray[0]
          birthDateArray[0] = birthDateArray[1]
          birthDateArray[1] = month
          const birthDateUSFormatted = birthDateArray.join('/')
          try {
            const res = await fetch(`/api/user/${user.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                DNI: dni,
                phone,
                address,
                zipCode,
                birthDate: new Date(birthDateUSFormatted)
              })
            })
            if (res.status === 200) {
              setSuccessUpdatePersonal(
                'Los datos personales se han actualizado correctamente'
              )
            } else {
              setErrorUpdatePersonal('Ops! Algo ha ido mal 💀')
            }
          } catch (error) {
            console.error(error)
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
          isSubmitting
        }) => (
          <VStack marginTop={'8rem'}>
            <Heading
              as={'h2'}
              lineHeight={1.1}
              fontSize={{ base: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
              bgClip="text"
            >
              Datos personales
            </Heading>

            <VStack as="form" onSubmit={handleSubmit} py="4" w="full">
              {errorUpdatePersonal && (
                <Alert status="error">
                  <AlertIcon />
                  {errorUpdatePersonal}
                </Alert>
              )}
              {successUpdatePersonal && (
                <Alert status="success">
                  <AlertIcon />
                  {successUpdatePersonal}
                </Alert>
              )}
              <FormControl
                isInvalid={errors.dni && touched.dni}
                paddingBottom={4}
              >
                <FormLabel htmlFor="dni">DNI</FormLabel>
                <Input
                  id="dni"
                  type="text"
                  name="dni"
                  value={values.dni}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  backgroundColor={'white'}
                />
                <FormErrorMessage>{errors.dni}</FormErrorMessage>
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
                w="full"
                bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
                color="white"
                _hover={{
                  bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                  boxShadow: 'xl'
                }}
              >
                Modificar datos personales
              </Button>
            </VStack>
          </VStack>
        )}
      </Formik>
    </Container>
  )
}
