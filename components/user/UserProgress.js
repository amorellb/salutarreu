import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
  VictoryTheme
} from 'victory'
import styled from '@emotion/styled'
import React, {useState} from 'react'
import moment from 'moment'
import { Heading, Container, Button, ButtonGroup, Box } from '@chakra-ui/react'

export default function UserTests(props) {
  const StyledPoint = styled.circle`
    fill: ${props => props.color};
  `
  const [testGraphic, setTestGraphic] = useState("Test de Resistencia");
  const [buttonStrengthState, setButtonStrengthState] = useState("outline");
  const [buttonMobilityState, setButtonMobilityState] = useState("outline");
  const [buttonResistanceState, setButtonResistanceState] = useState("");

  const colors = ['#FF8C94', '#FFAAA6', '#FFD3B5', '#DCEDC2', '#A8E6CE']

  const ScatterPoint = ({ x, y, datum, min, max }) => {
    const i = React.useMemo(() => {
      return Math.floor(((datum.y - min) / (max - min)) * (colors.length - 1))
    }, [datum, min, max])

    return <StyledPoint color={colors[i]} cx={x} cy={y} r={6} />
  }

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

  const min = 0
  const max = 10
  let data= []

if(testGraphic==="Test de Fuerza"){
  data=testsFuerza
}else if(testGraphic==="Test de Resistencia"){
  data=testsResistencia
}else{
  data=testsVelocidad
}

const GraphicStateStrength = () =>{
  setTestGraphic("Test de Fuerza")
  setButtonMobilityState("outline")
  setButtonResistanceState("outline")
  setButtonStrengthState("")
}

const GraphicStateResistance = () =>{
  setTestGraphic("Test de Resistencia")
  setButtonMobilityState("outline")
  setButtonResistanceState("")
  setButtonStrengthState("outline")
}

const GraphicStateMobility = () =>{
  setTestGraphic("Test de Movilidad")
  setButtonMobilityState("")
  setButtonResistanceState("outline")
  setButtonStrengthState("outline")
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

      <VictoryChart theme={VictoryTheme.material} height={500} width={1500}>
        <VictoryAxis tickFormat={y => y} />


        <VictoryAxis
          dependentAxis
          tickFormat={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
            

        <VictoryLine data={data} />
        <VictoryScatter
          data={data}
          dataComponent={<ScatterPoint min={min} max={max} />}
        />
      </VictoryChart>

      <ButtonGroup spacing="6" >
        <Button colorScheme="green" variant={buttonStrengthState}
        onClick={()=>GraphicStateStrength()}>
          Fuerza
        </Button>
        <Button colorScheme="green" variant={buttonResistanceState}  onClick={()=>GraphicStateResistance()}>
          Resistencia
        </Button>
        <Button colorScheme="green" variant={buttonMobilityState}  onClick={()=>GraphicStateMobility()}>
          Movilidad
        </Button>
      </ButtonGroup>
      </Box>

    </>
  )
}
