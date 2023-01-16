import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateMda } from '../../../actions/mdasAction';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../widgets/Spinner';
import AssignWindow from './AssignWindow';

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
        <div className='w-full px-2 bg-transparent grid grid-cols-1 md:grid-cols-2 mt-8'>
            <form onSubmit={handleSubmit} className='md:pr-8'>
                {error !== null && <span className='w-full pt-3 px-5 text-[red] text-sm'>Sorry! {error}</span>}
                <div className=''>
                    <div className='my-8'>
                            <input 
                                type="text" 
                                className="p-3 flex w-full bg-transparent rounded-md text-gray-400 border-b border-[#00df9a]" 
                                value={title}
                                placeholder="Title"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    <div className='md:my-8'>
                        <input 
                            type="text" 
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-400 border-b border-[#00df9a]" 
                            value={initial}
                            placeholder="Initial"
                            required
                            onChange={(e) => setInitial(e.target.value)}
                        />
                    </div>
                    <div className='my-16'>
                        {updating ? <Spinner w={135} /> :
                            <button className="bg-transparent text-[#00df9a] w-full rounded-md border border-[#00df9a] font-medium md:mx-0 py-3">Update</button>
                        }
                    </div>
                </div>
            </form>
            <div className='md:px-3'>
                <AssignWindow mdaid={mdaObj.id} />
            </div>
        </div>
    
    )
}

export default EditmdaForm
