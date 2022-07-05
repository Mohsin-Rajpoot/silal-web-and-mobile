export const SET_LOADING = "SET_LOADING";

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_ERROR = "SET_USER_ERROR";

export const USER_LOGIN_SAGA = "USER_LOGIN_SAGA";
export const USER_SIGNUP_SAGA = "USER_SIGNUP_SAGA";
export const USER_PHONE_VERIFICATION_SIGNUP = "USER_PHONE_VERIFICATION_SIGNUP";
export const USER_SIGNUP_WITH_EMAIL_SAGA = "USER_SIGNUP_WITH_EMAIL_SAGA";
export const USER_LOGIN_WITH_PHONE = "USER_LOGIN_WITH_PHONE";
export const USER_LOGIN_WITH_EMAIL = "USER_LOGIN_WITH_EMAIL";
export const LOGOUT = "LOGOUT";
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setUserRequest = () => ({
  type: SET_USER_REQUEST,
});
export const setUserSuccess = (payload) => ({
  type: SET_USER_SUCCESS,
  payload,
});

export const setUserError = (payload) => ({
  type: SET_USER_ERROR,
  payload,
});
export const userLoginSaga = (payload) => ({
  type: USER_LOGIN_SAGA,
  payload,
});
export const userSignUpSaga = (payload) => ({
  type: USER_SIGNUP_SAGA,
  payload,
});
export const userSignupWithEmail = (payload) => ({
  type: USER_SIGNUP_WITH_EMAIL_SAGA,
  payload,
});
export const userPhoneVerification_SignUP_Saga = (payload) => ({
  type: USER_PHONE_VERIFICATION_SIGNUP,
  payload,
});
export const userloginWithPhoneSaga = (payload) => ({
  type: USER_LOGIN_WITH_PHONE,
  payload,
});
export const userloginWithEmailSaga = (payload) => ({
  type: USER_LOGIN_WITH_EMAIL,
  payload,
});
export const logout = () => ({
  type: LOGOUT,
});
