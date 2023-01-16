import React, { useContext, useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { mdaDelete } from '../../../actions/mdasAction';
import { AuthContext } from '../../../context/AuthContext';

const MdasRecord = ({ mdas, setDeleteStatus }) => {

    const { token } = useContext(AuthContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const deleteMda = (id, title) => {

        if(window.confirm(`Are you sure you want to delete this ${title}?`)){

            mdaDelete(token, id, setSuccess, setError);

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
            {mdas.map((mda) => {
                return (
                    <tr key={mda.id} className="w-full text-gray-400 px-1 text-sm even:bg-[#141414] odd:bg-[#0c0c0c]">
                        <td className='py-3 px-3 whitespace-nowrap'>{mda.title}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>{mda.initial}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>{mda.created_by}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>
                            {mda.status === 1 ? <span className='py-2 text-[#00df9a]'>active</span> : <span className='p-2 text-[red]'>disabled</span>}
                        </td>
                        <td className='py-3 px-3 whitespace-nowrap flex'>
                            <Link 
                                to='/edit-mda'
                                state={{ mdaObject : mda }}
                                className='px-2 pt-2 text-[#00df9a]'
                            >
                                <AiOutlineEdit size={15} />
                            </Link>
                            <span 
                                className='px-2 pt-2 text-[red]'
                                onClick={(e) => deleteMda(mda.id, mda.title)}
                            >
                                <HiOutlineTrash size={15} />
                            </span>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default MdasRecord
