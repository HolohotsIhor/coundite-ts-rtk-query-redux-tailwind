import React, { FC } from 'react';
import { useInput } from '../../hooks/useInput';
import { useLazyAddPostQuery } from '../../store/api';

type FormNewProduct = {
    categories: string[];
}

export const FormNewProduct: FC<FormNewProduct> = ({ categories}) => {
    const titleProps = useInput('Product name')
    const priceProps = useInput('Price')
    const descriptionProps = useInput('Description')
    const imageProps = useInput('Image src')
    const [triggerAddProduct] = useLazyAddPostQuery()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        triggerAddProduct()
    }

    return (
        <form className='flex flex-col'>
            <input {...titleProps} name='title' type='text' className='border px-2 py-1 mt-4 text-gray-400 text-sm'/>
            <input {...priceProps} name='price' type='text' className='border px-2 py-1 mt-4 text-gray-400 text-sm'/>
            <input {...descriptionProps} name='description' type='text' className='border px-2 py-1 mt-4 text-gray-400 text-sm'/>
            <input {...imageProps} name='image' type='text' className='border px-2 py-1 mt-4 text-gray-400 text-sm'/>
            <select name="category" id="category" className='border px-2 py-1 mt-4 text-gray-400 text-sm'>
                <option value="choose">Choose category</option>
                {
                    categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))
                }
            </select>
            <button
                className='cursor-pointer mt-6 bg-blue-500 text-white py-2 px-4 rounded-3xl hover:bg-blue-600 transition-all'
                onClick={handleClick}
            >Add product</button>
        </form>
    );
}
