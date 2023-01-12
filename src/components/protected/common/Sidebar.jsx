import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { HiOutlineLogout } from 'react-icons/hi';
import { generateLinks } from '../../../actions/navFunction';

const Sidebar = () => {

    const { logout, role, user } = useContext(AuthContext);

    const navLinks = generateLinks(user, role);

    
  return (
    <nav className='col-span-2 border-r border-gray-900 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between'>
        <div className='space-y-8 w-full'>
            {navLinks}
            <div className='w-full border-t border-gray-900' />
            <div 
                className='w-full flex items-center justify-start space-x-8 px-6 cursor-pointer hover:border-gray-400 border-1-4 border-transparent group'
                onClick={() => logout()}
            >
                <span className='text-red-700 group-hover:text-white'>
                    <HiOutlineLogout className="nav-icon" />
                </span>
                <h1 
                    className='text-red-700 group-hover:text-white xl:flex hidden'
                >
                    LogOut
                </h1>
            </div>
        </div>
    </nav>
  )
}


export default Sidebar