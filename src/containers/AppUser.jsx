import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../companents/User';
import * as pageActions from '../actions/PageActions';


class AppUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      status: false,
      user: [],
      drupalgive: []
    };
  }

  getUser = (uid) => {
    this.props.pageActions.getUser(uid);
  } 

  componentDidMount() {
    let uid = this.props.match.params.uid;

    this.getUser(uid);
  }
 
  render() {
    let { user, drupalgive, status, isFetching } = this.props;

      return (
        <div className='user'>
          <User drupalgive={drupalgive} user={user} status={status} isFetching={isFetching} />
        </div>
      );
  }
}

const mapStateToProps = (state) => {

  return {
    user: state.user.user,
    drupalgive: state.user.drupalgive,
    status: state.user.status,
    isFetching: state.user.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppUser);