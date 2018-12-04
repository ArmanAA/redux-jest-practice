import constants from "../constants/action-types";

const initialState = {
  posts: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
