import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Container } from '../../components/Container/Container';
import { useGetSinglePostQuery } from '../../store/api/posts';

export const PostCard = () => {
    const params = useParams<'id'>()
    const postId = Number(params.id)
    const { data} = useGetSinglePostQuery(postId)

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
                                <Link
                                    to='/blog'
                                    className='text-red-500'
                                >Back to home</Link>
                            </div>
                        ) : (
                            <p>No post data...</p>
                        )
                }
            </Container>
        </div>
    );
}
