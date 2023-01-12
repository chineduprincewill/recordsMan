import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { HiOutlineUser } from 'react-icons/hi'
import { FaAddressCard } from 'react-icons/fa'
import { GiOfficeChair } from 'react-icons/gi'
import { RiPassportLine } from 'react-icons/ri'
import { GiConfirmed } from 'react-icons/gi'

const TaxpayerPagesHeader = ({ active }) => {
    return (
        <div className='grid grid-cols-6 p-3 md:text-md text-sm text-[#00fd9a]'>
            <div className={`flex ${active === 'category' ? 'border-t border-[#00fd9a]' : 'bg-[#00fd9a] text-black border border-black'} p-3 rounded-t-md justify-center`}>
                <span className='md:block hidden'>Category</span>
                <span className='md:hidden'>
                    <BiCategory size={20} />
                </span>
            </div>
            <div className={`flex ${active === 'bio' ? 'border-t border-[#00fd9a]' : 'bg-[#00fd9a] text-black border border-black'} p-3 rounded-t-md  justify-center`}>
                <span className='md:block hidden'>Personal Info</span>
                <span className='md:hidden'>
                    <HiOutlineUser size={20} />
                </span>
            </div>
            <div className={`flex ${active === 'address' ? 'border-t border-[#00fd9a]' : 'bg-[#00fd9a] text-black border border-black'} p-3 rounded-t-md  justify-center`}>
                <span className='md:block hidden'>Address</span>
                <span className='md:hidden'>
                    <FaAddressCard size={20} />
                </span>
            </div>
            <div className={`flex ${active === 'occupation' ? 'border-t border-[#00fd9a]' : 'bg-[#00fd9a] text-black border border-black'} p-3 rounded-t-md  justify-center`}>
                <span className='md:block hidden'>Occupation</span>
                <span className='md:hidden'>
                    <GiOfficeChair size={20} />
                </span>
            </div>
            <div className={`flex ${active === 'identification' ? 'border-t border-[#00fd9a]' : 'bg-[#00fd9a] text-black border border-black'} p-3 rounded-t-md  justify-center`}>
                <span className='md:block hidden'>Identification</span>
                <span className='md:hidden'>
                    <RiPassportLine size={20} />
                </span>
            </div>
            <div className={`flex ${active === 'confirmation' ? 'border-t border-[#00fd9a]' : 'bg-[#00fd9a] text-black border border-black'} p-3 rounded-t-md  justify-center`}>
                <span className='md:block hidden'>Confirmation</span>
                <span className='md:hidden'>
                    <GiConfirmed size={20} />
                </span>
            </div>
        </div>
    )
}

export default TaxpayerPagesHeader
