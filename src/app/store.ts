import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import messageReducer from '../models/message'

export const store = configureStore({
  reducer: {
    message: messageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
