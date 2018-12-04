import constants from "../constants/action-types";

const initialState = {
  posts: [],
  modalPosts: [],
  showModal: false
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_POSTS:
      return { ...state, posts: action.payload };
    case constants.HIDE_MODAL:
      return { ...state, showModal: action.payload };
    case constants.SHOW_MODAL:
      return { ...state, showModal: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
