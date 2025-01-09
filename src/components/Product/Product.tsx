import React, { FC } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { IProduct } from '../../models/product';
import { useNavigate } from 'react-router-dom';

interface ProductProps {
    product: IProduct
}

export const Product: FC<ProductProps> = ({ product }) => {
    const navigate = useNavigate()
    const { id, title, description, image, price, rating } = product;

    const handleClick = () => navigate(`/product/${id}`)

    return (
        <article
            className='pb-6 hover:bg-gray-100 cursor-pointer'>
            <div className='flex justify-between items-center border-t border-gray-300 p-6'>
                <div className='flex items-center font-light'>
                    <div
                        onClick={ handleClick }
                        className='mr-2'>
                        <img
                            src={ image }
                            alt={ title }
                            className='inline-block h-8 w-8 rounded-full'
                        />
                    </div>
                    <div className='mr-6 ml-0.3 inline-block leading-4'>
                        <div onClick={ handleClick } className='block mb-1 font-medium underline hover:no-underline'>
                            { title }
                        </div>
                        <span className='text-gray-400'>{ price }$</span>
                    </div>
                </div>
                <div tabIndex={0}
                     className='flex items-center gap-0.5 border border-green-400 py-1 px-2 cursor-pointer hover:text-white hover:bg-theme-green focus:text-white focus:bg-theme-green'>
                    <AiOutlineHeart/>
                    <div>{ rating.rate }</div>
                </div>
            </div>
            <div onClick={ handleClick } className='font-600 text-2xl text-black p-6'>
                { description }
            </div>
        </article>
);
}
