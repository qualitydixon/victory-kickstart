import React, { PropTypes, Component } from 'react'
import Home from '../components/Home'
import injectTapEventPlugin from 'react-tap-event-plugin'
require('../stylesheets/main.less')

injectTapEventPlugin()
const style = {
  background: '#030A12',
}
export default class MainContainer extends Component {
  render () {
    return (
      <div style={style}>
        <Home />
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.any,
}
