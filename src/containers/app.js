import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from '../companents/users';
import ErrorPage from '../companents/errorpage';
import Throbber from '../companents/throbber';


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
    let userData = this.state.users;

    if (this.state.throbber) {

      if (this.state.response) {
        return (
          <div className='users'>
            <Users users={userData} />
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

function mapStateToProps(state) {
  return {
    source: state.source
  };
}

export default connect(mapStateToProps)(App);