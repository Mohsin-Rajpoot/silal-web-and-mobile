import {fork, all} from '@redux-saga/core/effects';
import * as user from './User/saga';
export function* rootSaga() {
  yield all([fork(user.actionLoginWatcher)]);
}
