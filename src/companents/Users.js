import React, {Component} from 'react';
// import User from '../companents/User'

export default class Users extends Component {

  getUser = (uid) => {
    this.props.getUser(uid);
  } 

  render() {
    let data = this.props.users;

    var userData = data.map((item, index) => {
      let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(item.user_picture);

      return (

        <div className='item-user uk-width-1-2 uk-width-1-3@s uk-width-1-4@m' key={index}>
          <div onClick={() => this.getUser(item.uid)} className='user-link'>
            <img className='img' src={img} />
          </div>
          <div onClick={() => this.getUser(item.uid)} className='user-link'>
            <div className='name'>{item.field_surname}</div>
          </div>
          <div className='post'>{item.field_post}</div>
          <div className='hired'>{item.field_hired}</div>
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