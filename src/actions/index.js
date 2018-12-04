import constants from "../constants/action-types";

export const getPosts = posts => ({
  type: constants.GET_POSTS,
  payload: posts
});

export const populateModal = posts => ({
  type: constants.POPULATE_MODAL,
  payload: posts
});
export const clearModal = () => ({
  type: constants.CLEAR_MODAL,
  payload: {}
});

export const showModal = show => ({
  type: constants.SHOW_MODAL,
  payload: show
});
export const hideModal = hide => ({
  type: constants.HIDE_MODAL,
  payload: hide
});
