import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart, VictoryArea, VictoryStack } from 'victory'
import { getPoints, getPointsAltScale, getHeaders, getTotalThrees, getThrees, getAssists, getRebounds } from '../utils/helpers'
import Header from './Header'
import Overview from './Overview'


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
        <Overview isTime={this.state.isTime} data={this.state.overviewData} value={this.state.value} handleScaleChange={this.handleScaleChange} handleDataChange={this.handleDataChange} />
        </div>
        <div className='chartContainer'>
          <VictoryChart>
            <VictoryBar
              style={{data: {fill: warriorBlue, width: 4}}}
              data={getThrees()} />
          </VictoryChart>
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
