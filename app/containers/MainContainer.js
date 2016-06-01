import React, { PropTypes, Component } from 'react'
import Home from '../components/Home'
import injectTapEventPlugin from 'react-tap-event-plugin'
require('../stylesheets/main.less')

injectTapEventPlugin()

export default class MainContainer extends Component {
  render () {
    return (
      <div className='main'>
        <Home />
      </div>
    )
  }
}

MainContainer.propTypes = {
  children: PropTypes.any,
}
