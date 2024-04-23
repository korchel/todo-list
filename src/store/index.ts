import { configureStore } from '@reduxjs/toolkit';

import {todosApi} from './todosApi';
import filterSlice from './filterSlice';
import modalSlice from './modalSlice';

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    filterSlice,
    modalSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;