import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { utilityDelete } from '../../../actions/utilitiesAction';

const UtilitiesRecord = ({ utilities, setDeleteStatus }) => {

    const { token } = useContext(AuthContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const deleteUtility = (id, title) => {

        if(window.confirm(`Are you sure you want to delete ${title}?`)){

            utilityDelete(token, id, setSuccess, setError);

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
            {utilities.map((utility) => {
                return (
                    <tr key={utility.id} className="w-full text-gray-400 px-1 text-sm even:bg-[#141414] odd:bg-[#0c0c0c]">
                        <td className='py-3 px-3 whitespace-nowrap'>{utility.title}</td>
                        <td className='py-3 px-3'>
                            <div className='w-[500px] overflow-hidden'>
                                {   
                                    JSON.parse(utility.items).map((item, index) => {
                                        return <span className='py-1 pr-1' key={index}>{item},</span>
                                    })
                                }
                            </div>
                        </td>
                        <td className='py-3 px-3 whitespace-nowrap'>{utility.created_by}</td>
                        <td className='py-3 px-3 whitespace-nowrap'>
                            {utility.status === "1" ? <span className='py-2 text-[#00df9a]'>active</span> : <span className='p-2 text-[red]'>disabled</span>}
                        </td>
                        <td className='py-3 px-3 whitespace-nowrap flex'>
                            <Link 
                                to='/edit-utility'
                                state={{ utilityObject : utility }}
                                className='px-2 pt-2 text-[#00df9a]'
                            >
                                <AiOutlineEdit size={15} />
                            </Link>
                            <span 
                                className='px-2 pt-2 text-[red]'
                                onClick={(e) => deleteUtility(utility.id, utility.title)}
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

export default UtilitiesRecord
