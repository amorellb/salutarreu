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
  InputGroup,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Select
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Formik } from 'formik'

import { validateTestData } from '../../../validations/validateTestData'

export default function FormTests(props) {
  const [successCreateTest, setSuccessCreateTest] = useState(false)
  const [errorCreateTest, setErrorCreateTest] = useState(false)
  const router = useRouter()
  return (
    <Container as={SimpleGrid}>
      <Formik
        initialValues={{
          testName: '',
          result: '',
          type: '',
          testDate: ''
        }}
        validationSchema={validateTestData()}
        onSubmit={async (
          { testName, type, result, testDate },
          { resetForm }
        ) => {
          const birthDateArray = testDate.split('/')
          const month = birthDateArray[0]
          birthDateArray[0] = birthDateArray[1]
          birthDateArray[1] = month
          const birthDateUSFormatted = birthDateArray.join('/')

          try {
            const res = await fetch(`/api/tests`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: testName,
                type: type,
                result: result,
                date: new Date(birthDateUSFormatted),
                userId: props.id
              })
            })

            if (res.status === 200) {
              setSuccessCreateTest('El test se a creado correctamente')
              router.replace(router.asPath)
            } else {
              setErrorCreateTest('Ops! Algo ha ido mal 💀')
            }
          } catch (error) {
            console.error(error)
            throw new Error(error)
          }
          resetForm()
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
          handleReset
        }) => (
          <Stack marginTop={'3rem'}>
            <Heading
              as={'h1'}
              fontStyle="italic"
              lineHeight={1.1}
              fontSize={{ base: '5xl', lg: '6xl' }}
              bgGradient="linear(to-r,brand.700, brand.600, brand.400, brand.300)"
              bgClip="text"
              textAlign={'center'}
            >
              Crear test
            </Heading>

            <VStack as="form" onSubmit={handleSubmit} py="4" w="full">
              {errorCreateTest && (
                <Alert status="error">
                  <AlertIcon />
                  {errorCreateTest}
                </Alert>
              )}
              {successCreateTest && (
                <Alert status="success">
                  <AlertIcon />
                  {successCreateTest}
                </Alert>
              )}
              <FormControl
                isInvalid={errors.testName && touched.testName}
                paddingBottom={4}
              >
                <FormLabel htmlFor="testName">Nombre</FormLabel>
                <Input
                  id="testName"
                  type="text"
                  name="testName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  backgroundColor={'white'}
                  value={values.testName}
                />
                <FormErrorMessage>{errors.testName}</FormErrorMessage>
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
                    value={values.result}
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
                  value={values.testDate}
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
                  value={values.type}
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
                onReset={handleReset}
              >
                Crear test
              </Button>
            </VStack>
          </Stack>
        )}
      </Formik>
    </Container>
  )
}
