import { combineReducers } from 'redux';

import { weatherReducer } from './weather.reducer';
import { alertReducer } from './alert.reducer';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  alert: alertReducer,
});
