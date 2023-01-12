import React, { useCallback, useContext, useEffect, useState } from 'react'
import { createWindowField, updateWindowField } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext'
import { DataContext } from '../../../context/DataContext';
import Spinner from '../../widgets/Spinner';
import UtilityList from '../../widgets/UtilityList';

const RevenueFieldForm = ({ setStatus, windowId, edit }) => {

    const { token } = useContext(AuthContext);
    const { revenueField } = useContext(DataContext);

    const [field_name, setField_name] = useState();
    const [display_name, setDisplay_name] = useState();
    const [input_type, setInput_type] = useState();
    const [input_source, setInput_source] = useState();
    const [required, setRequired] = useState();

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [creating, setCreating] = useState(false);


    const handleSubmit = (e) => {

        e.preventDefault();

        if(edit === null){

            const data = {
                window : windowId,
                field_name,
                display_name,
                input_type,
                input_source,
                required
            }

            createWindowField(token, data, setSuccess, setError, setCreating);
        }
        else{

            const data = {
                id : revenueField.id,
                field_name,
                display_name,
                input_type,
                input_source,
                required
            }

            updateWindowField(token, data, setSuccess, setError, setCreating)
        }

        
    }

    const fillEditForm = useCallback(() => {

        if(edit !== null){

            console.log(revenueField);

            setField_name(revenueField.field_name);
            setDisplay_name(revenueField.display_name);
            setInput_type(revenueField.input_type);
            setInput_source(revenueField.input_source);
            setRequired(revenueField.required);
            
        }
    }, [edit, revenueField])
  
    if(success !== null){

        alert(success);
        setStatus(Date.now());
        setSuccess(null);

        setField_name('');
        setDisplay_name('');
        setInput_type('');
        setInput_source('');
        setRequired('');

    }

    useEffect(() => {

        fillEditForm();
    }, [fillEditForm, edit])

    return (
        <div className='w-full px-2 bg-transparent'>
                <form onSubmit={handleSubmit}>
                    {error !== null && <span className='w-full pt-3 px-5 text-[red] text-sm'>Sorry! {error}</span>}
                    <div className='mb-4'>
                        <input 
                            type="text" 
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                            placeholder="Field name"
                            value={field_name}
                            required
                            onChange={(e) => setField_name(e.target.value)}
                        />
                    </div>
                    <div className='my-4'>
                        <input 
                            type="text" 
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                            placeholder="display name"
                            value={display_name}
                            required
                            onChange={(e) => setDisplay_name(e.target.value)}
                        />
                    </div>
                    <div className='md:my-4'>
                        <select
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                            value={input_type}
                            required
                            onChange={(e) => setInput_type(e.target.value)}
                        >
                            <option value="">choose input type</option>
                            <option value="text">text</option>
                            <option value="select">select</option>
                        </select>
                    </div>
                    <div className='md:my-4'>
                        <select
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                            value={input_source}
                            required
                            onChange={(e) => setInput_source(e.target.value)}
                        >
                            {edit !== null && <option value={input_source}>{input_source}</option>}
                            <option value="">choose input source</option>
                            {input_type === 'text' && <option value="user">user</option>}
                            {input_type === 'select' && <UtilityList />}
                        </select>
                    </div>
                    <div className='md:my-4'>
                        <select
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                            value={required}
                            required
                            onChange={(e) => setRequired(e.target.value)}
                        >
                            <option value="">Required field ?</option>
                            <option value="1">yes</option>
                            <option value="0">no</option>
                        </select>
                    </div>
                    <div className='my-8'>
                        {creating ? <Spinner w={135} /> : 
                            <button 
                                type='submit'
                                className="bg-[#00fd9a] text-gray-800 w-full rounded-md border border-[#00fd9a] font-medium md:mx-0 py-3"
                            >
                                {edit === null ? 'Create' : 'Update'}
                            </button>
                        }
                    </div>
                </form>
            </div>
    )
}

export default RevenueFieldForm
