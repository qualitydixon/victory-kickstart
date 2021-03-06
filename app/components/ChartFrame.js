import React, { PropTypes, Component } from 'react'

const style = {
  background: '#F4F4F4',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  width: '80vw',
  margin: '10px',
  color: 'black',
  textAlign: 'center',
}

export default class ChartFrame extends Component {
  render () {
    return (
      <div style={style}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

ChartFrame.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
}
