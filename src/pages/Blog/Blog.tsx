import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { useGetPostsQuery } from '../../store/api/posts';
import { postsSlice } from '../../store/slices/posts';
import { Container } from '../../components/Container/Container';
import { Post } from '../../components/Post/Post';

export const Blog = () => {
    const dispatch = useAppDispatch()
    const { data} = useGetPostsQuery()
    const { posts } = useAppSelector( state => state.posts)

    useEffect(() => {
        if (data) dispatch(postsSlice.actions.fetchSuccess(data))
        else dispatch(postsSlice.actions.fetchError('Can not fetch posts'))
    }, [dispatch, data]);

    return (
        <>
            <Header />
            <Container>
                {
                    posts && (
                        posts.map(post => (
                            <Post key={post.id} post={post} />
                        ))
                    )
                }
            </Container>
        </>
    );
}
