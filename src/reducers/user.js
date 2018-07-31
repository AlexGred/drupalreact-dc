const initialState = {
  user: [],
  drupalgive: [],
  status: false,
  isFetching: true
};

const user = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {...state, user: action.payload, drupalgive: action.drupalgiveGet, status: true, isFetching: true};

    case 'GET_USER_SUCCESS':
      return {...state, user: action.payload, drupalgive: action.drupalgiveGet, status: true, isFetching: false};

    case 'GET_USER_ERROR':
      return {...state, user: action.payload, drupalgive: action.drupalgiveGet, status: false, isFetching: false};

    case 'CLOSE_MODAL':
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

export default user;