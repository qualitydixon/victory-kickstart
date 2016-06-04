import React, { PropTypes } from 'react'
import header from 'file!../graphics/steph_header.jpg'

const style = {
  fontSize: '5vw',
  backgroundImage: header,
}

const lastName = {
  fontWeight: 'bold',
  color: '#CFD8DC',
}

const firstName = {
  fontSize: '4vw',
  color: '#FFFFFF',
}
export default function Header (props) {
  return (
    <div style={style}>
      <span style={firstName}>{'steph'}</span><span style={lastName}>{'CURRY'}</span>
    </div>
  )
}
