import { IPost } from '../../models/post';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    posts: IPost[],
    loading: boolean,
    error: string
}

const initialState: initialStateType = {
    posts: [],
    loading: false,
    error: ''
}

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        fetchSuccess(state, action: PayloadAction<IPost[]>): void {
            state.loading = false
            state.posts = action.payload
        },
        fetchError(state, action: PayloadAction<string>): void {
            state.error = action.payload
        },
    }
})

export const postsReducer = postsSlice.reducer
