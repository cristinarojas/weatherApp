import Api from '../api';

import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_RESPONSE
} from './actionTypes';

// Weather Action Creators
export const fetchSearchRequest = () => dispatch => {
  dispatch({
    type: FETCH_SEARCH_REQUEST
  });
};

export const fetchSearchResponse = payload => dispatch => {
  dispatch({
    type: FETCH_SEARCH_RESPONSE,
    payload
  });
};

export const fetchSearch = city => dispatch => {

  dispatch(fetchSearchRequest());

  Api.fetchSearch(city)
    .then(response => dispatch(fetchSearchResponse(response.data)));
};
