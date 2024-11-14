import React, { FC } from 'react';
import { Header } from './components/header/header';
import { Intro } from './components/intro/intro';
import { Feed } from './components/feed/feed';

interface AppProps {}

export const App: FC<AppProps> = () => {
    return (
        <div>
          <Header />
          <Intro />
          <Feed />
        </div>
    );
}
