import React, { Component } from 'react'
import { VictoryLine, VictoryBar, VictoryScatter, VictoryAxis, VictoryChart } from 'victory'
import data from '../data/curry_reg.json'
import { getPoints, getHeaders, getPM, getTO } from '../utils/helpers'

const warriorBlue = '#1A64B7'
const warriorYellow = '#FBBF16'
export default class Home extends Component {
  render () {
    return (
      <div className='chartContainer'>
        <VictoryChart width={800}>
          <VictoryBar
            style={{data: {fill: warriorBlue}}}
            data={getPoints()} />
        </VictoryChart>
        
        <VictoryChart width={800}>
          <VictoryBar
            style={{data: {fill: warriorYellow}}}
            data={getTO()} />
        </VictoryChart>
      </div>
    )
  }
}
