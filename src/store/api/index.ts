import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../axios';
import { IProduct } from '../models/product';
import { TCategories } from '../models/categories';

interface IProductPage {
    page: number
}

export const fakeStoreApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: axiosBaseQuery({ baseUrl:  'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], IProductPage>({
            query: () => ({
                url: 'products',
                method: 'get'
            })
        }),
        gatAllCategories: builder.query<TCategories, void>({
            query: () => ({
                url: 'products/categories',
                method: 'get'
            })
        })
    }),
})

export const {
    useGetProductsQuery,
    useGatAllCategoriesQuery } = fakeStoreApi
