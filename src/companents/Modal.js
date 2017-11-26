import React, {Component} from 'react';
import User from './User';

export default class Modal extends Component {

  closeModal = (modal) => {
    this.props.closeModal(modal);
  } 

  render() {
    let user = this.props.user;
    let status = this.props.status;
    let isFetching = this.props.isFetching;

    return (
      <div className='modal'>
        <div onClick={() => this.closeModal(false)} className='modal-close'>
        </div>
        <User user={user} status={status} isFetching={isFetching} />
      </div>
    );
  }
}