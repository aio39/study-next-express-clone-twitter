import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';
// store는 스토어와 리듀서가 포함, 액션은 따로
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const loggerMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // if (typeof action === 'function') {
    //   return action(dispatch, getState);
    // }
    console.log(action);
    return next(action);
  };

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, loggerMiddleware];
  const enhancer = // 기능을 확장한다.
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middleware))
      : composeWithDevTools(applyMiddleware(...middleware)); // 히스토리를 삭제 안 함.
  const store = createStore(reducer, enhancer);

  store.sagaTask = sagaMiddleware.run(rootSaga);

  // dispatch를 하면 reducer로 전달이 된다.
  store.dispatch({
    type: 'CHANGE_NICKNAME',
    data: '1234567',
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
