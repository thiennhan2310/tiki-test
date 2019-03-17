import { SET_TOKEN } from '../actions/auth'
const initialState = {
  token: localStorage.getItem('token'),
}

function auth(state=initialState, action) {
  switch(action.type){
    case SET_TOKEN:
      return {
        ...state,
        token:action.token
      }
    default:
    return state;
  }
}
export default auth;