import React, {Component} from 'react';

export default class Modal extends Component {

  closeModal = (modal) => {
    this.props.closeModal(modal);
  } 

  render() {
    let children = this.props.children;

    return (
      <div className='modal'>
        <div onClick={() => this.closeModal(false)} className='modal-close'>
        </div>
        { children }
      </div>
    );
  }
}