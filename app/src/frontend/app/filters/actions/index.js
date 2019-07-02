import Api from '../api';

import {
  FETCH_TIC_REQUEST,
  FETCH_TIC_RESPONSE
} from './actionTypes';

// Weather Action Creators
export const fetchTodoRequest = () => dispatch => {
  dispatch({
    type: FETCH_TIC_REQUEST
  });
};

export const fetchTicResponse = payload => dispatch => {
  dispatch({
    type: FETCH_TIC_RESPONSE,
    payload
  });
};

export const fetchTic = city => dispatch => {

  dispatch(fetchTicRequest());

  Api.fetchTic(city)
    .then(response => dispatch(fetchTicResponse(response.data)));
};
