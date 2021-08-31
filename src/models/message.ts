import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
// import { fetchCount } from './counterAPI';

export interface CounterState {
  msg: string
}

const initialState: CounterState = {
    msg: '',
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

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
