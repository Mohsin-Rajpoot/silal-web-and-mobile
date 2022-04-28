import { takeLatest, put } from "@redux-saga/core/effects";
import * as actions from "./actions";
import axios from 'axios'
function* login({ payload }) {
    console.log('-----payload', payload)
    try {
      yield put(actions.setUserRequest());
        
     yield axios.post('https://seller.dev.silal.app/auth/login', payload).then(response =>{
         console.log('response-------', response.data)
       
     }).catch((error)=>{
        console.log('error', error)
    
     })
     
    } catch (error) {
      yield put(actions.setUserError("Please check your internet connection"));
      console.log("error in loginSaga", error);
    }
  }

export function* actionLoginWatcher() {
    yield takeLatest(actions.USER_LOGIN_SAGA, login);
  }
    
  