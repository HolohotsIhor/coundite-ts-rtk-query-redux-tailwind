import React from 'react';
import { Container } from '../Container/Container';

export const SectionIntro = () => {
    return (
        <section className='section bg-theme-green text-white text-center shadow-section mb-6'>
            <Container>
                <h1 className='block font-bold drop-shadow-h1 text-h1 mb-0.5'>conduit</h1>
                <p className='text-subtitle font-light'>A place to share your knowledge.</p>
            </Container>
        </section>
    );
}
