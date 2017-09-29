import React, { Component } from 'react'
import ErrorPage from './ErrorPage'
// import Throbber from './Throbber'

export default class User extends Component {

  constructor(props) {
    super(props)

    this.state = {
      throbber: false,
    }
  }

  render() {
    let user = this.props.user
    let img = 'http://dev.drupal-coder.ru' + decodeURIComponent(user.user_picture)

    // if (this.state.throbber) {

      if (this.props.status) {

        return (
          <div>
            <div className='uk-grid'>
              <div className='uk-width-1-3 wrap-img'>
                <img src={img} />
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
              <div className='uk-width-1-1 wrap-description'>
                <div className='field-about'>
                  {user.field_o_sebe}
                </div>
              </div>
            </div>
          </div>
        )
      }
      else {

        return (
          <div className='error'>
            <ErrorPage />
          </div>
        )
      }
    }
    /* else {

      return (
        <div className='throbber'>
          <Throbber />
        </div>
      )
    }
  } */
}