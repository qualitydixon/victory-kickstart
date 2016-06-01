import React, { PropTypes, Component } from 'react'
import Home from '../components/Home'
require('../stylesheets/main.less')

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
