import React from 'react';
import { Container } from '../container/container';
import { ArticleList } from '../article-list/article-list';
import { TagList } from '../tag-list/tag-list';

export const Feed = () => {
    return (
        <Container classes='flex items-start justify-between'>
            <ArticleList />
            <TagList />
        </Container>
    );
}
