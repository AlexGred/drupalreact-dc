import React, {Component} from 'react';

export default class Modal extends Component {

  closeModal = (modal) => {
    this.props.closeModal(modal);
  } 

  render() {
    let { children, isFetching } = this.props;
    let newChildren = React.cloneElement(children, { classModal: 'modal__throbber' });
    let noBackground = ''; 

    if (isFetching) {
      noBackground = ' modal_no-background';
    }
    else {
      noBackground = '';
    }

    return (
      <div className='modal'>
        <div className='modal__layer modal_fixed'></div>
        <div className={'modal__wrapper modal_absolute' + noBackground}>
          <div onClick={() => this.closeModal(false)} className='modal__close modal__close_position'>
            <span className='close modal__close-btn'></span>
          </div>
          { newChildren }
        </div>
      </div>
    );
  }
}