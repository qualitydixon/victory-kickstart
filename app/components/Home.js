import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart, VictoryArea, VictoryStack } from 'victory'
import * as stats from '../utils/helpers'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Header from './Header'
import Overview from './Overview'
import ChartFrame from './ChartFrame'


const pointsTime = stats.getPoints()
const points = stats.getPointsAltScale()
const assists = stats.getAssists()
const rebounds = stats.getRebounds()
const reboundsTime = stats.getReboundsTime()
const totalThrees = stats.getTotalThrees()

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
      overviewData: pointsTime,
      overviewLabels: [10, 30, 50],
      y: [2, 3, 4, 5, 10, 20, 100],
    }
  }
  componentDidMount () {
  }
  getYFunction () {
    return true
  }
  handleDataChange = (event, index, value) => this.setState({
    overviewData: value === 2 ? reboundsTime : pointsTime,
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
              height={600}
              data={this.state.y.map((val, idx) => Object.assign({y: val}, {x: idx}))}/>
          </VictoryChart>
          <VictoryStack
            style={{data: {width: 4}}}
            colorScale={'qualitative'}>
            <VictoryBar
              data={points}
            />
            <VictoryBar
              data={assists}
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
