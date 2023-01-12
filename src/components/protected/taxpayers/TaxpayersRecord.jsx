import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { taxpayerDelete } from '../../../actions/taxpayerAction';

const TaxpayersRecord = ({ taxpayers, setDeleteStatus }) => {

    const { token } = useContext(AuthContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const deleteTaxpayer = (id, name) => {

        if(window.confirm(`Are you sure you want to delete ${name}?`)){

            taxpayerDelete(token, id, setSuccess, setError);

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
            {taxpayers.map((taxpayer) => {
                return (
                    <tr key={taxpayer.id} className="w-full text-gray-400 px-1 text-sm even:bg-[#141414] odd:bg-[#0c0c0c]">
                        <td className='py-3 px-3'>{taxpayer.uid}</td>
                        <td className='py-3 px-3'>{taxpayer.category}</td>
                        <td className='py-3 px-3'>{taxpayer.name}</td>
                        <td className='py-3 px-3'>{taxpayer.mobile}</td>
                        <td className='py-3 px-3'>{taxpayer.address}, {taxpayer.city}, {taxpayer.state}</td>
                        <td className='py-3 px-3'>{taxpayer.created_by}</td>
                        <td className='py-3 px-3'>
                            {taxpayer.status === "1" ? <span className='py-2 text-[#00df9a]'>active</span> : <span className='p-2 text-[red]'>disabled</span>}
                        </td>
                        <td className='py-3 px-3 flex'>
                            <Link 
                                to='/edit-taxpayer'
                                state={{ taxpayerObject : taxpayer }}
                                className='px-2 pt-2 text-[#00df9a] cursor-pointer'
                            >
                                <AiOutlineEdit size={15} />
                            </Link>
                            <span 
                                className='px-2 pt-2 text-[red] cursor-pointer'
                                onClick={(e) => deleteTaxpayer(taxpayer.id, taxpayer.name)}
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

export default TaxpayersRecord
