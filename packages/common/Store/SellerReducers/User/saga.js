import { takeLatest, put, select } from "@redux-saga/core/effects";
import * as actions from "./actions";

import { API, requestPost, requestPut } from "../../../Api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

import  ErrorHandler  from "../../../util/errorHandler";
import { getToken } from "../../SellerStore/selectors";

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
    console.log(response);
    if (response.http_status_code == 201) {
      const resObj = {
        success: true,
        data: response.data,
        code: response.http_status_code,
        expireCode:response.expiration_date
      };
      payload.cb(resObj);
      yield put(actions.setUserSuccess(response));
    } else {
      const resObj = {
        success: false,
        data: response.data,
        code: response.http_status_code,
      };
      payload.cb(resObj);
      // yield put(actions.setUserSuccess(response));
    }
  } catch (error) {
    console.log(error);
    const errObj = ErrorHandler(error);
    payload.failure(errObj);
    // yield put(actions.setUserError())
  }
}
//============verify phone after sign up
function* Phone_Verification_signup({ payload }) {
  console.log("------Payload1", payload);
  try {
    // yield put(actions.setUserRequest());
    console.log(payload);
    const response = yield requestPost(
      API.VERIFY_PHONE_AFTER_SIGNUP,
      {
        phone: payload.data.phone,
        otp: payload.data.otp,
      },
      true
    );
    yield put(actions.setToken({token: response.bearer}))

    // if (response.http_status_code == 200) {
    //   yield put(actions.setToken(response.bearer))
    //   alert(response.bearer)
    //   yield put(actions.setUserSuccess(response));
    //   payload.cb(response);
    // } else if (response.http_status_code == 401) {
    //   console.log("----Valid phone");
    //   payload.cb("Something went wrong");
    //   yield put(actions.setUserError());
    // } else if (response.http_status_code == 429) {
    //   payload.cb(response);
    // }
  } catch (error) {
    alert(JSON.stringify(error))
    if (error.response.data.http_status_code == 401) {
      payload.cb({ http_status_code: 401 });
      yield put(actions.setUserError());
    } else {
      console.log("------Error", error.response.http_status_code);
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
    } else if (response.http_status_code == 202) {
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
    console.log("-------ItemResponse", response);
    if (response.http_status_code == 200) {
      console.log("======Response", response);
      payload.cb(response);
      yield put(actions.setUserSuccess(response));
    } else if (response.http_status_code == 409) {
      payload.cb(response);
      console.log("Something went wrong");
    } else if (response.http_status_code == 401) {
      payload.cb(response);
    }
  } catch (error) {
    payload.cb({ http_status_code: 401 });
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
      { email: payload.data },
      true
    );
    if (response.http_status_code == 200) {
      console.log("======Response", response);
      payload.cb(response);
      yield put(actions.setUserSuccess(response));
    } else if (response.http_status_code == 401) {
      payload.cb(response);
      console.log("Something went wrong");
    } else if (response.http_status_code == 409) {
      payload.cb(response);
      console.log("Something went wrong");
    }
  } catch (error) {
    payload.cb({ http_status_code: 401 });
    console.log("======Error", error);
    yield put(actions.setUserError("Please check your internet connection"));
  }
}
//============Email Verification after login
function* Email_Verification_after_Login({ payload }) {
  console.log("------Payload1", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.EMAIL_VERIFICATION_Login,
      {
        email: payload.data.email,
        otp: payload.data.otp,
      },
      true
    );

    if (response.http_status_code == 200) {
      AsyncStorage.setItem("isAuth", response.bearer);
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
//============Phone Verification
function* phone_verification_after_login({ payload }) {
  console.log("------Payload1", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.Phone_Verification_Login,
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
//============Email Verification
function* Email_Verification_signup({ payload }) {
  console.log("------Payload1", payload);
  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.VERIFY_EMAIL_AFTER_SIGNUP,
      {
        email: payload.data.email,
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
//=============== Add Personal Information
function* add_personal_information({ payload }) {
  console.log("------Payload Information", payload);
  try {
    const {token} = yield select(getToken)
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.ADD_PERSONAL_INFORMATION,
      {
        first_name: payload.data.first_name,
        last_name: payload.data.last_name,
        id_number: payload.data.id_number,
      },
      true,
      // {headers: {
      //   'Authorization': `Bearer ${token}`
      // }}
    );
    if (response.http_status_code == 200) {
      yield put(actions.setUserSuccess(response));
    } else {
      yield put(actions.setUserError());
    }
  } catch (error) {
    yield put(actions.setUserError());
  }
}

function* createStore({ payload }) {
  console.log("-----Payload", payload);

  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(API.Create_Store, payload.data123, true);

    if (response.http_status_code == 201) {
      console.log("======Response", response.msg);
      payload.cb("Email Verified");
      yield put(actions.setUserSuccess(response));
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log("======Error", error);
    yield put(actions.setUserError("Please check your internet connection"));
  }
}
// haris
//============Get Store Data
function* Get_Store_Data({ payload }) {
  alert("********Get_Store_Data********")
  console.log("------Payload1", payload);
 
}

// ==========Delete Store Data
function* delete_store_data({ payload }) {
  alert("*******delete_store_data*******")
  console.log("------Payload1", payload);
   
}
// ==========Create Store Data
function* create_store_data({ payload }) {
  alert("*****Create_store_data*******")
  // console.log("------Payload1", payload);
 
  try {
    // yield put(actions.setUserRequest());
    const response = yield requestPost(API.Create_Store, payload, true);
    console.log('....create store response........',response)
    if (response.http_status_code == 201) {
      console.log("======Response", response.msg);
      payload.cb("Create User");
      yield put(actions.setUserSuccess(response));
    } else {
      console.log("Something went wrong");
    }
  } catch (error) {
    console.log("======Error", error);
    yield put(actions.setUserError("Please check your internet connection"));
  }
   
}
// ==========Update Store Data
function* update_store_data({ payload }) {
  alert("********update_store_data************")
  console.log("------Payload1", payload);
   
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
    actions.VERIFY_PHONE_AFTER_SIGNUP_SAGA,
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
export function* actionEmailVerificationWatcher() {
  return yield takeLatest(
    actions.VERIFY_EMAIL_AFTER_SIGNUP_SAGA,
    Email_Verification_signup
  );
}
export function* actionAddPersonalInformationWatcher() {
  return yield takeLatest(
    actions.ADD_PERSONAL_INFORMATION_SAGA,
    add_personal_information
  );
}
export function* actionEmailVerifcationAfterLoginWatcher() {
  return yield takeLatest(
    actions.USER_EMAIL_VERIFICATION_AFTER_LOGIN,
    Email_Verification_after_Login
  );
}
export function* actionPhoneVerificationAfterLoginWatcher() {
  return yield takeLatest(
    actions.USER_PHONE_VERIFICATION_LOGIN,
    phone_verification_after_login
  );
}


// Haris
export function* actionGetStoreDataWatcher() {
  return yield takeLatest(
    actions.GET_STORE_DATA_SAGA,
    Get_Store_Data
  );
}
export function* actionDeleteStoreDataWatcher() {
  return yield takeLatest(
    actions.DELETE_STORE_DATA_SAGA,
    delete_store_data
  );
}
export function* actionCreateStoreDataWatcher() {
  return yield takeLatest(
    actions.CREATE_STORE_DATA_SAGA,
    create_store_data
  );
}
export function* actionUpdateStoreDataWatcher() {
  return yield takeLatest(
    actions.UPDATE_STORE_DATA_SAGA,
    update_store_data
  );
}
