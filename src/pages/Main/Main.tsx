import React from 'react';
import { Header } from '../../components/Header/Header';
import { SectionIntro } from '../../components/SectionIntro/SectionIntro';
import { Feed } from '../../components/Feed/Feed';

export const Main = () => {
    return (
        <div>
            <Header />
            <SectionIntro />
            <Feed />
        </div>
    );
}
