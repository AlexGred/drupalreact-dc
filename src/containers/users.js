import React, {Component} from 'react';

export default class Users extends Component {

  render() {
    let data = this.props.users;

    var userData = data.map((item, index) => {
      let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(item.user_picture);

      return (
        <div className='user-item' key={index}>
          <div>{item.uid}</div>
          <img className='img' src={img} />
        </div>
      );
    });

    return (
      <div>
        {userData}
      </div>
    );
  }
}