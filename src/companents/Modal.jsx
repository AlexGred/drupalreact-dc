import React, {Component} from 'react';

export default class Modal extends Component {

  closeModal = (modal) => {
    this.props.closeModal(modal);
  } 

  render() {
    let { children, isFetching } = this.props;
    let newChildren = React.cloneElement(children, { classModal: ' modal-window__throbber' });
    let noBackground = ''; 

    if (isFetching) {
      noBackground = ' modal-window_no-background';
    }
    else {
      noBackground = '';
    }

    return (
      <div className='modal-window'>
        <div className='modal-window__layer modal-window_fixed'></div>
        <div className={'modal-window__wrapper modal-window_absolute' + noBackground}>
          <div onClick={() => this.closeModal(false)} className='modal-window__close modal-window__close_position'>
            <span className='close modal-window__close-btn'></span>
          </div>
          { newChildren }
        </div>
      </div>
    );
  }
}