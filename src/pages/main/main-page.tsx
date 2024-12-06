import React from 'react';
import { Header } from '../../components/header/header';
import { Intro } from '../../components/intro/intro';
import { Feed } from '../../components/feed/feed';

export const MainPage = () => {
    return (
        <div>
            <Header />
            <Intro />
            <Feed />
        </div>
    );
}
