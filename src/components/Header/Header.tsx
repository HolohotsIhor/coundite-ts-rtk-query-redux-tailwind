import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Modal } from '../Modal/Modal';

export const Header = () => {
    const [ isModal, setIsModal ]= useState(false)

    return (
        <header className='px-2 py-4'>
            <nav>
                <Container classes='flex justify-between items-center'>
                    <Link className='title' to='/'>Сonduit</Link>
                    <ul className='nav'>
                        <li><NavLink className='nav__item' to='/'>Home</NavLink></li>
                        <li><NavLink className='nav__item' to='/blog'>Blog</NavLink></li>
                        <li><NavLink className='nav__item' to='/todos'>Todos</NavLink></li>
                        <li><NavLink className='nav__item' to='/sign-in'>Sign in</NavLink></li>
                        <li><NavLink className='nav__item' to='/sign-up'>Sign up</NavLink></li>
                    </ul>
                    <button
                        onClick={() => setIsModal(true)}
                    >Add product
                    </button>
                </Container>
            </nav>
            <Modal
                isOpen={isModal}
                onClose={() => setIsModal(false)}
            >
                <h2>Add new product</h2>
                <p>You can add some product to our DB</p>
            </ Modal>
        </header>
    );
}
