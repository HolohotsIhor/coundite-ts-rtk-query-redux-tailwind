import { IPost } from '../../models/post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    posts: IPost[]
}

const initialState: initialStateType = {
    posts: []
}

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        fetchSuccess(state, action: PayloadAction<IPost[]>): void {
            state.posts = action.payload
        },
    }
})

export const postsReducer = postsSlice.reducer
