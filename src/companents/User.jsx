import React, { Component } from 'react';
import ErrorPage from './ErrorPage';
import Throbber from './Throbber';

export default class User extends Component {

  drupalgiveRender(drupalgive) {
    let html = [];

    drupalgive.forEach((element, index) => {
    html.push(<li key={index} className='drupalgive-item'><a href={element.field_drupalgive_title_1}>{element.field_drupalgive_title}</a></li>);
    });

    return html;
  }

  render() {
    let { user, classModal, drupalgive } = this.props;
    let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(user.user_picture);

    if (this.props.isFetching) {

      return (
        <div className={'throbber' + classModal}>
          <Throbber />
        </div>
      );
    }
    else {

      if (this.props.status) {
        
        return (
          <div className='user'>
            <div className='uk-grid'>
              <div className='uk-width-1-3 wrap-img'>
                <img src={img} alt='' />
              </div>
              <div className='uk-width-2-3 wrap-text'>
                <div className='field-name'>
                  <div className='text'>
                    {user.name}
                  </div>
                </div>
                <div className='field-post'>
                  <div className='text'>
                    {user.field_post}
                  </div>
                </div>
                <div className='field-hired'>
                  <div className='label'>
                    
                  </div>
                  <div className='text'>
                    {user.field_hired}
                  </div>
                </div>
                <div className='field-obrazovanie'>
                  <div className='label'>
                    Образование:
                  </div>
                  <div className='text'>
                    {user.field_obrazovanie}
                  </div>
                </div>
              </div>
            </div>
            <div className='uk-grid'>
              <div className='uk-width-1-1 wrap-drupalgive'>
                <ul className='drupalgive-container'>
                  {this.drupalgiveRender(drupalgive)}
                </ul>
              </div>
              <div className='uk-width-1-1 wrap-description'>
                <div className='field-about'>
                  {user.field_o_sebe}
                </div>
              </div>
            </div>
          </div>
        );
      }
      else {

        return (
          <div className='error'>
            <ErrorPage />
          </div>
        );
      }
    }
  }
}