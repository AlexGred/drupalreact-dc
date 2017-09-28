const user = (state = {uid: 1}, action) => {

  switch (action.type) {
    case 'GET_USER':
      return {uid: action.payload };

    default:
      return state;
  }
};

export default user;