import axios from 'axios';

const getUserAsync = (user, status) => { 
  
  console.log(user, status);

  return (dispatch) => {
    dispatch({
      type: 'GET_USER_REQUEST',
      payload: []
    });

    if (status == 200) {
      setTimeout(() => {
        dispatch({
          type: 'GET_USER_SUCCESS',
          payload: user
        });
      }, 600);
    }
    else {
      dispatch({
        type: 'GET_USER_ERROR',
        payload: user
      });
    }
  };
};

export const getUser = (uid) => {  

  return (dispatch) => {
    axios.get('http://dev.drupal-coder.ru/api/user/' + uid).then(user => {
      dispatch(getUserAsync(user.data[0], user.status));
    }).catch((user) => {
      dispatch(getUserAsync([], user.status));
    });
  };
};