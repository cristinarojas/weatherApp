// Action Types
import {
  FETCH_TIC_RESPONSE
} from '../actions/actionTypes';

const initialState = {
  tic: []
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_TIC_RESPONSE: {
      const { payload: todoResult } = action;

      return Object.assign({}, state, {
        ticResult
      });
    }

    default:
      return state;
  }
}
