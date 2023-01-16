import React, { useState } from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from "react-router-dom";
import Logo from '../../assets/logoUpdt2.png'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <div className="flex justify-between items-center h-18 max-w-[100%] mx-auto px-4 text-white sticky top-0 bg-[#000300]">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] my-4 md:ml-32"><img className="ml-4 pt-2" src={Logo} alt="/" width="50px" /></h1>
            <ul className="hidden md:flex mr-32">
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4 w-[150px] mr-[-40px]"><Link to="/self-service">Self service</Link></li>
                <li className="p-4">FAQs</li>
                <li className="p-4">Contact</li>
                <li className="p-4"><Link to="/login" className="bg-[#00df9a] rounded-md font-medium mx-auto mt-[-5px] py-3 px-8 text-black">Login</Link></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] md:hidden ease-in-out duration-500" : "fixed left-[-100%]"}>          
                <ul className="block md:hidden uppercase p-4">
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] mx-4 mt-0 mb-4 pt-2"><img src={Logo} alt="/" width="50px" /></h1>
                    <li className="p-4 border-b border-gray-600" onClick={(e) => setNav(false)}><Link to="/">Home</Link></li>
                    <li className="p-4 border-b border-gray-600" onClick={(e) => setNav(false)}><Link to="/self-service">Self service</Link></li>
                    <li className="p-4 border-b border-gray-600" onClick={(e) => setNav(false)}>FAQs</li>
                    <li className="p-4 border-b border-gray-600" onClick={(e) => setNav(false)}>Contact</li>
                    <li className="p-4 my-4" onClick={(e) => setNav(false)}><Link to="/login"><span className="bg-[#00df9a] w-[100px] rounded-md font-medium my-2 py-3 px-16 text-black">Login</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar