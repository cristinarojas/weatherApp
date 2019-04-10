import Api from '../api';

import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_RESPONSE
} from './actionTypes';

// Weather Action Creators
export const fetchWeatherRequest = () => dispatch => {
  dispatch({
    type: FETCH_WEATHER_REQUEST
  });
};

export const fetchWeatherResponse = payload => dispatch => {
  dispatch({
    type: FETCH_WEATHER_RESPONSE,
    payload
  });
};

export const fetchWeather = city => dispatch => {

  dispatch(fetchWeatherRequest());

  Api.fetchWeather(city)
    .then(response => dispatch(fetchWeatherResponse(response.data)));
};
