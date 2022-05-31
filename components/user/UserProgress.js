import { VictoryChart, VictoryLine, VictoryScatter, VictoryAxis, VictoryTheme, VictoryContainer } from 'victory'
import styled from '@emotion/styled'
import React from 'react'
import Moment from 'moment';


export default function UserTests(props) {
  const StyledPoint = styled.circle`
    fill: ${props => props.color};
  `

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
      testsFuerza.push({ x: Moment(date).format('MMM'), y: result })
    } else if (type === 'RESISTANCE') {
      testsResistencia.push({ x: Moment(date).format('MMM'), y: result })
    } else {
      testsVelocidad.push({ x: Moment(date).format('MMM'), y: result })
    }
  })

  const min = 0
  const max = 10

  return (
    <>
      <VictoryChart
        containerComponent={<VictoryContainer responsive={false} />}
        theme={VictoryTheme.material}
        height={400} width={6000}
      >
        <VictoryAxis
          tickFormat={(y) => (y)}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <VictoryLine data={testsFuerza} />
        <VictoryScatter
          data={testsFuerza}
          dataComponent={<ScatterPoint min={min} max={max} />}
        />
      </VictoryChart>
      {' '}
      <VictoryChart>
        <VictoryLine data={testsVelocidad} />
        <VictoryScatter
          data={testsVelocidad}
          dataComponent={<ScatterPoint min={min} max={max} />}
        />
      </VictoryChart>
      {' '}
      <VictoryChart>
        <VictoryLine data={testsResistencia} />
        <VictoryScatter
          data={testsResistencia}
          dataComponent={<ScatterPoint min={min} max={max} />}
        />
      </VictoryChart>
    </>
  )
}
