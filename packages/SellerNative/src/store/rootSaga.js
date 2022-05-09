import {fork, all} from '@redux-saga/core/effects';
import * as user from '@SilalApp/common/store/User/saga';
export function* rootSaga() {
  yield all([fork(user.actionLoginWatcher)]);
}
