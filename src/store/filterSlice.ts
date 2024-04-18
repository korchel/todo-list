import { createSlice } from '@reduxjs/toolkit';

import type { RootStateType } from './index';

interface IState {
  filter: 'all' | 'completed' | 'active',
}

const initialState: IState = {
  filter: 'all',
}

const todosSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, { payload }) => {
      state.filter = payload;
    } 
  },
});

export const { filter } = todosSlice.actions;

export default todosSlice.reducer;