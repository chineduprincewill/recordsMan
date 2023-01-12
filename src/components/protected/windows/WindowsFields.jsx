import React, { useContext, useEffect, useState } from 'react'
import { getWindowFields } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext'
import Spinner from '../../widgets/Spinner';
import RevenueFieldForm from './RevenueFieldForm';
import { RevenueFields } from './RevenueFields';

const WindowsFields = ({ winObj }) => {

    const { token } = useContext(AuthContext);

    const [fields, setFields] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState();

    const [edit, setEdit] = useState(null);

    useEffect(() => {

        const data = {
            window:winObj.id
        }

        getWindowFields(token, data, setFields, setError);
    }, [token, status, edit, winObj.id])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:border-l border-gray-800'>
            <div className='px-4'>
                <h1 className='h-[50px] border-b border-b-gray-800 text-[#00df9a] text-md py-2 px-2 rounded-t-md mb-8'>
                    {winObj.revenue_window} fields
                </h1>
                {fields === null ? <Spinner w='250' /> : (
                    fields.length === 0 ? <span className='text-[orange]'>No field added to this revenue window yet! Fill the <strong>New field</strong> form to add fields</span> : <RevenueFields fields={fields} setEdit={setEdit} />
                )}
            </div>
            <div className='md:border-l border-gray-800 px-4 mt-12 md:mt-0'>
                <h1 className='h-[50px] border-b border-b-gray-800 text-[#00df9a] text-md py-2 px-2 rounded-t-md mb-8'>
                    {edit === null ? 'New' : 'Edit'} field
                </h1>
                <span className='text-[red]'>{error}</span>
                <RevenueFieldForm setStatus={setStatus} windowId={winObj.id} edit={edit} />
            </div>
        </div>
        
    )
}

export default WindowsFields
