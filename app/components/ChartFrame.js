import React, { PropTypes, Component } from 'react'

const style = {
  background: '#F4F4F4',
  width: '40vw',
}

export default class ChartFrame extends Component {
  render () {
    return (
      <div style={style}>
        {this.props.children}
      </div>
    )
  }
}

ChartFrame.propTypes = {
  children: PropTypes.any,
}
