import React, { useEffect } from 'react';
import { Product } from '../product/product';
import { FeedsToggle } from '../global-feeds/feeds-toggle';
import { useQueryState } from '../../hooks/useQueryState';
import ReactPaginate from 'react-paginate';
import { PAGE_SIZE } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { IProduct } from '../../models/product';
import { useGetProductsQuery } from '../../store/api';
import { productsSlice } from '../../store/slices/products';

export const ProductsList = () => {
    const dispatch = useAppDispatch()
    const { data, error, isLoading} = useGetProductsQuery()
    const { products, page, loading} = useAppSelector( state => state.products )
    const amount = products ? products.length : 0
    const showPagination = amount > 0
    let currentProducts: IProduct[] = (products ?? []).slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

    const queryState = useQueryState({
        isLoading,
        error,
        loadingMessage: 'Products loading...',
        errorMessage: "Error. Products can't load...",
    });

    useEffect(() => {
       if (data) dispatch(productsSlice.actions.fetchSuccess(data))
       else dispatch(productsSlice.actions.fetchError('No products...'))
    }, [dispatch, data]);

    const handlePageChange = ({ selected }: { selected: number }) => dispatch(productsSlice.actions.fetchPage(selected))

    return (
        <div className='w-[65%] pb-10'>
            <FeedsToggle />
            {queryState || (
                !loading
                    ?
                        currentProducts
                            ? currentProducts.map( product => (
                                <Product
                                    product={ product }
                                    key={ product.id }
                                />
                            ))
                            : <p>No products..</p>
                    :
                        <p>Updating products list...</p>
                )
            }
            {
                showPagination &&
                <ReactPaginate
                    onPageChange={handlePageChange}
                    forcePage={page}
                    pageCount={Math.ceil(amount / PAGE_SIZE)}
                    pageRangeDisplayed={amount / PAGE_SIZE}
                    previousLabel={null}
                    nextLabel={null}
                    containerClassName='flex justify-center mt-6'
                    pageClassName='group'
                    pageLinkClassName='px-3 py-2 bg-white border border-gray-300 -ml-px hover:bg-gray-50 hover:underline group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r'
                    activeClassName='active group'
                    activeLinkClassName='group-[.active]:bg-theme-green group-[.active]:border-theme-green group-[.active]:text-white'
                />
            }
        </div>
    );
}
