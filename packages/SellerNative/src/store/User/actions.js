export const SET_LOADING = 'SET_LOADING';

export const SET_USER_REQUEST = 'SET_USER_REQUEST';
export const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
export const SET_USER_ERROR = 'SET_USER_ERROR';

export const USER_LOGIN_SAGA = 'USER_LOGIN_SAGA';
export const LOGOUT = "LOGOUT";
export const setLoading = payload => ({
  type: SET_LOADING,
  payload,
});

export const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});
export const setUserSuccess = payload => ({
  type: SET_USER_SUCCESS,
  payload,
});

export const setUserError = payload => ({
  type: SET_USER_ERROR,
  payload,
});
export const userLoginSaga = payload => ({
  type: USER_LOGIN_SAGA,
  payload,
});
export const logout = () => ({
  type: LOGOUT,
});