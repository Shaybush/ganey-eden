import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './features/navbarSlice';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    navbarReducer,
  },
});
