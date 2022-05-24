import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
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
  Text,
  useToast,
  VStack
} from '@chakra-ui/react'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  validateUserData,
  validateProfileData
} from '../../validations/validateUserInfo'

export default function UserCreateForm() {
  const toast = useToast()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const router = useRouter()
  return (
    <Container>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          avatar: '',
          DNI: '',
          phone: '',
          address: '',
          zipCode: '',
          birthDate: ''
        }}
        validationSchema={validateUserData().concat(validateProfileData())}
        onSubmit={async (values, { resetForm }) => {
          const { error, user } = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          }).then(res => res.json())
          if (error) {
            toast({
              title: error,
              status: 'error',
              duration: 3000,
              isClosable: true
            })
            return
          }
          toast({
            title: 'Usuario creado con éxito',
            status: 'success',
            duration: 3000,
            isClosable: true
          })
          router.push(`/user/${user.id}`)
          resetForm({
            values: {
              name: '',
              email: '',
              password: '',
              avatar: '',
              DNI: '',
              phone: '',
              address: '',
              zipCode: '',
              birthDate: ''
            }
          })
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
              Crear Usuario
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
              <FormControl
                isInvalid={errors.DNI && touched.DNI}
                paddingBottom={4}
              >
                <FormLabel htmlFor="DNI">DNI</FormLabel>
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
                w="full"
                bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
                color="white"
                _hover={{
                  bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
                  boxShadow: 'xl'
                }}
              >
                Crear Usuario
              </Button>
            </VStack>
          </VStack>
        )}
      </Formik>
    </Container>
  )
}
