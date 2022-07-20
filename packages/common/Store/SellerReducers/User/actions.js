export const SET_LOADING = "SET_LOADING";

export const SET_USER_REQUEST = "SET_USER_REQUEST";
export const SET_USER_SUCCESS = "SET_USER_SUCCESS";
export const SET_USER_ERROR = "SET_USER_ERROR";

export const USER_LOGIN_SAGA = "USER_LOGIN_SAGA";
export const USER_SIGNUP_SAGA = "USER_SIGNUP_SAGA";
export const USER_PHONE_VERIFICATION_LOGIN = "USER_PHONE_VERIFICATION_LOGIN";
export const USER_SIGNUP_WITH_EMAIL_SAGA = "USER_SIGNUP_WITH_EMAIL_SAGA";
export const USER_LOGIN_WITH_PHONE = "USER_LOGIN_WITH_PHONE";
export const USER_LOGIN_WITH_EMAIL = "USER_LOGIN_WITH_EMAIL";
export const USER_EMAIL_VERIFICATION_AFTER_LOGIN =
  "USER_EMAIL_VERIFICATION_AFTER_LOGIN";
export const ADD_PERSONAL_INFORMATION_SAGA = "ADD_PERSONAL_INFORMATION_SAGA";
export const VERIFY_PHONE_AFTER_SIGNUP_SAGA = "VERIFY_PHONE_AFTER_SIGNUP_SAGA";
export const VERIFY_EMAIL_AFTER_SIGNUP_SAGA = "VERIFY_EMAIL_AFTER_SIGNUP_SAGA";
export const USER_CREATESTORE_SAGA ="USER_CREATESTORE_SAGA"
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
export const userPhoneVerification_LOGIN_Saga = (payload) => ({
  type: USER_PHONE_VERIFICATION_LOGIN,
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
export const userEmailVerification = (payload) => ({
  type: USER_EMAIL_VERIFICATION_AFTER_LOGIN,
  payload,
});
export const addPersonalInformation = (payload) => ({
  type: ADD_PERSONAL_INFORMATION_SAGA,
  payload,
});
export const verify_phone_after_signup = (payload) => ({
  type: VERIFY_PHONE_AFTER_SIGNUP_SAGA,
  payload,
});
export const verify_email_after_signup = (payload) => ({
  type: VERIFY_EMAIL_AFTER_SIGNUP_SAGA,
  payload,
});
export const logout = () => ({
  type: LOGOUT,
});

export const userCreateStoreSaga=(payload)=>({
  type:USER_CREATESTORE_SAGA,
  payload
})
