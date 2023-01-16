import React, { useContext, useState } from 'react'
import { createMda } from '../../../actions/mdasAction';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../widgets/Spinner';

const NewmdaForm = ({ setDeleteStatus }) => {

    const { token } = useContext(AuthContext);

    const [title, setTitle] = useState();
    const [initial, setInitial] = useState();

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [creating, setCreating] = useState(false);

    
    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            title,
            initial
        }

        console.log(data);

        createMda(token, data, setSuccess, setError, setCreating);

    }

    
    if(success !== null){

        alert(success);
        setDeleteStatus(Date.now());
        setSuccess(null);
        setTitle('');
        setInitial('');

    }

    return (
        <div className='w-full px-2 bg-transparent border-b border-gray-800 pb-4'>
            <form onSubmit={handleSubmit}>
                {error !== null && <span className='w-full pt-3 px-5 text-[red] text-sm'>Sorry! {error}</span>}
                <div className='grid grid-cols-1 md:grid-cols-3 space-x-4 md:mt-8 mt-4'>
                    <div className='my-4 pl-4'>
                        <input 
                            type="text" 
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-400 border-b border-[#00df9a]" 
                            placeholder="Title"
                            required
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='my-4'> 
                        <input 
                            type="text" 
                            className="p-3 flex w-full bg-transparent rounded-md text-gray-400 border-b border-[#00df9a]" 
                            placeholder="Initial"
                            required
                            onChange={(e) => setInitial(e.target.value)}
                        />
                    </div>

                    <div className='my-4 md:pr-3'>
                        {creating ? <Spinner w={120} /> :
                            <button className="bg-transparent text-[#00df9a] w-full rounded-md border border-[#00df9a] font-medium md:mx-0 py-3">Create</button>
                        }
                    </div>
                </div>
            </form>
        </div>
    
    )
}

export default NewmdaForm
