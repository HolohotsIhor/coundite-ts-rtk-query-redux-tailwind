import React, { useEffect } from 'react';
import { useGetAllCategoriesQuery, useLazyGetCategoryQuery, useLazyGetProductsQuery } from '../../store/api';
import { useQueryState } from '../../hooks/useQueryState';
import { useAppDispatch } from '../../hooks/useRedux';
import { productsSlice } from '../../store/slices/products';

export const CategoryList = () => {
    const dispatch = useAppDispatch()
    const { data , error, isLoading} = useGetAllCategoriesQuery()
    const [ triggerGetAllProducts] = useLazyGetProductsQuery()
    const [ triggerGetCategory, { data: categoryData }] = useLazyGetCategoryQuery()
    const queryState = useQueryState({
        isLoading,
        error,
        loadingMessage: 'Categories loading...',
        errorMessage: "Error. Categories can't load...",
    });

    useEffect(() => {
        if (categoryData) dispatch(productsSlice.actions.fetchSuccess(categoryData))
    }, [categoryData, dispatch])

    const handleCategoryClick = (category: string | null): void => {
        if (category === null || category === 'all') {
            dispatch(productsSlice.actions.fetching());
            triggerGetAllProducts()
                .then(result => {
                    if (result.data) dispatch(productsSlice.actions.fetchSuccess(result.data))
                })
        } else {
            dispatch(productsSlice.actions.fetching());
            triggerGetCategory(category);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLUListElement>): void => {
        const target = event.target as HTMLElement

        const category = target.getAttribute('data-category')
        if (category) handleCategoryClick(category === 'all' ? null : category);
    }

    return (
        <div className='inline-block w-[30%]'>
            <ul
                onClick={handleClick}
                className='flex gap-[8px] flex-wrap bg-theme-bgSidebar py-10 px-6'>
                { queryState || (
                    data
                        ? (
                            <>
                                <li
                                    data-category='all'
                                    className='cursor-pointer transition duration-200 hover:bg-theme-green flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'
                                >
                                    All
                                </li>
                                {
                                    data.map(category => (
                                        <li
                                            data-category={category}
                                            key={category}
                                            className='cursor-pointer transition duration-200 hover:bg-theme-green flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'
                                        >
                                            {category}
                                        </li>
                                    ))
                                }
                            </>
                        )
                    : <p className='text-red-600'>No categories...</p>
                    )
                }
            </ul>
        </div>
    );
}
