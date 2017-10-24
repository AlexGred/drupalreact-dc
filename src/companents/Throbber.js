import React, {Component} from 'react';

export default class Throbber extends Component {

  render() {
    
    return (
      <div className='throbber'>
        <div className='uk-grid'>
          <div className='uk-width-1-1 uk-text-center'>
            <div data-uk-spinner={''} />
          </div>
        </div>
      </div>
    );
  }
}