// RTK Thunk
import { ITodo } from '../../models/todos';
import { removeTodo, updateTodo } from '../slices/todo';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const updateTodoItem = createAsyncThunk<
    void, // Result
    number, // Argument
    { rejectValue: string } // Error type
>(
    'todosSlice/updateTodo',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    method: 'PATCH',
                });

            if (!response.ok) return rejectWithValue('Can not update todo item.');

            dispatch(updateTodo(id))
        } catch(error) {
            return rejectWithValue('An unknown error occurred. After update todo item');
        }
    }
)

export const deleteTodo = createAsyncThunk<
    void, // Result
    number, // Argument
    { rejectValue: string } // Error type
>(
    'todosSlice/deleteTodo',
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/todos/${id}`,
                {
                    method: 'DELETE',
                });

            if (!response.ok) return rejectWithValue('Can not remove an error.');

            dispatch(removeTodo(id))
        } catch (error) {
            return rejectWithValue('An unknown error occurred');
        }
    }
);

export const fetchTodos = createAsyncThunk<
    ITodo[], // Result
    number,    // Arguments
    { rejectValue: string } // Error type
>(
    'todosSlice/fetchTodos',
    async (limit = 10, { rejectWithValue }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
            return response.json();
        } catch (error) {
            if (error instanceof Error) return rejectWithValue(error.message)

            return rejectWithValue('An unknown error occurred');
        }
    }
);
