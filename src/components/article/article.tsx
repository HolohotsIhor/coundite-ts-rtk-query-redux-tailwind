import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

export const Article = () => {
    return (
        <article className='pb-6'>
            <div className='flex justify-between items-center border-t border-gray-300 py-6'>
                <div className='flex items-center font-light'>
                    <Link to='/@link' className='mr-2'>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg"
                            alt="avatar"
                            className='inline-block h-8 w-8 rounded-full'
                        />
                    </Link>
                    <div className='mr-6 ml-0.3 inline-block leading-4'>
                        <Link to='/@link' className='block mb-1 font-medium underline hover:no-underline'>
                            User name
                        </Link>
                        <span className='text-gray-400'>9 october, 2024</span>
                    </div>
                </div>
                <div tabIndex={0}
                     className='flex items-center gap-0.5 border border-green-400 py-1 px-2 cursor-pointer hover:text-white hover:bg-theme-green focus:text-white focus:bg-theme-green'>
                    <AiOutlineHeart/>
                    <div>123</div>
                </div>
            </div>
            <Link to="/article/qwert" className='font-600 text-2xl text-black'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto, commodi cumque
                doloremque magnam minus nemo nisi nobis nostrum nulla officia pariatur perspiciatis, praesentium
                quas quis repudiandae veniam vitae voluptatem.
            </Link>
        </article>
);
}
