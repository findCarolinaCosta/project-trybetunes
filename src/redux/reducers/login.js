import { GET_USER } from '../actions';

const INITIAL_LOGIN_STATE = {
  user: '',
};

function login(state = INITIAL_LOGIN_STATE, action) {
  switch (action.type) {
  case GET_USER:
    return {
      ...state,
      user: action.payload.user,
    };
  default:
    return state;
  }
}

export default login;
