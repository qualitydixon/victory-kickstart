import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart, VictoryArea, VictoryStack } from 'victory'
import { getPoints, getHeaders, getTotalThrees, getThrees, getAssists, getRebounds } from '../utils/helpers'
import Header from './Header'
import Overview from './Overview'


const pointsData = getPoints()
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
          <VictoryChart width={800}>
            <VictoryBar
              style={{data: {fill: warriorBlue}}}
              data={this.state.overviewData} />
          </VictoryChart>
          <VictoryChart>
            <VictoryBar
              style={{data: {fill: warriorYellow}}}
              data={getThrees()} />
          </VictoryChart>
          <VictoryChart>
            <VictoryAxis />
            <VictoryLine
              data={getTotalThrees()} />
          </VictoryChart>
          <VictoryStack height={500}>
          <VictoryArea
            data={getPoints()}
          />
          <VictoryArea
            data={getAssists()}
          />
          <VictoryArea
            data={getRebounds()}
          />
        </VictoryStack>
        </div>
      </div>
    )
  }
}
