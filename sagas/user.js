import axios from 'axios';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from '../reducers/user';

//   while (true) { // NOTE 1회용이 아닌 무한 사용을 위함. -> takeEvery로 대체 가능.
//    takeLatest는 더블클릭 또는 그 이상으로 해도 마지막꺼만 실행
//    어디까지는 응답 받는 것을 취소하는 거고 요청을 2번까지 백엔드에서 잘 처리해줘야함.
//    첫번쨰꺼만 실행하고자 한다면 takeReading
//    throttle는  시간을 설정해서 특정 시간안에 실행 횟수를 제한
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn); // NOTE take는 LOG_IN 액션이 실행될떄까지 기달린다.
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSingUP() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function signUpAPI(data) {
  return axios.post('/api/sign', data);
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

//  NOTE thunk는 비동기함수를 직접 실행하지만 saga는 자체적으로 지원해주는 메소드를 사용
function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data); // Call은 비동기여서 내부적으로 then의 콜백으로 실ㄹ행하는 느낌.
    yield delay(1000);
    yield put({
      // NOTE put은 dispatch와 비슷한 느낌.
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    // NOTE 성공 결과는 result.data, 실패는 err.response.data
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/out');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn), //
    fork(watchLogOut),
    fork(watchSingUP),
  ]);
}
