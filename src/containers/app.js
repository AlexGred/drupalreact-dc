import React, {Component} from 'react';
import axios from 'axios';
import Users from './users';


export default class App extends Component {

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

  componentWillUnmount() {
    this.serverRequest.abort();
  }
 
  render() {
    let userData = this.state.users;

    return (
      <div className='users'>
        <Users users={userData} />
      </div>
    );
  }
}