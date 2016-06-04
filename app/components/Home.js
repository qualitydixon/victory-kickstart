import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart, VictoryArea, VictoryStack } from 'victory'
import { getPoints, getPointsAltScale, getHeaders, getTotalThrees, getThrees, getAssists, getRebounds } from '../utils/helpers'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Header from './Header'
import Overview from './Overview'
import ChartFrame from './ChartFrame'


const pointsData = getPoints()
const pointsAltScale = getPointsAltScale()
const assistData = getAssists()
const reboundsData = getRebounds()

const warriorBlue = '#1A64B7'
const warriorYellow = '#FBBF16'
const barStyle = {
  fill: warriorYellow,
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const overviewContainer = {
  display: 'flex',
  justifyContent: 'space-around',
}

const chartContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 1,
      isTime: true,
      scale: 'games',
      overviewData: pointsData,
    }
  }

  handleScaleChange = (event, index, value) => this.setState(
    {
      scale: value === 2 ? 'games' : 'time',
    })
  handleDataChange = (event, index, value) => this.setState(
    {
      overviewData: value === 2 ? reboundsData : pointsData,
    }
  )

  render () {
    return (
      <div style={containerStyle}>
        <Header/>
        <div style={overviewContainer}>
          <DropDownMenu value={1} onChange={this.state.handleScaleChange}>
            <MenuItem value={1} label='scale' primaryText='time' />
            <MenuItem value={2} label='scale' primaryText='games' />
          </DropDownMenu>
          <DropDownMenu value={1} onChange={this.state.handleDataChange}>
            <MenuItem value={1} primaryText='points' />
            <MenuItem value={2} primaryText='rebounds' />
          </DropDownMenu>
        <ChartFrame>
          <Overview isTime={this.state.isTime} data={this.state.overviewData} value={this.state.value} />
        </ChartFrame>
        </div>
        <div style={chartContainer}>
          <ChartFrame title='3PT FGM Per Game'>
            <VictoryChart
              width={800}
              domainPadding={{x: 15, y: 0}}>
              <VictoryBar
                style={{data: {fill: warriorBlue, width: 4}}}
                data={getThrees()} />
              <VictoryAxis
                style={{ axis: {stroke: 'transparent'}, tickLabels: {angle: 45}, data: {fontSize: 16} }} />
              <VictoryAxis dependentAxis
                style={{ axis: {stroke: 'transparent'}, ticks: {stroke: 'transparent'}, grid: {stroke: '#424242', strokeWidth: 1} }}
                tickValues={[5, 10]} />
            </VictoryChart>
          </ChartFrame>
          <VictoryChart>
            <VictoryAxis />
            <VictoryLine
              data={getTotalThrees()} />
          </VictoryChart>
          <VictoryStack
            style={{data: {width: 4}}}
            colorScale={"qualitative"}>
            <VictoryBar
              data={pointsAltScale}
            />
            <VictoryBar
              data={assistData}
            />
            <VictoryBar
              data={reboundsData}
            />
          </VictoryStack>
        </div>
      </div>
    )
  }
}
