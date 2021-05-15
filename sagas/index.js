import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    fork(postSaga), // NOTE fork는 함수를 실행한다. vs Call
    fork(userSaga),
  ]);
}
