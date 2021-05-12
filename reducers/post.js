export const initialState = {
  mainPosts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'test':
      break;

    default:
      return state;
  }
};

export default reducer;
