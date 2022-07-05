import {fork, all} from '@redux-saga/core/effects';
import * as user from '@SilalApp/common/store/User/saga';

export function* rootSaga() {
  yield all([
    fork(user.actionLoginWatcher),
    fork(user.actionSignUpWatcher),
    fork(user.actionPhoneVerificationSignUpWatcher),
    fork(user.actionSignupWithEmail),
    fork(user.actionLoginWithPhone),
  ]);
}
