import React, { PropTypes } from 'react'
import ChartFrame from './ChartFrame'
import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'
import { getPoints, getAssists } from '../utils/helpers'
import DropDownMenu from 'material-ui/DropDownMenu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MenuItem from 'material-ui/MenuItem'
const warriorBlue = '#1A64B7'
const container = {
  display: 'flex',
  justifyContent: 'space-around',
  width: '90vw',
}

const dataCard = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#F4F4F4',
  color: '#000000',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
}
export default function Overview (props) {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div style={container}>
      <div style={dataCard}>
        <h2>{'15-16 Regular Season Averages'}</h2>
        <ul style={{listStyleType: 'none'}}>
          <li>{'30.1 pts'}</li>
          <li>{'5.4 reb'}</li>
          <li>{'6.7 ast'}</li>
          <li>{'2.14 stl'}</li>
        </ul>
      </div>
      <ChartFrame>
        <DropDownMenu value={props.value} onChange={props.handleChange}>
          <MenuItem value={1} primaryText='Never' />
          <MenuItem value={2} primaryText='Every Night' />
          <MenuItem value={3} primaryText='Weeknights' />
          <MenuItem value={4} primaryText='Weekends' />
          <MenuItem value={5} primaryText='Weekly' />
        </DropDownMenu>
        <VictoryChart width={800}
          domainPadding={{x: 15, y: 5}}>
          <VictoryAxis
            scale='time'
            style={{tickLabels: {angle: 45}, data: {fontSize: 16}}}
            tickFormat={(x) => ((x.getMonth() + 1) + '-' + x.getDate())} />
          <VictoryAxis dependentAxis
            style={{grid: {stroke: '#424242', strokeWidth: 1}}}
            tickValues={[10, 30, 50]} />
          <VictoryBar
            style={{data: {fill: warriorBlue}}}
            data={getPoints()} />
        </VictoryChart>
      </ChartFrame>
    </div>
    </MuiThemeProvider>
  )
}
