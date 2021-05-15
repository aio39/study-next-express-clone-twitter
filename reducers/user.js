export const initialState = {
  isLoggingIn: false, //  redux saga를 위한 값
  isLoggedIn: false,
  isLoggingOut: false,
  me: null,
  signUpData: {},
  loginData: {},
};

// thunk는 단순하게 한 번에 여러번의 dispatch를 할 수 있게 해줌.
//  saga는 디바운스나 쓰로톨링, 지연등을 지원
// export const loginAction = (data) => {
//   return (dispatch, getState) => {
//     const state = getState();
//     dispatch(loginRequestAction());
//     axios
//       .get('/api/login')
//       .then((res) => {
//         dispatch(loginSuccessAction(res.data));
//       })
//       .catch((err) => {
//         dispatch(loginFailureAction(err));
//       });
//   };
// };

// 액션 생성기, data만 바꿔줌
export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};

export const logoutRequestAction = (data) => {
  return {
    type: 'LOG_OUT_REQUEST',
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLoggingIn: true,
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: 'aio' },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
      };
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggingOut: false,
      };

    default:
      return state;
  }
};

export default reducer;
