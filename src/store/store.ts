import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
