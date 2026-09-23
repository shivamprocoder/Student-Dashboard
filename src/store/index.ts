import { combineReducers, createStore } from 'redux';

const studentReducer = (state: unknown[] = [], _action: { type: string }) => state;
const courseReducer = (state: unknown[] = [], _action: { type: string }) => state;

const rootReducer = combineReducers({
  students: studentReducer,
  courses: courseReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;