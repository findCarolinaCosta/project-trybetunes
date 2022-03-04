export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const getUser = (payload) => ({
  type: GET_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});

export const getLogin = (payload) => ({
  type: SUBMIT_LOGIN,
  payload,
});