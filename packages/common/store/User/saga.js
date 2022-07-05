import { takeLatest, put } from "@redux-saga/core/effects";
import * as actions from "./actions";
import axios from "axios";
import { API, requestPost, requestPut } from "../../Api/Api";
import { traverse } from "@babel/core";
function* login({ payload }) {
  try {
    yield put(actions.setUserRequest());

    const response = yield requestPost(
      API.BASE_URL + API.LOGIN,
      (isRaw = true)
    );

    yield put(actions.setUserSuccess(response.data));
  } catch (error) {
    yield put(actions.setUserError("Please check your internet connection"));
    console.log("error in loginSaga", error);
  }
}
//============== Sign up api with phone
function* signUp({ payload }) {
  console.log("-----Payload", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.SIGNUP_Phone,
      { phone: payload.data },
      true
    );
    if (response.http_status_code == 201) {
      console.log("======Response", response);
      payload.cb(response);
      yield put(actions.setUserSuccess(response));
    } else if (response.http_status_code == 409) {
      payload.cb(response);
      console.log("Something went wrong");
    }
  } catch (error) {
    payload.cb({ http_status_code: 409 });
    console.log("======Error", error);
    yield put(actions.setUserError("Please check your internet connection"));
  }
}
//============verify phone after sign up
function* Phone_Verification_signup({ payload }) {
  console.log("------Payload1", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.Phone_Verification,
      {
        phone: payload.data.phone,
        otp: payload.data.otp,
      },
      true
    );
    if (response.http_status_code == 200) {
      yield put(actions.setUserSuccess(response));
      payload.cb(response);
    } else if (response.http_status_code == 401) {
      console.log("----Valid phone");
      payload.cb("Something went wrong");
      yield put(actions.setUserError());
    }
  } catch (error) {
    if (error.response.data.http_status_code == 401) {
      payload.cb({ http_status_code: 401 });
      yield put(actions.setUserError());
    } else {
      console.log("------Error", error.response.data);
      yield put(actions.setUserError());
    }
  }
}
//================Sign up with email
function* signupWithEmail({ payload }) {
  console.log("-----Payload", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.SIGN_UP_WITH_EMAIL,
      { email: payload.data },
      true
    );
    if (response.http_status_code == 201) {
      console.log("======Response", response);
      payload.cb(response);
      yield put(actions.setUserSuccess(response));
    } else if (response.http_status_code == 409) {
      payload.cb(response);
      console.log("Something went wrong");
    }
  } catch (error) {
    payload.cb({ http_status_code: 409 });
    console.log("======Error", error);
    yield put(actions.setUserError("Please check your internet connection"));
  }
}
//==========LOGIN WITH PHONE
function* login_withPhone({ payload }) {
  console.log("-----Payload", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPut(
      API.LOGIN_WITH_PHONE,
      { phone: payload.data },
      true
    );
    if (response.http_status_code == 200) {
      console.log("======Response", response);
      payload.cb(response);
      yield put(actions.setUserSuccess(response));
    } else if (response.http_status_code == 409) {
      payload.cb(response);
      console.log("Something went wrong");
    }
  } catch (error) {
    payload.cb({ http_status_code: 409 });
    console.log("======Error", error);
    yield put(actions.setUserError("Please check your internet connection"));
  }
}
//==========Login with email
function* login_with_email({ payload }) {
  console.log("-----Payload", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPut(
      API.LOGIN_WITH_EMAIL,
      { phone: payload.data },
      true
    );
    if (response.http_status_code == 200) {
      console.log("======Response", response);
      payload.cb(response);
      yield put(actions.setUserSuccess(response));
    } else if (response.http_status_code == 409) {
      payload.cb(response);
      console.log("Something went wrong");
    }
  } catch (error) {
    payload.cb({ http_status_code: 409 });
    console.log("======Error", error);
    yield put(actions.setUserError("Please check your internet connection"));
  }
}
//===============Watchers=============================
export function* actionLoginWatcher() {
  yield takeLatest(actions.USER_LOGIN_SAGA, login);
}

export function* actionSignUpWatcher() {
  return yield takeLatest(actions.USER_SIGNUP_SAGA, signUp);
}
export function* actionPhoneVerificationSignUpWatcher() {
  return yield takeLatest(
    actions.USER_PHONE_VERIFICATION_SIGNUP,
    Phone_Verification_signup
  );
}
export function* actionSignupWithEmail() {
  return yield takeLatest(actions.USER_SIGNUP_WITH_EMAIL_SAGA, signupWithEmail);
}
export function* actionLoginWithPhone() {
  return yield takeLatest(actions.USER_LOGIN_WITH_PHONE, login_withPhone);
}
export function* actionLoginWithEmail() {
  return yield takeLatest(actions.USER_LOGIN_WITH_EMAIL, login_with_email);
}
