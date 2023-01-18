import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import InvestItem from './InvestItem'
import { profileDB } from './utils/profilesDB'

const LeftPart = () => {

    const { user } = useContext(AuthContext);

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        profileDB(user, setProfile);
    }, [user])

    return (
        <div className='col-span-2 min-h-[90vh] border-r border-gray-800 items-start justify-start flex flex-col w-full'>
            {/* top section */}
            <div className='w-full items-start justify-start flex flex-col px-12 pt-12 pb-6 text-gray-400 '>
                <h1 className='font-bold text-xl xl:text-2xl pb-2'> Welcome!</h1>
                <p className='text-md text-gray-400'>Your account is set up as <strong className='uppercase text-[#89F8B7]'>{user && user.account}</strong> account.</p>
                <div className='items-start justify-start flex-col px-6 pt-8 pb-4 bg-[#89F8B7] mt-6 w-full text-gray-900 hidden'>
                    <h1> Ijeomah Chinedu</h1>
                    <h1 className='text-3xl xl:text-5xl font-bold py-6'>$ 920,434.00</h1>
                </div>
                <div className='bg-gray-400 py-4 px-8 w-full items-start justify-between shadow-2xl shadow-emerald-800 hidden'>
                    <span className="flex flex-col items-start justify-start text-gray-900">
                        <h1>Card Number</h1>
                    <h3> **** **** **** 3711</h3>
                    </span>
                    <span className="flex flex-col items-start justify-start text-gray-900">
                        <h1>CVC</h1>
                    <h3>786</h3>
                    </span>
                </div>
            </div>
            {/* bottom section */}
            <div className='w-full items-start justify-start flex flex-col px-12 py-6 text-gray-400'>
                <h1 className='font-bold text-xl xl:text-2xl pb-2'>
                    Profile information
                </h1>
                <div className='w-full space-y-5 overflow-y-auto max-h-[450px] py-6 scrollbar-hide'>
                    {profile !== null && profile.map((item) => {
                        return <InvestItem item={item} key={item.id} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default LeftPart
