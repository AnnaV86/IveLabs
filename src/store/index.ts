import { configureStore } from '@reduxjs/toolkit';
import brigadesReducer from './reducers/brigades';
import pointsReducer from './reducers/points';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    brigades: brigadesReducer,
    points: pointsReducer,
  },
  middleware: [thunk],
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
