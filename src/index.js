// Libraries
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Companents
import App from './containers/App'
import User from './companents/User'

// Route
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

// Store
import configureStore from './store/configureStore'

// UI
import 'jquery'
import 'uikit'

// Styles
import 'uikit/dist/css/uikit.min.css'
import './styles/style.less'

const store = configureStore()

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/user/:uid' component={User}/>
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root')
)