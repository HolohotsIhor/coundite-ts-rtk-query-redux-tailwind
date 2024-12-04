import React, { useEffect } from 'react';
import { useGetAllCategoriesQuery, useLazyGetCategoryQuery, useLazyGetProductsQuery } from '../../store/api';
import { useQueryState } from '../../hooks/useQueryState';
import { useAppDispatch } from '../../hooks/useRedux';
import { productsSlice } from '../../store/slices/products';

export const CategoryList = () => {
    const dispatch = useAppDispatch()
    const { data , error, isLoading} = useGetAllCategoriesQuery()
    const [ triggerGetAllProducts, {data: allProductsData}] = useLazyGetProductsQuery()
    const [ triggerGetCategory, { data: categoryData } ] = useLazyGetCategoryQuery()
    const queryState = useQueryState({
        isLoading,
        error,
        loadingMessage: 'Categories loading...',
        errorMessage: "Error. Categories can't load...",
    });

    useEffect(() => {
        if (categoryData) dispatch(productsSlice.actions.fetchSuccess(categoryData))
    }, [dispatch, categoryData]);

    const handleClick = (category: string): void => {
        triggerGetCategory(category)
    }

    const handleAllProducts = async (): Promise<void> => {
        await triggerGetAllProducts()
        if (allProductsData) dispatch(productsSlice.actions.fetchSuccess(allProductsData))
    }

    return (
        <div className='inline-block w-[30%]'>
            <ul className='flex gap-[8px] flex-wrap bg-theme-bgSidebar py-10 px-6'>
                <li
                    onClick={ () => handleAllProducts() }
                    className='cursor-pointer transition duration-200 hover:bg-theme-green flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'
                    >
                    All
                </li>
                {queryState || (
                    data
                        ? data.map(category => (
                            <li
                                onClick={() => handleClick(category)}
                                key={category}
                                className='cursor-pointer transition duration-200 hover:bg-theme-green flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'>
                                {category}
                            </li>
                        ))
                        : <p className='text-red-600'>No categories...</p>
                )
                }
            </ul>
        </div>
    );
}
