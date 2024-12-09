import React from 'react';
import { Container } from '../Container/Container';
import { ProductsList } from '../ProductsList/ProductsList';
import { CategoryList } from '../CategoryList/CategoryList';

export const Feed = () => {
    return (
        <Container classes='flex items-start justify-between'>
            <ProductsList />
            <CategoryList />
        </Container>
    );
}
