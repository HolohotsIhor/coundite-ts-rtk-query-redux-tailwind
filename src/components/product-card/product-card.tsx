import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductCard= () => {
    const params = useParams<'id'>()

    return (
        <div>
            <h1>{params.id}</h1>
        </div>
    );
}
