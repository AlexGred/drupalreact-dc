import React, {Component} from 'react';
import axios from 'axios';


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
    return (
      <div className='users'>
        праjhg
      </div>
    );
  }
}