import React from 'react';
import { NavLink } from 'react-router-dom';

export const FeedsToggle = () => {
    return (
        <div className='h-[30px]'>
            <ul className='flex'>
                <li>
                    <NavLink
                        to='/global-feeds'
                        className='bg-white border-b-2 border-theme-green py-2 px-4'
                    >
                        Global feeds
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
