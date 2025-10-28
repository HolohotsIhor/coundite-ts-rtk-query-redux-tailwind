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
                url: 's',
                method: 'get'
            })
        }),
        getCategory: builder.query<IProduct[], string>({
            query: (category) => ({
                url: `products/category/${category}`,
                method: 'get'
            })
        }),
        addPost: builder.query<IProduct[], void>({
            query: (product) => ({
                url: `products/`,
                method: 'post',
                body: JSON.stringify({
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                })
            })
        })
    }),
})

// Custom hooks
export const {
    useLazyGetProductsQuery,
    useGetSingleProductQuery,
    useGetProductsQuery,
    useGetAllCategoriesQuery,
    useLazyGetCategoryQuery,
    useLazyAddPostQuery,
} = fakeStoreApi
