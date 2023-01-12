import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export const PageTitle = ({ icon }) => {

    const location  = useLocation();

    const { user } = useContext(AuthContext);

    const pagetitle = location.pathname.replace('/', '')[0].toUpperCase() + location.pathname.replace('/', '').replace('-', ' ').slice(1)

    return (
            <div className='flex justify-between py-8 border-b border-gray-700'>
                <div className='w-full grid grid-cols-1 md:grid-cols-5'>
                    <div className='col-span-4 items-start justify-start flex text-gray-400 space-x-3'>
                        {icon}
                        <h1 className='text-xl font-bold text-gray-400'>{pagetitle}</h1>
                    </div>
                    <div className='items-start justify-start text-gray-400'>
                        <h1 className='font-bold text-sm mt-2 md:mt-1'> {`Welcome, ${user && user.lastname} ${user && user.firstname} !`}</h1>
                    </div>
                </div>
            </div>
    )
}
