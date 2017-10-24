import React, {Component} from 'react';

export default class ErrorPage extends Component {

  render() {
    
    return (
      <div className='uk-grid'>
        <div className='uk-width-1-1'>
          Произошла ошибка. Обновите страницу.
        </div>
      </div>
    );
  }
}