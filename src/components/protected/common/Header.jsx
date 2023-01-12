import React, { useContext } from "react";
import { HiOutlineBell, HiOutlineChip, HiOutlineInbox, HiOutlineSearch, HiOutlineUserCircle } from 'react-icons/hi'
import { AuthContext } from "../../../context/AuthContext";

const Header = () => {

    const { isLoggedin } = useContext(AuthContext);

    return (
        isLoggedin &&
        <div className="bg-[#00df9a] w-full py-6 items-center justify-between flex px-12">
            {/* search */}
            <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2">
                 {/* icon */}
                 <HiOutlineSearch size={20} />
                 <input 
                    type="text" 
                    placeholder="Searching anything..."
                    className="bg-transparent outline-none"
                />
            </div>
            {/* logo */}
            <div className="items-center w-full justify-center flex space-x-4">
                <HiOutlineChip size={20} />
                <h1 className="text-xl text-gray-900 font-medium"> RIMZ </h1>
            </div>
            {/* icons */}
            <div className="items-center justify-end space-x-6 flex w-full" >
                <HiOutlineBell className="header-icon" />
                <HiOutlineInbox className="header-icon" />
                <HiOutlineUserCircle className="header-icon" />
            </div>
        </div>
    )
}

export default Header