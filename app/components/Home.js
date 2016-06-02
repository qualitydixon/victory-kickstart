import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart, VictoryArea, VictoryStack } from 'victory'
import { getPoints, getHeaders, getTotalThrees, getThrees, getAssists, getRebounds } from '../utils/helpers'
import Header from './Header'
import Overview from './Overview'

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
      overviewData: getPoints(),
    }
  }

  handleScaleChange = (event, index, value) => this.setState({value})
  handleDataChange = (event, index, value) => this.setState({value})

  render () {
    return (
      <div style={containerStyle}>
        <Header/>
        <div style={overviewContainer}>
        <Overview isTime={this.state.isTime} value={this.state.value} handleScaleChange={this.handleScaleChange} handleDataChange={this.handleDataChange} />
        </div>
        <div className='chartContainer'>
          <VictoryChart width={800}>
            <VictoryBar
              style={{data: {fill: warriorBlue}}}
              data={getPoints()} />
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
