import { ITodo } from '../../models/todos';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    todos: ITodo[],
    loading: boolean
    error: string | null
}

const initialState: initialStateType = {
    todos: [],
    loading: false,
    error: null,
}

export const fetchTodos = createAsyncThunk(
    'todosSlice/fetchTodos',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')

        return response.json()
    }
)

export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        fetchSuccess(state, action: PayloadAction<ITodo[]>): void {
            state.loading = false
            state.todos = action.payload
        },
    },
    // Thunk extraReducers logic
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<ITodo[]>) => {
                state.loading = true
                state.error = null
                state.todos = action.payload
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload as string
            });
    }
})

export const todosReducer = todosSlice.reducer
