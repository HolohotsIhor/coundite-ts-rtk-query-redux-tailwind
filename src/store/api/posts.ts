import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../axios';
import { IPost } from '../../models/post';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: axiosBaseQuery({ baseUrl:  'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => ({
                url: 'posts',
                method: 'get'
            })
        }),
        getSinglePost: builder.query<IPost, number>({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'get'
            })
        })
    })
})

// Custom hooks
export const {
    useGetPostsQuery,
    useGetSinglePostQuery
} = postsApi
