import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Container } from '../../components/Container/Container';
import { useGetSinglePostQuery } from '../../store/api/posts';
import { useGetPostCommentsQuery } from '../../store/api/comments';
import { IComment } from '../../models/comments';

export const PostCard = () => {
    const { id } = useParams<{ id: string }>();
    const postId = Number(id)
    const { data} = useGetSinglePostQuery(postId)
    const { data: comments } = useGetPostCommentsQuery(postId)

    return (
        <div>
            <Header />
            <Container classes='pt-10'>
                {
                    data
                        ? (
                            <div>
                                <h1>{data.title}</h1>
                                <p>{data.body}</p>

                                <div className='mt-10 pl-10'>
                                    {
                                        comments ? (
                                            comments.map((comment: IComment) => (
                                                <div className='border mb-4 p-3 text-gray-500 text-xs'>
                                                    <h3>{comment.name}</h3>
                                                    <p>{comment.body}</p>
                                                </div>
                                            ))) : (
                                            <p>No comments...</p>
                                        )
                                    }
                                </div>

                                <div className='mt-2 text-xs'>
                                    <Link
                                        to='/blog'
                                        className='text-red-500'
                                    >Back to home...</Link>
                                </div>
                            </div>
                        ) : (
                            <p>No post data...</p>
                        )
                }
            </Container>
        </div>
    );
}
