import { createSlice } from '@reduxjs/toolkit';

import type { RootStateType } from './index';
import { FilterType } from '../types';

interface IState {
  filter: FilterType,
}

const initialState: IState = {
  filter: 'all',
}

const todosSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    } 
  },
});

export const { setFilter } = todosSlice.actions;
export const getFilter = (state: RootStateType): FilterType => state.filterSlice.filter;

export default todosSlice.reducer;