import React from 'react'
import { HiOutlineCash, HiOutlineCreditCard } from 'react-icons/hi'
import { InvestDB } from '../leftPart/utils/investmentsDB'
import Chart from './Chart'
import PortfolioItem from './PortfolioItem'

const RightPart = () => {
  return (
    <div className='col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6'>
        {/* top sectiion */}
        <div className='md:flex items-center justify-center w-full lg:space-y-0 space-y-4 lg:space-x-4 px-12 text-gray-300'>
            <div className='space-y-6 w-full items-center justify-center flex flex-col'>
                <span className='py-4 px-4 rounded-full shadow-lg shadow-gray-500 items-center justify-center flex'>
                    <HiOutlineCash className='w-8 h-8 stroke-1' />
                </span>
                <span className='items-center justify-center flex flex-col'>
                    <h2>One Time</h2>
                    <h2 className='font-bold text-xl'>$ 120.55</h2>
                </span>
            </div>
            <div className='space-y-6 w-full items-center justify-center flex flex-col'>
                <span className='py-4 px-4 rounded-full shadow-lg shadow-gray-500 items-center justify-center flex'>
                    <HiOutlineCreditCard className='w-8 h-8 stroke-1' />
                </span>
                <span className='items-center justify-center flex flex-col'>
                    <h2>Round-Ups</h2>
                    <h2 className='font-bold text-xl'>$ 200.13</h2>
                </span>
            </div>
            <div className='bg-[#BFFA00] pt-6 items-center justify-between flex flex-col w-full text-gray-800'>
                <span className='items-center justify-center flex flex-col w-full py-6'>
                    <h3> Total Amount </h3>
                    <h1 className='text-black font-bold text-xl 2xl:text-3xl'>$211,478.33</h1>
                </span>
                <div className='bg-black border border-gray-500 items-center justify-center flex text-white w-full py-3'>
                    <h1> Withdraw Earnings </h1>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-800 w-full my-4' />
        {/* chart */}
        <div className='w-full items-start justify-start flex flex-col px-12 py-2 text-gray-400'>
            <h1 className='text-xl font-bold xl:text-3xl'> Potential </h1>
            <Chart />
        </div>
        {/* bottom section */}
        <div className='w-full items-start justify-start flex flex-col px-12 py-6 text-gray-400 '>
            <h1 className='text-xl font-bold xl:text-3xl py-4'> My Portfolio </h1>
            <div className='flex items-center justify-center space-x-6 overflow-x-auto w-full py-4'>
                {InvestDB.map((item) => {
                    return <PortfolioItem item={item} key={item.id} />
                })}
            </div>
        </div>

    </div>
  )
}

export default RightPart
