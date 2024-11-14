import React from 'react';

export const TagList = () => {
    return (
        <div className='inline-block w-[30%]'>
            <ul className='flex gap-[8px] flex-wrap bg-theme-bgSidebar py-10 px-6'>
                <li className='flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'>Some text about</li>
                <li className='flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'>Some text</li>
                <li className='flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'>about</li>
                <li className='flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'>Some about</li>
                <li className='flex items-center max-h-[40px] px-3 py-1 rounded-tag bg-gray-800 text-white'>Some text about</li>
            </ul>
        </div>
    );
}
