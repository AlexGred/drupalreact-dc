// Libraries
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Companents
import App from './containers/app';
import User from './companents/user';

// Route
import { HashRouter, Switch, Route } from 'react-router-dom';

// Styles
import 'jquery';
import './styles/_style.less';
import 'uikit';
import 'uikit/dist/css/uikit.min.css';

const store = createStore( () => {}, {});

/*render (
  <Provider store={store}>
    <App source='http://dev.drupal-coder.ru/api/users'/>
  </Provider>,

  document.getElementById('root')
);*/

render(
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/user' component={User}/>
    </Switch>
  </HashRouter>,

  document.getElementById('root')
);