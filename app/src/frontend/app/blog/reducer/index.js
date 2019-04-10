// Action Types
import {
  FETCH_POSTS_RESPONSE,
  FETCH_POST_RESPONSE
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  post: {}
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_RESPONSE: {
      const { payload: posts } = action;

      return Object.assign({}, state, {
        posts
      });
    }

    case FETCH_POST_RESPONSE: {
      const { payload: post } = action;

      return Object.assign({}, state, {
        post
      });
    }

    default:
      return state;
  }
}
