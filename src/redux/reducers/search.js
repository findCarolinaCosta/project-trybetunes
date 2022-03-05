import { GET_SEARCH_VALUE } from '../actions';

const INITIAL_SEARCH_STATE = {
  artist: '',
};

function search(state = INITIAL_SEARCH_STATE, action) {
  switch (action.type) {
  case GET_SEARCH_VALUE:
    return {
      ...state,
      artist: action.payload.artist,
    };
  default:
    return state;
  }
}

export default search;
