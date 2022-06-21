import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './reducers';
import semesterReducer from './reducers/semester';
export const store = configureStore({
  reducer: { reducer, semester: semesterReducer },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
