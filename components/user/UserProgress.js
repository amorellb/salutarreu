import React, { useState, useEffect } from 'react'
import moment from 'moment'
import {
  Heading,
  Container,
  Button,
  ButtonGroup,
  Box,
  useMediaQuery
} from '@chakra-ui/react'
import GraphicDesktop from './graphics/GraphicDesktop'
import GraphicMobile from './graphics/GraphicMobile'

export default function UserTests(props) {
  const [testGraphic, setTestGraphic] = useState('Test de Resistencia')
  const [buttonStrengthState, setButtonStrengthState] = useState('outline')
  const [buttonMobilityState, setButtonMobilityState] = useState('outline')
  const [buttonResistanceState, setButtonResistanceState] = useState('')
  const [isLargerThan1280] = useMediaQuery('(min-width: 950px)')
  const [isLargerThan1280px, setIsLargerThan1280px] = useState(false)

  useEffect(() => {
    setIsLargerThan1280px(isLargerThan1280)
  }, [isLargerThan1280])

  const testsFuerza = []
  const testsVelocidad = []
  const testsResistencia = []

  props.tests.forEach(({ date, result, type }) => {
    if (type === 'STREGTH') {
      testsFuerza.push({ x: moment(date).format('D-M-Y'), y: result })
    } else if (type === 'RESISTANCE') {
      testsResistencia.push({ x: moment(date).format('D-M-Y'), y: result })
    } else {
      testsVelocidad.push({ x: moment(date).format('D-M-Y'), y: result })
    }
  })

  let data = []

  if (testGraphic === 'Test de Fuerza') {
    data = testsFuerza
  } else if (testGraphic === 'Test de Resistencia') {
    data = testsResistencia
  } else {
    data = testsVelocidad
  }

  const GraphicStateStrength = () => {
    setTestGraphic('Test de Fuerza')
    setButtonMobilityState('outline')
    setButtonResistanceState('outline')
    setButtonStrengthState('')
  }

  const GraphicStateResistance = () => {
    setTestGraphic('Test de Resistencia')
    setButtonMobilityState('outline')
    setButtonResistanceState('')
    setButtonStrengthState('outline')
  }

  const GraphicStateMobility = () => {
    setTestGraphic('Test de Movilidad')
    setButtonMobilityState('')
    setButtonResistanceState('outline')
    setButtonStrengthState('outline')
  }

  return (
    <>
      <Box textAlign="center">
        <Container as={'main'} textAlign="center">
          <Heading
            as={'h1'}
            fontStyle="italic"
            lineHeight={1.1}
            fontSize={{ base: '5xl', lg: '6xl' }}
            bgGradient="linear(to-r,brand.700, brand.600, brand.400, brand.300)"
            bgClip="text"
          >
            {testGraphic}
          </Heading>
        </Container>

        {isLargerThan1280px ? (
          <GraphicDesktop data={data} />
        ) : (
          <GraphicMobile data={data} />
        )}

        <ButtonGroup spacing={{ base: '3', sm: '10' }}>
          <Button
            fontSize={{ base: 'sm', sm: 'lg' }}
            colorScheme="green"
            variant={buttonStrengthState}
            onClick={() => GraphicStateStrength()}
          >
            Fuerza
          </Button>
          <Button
            fontSize={{ base: 'sm', sm: 'lg' }}
            colorScheme="green"
            variant={buttonResistanceState}
            onClick={() => GraphicStateResistance()}
          >
            Resistencia
          </Button>
          <Button
            fontSize={{ base: 'sm', sm: 'lg' }}
            colorScheme="green"
            variant={buttonMobilityState}
            onClick={() => GraphicStateMobility()}
          >
            Movilidad
          </Button>
        </ButtonGroup>
      </Box>
    </>
  )
}
