import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { fetchUser } from '../api/api';

export interface UserState {
    userList: Array<User>
}

const initialState: UserState = {
    userList: [],
};

export const userAsync = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const response = await fetchUser();
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        save: (state, { payload }) => {
            state.userList = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userAsync.fulfilled, (state, action) => {
            return {
                ...state,
                userList: [ ...state.userList, ...action.payload ]
            }
        })
    }
});

export const { save } = userSlice.actions;

export const selectUserList = (state: RootState) => state.user.userList;

export default userSlice.reducer;
