import React, { PropTypes } from 'react'
import ChartFrame from './ChartFrame'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import { getPoints, getAssists } from '../utils/helpers'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
const warriorBlue = '#1A64B7'
const container = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '90vw',
}

export default function Overview (props) {
  return (
    <div style={container}>
      <ChartFrame>
        <DropDownMenu value={1} onChange={props.handleScaleChange}>
          <MenuItem value={1} label='scale' primaryText='time' />
          <MenuItem value={2} label='scale' primaryText='games' />
        </DropDownMenu>
        <DropDownMenu value={1} onChange={props.handleDataChange}>
          <MenuItem value={1} primaryText='points' />
          <MenuItem value={2} primaryText='rebounds' />
        </DropDownMenu>
        <VictoryChart width={800}
          domainPadding={{x: 15, y: 5}}>
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
      </ChartFrame>
    </div>
  )
}

Overview.propTypes = {
  value: PropTypes.number.isRequired,
  isTime: PropTypes.bool.isRequired,
  handleScaleChange: PropTypes.func.isRequired,
  handleDataChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
}
