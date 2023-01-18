import React, { useContext, useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { userDelete } from '../../../actions/usersAction';
import { AuthContext } from '../../../context/AuthContext';

const UsersRecord = ({ users, setDeleteStatus }) => {

    const { token, user } = useContext(AuthContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const deleteUser = (id, email) => {

        if(window.confirm(`Are you sure you want to delete this user with email ${email}?`)){

            userDelete(token, id, setSuccess, setError);

        }

    }


    if(success !== null) {

        alert(success);
        setDeleteStatus(Date.now());
        setSuccess(null)
    }
    else if(error !== null){

        alert(error);
        setError(null);
    }

    return (
        <tbody>
            {users.map((usr) => {
                return (
                    <tr key={usr.id} className="w-full text-gray-400 px-1 text-sm even:bg-[#141414] odd:bg-[#0c0c0c]">
                        <td className='py-3 px-3 whitespace-nowrap'>{usr.lastname}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>{usr.firstname}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>{usr.email}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>{usr.account}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>{usr.groupname}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>{usr.role}</td>
                        <td className='py-3 px-3 whitespace-nowrap flex'>
                            <Link 
                                to='/edit-user'
                                state={{ userObject : usr }}
                                className='px-2 pt-2 text-[#00df9a]'
                            >
                                <AiOutlineEdit size={15} />
                            </Link>
                            {(usr.account === 'system' && usr.role === 'admin') || (user && (usr.role === 'admin' && user.account !== 'system')) ? '' :
                                <span 
                                    className='px-2 pt-2 text-[red]'
                                    onClick={(e) => deleteUser(usr.id, usr.email)}
                                >
                                    <HiOutlineTrash size={15} />
                                </span>
                            }
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default UsersRecord
