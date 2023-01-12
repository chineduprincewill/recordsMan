import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createWindow } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../widgets/Spinner';

const NewwindowForm = () => {

    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const [window, setWindow] = useState();
    const [description, setDescription] = useState();

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [creating, setCreating] = useState(false);

    
    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            window,
            description
        }

        console.log(data);

        createWindow(token, data, setSuccess, setError, setCreating);

    }

    
    if(success !== null){

        alert(success);
        navigate('/revenue-windows');

    }

    return (
        <div className='w-full px-2 bg-transparent'>
            <form onSubmit={handleSubmit}>
                {error !== null && <span className='w-full pt-3 px-5 text-[red] text-sm'>Sorry! {error}</span>}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='md:p-4'>
                        <div className='my-8'>
                            <input 
                                type="text" 
                                className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                placeholder="Revenue window"
                                required
                                onChange={(e) => setWindow(e.target.value)}
                            />
                        </div>
                        <div className='md:my-8'>
                            <textarea
                                className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className='my-8'>
                            {creating ? <Spinner w={135} /> :
                                <button className="bg-transparent text-white w-full rounded-md border border-white font-medium md:mx-0 py-3">Create</button>
                            }
                        </div>
                    </div>
                    <div className='md:p-4'> 

                        
                    </div> 
                </div>
            </form>
        </div>
    
    )
}

export default NewwindowForm
