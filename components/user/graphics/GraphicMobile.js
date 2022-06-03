import {
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
  VictoryTheme,
  createContainer
} from 'victory'
import styled from '@emotion/styled'
import React from 'react'

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

  const VictoryZoomVoronoiContainer = createContainer('voronoi')
  const min = 0
  const max = 10

  return (
    <>
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryZoomVoronoiContainer
            labels={({ datum }) => ` Resultado:${datum.y}
                Fecha:${datum.x}`}
          />
        }
      >
        <VictoryAxis
          dependentAxis
          tickFormat={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />

        <VictoryLine
          data={props.data}
          style={{
            labels: {
              fontSize: 1,
              fill: 'none'
            }
          }}
        />
        <VictoryScatter
          data={props.data}
          dataComponent={<ScatterPoint min={min} max={max} />}
          style={{
            labels: {
              fontSize: 12
            }
          }}
        />
      </VictoryChart>
    </>
  )
}
