import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart, VictoryArea, VictoryStack } from 'victory'
import * as stats from '../utils/helpers'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Header from './Header'
import Overview from './Overview'
import ChartFrame from './ChartFrame'


const pointsData = stats.getPoints()
const pointsAltScale = stats.getPointsAltScale()
const assistData = stats.getAssists()
const rebounds = stats.getRebounds()
const reboundsTime = stats.getReboundsTime()

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
      overviewData: pointsData,
      overviewLabels: [10, 30, 50],
    }
  }

  handleScaleChange = (event, index, value) => this.setState({ data: value === 2 ? pointsAltScale : pointsData })
  handleDataChange = (event, index, value) => this.setState({
    overviewData: value === 2 ? reboundsTime : pointsData,
    overviewLabels: value === 2 ? [5, 10] : [10, 30, 50] })

  render () {
    return (
      <div style={containerStyle}>
        <Header/>
        <div style={overviewContainer}>
          <DropDownMenu value={1} onChange={this.handleDataChange}>
            <MenuItem value={1} primaryText='points' />
            <MenuItem value={2} primaryText='rebounds' />
          </DropDownMenu>
        <ChartFrame>
          <Overview isTime={this.state.isTime} data={this.state.overviewData} value={this.state.value} labels={this.state.overviewLabels} />
        </ChartFrame>
        </div>
        <div style={chartContainer}>
          <ChartFrame title='3PT FGM Per Game'>
            <VictoryChart
              width={800}
              domainPadding={{x: 15, y: 0}}>
              <VictoryBar
                style={{data: {fill: warriorBlue, width: 4}}}
                data={stats.getThrees()} />
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
              data={stats.getTotalThrees()} />
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
              data={rebounds}
            />
          </VictoryStack>
        </div>
      </div>
    )
  }
}
