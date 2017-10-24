import React, {Component} from 'react';
import User from './User';

export default class Modal extends Component {

  render() {
    let user = this.props.user;
    let status = this.props.status;
    let isFetching = this.props.isFetching;

    return (
      <div className='modal'>
        <User user={user} status={status} isFetching={isFetching} />
      </div>
    );
  }
}