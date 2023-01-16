import React, { Fragment, useCallback, useContext, useEffect, useState } from 'react'
import { checkRequiredTaxfields, updateTax } from '../../../actions/taxesAction';
import { AuthContext } from '../../../context/AuthContext';
import { DataContext } from '../../../context/DataContext';
import Spinner from '../../widgets/Spinner'

export const EdittaxForm = ({ edit, setEdit, setAdded }) => {

    const { token } = useContext(AuthContext);
    const { taxfields } = useContext(DataContext);

    const [title, setTitle] = useState();
    const [renewable, setRenewable] = useState();
    const [frequency, setFrequency] = useState();
    const [period, setPeriod] = useState();
    const [amount, setAmount] = useState();
    const [itemcode, setItemcode] = useState();

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [updating, setUpdating] = useState(false);
    const requiredFields = [
        window,
        title,
        renewable,
        amount,
        itemcode
    ]

    const fillTaxForm = useCallback(() => {

        if(edit !== null){
            console.log(taxfields);
            const { title, renewable, frequency, period, amount, itemcode } = taxfields;

            setTitle(title);
            setRenewable(renewable);
            setFrequency(frequency);
            setPeriod(period);
            setAmount(amount);
            setItemcode(itemcode);
        }

    }, [edit, taxfields])


    const handleUpdate = () => {
        const checkRequired = checkRequiredTaxfields(requiredFields);

        if(checkRequired > 0){
            setError('All fields are required.');
        }
        else{
            const data = {
                id : taxfields.id,
                window : taxfields.window_id,
                title,
                renewable,
                frequency,
                period,
                amount,
                itemcode
            }

            updateTax(token, data, setSuccess, setError, setUpdating, setAdded);
        }
    }


    if(success !== null){

        alert(success);
        setEdit(null);
        setSuccess(null);

    }

    useEffect(() => {

        fillTaxForm();
    }, [fillTaxForm, edit])
 

    return (
        <div>
            <span className='text-[red] text-sm pt-4'>{error !== null && error}</span>
            <div className='mb-4 mt-8'>
                <input 
                    type="text" 
                    className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className='grid md:grid-cols-2 md:space-x-3'>
                <div className='my-4 md:pl-3'>
                    <select
                        className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                        value={renewable}
                        onChange={(e) => setRenewable(e.target.value)}
                    >
                        <option value="">renewable ?</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </div>
                {renewable === 1 && (
                    <Fragment>
                        <div className='my-4'>
                            <select
                                className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                value={frequency}
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
                                value={period}
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
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div> 
                
                <div className='my-4'>
                    <input 
                        type="text" 
                        className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                        placeholder="Item code"
                        value={itemcode}
                        onChange={(e) => setItemcode(e.target.value)}
                    />
                </div> 
                <div className='my-4'>
                    {updating ? (<Spinner w={135} />) :
                        <button 
                            className="bg-transparent text-white w-full rounded-md border border-white font-medium md:mx-0 py-3"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default EdittaxForm
