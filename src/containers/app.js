import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from '../companents/users';
import ErrorPage from '../companents/errorpage';


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
      this.setState({
        throbber: true,
        users: user.data,
        response: true
      });
    }).catch(() => {
      this.setState({
        throbber: true,
        response: false
      });
    });
  }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }
 
  render() {
    let userData = this.state.users;

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
}

function mapStateToProps(state) {
  return {
    source: state.source
  };
}

export default connect(mapStateToProps)(App);