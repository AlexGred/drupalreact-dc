import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Users from '../companents/Users';
import ErrorPage from '../companents/ErrorPage';
import Throbber from '../companents/Throbber';
import Modal from '../companents/Modal';
import User from '../companents/User';
import * as pageActions from '../actions/PageActions';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isFetching: true,
      statusApp: true,
      status: false,
      user: [],
    };
  }
 
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(user => {     
      setTimeout(() => {
        this.setState({
          isFetching: false,
          users: user.data,
          statusApp: true
        });
      }, 600);
    }).catch(() => {
      this.setState({
        isFetching: false,
        statusApp: false
      });
    });
  }
 
  render() {
    const { getUser, closeModal } = this.props.pageActions;
    let userData = this.state.users;
    let { user, status, isFetching } = this.props;

    if (status) {

      return (
        <div className='users'>
          <Modal closeModal={closeModal} isFetching={isFetching}>
            <User user={user} status={status} isFetching={isFetching} />
          </Modal>
          <Users users={userData} getUser={getUser} />
        </div>
      );
    }

    if (this.state.isFetching) {
      
      return (
        <div className='throbber'>
          <Throbber />
        </div>
      );
    }
    else {

      if (this.state.statusApp) {
        return (
          <div className='users'>
            <Users users={userData} getUser={getUser} />
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

const mapStateToProps = (state) => {

  return {
    source: state.users.source,
    user : state.user.user,
    status: state.user.status,
    isFetching: state.user.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);