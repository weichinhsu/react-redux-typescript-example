import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface CounterState {
  msg: string
}

const initialState: CounterState = {
    msg: '',
};

export const counterSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    save: (state, {payload}) => {
      state.msg = payload;
    },
  }
});

export const { save } = counterSlice.actions;

export const selectMessage = (state: RootState) => state.message.msg;

export default counterSlice.reducer;
