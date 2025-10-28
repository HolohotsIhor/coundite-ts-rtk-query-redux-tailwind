import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseState } from '../../models/state';
import { IComment } from '../../models/comments';

interface IInitialState extends BaseState {
    comments: IComment[]
}

const initialState: IInitialState = {
    comments: [],
    loading: false,
    error: null,
}

export const commentsSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        updateComments(state, action: PayloadAction<IComment[]>): void {
            state.comments = action.payload
        },
    }
})

// Export reducer and actions
export const commentsReducer = commentsSlice.reducer
export const { updateComments } = commentsSlice.actions
