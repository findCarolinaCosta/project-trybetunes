import { GET_INFOS_SONGS } from '../actions';

const INITIAL_LOGIN_STATE = {
  name: '',
  songInfos: [],
};

function album(state = INITIAL_LOGIN_STATE, action) {
  switch (action.type) {
  case GET_INFOS_SONGS:
    return {
      ...state,
      name: action.payload.name,
      songInfos: action.payload.songInfos,
    };
  default:
    return state;
  }
}

export default album;
