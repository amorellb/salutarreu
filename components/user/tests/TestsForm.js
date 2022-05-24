// import { useState } from 'react'
import { Formik } from 'formik'

import {
  // Alert,
  // AlertIcon,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  SimpleGrid,
  Text,
  VStack,
  Select
} from '@chakra-ui/react'

import { validateTestData } from '../../../validations/validateTestData'


export default function FormTests(props) {
  // const [successUpdatePersonal, setSuccessUpdatePersonal] = useState(false)
  // const [errorUpdatePersonal, setErrorUpdatePersonal] = useState(false)

  return (
    <Container as={SimpleGrid}>
      <Formik
        initialValues={{
          name: '',
          result: '',
          type: '',
          testDate: '',
        }}
        validationSchema={validateTestData()}
        // onSubmit={async ({ dni, phone, address, zipCode, birthDate }) => {
        //   const birthDateArray = birthDate.split('/')
        //   const month = birthDateArray[0]
        //   birthDateArray[0] = birthDateArray[1]
        //   birthDateArray[1] = month
        // const birthDateUSFormatted = birthDateArray.join('/')
        // try {
        //   const res = await fetch(`/api/user/${user.id}`, {
        //     method: 'PUT',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //       DNI: dni,
        //       phone,
        //       address,
        //       zipCode,
        //       birthDate: new Date(birthDateUSFormatted)
        //     })
        //   })
        //   if (res.status === 200) {
        //     setSuccessUpdatePersonal(
        //       'Los datos personales se han actualizado correctamente'
        //     )
        //   } else {
        //     setErrorUpdatePersonal('Ops! Algo ha ido mal 💀')
        //   }
        // } catch (error) {
        //   console.error(error)
        //   throw new Error(error)
        // }
        // }}
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
          <VStack marginTop={'3rem'}>
            <Heading
              as={'h2'}
              lineHeight={1.1}
              fontSize={{ base: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.600, brand.500, brand.400, brand.300)"
              bgClip="text"
            >
              Crear test
            </Heading>

            <VStack as="form" onSubmit={handleSubmit} py="4" w="full">
              {/* {errorUpdatePersonal && (
                <Alert status="error">
                  <AlertIcon />
                  {errorUpdatePersonal}
                </Alert>
              )} */}
              {/* {successUpdatePersonal && (
                <Alert status="success">
                  <AlertIcon />
                  {successUpdatePersonal}
                </Alert>
              )} */}
              <FormControl
                isInvalid={errors.name && touched.name}
                paddingBottom={4}
              >
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  backgroundColor={'white'}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.result && touched.result}
                paddingBottom={4}
              >
                <FormLabel htmlFor="result">Resultado</FormLabel>
                <InputGroup>
            
                  <Input
                    id="result"
                    type="number"
                    name="result"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </InputGroup>
                {errors.result && touched.result && (
                  <FormErrorMessage>{errors.result}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={errors.testDate && touched.testDate}
                paddingBottom={4}
              >
                <FormLabel htmlFor="testDate">Fecha del test</FormLabel>
                <Input
                  id="testDate"
                  type="text"
                  name="testDate"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small>
                  <Text>Formato de fecha: dd/mm/aaaa</Text>
                </small>
                {errors.testDate && touched.testDate && (
                  <FormErrorMessage>{errors.testDate}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={errors.type && touched.type}
                paddingBottom={4}
              >
                <FormLabel htmlFor="type">Tipo de test</FormLabel>

                <Select
                  placeholder="Selecciona una opcion"
                  id="type"
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {' '}
                  backgroundColor={'white'}
                  <option value="MOBILITY">Movilidad</option>
                  <option value="STREGTH">Fuerza</option>
                  <option value="RESISTANCE">Resistencia</option>

 
                </Select>
                <FormErrorMessage>{errors.type}</FormErrorMessage>
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
                Crear test
              </Button>
            </VStack>
          </VStack>
        )}
      </Formik>
    </Container>
  )
}
