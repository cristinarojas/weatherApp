// Dependencies
import { combineReducers } from 'redux';

// Shared Reducers
import device from './deviceReducer';

// App Reducers
import blog from '../../../frontend/app/blog/reducer';
import weather from '../../../frontend/app/weather/reducer';

const rootReducer = combineReducers({
  device,
  blog,
  weather
});

export default rootReducer;
