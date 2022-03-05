export const GET_USER = 'GET_USER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';

export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const getLogin = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});

export const getSearchValue = (payload) => ({
  type: GET_SEARCH_VALUE,
  payload,
});
