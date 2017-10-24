const initialState = {
  user: [],
  status: false,
  isFetching: true
};

const user = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {...state, user: action.payload, status: true, isFetching: true};

    case 'GET_USER_SUCCESS':
      return {...state, user: action.payload, status: true, isFetching: false};

    case 'GET_USER_ERROR':
      return {...state, user: action.payload, status: false, isFetching: false};

    default:
      return state;
  }
};

export default user;