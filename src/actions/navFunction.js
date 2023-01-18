import React from 'react'
import { useRecoilState } from 'recoil';
import { system_admin, system_auditor, mda_admin, mda_auditor } from '../components/protected/common/sidebar/utils/NavDB'
import { ActiveTabState } from '../atoms/ActiveTabState';
import { Link } from 'react-router-dom';

export const generateLinks = (user, role) => {

    let navLinks;

    if(user && user.account === 'system' && role === 'admin'){
        navLinks = system_admin.map((link) => (
            <NavItem link={link} key={link.id} />
        ))
    }
    else if(user && user.account === 'system' && role === 'auditor'){
        navLinks = system_auditor.map((link) => (
            <NavItem link={link} key={link.id} />
        ))
    }
    else if(user && user.account === 'mda' && role === 'admin'){
        navLinks = mda_admin.map((link) => (
            <NavItem link={link} key={link.id} />
        ))
    }
    else if(user && user.account === 'mda' && role === 'auditor'){
        navLinks = mda_auditor.map((link) => (
            <NavItem link={link} key={link.id} />
        ))
    }
    
  return navLinks
}



function NavItem ({ link }) {
    
    const [activeNavItem, setActiveNavItem] = useRecoilState(ActiveTabState);

    return(
        <Link 
            to={link.url}
            onClick={() => setActiveNavItem(link.id)}
            className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer hover:border-gray-400 border-l-4 border-transparent group ${activeNavItem === link.id && "border-gray-400 bg-white py-3"}`}
        >
            <span 
                className={`text-gray-500 group-hover:text-white ${activeNavItem === link.id && "text-gray-700"}`}
            >
                {link.icon}
            </span>
            <h1 
                className={`text-gray-500 group-hover:text-white xl:flex hidden ${activeNavItem === link.id && "text-gray-700"}`}
            >
                {link.title}
            </h1>
        </Link>
    )
}