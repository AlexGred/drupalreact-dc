import React, {Component} from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import User from '../companents/User';

export default class Users extends Component {

  render() {
    let data = this.props.users;

    var userData = data.map((item, index) => {
      let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(item.user_picture);

      return (
        <div className='item-user uk-width-1-2 uk-width-1-3@s uk-width-1-4@m' key={index}>
          <div uid={item.uid} className='user-link'>
            <img className='img' src={img} />
          </div>
          <div uid={item.uid} className='user-link'>
            <div className='name'>{item.field_surname}</div>
          </div>
          <div className='post'>{item.field_post}</div>
          <div className='hired'>{item.field_hired}</div>

          <Router>
            <Route exact path='/user/:uid' component={User} />
          </Router> 
        </div> 
      );
    });

    return (
      <div className='uk-grid'>
        {userData}
      </div>
    );
  }
}