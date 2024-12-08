import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container } from '../container/container';

export const Header = () => {
    return (
        <header className='px-2 py-4'>
            <nav>
                <Container classes='flex justify-between items-center'>
                    <Link className='title' to='/'>Сonduit</Link>
                    <ul className='nav'>
                        <li>
                            <NavLink className='nav__item' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav__item' to='/sign-in'>Sign in</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav__item' to='/sign-up'>Sign up</NavLink>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    );
}
