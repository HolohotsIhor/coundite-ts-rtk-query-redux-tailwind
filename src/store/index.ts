import { configureStore } from '@reduxjs/toolkit';
import { fakeStoreApi } from './api';
import { productsReducer } from './slices/products';
import { postsReducer } from './slices/posts';
import { todosReducer } from './slices/todo';
import { postsApi } from './api/posts';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        posts: postsReducer,
        todos: todosReducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(fakeStoreApi.middleware)
            .concat(postsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
