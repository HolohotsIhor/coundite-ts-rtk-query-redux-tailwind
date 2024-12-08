import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../../axios';
import { IProduct } from '../../models/product';
import { TCategories } from '../../models/categories';

export const fakeStoreApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: axiosBaseQuery({ baseUrl:  'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getSingleProduct: builder.query<IProduct, number>({
           query: (id: number) => ({
               url: `products/${id}`
           })
        }),
        getProducts: builder.query<IProduct[], void>({
            query: () => ({
                url: 'products',
                method: 'get'
            })
        }),
        getAllCategories: builder.query<TCategories, void>({
            query: () => ({
                url: 'products/categories',
                method: 'get'
            })
        }),
        getCategory: builder.query<IProduct[], string>({
            query: (category) => ({
                url: `products/category/${category}`,
                method: 'get'
            })
        }),
    }),
})

export const {
    useLazyGetProductsQuery,
    useGetSingleProductQuery,
    useGetProductsQuery,
    useGetAllCategoriesQuery,
    useLazyGetCategoryQuery } = fakeStoreApi
