import { IProduct } from '../../models/product';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
    products: IProduct[]
    page: number
    loading: boolean
    error: string | null
}

const initialState: initialStateType = {
    products: [],
    page: 0,
    loading: false,
    error: null,
}

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        fetching(state): void {
            state.loading = true
        },
        fetchSuccess(state, action: PayloadAction<IProduct[]>): void {
            state.loading = false
            state.page = 0
            state.products = action.payload
        },
        fetchPage(state, action: PayloadAction<number>): void {
            state.page = action.payload
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export const productsReducer = productsSlice.reducer
