import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './containers/app';
import 'jquery';
import './styles/_style.less';
import 'uikit';
import 'uikit/dist/css/uikit.min.css';


render (
  <App source='http://dev.drupal-coder.ru/api/users'/>,
  document.getElementById('root')
);