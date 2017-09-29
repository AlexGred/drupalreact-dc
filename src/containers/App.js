import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import Users from '../companents/Users'
import ErrorPage from '../companents/ErrorPage'
import Throbber from '../companents/Throbber'
import Modal from '../companents/Modal'
import * as pageActions from '../actions/PageActions'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      throbber: false,
      status: false,
      statusApp: true,
      user: []
    }
  }
 
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(user => {     
      setTimeout(() => {
        this.setState({
          throbber: true,
          users: user.data,
          statusApp: true
        })
      }, 600)
    }).catch(() => {
      this.setState({
        throbber: true,
        statusApp: false
      })
    })
  }
 
  render() {
    const { getUser } = this.props.pageActions
    let userData = this.state.users
    let user = this.props.user
    let status = this.props.status

    if (status == 'success') {
      return (
        <div className='users'>
          <Modal user={user} status={status} />
        </div>
      )
    }

    if (this.state.throbber) {

      if (this.state.statusApp) {
        return (
          <div className='users'>
            <Users users={userData} getUser={getUser} />
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
    else {
      
      return (
        <div className='throbber'>
          <Throbber />
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    source: state.users.source,
    user : state.user,
    status: state.user.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)