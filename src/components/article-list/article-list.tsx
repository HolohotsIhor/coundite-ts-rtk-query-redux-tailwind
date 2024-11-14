import React from 'react';
import { Article } from '../article/article';
import { FeedsToggle } from '../global-feeds/feeds-toggle';

export const ArticleList = () => {
    return (
        <div className='w-[65%]'>
            <FeedsToggle />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    );
}
