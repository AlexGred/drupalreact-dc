import axios from 'axios';

const getUserAsync = (user, status, drupalgive, drupalgiveStatus) => { 

  return (dispatch) => {
    dispatch({
      type: 'GET_USER_REQUEST',
      payload: [],
      drupalgiveGet: []
    });

    if (status == 200 && drupalgiveStatus == 200) {
      setTimeout(() => {
        dispatch({
          type: 'GET_USER_SUCCESS',
          payload: user,
          drupalgiveGet: drupalgive
        });
      }, 600);
    }
    else {
      dispatch({
        type: 'GET_USER_ERROR',
        payload: user,
        drupalgiveGet: drupalgive
      });
    }
  };
};

export const getUser = (uid) => {  

  return (dispatch) => {
    axios.all([
      axios.get('http://dev.drupal-coder.ru/api/user/' + uid + '?_format=json'),
      axios.get('http://dev.drupal-coder.ru/api/drupalgive/' + uid + '?_format=json')
    ]).then(axios.spread((user, drupalgive) => {
      dispatch(getUserAsync(user.data[0], user.status, drupalgive.data[0], drupalgive.status));
    })).catch(axios.spread((user, drupalgive) => {
      dispatch(getUserAsync([], user.status, [], drupalgive.status));
    }));
    /* axios.get('http://dev.drupal-coder.ru/api/user/' + uid + '?_format=json').then(user => {
      dispatch(getUserAsync(user.data[0], user.status));
    }).get('http://dev.drupal-coder.ru/api/drupalgive/' + uid + '?_format=json').then(user => {
      dispatch(getUserAsync(user.data[0], user.status));
    }).catch((user) => {
      dispatch(getUserAsync([], user.status));
    }); */
  };
};

export const closeModal = (modal) => {
  
  return {
    type: 'CLOSE_MODAL',
    payload: modal
  };
};