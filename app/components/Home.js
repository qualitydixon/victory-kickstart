import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart, VictoryArea, VictoryStack } from 'victory'
import * as stats from '../utils/helpers'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import Header from './Header'
import Overview from './Overview'


const pointsTime = stats.getPointsTime()
const points = stats.getPoints()
const assists = stats.getAssists()
const assistsTime = stats.getAssistsTime()
const rebounds = stats.getRebounds()
const reboundsTime = stats.getReboundsTime()
const totalThrees = stats.getTotalThrees()

const warriorBlue = '#1A64B7'
const warriorYellow = '#FBBF16'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const paperStyle = {
  width: '50vw',
  margin: '10px',
  textAlign: 'center',
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

const dataSets = [pointsTime, reboundsTime, assistsTime]
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
  getYFunction () {
    return true
  }
  handleDataChange = (event, index, value) => {
    this.setState({
      overviewData: dataSets[index],
      value: value,
      overviewLabels: value === 1 ? [10, 30, 50] : [5, 10] })
  }
  render () {
    return (
      <div style={containerStyle}>
        <Header/>
        <div style={overviewContainer}>
          <DropDownMenu value={this.state.value} onChange={this.handleDataChange}>
            <MenuItem value={1} primaryText='points' />
            <MenuItem value={2} primaryText='rebounds' />
            <MenuItem value={3} primaryText='assists' />
          </DropDownMenu>
        <Paper style={paperStyle} zDepth={3}>
          <Overview isTime={this.state.isTime} data={this.state.overviewData} value={this.state.value} labels={this.state.overviewLabels} />
        </Paper>
        </div>
        <div style={chartContainer}>
          <Paper style={paperStyle} zDepth={3}>
            <VictoryChart
              domainPadding={{x: 15, y: 0}}>
              <VictoryBar
                style={{data: {fill: warriorBlue, width: 4}}}
                data={stats.getThrees()} />
              <VictoryAxis
                style={{ axis: {stroke: 'transparent'}, tickLabels: {angle: 45}, data: {fontSize: 16} }} />
              <VictoryAxis dependentAxis
                style={{ axis: {stroke: 'transparent'}, ticks: {stroke: 'transparent'}, grid: {stroke: '#424242', strokeWidth: 1} }} />
            </VictoryChart>
          </Paper>
          <Paper zDepth={3}>
            <VictoryChart>
              <VictoryAxis />
              <VictoryLine
                height={600}
                data={this.state.y.map((val, idx) => Object.assign({y: val}, {x: idx}))}/>
            </VictoryChart>
          </Paper>
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
          <div style={{width: '100%'}}>
            <Paper>
              <svg viewBox='0 0 500 300'>
                <VictoryAxis
                  style={{
                    data: {
                      strokeWidth: 2,
                    },
                    labels: {
                      fontSize: 16,
                    },
                  }}
                  domain={[0, 80]}
                  orientation='bottom'
                  standalone={false}
                />
                <VictoryAxis dependent
                  style={{
                    axis: {stroke: warriorYellow, strokeWidth: 2},
                    ticks: {stroke: warriorYellow},
                    tickLabels: {fontSize: 12},
                  }}
                  domain={[0, 400]}
                  offsetX={45}
                  orientation='right'
                  standalone={false}
                />
                <VictoryAxis dependent
                  style={{
                    axis: {stroke: warriorBlue, strokeWidth: 2},
                    ticks: {stroke: warriorBlue},
                    tickLabels: {fontSize: 12},
                  }}
                  offsetX={45}
                  domain={[0, 12]}
                  orientation='left'
                  standalone={false}
                />
                <VictoryLine
                  style={{
                    data: {
                      stroke: warriorYellow,
                      strokeWidth: 2,
                    },
                  }}
                  data={totalThrees}
                  domain={{
                    x: [0, 80],
                    y: [0, 400],
                  }}
                  standalone={false}
                />
                <VictoryBar
                  style={{data: {fill: warriorBlue, width: 4}}}
                  data={stats.getThrees()}
                  standalone={false}
                />
              </svg>
            </Paper>
          </div>
        </div>
      </div>
    )
  }
}
