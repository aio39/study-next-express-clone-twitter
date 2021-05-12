import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
//  함수인 reducer들을 합쳐주는 메소드
import user from './user';
import post from './post';

// 이전 상태 , 액션 => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE: // 서버사이드 랜더링을 위함.
        console.log('HYDRATE', action);
        return { ...state, ...action.payload };

      // NOTE redux 초기화 할 떄를 위해 반드시 필요
      default:
        return state;
    }
  },
  user,
  post,
});
export default rootReducer;
