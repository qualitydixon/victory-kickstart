import React, { PropTypes } from 'react'

const imgURL = '../graphics/steph_header.jpg'
const style = {
  fontSize: '5vw',
  backgroundImage: 'url(' + imgURL + ')',
}

const lastName = {
  fontWeight: 'bold',
  color: '#1E1E1E',
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
