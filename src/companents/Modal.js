import React, {Component} from 'react'
import User from './User'

export default class Modal extends Component {

  render() {
    let uid = this.props.uid

    return (
      <div className='modal'>
        <User uid={uid} />
        {uid}
      </div>
    )
  }
}