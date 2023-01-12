import React, { Fragment, useContext, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { fieldDelete } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext';
import { DataContext } from '../../../context/DataContext';

export const RevenueFields = ({ fields, setEdit }) => {

    const { token } = useContext(AuthContext);

    const { editRevenueFields } = useContext(DataContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const getFieldDetail = (fielddata) => {

        //console.log(fielddata);

        editRevenueFields(fielddata);
        setEdit(Date.now());
        
    }


    const deleteField = (id, name) => {

        if(window.confirm(`Are you sure you want to delete ${name}?`)){

            fieldDelete(token, id, setSuccess, setError);
        }
    }

    if(success !== null) {

        alert(success);
        setEdit(Date.now());
        setSuccess(null)
    }
    else if(error !== null){

        alert(error);
        setError(null);
    }


    return (
            <Fragment>
                {fields.map((field) => {
                    return (
                        <div className='border border-gray-800 p-3 rounded-md my-3 w-full' key={field.id}>
                            <div className='grid grid-cols-3'>
                                <div className='col-span-2 text-md text-[#00df9a]'>
                                    {field.field_name}
                                </div>
                                <div className='flex items-end justify-end'>
                                    <span 
                                        onClick={(e) => getFieldDetail(field)}
                                        className='px-2 pt-2 text-[#00df9a] cursor-pointer'
                                    >
                                        <AiOutlineEdit size={15} />
                                    </span>
                                    <span 
                                        onClick={(e) => deleteField(field.id, field.field_name)}
                                        className='px-2 pt-2 text-[red]'
                                    >
                                        <HiOutlineTrash size={15} />
                                    </span>
                                </div>
                            </div>
                        </div>   
                    )
                })}
            </Fragment>
            
    )
}
