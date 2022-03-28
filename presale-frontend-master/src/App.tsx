import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'
import './styles/sb-admin-2.min.css'

import { Provider } from 'react-redux'
import { Web3ReactProvider } from '@web3-react/core'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import { getLibrary } from 'utils/web3React'
import store from 'state'

// import Login from './components/Account/Login'
import Admin from './components/Admin/Admin'
import Home from './components/Home/Home'

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false)

  const palletType = isDark ? 'dark' : 'light'
  const darkTheme = createTheme({
    palette: {
      type: palletType,
    },
  })

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home setIsDark={setIsDark} isDark={isDark} />
              </Route>
              <Route path="/app">
                <Admin setIsDark={setIsDark} isDark={isDark} />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default App
