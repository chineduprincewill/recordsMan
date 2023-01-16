import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../../widgets/PageTitle'
import Sidebar from '../common/Sidebar'
import { HiOutlineReceiptTax } from 'react-icons/hi'

const EditTax = () => {

    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-6 col-span-10'>
                <PageTitle icon={<HiOutlineReceiptTax size={25} />}/>
                
                <div className='grid grid-cols-1 md:grid-cols-8 pt-8 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                        <HiOutlineReceiptTax size={20} className="text-[#00df9a]" />
                        <h1 className='text-md'>Tax information</h1>
                    </div>
                    <Link to="/taxes" className='w-full flex bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                        <HiOutlineReceiptTax size={20} className="mx-auto" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EditTax
