const initialState = {
  uid: 0
}

const user = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_USER':
      return {...state, uid: action.payload }

    default:
      return state
  }
}

export default user