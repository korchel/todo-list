import { createSlice } from '@reduxjs/toolkit';

import type { RootStateType } from './index';

interface IState {
  type: null | 'edit' | 'error',
  id: null | number,
  shown: boolean,
  task: string,
}

const initialState: IState = {
  type: null,
  id: null,
  shown: false,
  task: '',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.task = payload.task;
      state.id = payload.id;
      state.shown = true;
    },
    closeModal: (state) => {
      state.task = '';
      state.shown = false;
      state.id = null;
    },
  },
});

export const getId = (state: RootStateType) => state.modalSlice.id;
export const getTask = (state: RootStateType): string => state.modalSlice.task;
export const getShown = (state: RootStateType) => state.modalSlice.shown;
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;