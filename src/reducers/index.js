export const FETCH_LOADING = 'FETCH_LOADING';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_LOADING = 'FETCH_COMMENT_LOADING';

export const initialState = {
  users: [],
  posts: [],
  loading: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING: {
      return { ...state, loading: action.value };
    }
    case FETCH_USERS_SUCCESS: {
      return { ...state, users: action.value };
    }
    case FETCH_POSTS_SUCCESS: {
      return { ...state, posts: action.value };
    }
    case FETCH_COMMENTS_SUCCESS: {
      const newState = { ...state };
      const post = newState.posts.find(post => post.id === action.value.postId);
      post.comments = action.value.comments;
      post.loading = false;
      return newState;
    }
    case FETCH_COMMENTS_LOADING: {
      const newState = { ...state };
      const post = newState.posts.find(post => post.id === action.value.postId);
      post.loading = action.value.loading;
      return newState;
    }
    default: {
      return state;
    }
  }
};
