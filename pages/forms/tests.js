import {
  Box,
  Stack,
  Heading,
  Input,
  Button,
  FormLabel,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)
setDefaultLocale('es')

function TestsForm() {
  const [startDate, setStartDate] = useState(new Date());

  const endpoint = 'http://localhost:3000/api/tests'

  const createTest = async (e) => {
    e.preventDefault()
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          date: new Date().toISOString(),
          name: "fms",
          result: 13,
          type: "MOBILITY"
        }
      )
    })

  }

  return (
    <Box>
      <Stack
        bg={'gray.50'}
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}>
        <Heading
          lineHeight={1.1}
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          bgGradient='linear(to-r,brand.600, brand.500, brand.400, brand.300)'
          bgClip='text'
        >
          Valoración cliente
        </Heading>
        <Box as={'form'} mt={10} onSubmit={createTest}>

          <FormControl isRequired>
            <FormLabel color={'brand.500'} fontSize='lg' marginTop={'15px'}>
              Test
            </FormLabel>
            <Input as='select' id='coach' placeholder='Entrenador'>
              <option>FMS - Valoración funcional del movimiento</option>
            </Input>
          </FormControl>
          <FormControl isRequired >
            <FormLabel color={'brand.500'} fontSize='lg' marginTop={'15px'}>
              Fecha de la valoración
            </FormLabel>
            <DatePicker id='dateInput' selected={startDate} onChange={(Date) => setStartDate(Date)} locale="es" dateFormat={'dd-MM-yyy'} />
          </FormControl>
          <FormControl isRequired mb={10}>
            <FormLabel color={'brand.500'} fontSize='lg' marginTop={'15px'}>
              Puntuación
            </FormLabel>
            <NumberInput defaultValue={0} min={0} max={3}
              step={5}
              size='sm'
              borderColor={'gray.100'}
              bgColor='white'>
              <NumberInputField _focus={{ borderColor: 'brand.300' }} borderRadius={'10px'} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button type='submit' bgGradient="linear(to-r, brand.300,brand.500,brand.300)"
            color="white"
            _hover={{
              bgGradient: 'linear(to-r, brand.500,brand.300,brand.500)',
              boxShadow: 'xl',
            }}
            isFullWidth>
            Enviar
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default TestsForm