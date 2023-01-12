import React from 'react'
import Sidebar from '../common/Sidebar'
import LeftPart from './leftPart/LeftPart'
import RightPart from './rightPart/RightPart'

const Windows = () => {

    return (
        <div className='w-full min-h-[90vh] grid grid-cols-12'>
            <Sidebar />
            <div className='grid grid-cols-1 xl:grid-cols-5 w-full col-span-10'>
                {/* leftpart */}
                <LeftPart />
                {/* Rightpart */}
                <RightPart />
            </div>
        </div>
    )
}

export default Windows