import React, { PropTypes } from 'react'
import ChartFrame from './ChartFrame'
import { VictoryChart, VictoryBar } from 'victory'
import { getPoints } from '../utils/helpers'
const warriorBlue = '#1A64B7'
const container = {
  display: 'flex',
}
export default function Overview (props) {
  return (
    <div style={container}>
      <ChartFrame>
        <VictoryChart width={800}>
          <VictoryBar
            style={{data: {fill: warriorBlue}}}
            data={getPoints()} />
        </VictoryChart>
      </ChartFrame>
    </div>
  )
}
