export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

// 액션 생성기, data만 바꿔줌
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

export const logoutAction = (data) => {
  return {
    type: 'LOG_OUT',
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
