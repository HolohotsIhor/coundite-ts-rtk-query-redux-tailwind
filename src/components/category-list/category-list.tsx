import React from 'react';
import { useGatAllCategoriesQuery } from '../../store/api';
import { useQueryState } from '../../hooks/useQueryState';

export const CategoryList = () => {
    const { data , error, isLoading} = useGatAllCategoriesQuery()

    const queryState = useQueryState({
        isLoading,
        error,
        loadingMessage: 'Categories loading...',
        errorMessage: "Error. Categories can't load...",
    });

    return (
        <div className='inline-block w-[30%]'>
            <ul className='flex gap-[8px] flex-wrap bg-theme-bgSidebar py-10 px-6'>
                {queryState || (
                    data
                        ? data.map(category => (
                            <li
                                key={category}
                                className='flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'>
                                { category }
                            </li>
                        ))
                    : <p className='text-red-600'>No categories...</p>
                    )
                }
            </ul>
        </div>
    );
}
