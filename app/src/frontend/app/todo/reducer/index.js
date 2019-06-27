// Action Types
import {
  FETCH_TODO_RESPONSE
} from '../actions/actionTypes';

const initialState = {
  weather: []
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_TODO_RESPONSE: {
      const { payload: todoResult } = action;

      return Object.assign({}, state, {
        todoResult
      });
    }

    default:
      return state;
  }
}
