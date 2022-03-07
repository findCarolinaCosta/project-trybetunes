import { combineReducers } from 'redux';
import login from './login';
import search from './search';
import album from './album';

const rootReducer = combineReducers({
  login,
  search,
  album,
});

export default rootReducer;
