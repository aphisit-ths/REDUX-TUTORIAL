import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducers';

export const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});