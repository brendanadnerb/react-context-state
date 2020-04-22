import {
  FETCH_USERS_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_LOADING,
  FETCH_COMMENTS_LOADING
} from '../reducers';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const doFetch = async (dispatch, suffix, action) => {
  dispatch({ type: FETCH_LOADING, value: true });
  const data = await fetch(`${BASE_URL}${suffix}`);
  const res = await data.json();
  dispatch({ type: action, value: res });
  dispatch({ type: FETCH_LOADING, value: false });
};
export const getUsers = dispatch => {
  doFetch(dispatch, '/users', FETCH_USERS_SUCCESS);
};
export const getPosts = (dispatch, userId) => {
  doFetch(dispatch, `/posts?userId=${userId}`, FETCH_POSTS_SUCCESS);
};
export const getComments = async (dispatch, postId) => {
  dispatch({ type: FETCH_COMMENTS_LOADING, value: { postId, loading: true } });
  const data = await fetch(`${BASE_URL}/comments?postId=${postId}`);
  const res = await data.json();
  dispatch({ type: FETCH_COMMENTS_SUCCESS, value: { postId, comments: res } });
};
