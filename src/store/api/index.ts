import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../axios';
import { IProduct } from '../models/product';

export const fakeStoreApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: axiosBaseQuery({ baseUrl:  'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => ({
                url: 'products',
                method: 'get'
            })
        })
    }),
})

export const { useGetProductsQuery } = fakeStoreApi
