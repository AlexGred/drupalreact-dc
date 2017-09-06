import React, {Component} from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import User from '../companents/user';

export default class Users extends Component {

  render() {
    let data = this.props.users;

    var userData = data.map((item, index) => {
      let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(item.user_picture);

      return (
        <div className='item-user uk-width-1-2 uk-width-1-3@s uk-width-1-4@m' key={index}>
          <Link to={`/user/${item.uid}`}>
            <img className='img' src={img} />
          </Link>
          <Link to={`/user/${item.uid}`}>
            <div className='name'>{item.field_surname}</div>
          </Link>
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