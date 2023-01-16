import React, { Fragment, useContext, useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import { HiOutlinePlus } from 'react-icons/hi';
import { checkRequiredTaxfields, createTax } from '../../../actions/taxesAction';
import { getWindows } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../widgets/Spinner';
import EdittaxForm from './EdittaxForm';
import WindowtaxesList from './WindowtaxesList';

export const NewtaxForm = () => {

    const { token } = useContext(AuthContext);

    const [title, setTitle] = useState();
    const [window, setWindow] = useState(null);
    const [renewable, setRenewable] = useState();
    const [frequency, setFrequency] = useState();
    const [period, setPeriod] = useState();
    const [amount, setAmount] = useState();
    const [itemcode, setItemcode] = useState();
    const [windows, setWindows] = useState(null);
    const [added, setAdded] = useState();

    const [edit, setEdit] = useState(null);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [creating, setCreating] = useState(false);

    const [form, setForm] = useState(false);

    const selectWindow = (e) => {
        setWindow(e);
        setEdit(null);
        setForm(false);
    }

    const showForm = () => {
        setForm(!form);
    }

    const requiredFields = [
        window,
        title,
        renewable,
        amount,
        itemcode
    ]

    const handleSubmit = () => {

        const checkRequired = checkRequiredTaxfields(requiredFields);

        if(checkRequired > 0){
            setError('All fields are required.');
        }
        else{
            
            const data = {
                window,
                title,
                renewable,
                frequency,
                period,
                amount,
                itemcode
            }

            console.log(data);

            createTax(token, data, setSuccess, setError, setCreating, setAdded);
        }
    }

    
    if(success !== null){

        setTitle('');
        setRenewable();
        setFrequency();
        setPeriod();
        setAmount();
        setItemcode();

        alert(success);
        setForm(false);
        setSuccess(null);

    }

    useEffect(() => {

        getWindows(token, setWindows, setError);

    }, [token])

    return (
        <div className='w-full px-2 bg-transparent mt-4'>
            {error !== null && <span className='w-full pt-3 px-5 text-[red] text-sm'>Sorry! {error}</span>}
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='md:p-4'>
                    <div className='my-8'>
                        <select
                            className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                            required
                            onChange={(e) => selectWindow(e.target.value)}
                        >
                            {windows !== null && windows !== undefined ? (
                                <Fragment>
                                    <option value="">select revenue window</option>
                                    {windows.map((win) => {
                                            return <option key={win.id} value={win.id}>{win.revenue_window}</option>
                                    })}
                                </Fragment>
                                )  : ''     
                            }
                        
                        </select>
                    </div>
                    <button 
                        className='w-full p-3 border border-[#00df9a] text-[#00df9a] rounded-md flex justify-center space-x-2'
                        onClick={showForm}
                    >
                        {edit !== null ? <AiOutlineEdit size={20} className="mt-1" /> : <HiOutlinePlus size={20} className="mt-1" />}
                        <span className='text-lg'>{edit !== null ? 'Edit Tax' : 'New Tax'}</span>
                    </button>
                    {edit !==  null ? <EdittaxForm edit={edit} setEdit={setEdit} setAdded={setAdded} /> :
                        <div className={`${form ? 'block' : 'hidden'}`}>
                                
                            <div className='mb-4 mt-8'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                    placeholder="Title"
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className='grid md:grid-cols-2 md:space-x-3'>
                                <div className='my-4 md:pl-3'>
                                    <select
                                        className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                        required
                                        onChange={(e) => setRenewable(e.target.value)}
                                    >
                                        <option value="">renewable ?</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                {renewable === "1" && (
                                    <Fragment>
                                        <div className='my-4'>
                                            <select
                                                className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                                required
                                                onChange={(e) => setFrequency(e.target.value)}
                                            >
                                                <option value="">select no of period</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>

                                        <div className='my-4'>
                                            <select
                                                className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                                required
                                                onChange={(e) => setPeriod(e.target.value)}
                                            >
                                                <option value="">select period</option>
                                                <option value="daily">daily</option>
                                                <option value="weekly">weekly</option>
                                                <option value="monthly">monthly</option>
                                                <option value="yearly">yearly</option>
                                            </select>
                                        </div>
                                    </Fragment>
                                )}
                                        
                                <div className='my-4'>
                                    <input 
                                        type="number" 
                                        className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                        placeholder="Amount"
                                        required
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div> 
                                
                                <div className='my-4'>
                                    <input 
                                        type="text" 
                                        className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                        placeholder="Item code"
                                        required
                                        onChange={(e) => setItemcode(e.target.value)}
                                    />
                                </div> 
                                <div className='my-4'>
                                    {creating ? (<Spinner w={135} />) :
                                        <button 
                                            className="bg-transparent text-white w-full rounded-md border border-white font-medium md:mx-0 py-3"
                                            onClick={handleSubmit}
                                        >
                                            Create
                                        </button>
                                    }
                                </div>
                            </div>
                            
                        </div>
                    }                   
                    
                </div>
                <div className='md:p-4 mt-8'>
                    <WindowtaxesList windw={window} added={added} setEdit={setEdit} />
                </div> 
            </div>
        </div>
    )
}

export default NewtaxForm
