import { takeLatest, put } from "@redux-saga/core/effects";
import * as actions from "./actions";
import axios from "axios";
import { API, requestPost } from "../../Api/Api";
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

function* createStore({ payload }) {
  console.log("-----Payload", payload);

  try {
    yield put(actions.setUserRequest());
    const response = yield requestPost(
      API.Create_Store,
      payload.data123,
      // {
      //   text: payload.data123.text,
      //   BusinesName: payload.data123.BusinesName,
      //   BusinessOwner: payload.data123.BusinessOwner,
      //   BusinessEmail: payload.data123.BusinessEmail,
      //   socialmediaProfile: payload.data123.socialmediaProfile,
      //   socialmediaWebsite: payload.data123.socialmediaWebsite,
      //   BusinesTax_Id: payload.data123.BusinesTax_Id,
      // },
      true
    );

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
//===============Watchers=============================
export function* actionLoginWatcher() {
  yield takeLatest(actions.USER_LOGIN_SAGA, login);
}

export function* actionSignUpWatcher() {
  return yield takeLatest(actions.USER_SIGNUP_SAGA, signUp);
}
export function* actionCreateStoreWatcher() {
  return yield takeLatest(actions.USER_CREATESTORE_SAGA, createStore);
}
