import constants from "../constants/action-types";

export const getPosts = posts => ({
  type: constants.GET_POSTS,
  payload: posts
});
