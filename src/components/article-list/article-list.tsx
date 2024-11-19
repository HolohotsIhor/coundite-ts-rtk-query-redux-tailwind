import React from 'react';
import { Article } from '../article/article';
import { FeedsToggle } from '../global-feeds/feeds-toggle';
import { useGetProductsQuery } from '../../store/api';
import { Container } from '../container/container';

export const ArticleList = () => {
    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return (
            <Container classes='flex items-start justify-between'>
                <p className='text-red-600'>Products loading...</p>
            </Container>
        )
    }

    if (error) {
        return (
            <Container classes='flex items-start justify-between'>
                <p className='text-red-600'>Error. Products can't loading...</p>
            </Container>
        )
    }

    return (
        <div className='w-[65%]'>
            <FeedsToggle />
            {
                data
                    ? data.map( product => (
                        <Article
                            title={ product.title }
                            description={ product.description }
                            image={ product.image }
                            price={ product.price }
                            rate={ product.rating.rate }
                            key={ product.id }/>
                    ))
                    : (
                        <p>No products..</p>
                    )
            }
        </div>
    );
}
