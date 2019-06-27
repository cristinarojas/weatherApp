import Api from '../api';

import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_RESPONSE
} from './actionTypes';

// Weather Action Creators
export const fetchTodoRequest = () => dispatch => {
  dispatch({
    type: FETCH_TODO_REQUEST
  });
};

export const fetchTodoResponse = payload => dispatch => {
  dispatch({
    type: FETCH_TODO_RESPONSE,
    payload
  });
};

export const fetchTodo = city => dispatch => {

  dispatch(fetchTodoRequest());

  Api.fetchTodo(city)
    .then(response => dispatch(fetchTodoResponse(response.data)));
};
