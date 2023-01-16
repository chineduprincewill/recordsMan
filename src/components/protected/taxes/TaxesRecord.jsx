import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { HiOutlineTrash } from 'react-icons/hi';
import { taxDelete } from '../../../actions/taxesAction';

const TaxesRecord = ({ taxes, setDeleteStatus }) => {

    const { token } = useContext(AuthContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const deleteTaxpayer = (id, title) => {

        if(window.confirm(`Are you sure you want to delete ${title}?`)){

           taxDelete(token, id, setSuccess, setError);

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
            {taxes.map((tax) => {
                return (
                    <tr key={tax.id} className="w-full text-gray-400 px-1 text-sm even:bg-[#141414] odd:bg-[#0c0c0c]">
                        <td className='py-3 px-3'>{tax.window}</td>
                        <td className='py-3 px-3'>{tax.title}</td>
                        <td className='py-3 px-3'>{tax.renewable === 1 ? 'Yes' : 'No'}</td>
                        <td className='py-3 px-3'>{tax.frequency} {tax.period}</td>
                        <td className='py-3 px-3'>&#8358; {tax.amount}</td>
                        <td className='py-3 px-3'>{tax.itemcode}</td>
                        <td className='py-3 px-3'>{tax.created_by}</td>
                        <td className='py-3 px-3 flex'>
                            <span 
                                className='px-2 pt-2 text-[red] cursor-pointer'
                                onClick={(e) => deleteTaxpayer(tax.id, tax.title)}
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

export default TaxesRecord
