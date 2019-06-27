// Action Types
import {
  FETCH_SEARCH_RESPONSE
} from '../actions/actionTypes';

const initialState = {
  weather: []
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_SEARCH_RESPONSE: {
      const { payload: searchResult } = action;

      return Object.assign({}, state, {
        searchResult
      });
    }

    default:
      return state;
  }
}
