import React, { PropTypes } from 'react'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'

export default function Overview (props) {
  return (
    <VictoryChart
      domainPadding={{x: 15, y: 0}} >
      <VictoryAxis
        scale={'time'}
        style={{tickLabels: {angle: 45}, data: {fontSize: 16}}}
        tickFormat={(x) => ((x.getMonth() + 1) + '-' + x.getDate())} />
      <VictoryAxis dependentAxis
        style={{grid: {stroke: '#424242', strokeWidth: 1}}} />
      <VictoryBar
        animate={{duration: 2000}}
        style={{data: {fill: '#1A64B7', width: 2}}}
        data={props.data}/>
    </VictoryChart>
  )
}

Overview.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
}
