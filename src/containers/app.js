import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Users from '../companents/users';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }
 
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(user => {      
      this.setState({
        users: user.data
      });
    });
  }

  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }
 
  render() {
    let userData = this.state.users;

    return (
      <div className='users'>
        <Users users={userData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    source: state.source
  };
}

export default connect(mapStateToProps)(App);