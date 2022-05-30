import { VictoryChart, VictoryLine, VictoryScatter } from 'victory'
import styled from '@emotion/styled'
import React from 'react'
import { Container } from '@chakra-ui/react'

export default function UserTests(props) {
  const StyledPoint = styled.circle`
    fill: ${props => props.color};
  `

  const colors = ['#FF8C94', '#FFAAA6', '#FFD3B5', '#DCEDC2', '#A8E6CE']
  // console.log(props.tests)
  const ScatterPoint = ({ x, y, datum, min, max }) => {
    const i = React.useMemo(() => {
      return Math.floor(((datum.y - min) / (max - min)) * (colors.length - 1))
    }, [datum, min, max])

    return <StyledPoint color={colors[i]} cx={x} cy={y} r={6} />
  }

  const data = [
    { x: 'Jan', y: 60 },
    { x: 'Feb', y: 60 },
    { x: 'Mar', y: 47 },
    { x: 'Apr', y: 51 },
    { x: 'May', y: 57 },
    { x: 'Jun', y: 62 }
  ]

  

  const temperatures = data.map(({ y }) => y)
  const min = Math.min(...temperatures)
  const max = Math.max(...temperatures)

  return (
    <>
      <Container maxW="xl">
        {' '}
        <VictoryChart>
          <VictoryLine data={data} />
          <VictoryScatter
            data={data}
            dataComponent={<ScatterPoint min={min} max={max} />}
          />
        </VictoryChart>
      </Container>
    </>
  )
}
