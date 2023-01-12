import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { windowDelete } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext';

const WindowsRecord = ({ windows, setDeleteStatus }) => {

    const { token } = useContext(AuthContext);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const deleteWindow = (id, windowtitle) => {

        if(window.confirm(`Are you sure you want to delete ${windowtitle}?`)){

            windowDelete(token, id, setSuccess, setError);

        }

    }


    if(success !== null) {

        alert(success);
        setDeleteStatus(Date.now());
        setSuccess(null)
    }
    else if(error !== null){

        alert(error);
        setError(null);
    }

    return (
        <>
            {windows.map((window) => {
                return (
                    <div className='border border-[#00df9a] p-3 rounded-md w-full md:w-[96%] my-3' key={window.id}>
                        <h1 className='text-[#00df9a] text-xl py-2'>{window.revenue_window}</h1>
                        <div className='grid grid-cols-3 mt-4 border-t border-gray-800'>
                            <div className='col-span-2 text-sm mt-1'>
                                {window.status === 1 ? <span className='py-2 text-[#00df9a]'>active</span> : <span className='p-2 text-[red]'>disabled</span>}
                            </div>
                            <div className='flex items-end justify-end'>
                                <Link 
                                    to='/edit-revenue-window'
                                    state={{ windowObject : window }}
                                    className='px-2 pt-2 text-[#00df9a] cursor-pointer'
                                >
                                    <AiOutlineEdit size={15} />
                                </Link>
                                <span 
                                    className='px-2 pt-2 text-[red] cursor-pointer'
                                    onClick={(e) => deleteWindow(window.id, window.revenue_window)}
                                >
                                    <HiOutlineTrash size={15} />
                                </span>
                            </div>
                        </div>
                    </div>                    
                )
            })}
        </>
    )
}

export default WindowsRecord
