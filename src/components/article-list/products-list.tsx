import React, { useState } from 'react';
import { Product } from '../product/product';
import { FeedsToggle } from '../global-feeds/feeds-toggle';
import { useGetProductsQuery } from '../../store/api';
import { useQueryState } from '../../hooks/useQueryState';
import ReactPaginate from 'react-paginate';
import { PAGE_SIZE } from '../../constants/constants';

export const ProductsList = () => {
    const [page, setPage] = useState(0)
    const { data, error, isLoading } = useGetProductsQuery({ page: page + 1 })
    const amount = data ? data.length : 0
    let products = (data ?? []).slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
    const showPagination = amount > 0;

    const queryState = useQueryState({
        isLoading,
        error,
        loadingMessage: 'Products loading...',
        errorMessage: "Error. Products can't load...",
    });

    const handlePageChange = ({ selected }: { selected: number }) => setPage(selected)

    return (
        <div className='w-[65%] pb-10'>
            <FeedsToggle />
            {queryState || (
                products
                    ? products.map( product => (
                        <Product
                            product={ product }
                            key={ product.id }
                        />
                    ))
                    : <p>No products..</p>
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
                    containerClassName='flex justify-center'
                    pageClassName='group'
                    pageLinkClassName='px-3 py-2 bg-white border border-gray-300 -ml-px hover:bg-gray-50 hover:underline group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r'
                    activeClassName='active group'
                    activeLinkClassName='group-[.active]:bg-theme-green group-[.active]:border-theme-green group-[.active]:text-white'
                />
            }
        </div>
    );
}
