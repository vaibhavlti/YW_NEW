import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import CommonReducer from './reducers/common-reducers';

const store = configureStore({
  reducer: {
    commonReducer: CommonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk).concat(logger),
  devTools: true,
});

export default store;