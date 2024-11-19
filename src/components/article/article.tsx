import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

interface ArticleProps {
    title: string
    description: string
    image: string
    price: number
    rate: number
}
export const Article: FC<ArticleProps> = ({ title, description, image, price, rate }) => {
    return (
        <article className='pb-6'>
            <div className='flex justify-between items-center border-t border-gray-300 py-6'>
                <div className='flex items-center font-light'>
                    <Link to='/@link' className='mr-2'>
                        <img
                            src={ image }
                            alt={ title }
                            className='inline-block h-8 w-8 rounded-full'
                        />
                    </Link>
                    <div className='mr-6 ml-0.3 inline-block leading-4'>
                        <Link to='/@link' className='block mb-1 font-medium underline hover:no-underline'>
                            { title }
                        </Link>
                        <span className='text-gray-400'>{ price }$</span>
                    </div>
                </div>
                <div tabIndex={0}
                     className='flex items-center gap-0.5 border border-green-400 py-1 px-2 cursor-pointer hover:text-white hover:bg-theme-green focus:text-white focus:bg-theme-green'>
                    <AiOutlineHeart/>
                    <div>{ rate }</div>
                </div>
            </div>
            <Link to="/article/qwert" className='font-600 text-2xl text-black'>
                { description }
            </Link>
        </article>
);
}
