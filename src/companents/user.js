import React, { Component } from 'react';
import axios from 'axios';

export default class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };
  }
 
  componentDidMount() {
    let params = this.props.match.params;

    this.serverRequest = axios.get('http://dev.drupal-coder.ru/api/user/' + params.uid).then(user => {  
      this.setState({
        user: user.data[0]
      });
    });
  }

  render() {
    let user = this.state.user;

    return (
      <div className='uk-grid'>
        <div className='uk-width-1-1'>Раздел {user.name}</div>
      </div>
    );
  }
}