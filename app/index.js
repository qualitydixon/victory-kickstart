import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainContainer from './containers/MainContainer'


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <MainContainer />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
