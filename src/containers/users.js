import React, {Component} from 'react';

export default class Users extends Component {

  render() {
    let data = this.props.users;

    console.log(data);

    var userData = data.map((item, index) => {
      let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(item.user_picture);

      return (
        <div className='item-user uk-width-1-2 uk-width-1-3@s uk-width-1-4@m' key={index}>
          <img className='img' src={img} />
          <div className='name'>{item.field_surname}</div>
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