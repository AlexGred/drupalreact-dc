import React, {Component} from 'react';

export default class Users extends Component {

  getUser = (uid) => {
    this.props.getUser(uid);
  } 

  render() {
    let data = this.props.users;

    var userData = data.map((item, index) => {
      let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(item.user_picture);

      return (

        <div className='item-user uk-width-1-2 uk-width-1-3@s uk-text-center' key={index}>
          <div className='item-user-wrapper'>
            <div onClick={() => this.getUser(item.uid)} className='user-img'>
              <img className='img' src={img} alt='' />
            </div>
            <div onClick={() => this.getUser(item.uid)} className='user-link'>
              <div className='name'>{item.field_surname}</div>
            </div>
            <div className='post'>{item.field_post}</div>
          </div>
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