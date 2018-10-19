import * as serviceWorker from './serviceWorker';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

// Companents
import App from './containers/App';
// import AppUser from './containers/AppUser';

// Route
//import { HashRouter as Router, Switch, Route } from 'react-router-dom';

// Store
import configureStore from './store/configureStore';

// UI
import 'jquery';
import 'uikit';

// Styles
import 'uikit/dist/css/uikit.min.css';
import './styles/style.css';

const store = configureStore();

render(
  /* <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/user/:uid' component={AppUser}/>
      </Switch>
    </Router>
  </Provider>, */

  <App store={store} />,
  document.getElementById('root')
);

serviceWorker.unregister();
