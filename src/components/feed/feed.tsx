import React from 'react';
import { Container } from '../container/container';
import { ProductsList } from '../article-list/products-list';
import { CategoryList } from '../category-list/category-list';

export const Feed = () => {
    return (
        <Container classes='flex items-start justify-between'>
            <ProductsList />
            <CategoryList />
        </Container>
    );
}
