import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../store/api';
import { Container } from '../../components/Container/Container';
import { useQueryState } from '../../hooks/useQueryState';
import { Header } from '../../components/Header/Header';

export const ProductCard= () => {
    const params = useParams<'id'>()
    const productId = Number(params.id)
    const { data, isLoading, error} = useGetSingleProductQuery(productId)

    const queryState = useQueryState({
        isLoading,
        error,
        loadingMessage: 'Products loading...',
        errorMessage: "Error. Products can't load...",
    });

    return (
        <>
            <Header />
            <Container
                classes='pt-10'
            >
                {queryState || (
                    data
                        ? (
                            <>
                                <div className='mb-16'>
                                    <h1 className='pb-2'>{data.id}</h1>
                                    <p>{data.description}</p>
                                </div>
                                <Link
                                    to='/'
                                    className='text-red-500'
                                >Back to home</Link>
                            </>
                        )
                        : (
                            <p>Can't found product</p>
                        )
                    )
                }
            </Container>
        </>
    );
}
