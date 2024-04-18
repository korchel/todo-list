import { configureStore } from '@reduxjs/toolkit';

import todosSlice from './todosSlice';

const store = configureStore({
  reducer: {
    todosSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;