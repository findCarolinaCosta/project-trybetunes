import { GET_USER, UPDATE_USER, SUBMIT_LOGIN } from '../actions'

const INITIAL_LOGIN_STATE = {
  user: '',
  submit: false,
};

function login(state= INITIAL_LOGIN_STATE, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload.user
      }
    case UPDATE_USER:
    return {
      ...state,
      user: action.payload.user
    }
    case SUBMIT_LOGIN:
    return {
      ...state,
      submit: action.payload.submit
    }
    default:
      state;
  }
}

export default login;