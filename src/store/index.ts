import { configureStore } from '@reduxjs/toolkit';
import { studentReducer } from '../reducers/studentReducer'; // Example reducer
import { courseReducer } from '../reducers/courseReducer'; // Example reducer

const store = configureStore({
  reducer: {
    students: studentReducer,
    courses: courseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;