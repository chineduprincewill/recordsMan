import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateMda } from '../../../actions/mdasAction';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../widgets/Spinner';

const EditmdaForm = ({ mdaObj }) => {

    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const [title, setTitle] = useState(mdaObj.title);
    const [initial, setInitial] = useState(mdaObj.initial);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [updating, setUpdating] = useState(false);

    
    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            id : mdaObj.id,
            title,
            initial
        }

        console.log(data);

        updateMda(token, data, setSuccess, setError, setUpdating);

    }

    
    if(success !== null){

        alert(success);
        navigate('/mdas');

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
                                value={title}
                                placeholder="Title"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='md:p-4'> 
                        <div className='md:my-8'>
                            <input 
                                type="text" 
                                className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                value={initial}
                                placeholder="Initial"
                                required
                                onChange={(e) => setInitial(e.target.value)}
                            />
                        </div>

                        <div className='my-8'>
                            {updating ? <Spinner w={135} /> :
                                <button className="bg-transparent text-white w-full rounded-md border border-white font-medium md:mx-0 py-3">Update</button>
                            }
                        </div>
                    </div> 
                </div>
            </form>
        </div>
    
    )
}

export default EditmdaForm
