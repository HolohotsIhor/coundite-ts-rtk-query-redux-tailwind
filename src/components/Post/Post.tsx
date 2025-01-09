import React from 'react';
import { IPost } from '../../models/post';
import { useNavigate } from 'react-router-dom';

interface postProps {
    post: IPost
}

export const Post: React.FC<postProps> = ({ post }) => {
    const navigate = useNavigate()
    const handleClick = () => navigate(`/post/${post.id}`)

    return (
        <div
            onClick={ handleClick }
            className='mb-6 cursor-pointer'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p><b>User:</b> {post.userId}</p>
        </div>
    );
}
