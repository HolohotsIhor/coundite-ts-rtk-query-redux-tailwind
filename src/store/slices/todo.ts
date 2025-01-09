import { ITodo } from '../../models/todos';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTodos } from '../api/todos';

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

export const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        removeTodo(state, action: PayloadAction<number>): void {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo(state, action: PayloadAction<number>): void {
            state.todos.forEach(todo => {
                if (todo.id === action.payload) todo.completed = !todo.completed
            })
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
                state.loading = false
            })
            .addCase(fetchTodos.rejected, (state) => {
                state.loading = false
                state.error = 'Reject'
            });
    }
})

export const todosReducer = todosSlice.reducer
export const {
    updateTodo,
    removeTodo } = todosSlice.actions
