// Action Types
import {
  FETCH_WEATHER_RESPONSE
} from '../actions/actionTypes';

const initialState = {
  weather: []
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {

    case FETCH_WEATHER_RESPONSE: {
      const { payload: weatherResult } = action;

      return Object.assign({}, state, {
        weatherResult
      });
    }

    default:
      return state;
  }
}
