import React, { PropTypes } from 'react'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
const warriorBlue = '#1A64B7'

export default function Overview (props) {
  return (
    <VictoryChart width={800}
      domainPadding={{x: 15, y: 0}}>
      <VictoryAxis
        scale={props.isTime ? 'time' : ''}
        style={{tickLabels: {angle: 45}, data: {fontSize: 16}}}
        tickFormat={(x) => ((x.getMonth() + 1) + '-' + x.getDate())} />
      <VictoryAxis dependentAxis
        style={{grid: {stroke: '#424242', strokeWidth: 1}}}
        tickValues={[10, 30, 50]} />
      <VictoryBar
        style={{data: {fill: warriorBlue, width: 4}}}
        data={props.data} />
    </VictoryChart>
  )
}

Overview.propTypes = {
  isTime: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
}
