import { configureStore } from '@reduxjs/toolkit';
import { fakeStoreApi } from './api';
import { productsReducer } from './slices/products';
import { postsReducer } from './slices/posts';
import { todosReducer } from './slices/todo';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        posts: postsReducer,
        todos: todosReducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(fakeStoreApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
