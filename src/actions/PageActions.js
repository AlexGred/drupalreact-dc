export const getUser = (uid) => {
  
  return {
    type: 'GET_USER',
    payload: uid
  }
}