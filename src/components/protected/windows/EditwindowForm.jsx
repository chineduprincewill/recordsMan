import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateWindow } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../widgets/Spinner';
import WindowsFields from './WindowsFields';

const EditwindowForm = ({ winObj }) => {

    const navigate = useNavigate();

    const { token, user } = useContext(AuthContext);

    const [window, setWindow] = useState(winObj.revenue_window);
    const [description, setDescription] = useState(winObj.description);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [updating, setUpdating] = useState(false);
    
    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            id : winObj.id,
            window,
            description
        }

        console.log(data);

        updateWindow(token, data, setSuccess, setError, setUpdating);

    }

    
    if(success !== null){

        alert(success);
        navigate('/revenue-windows');

    }


    return (
        <div className='w-full px-2 bg-transparent grid grid-cols-1 md:grid-cols-3'>
            
            <form onSubmit={handleSubmit} className=" col-span-1">
                {error !== null && <span className='w-full pt-3 px-5 text-[red] text-sm'>Sorry! {error}</span>}
                <div className='md:p-4'>
                    <h1 className='h-[50px] border-b border-b-gray-800 text-[#00df9a] text-md py-2 px-2 rounded-t-md mb-8'>
                        Edit Revenue Window
                    </h1>
                    <div className='my-8'>
                        <input 
                            type="text" 
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-400 border border-[#00fd9a]" 
                            placeholder="Revenue window"
                            required
                            value={window}
                            onChange={(e) => setWindow(e.target.value)}
                        />
                    </div>
                    <div className='md:my-8'>
                        <textarea
                            className="p-3 flex w-full rounded-md bg-transparent text-gray-400 border border-[#00fd9a]" 
                            placeholder="Description"
                            rows={5}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className='my-8'>
                        {user.role === 'admin' && (
                            updating ? <Spinner w={135} /> :
                            <button className="bg-[#00fd9a] text-gray-800 w-full rounded-md border border-[#00fd9a] font-medium md:mx-0 py-3">Update</button>
                        )}
                    </div>
                </div>
            </form>
            <div className='md:p-4 col-span-2 mt-6 md:mt-0'> 
                <WindowsFields winObj={winObj} />
            </div> 
        </div>
    
    )
}

export default EditwindowForm
