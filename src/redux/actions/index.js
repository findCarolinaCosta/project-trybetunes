export const GET_USER = 'GET_USER';
export const GET_SEARCH_VALUE = 'GET_SEARCH_VALUE';

export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const getSearchValue = (payload) => ({
  type: GET_SEARCH_VALUE,
  payload,
});
