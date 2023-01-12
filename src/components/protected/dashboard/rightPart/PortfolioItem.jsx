import React from 'react'

const PortfolioItem = ({ item }) => {

    const { title, desc, icon } = item;

    return (
        <div className='w-full py-2 px-2 items-center justify-center flex shadow-gray-200'>
            {/* icon+text */}
            <div className='flex items-center justify-center space-x-4 w-full'>
                <div className='bg-[#DBEEF4] rounded-full py-2 px-2'>
                    <span> {icon} </span>
                </div>
                <div className='w-full space-y-1'>
                    <h1 className='font-bold'>{title}</h1>
                    <p className='text-xs'> {desc} </p>
                </div>
            </div>
        </div>
    )
}

export default PortfolioItem
