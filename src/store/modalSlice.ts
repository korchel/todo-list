import { createSlice } from '@reduxjs/toolkit';

import type { RootStateType } from './index';

interface IState {
  type: null | 'edit' | 'error',
  id: null | number,
  shown: boolean,
  text: string,
}

const initialState: IState = {
  type: null,
  id: null,
  shown: false,
  text: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.text = payload.text;
      state.id = payload.id;
      state.type = payload.type;
      state.shown = true;
    },
    closeModal: (state) => {
      state.text = '';
      state.shown = false;
      state.type = null;
      state.id = null;
    },
  },
});

export const getId = (state: RootStateType): number | null => state.modalSlice.id;
export const getText = (state: RootStateType): string => state.modalSlice.text;
export const getShown = (state: RootStateType): boolean => state.modalSlice.shown;
export const getType = (state: RootStateType): null | 'edit' | 'error' => state.modalSlice.type;

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
