import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Users from '../companents/Users';
import ErrorPage from '../companents/ErrorPage';
import Throbber from '../companents/Throbber';
import * as pageActions from '../actions/PageActions';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      throbber: false,
      response: true
    };
  }

  componentWillMount() {
    this.setState({
      throbber: false,
      response: true
    });
  }
 
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(user => {     
      setTimeout(() => {
        this.setState({
          throbber: true,
          users: user.data,
          response: true
        });
      }, 600);
    }).catch(() => {
      this.setState({
        throbber: true,
        response: false
      });
    });
  }
 
  render() {
    const { getUser } = this.props.pageActions;
    let userData = this.state.users;
    let uid = this.props.uid;

    if (this.state.throbber) {

      if (this.state.response) {
        return (
          <div className='users'>
            <Users users={userData} uid={uid} getUser={getUser} />
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
    else {
      
      return (
        <div className='throbber'>
          <Throbber />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    source: state.users.source,
    uid : state.user.uid
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);