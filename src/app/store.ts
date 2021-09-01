import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import messageReducer from '../models/message'
import userReducer from '../models/user'

export const store = configureStore({
  reducer: {
    message: messageReducer,
    user: userReducer
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
