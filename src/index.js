import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import './styles/_style.less';


render (
  <App source='http://dev.drupal-coder.ru/api/users'/>,
  document.getElementById('root')
);