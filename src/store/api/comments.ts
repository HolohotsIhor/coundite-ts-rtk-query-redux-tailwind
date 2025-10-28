import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getPostComments: builder.query({
            query: (id: number) => ({
                url: `comments?postId=${id}`
            })
        })
    })
})

export const { useGetPostCommentsQuery } = commentsApi
