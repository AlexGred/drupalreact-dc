const initialState = {
  user: [],
  status: false
}

const user = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_USER_REQUEST':
      return {...state, user: action.payload, status: true}

    case 'GET_USER_SUCCESS':
      return {...state, user: action.payload, status: true}

    case 'GET_USER_ERROR':
      return {...state, user: action.payload, status: false}

    default:
      return state
  }
}

export default user