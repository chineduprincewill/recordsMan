import React, { Fragment, useContext, useEffect, useState } from 'react'
import { HiOutlineTrash } from 'react-icons/hi';
import { assignMadWindow, getMdaWindows, mdaWindowRemove } from '../../../actions/mdasAction';
import { getWindows } from '../../../actions/windowsAction';
import { AuthContext } from '../../../context/AuthContext'
import Spinner from '../../widgets/Spinner';

const AssignWindow = ({ mdaid }) => {

    const { token, logout } = useContext(AuthContext);

    const [windows, setWindows] = useState(null);
    const [wndow, setWndow] = useState(null);
    const [mdaWindows, setMdawindows] = useState(null);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [creating, setCreating] = useState(false);
    const [assignStatus, setAssignStatus] = useState(null);

    const assignWindow = () => {

        if(wndow === null) {
            alert('Revenue window must be selected!');
        }
        else{
            const data = {
                mda_id : mdaid,
                window_id : wndow
            }

            assignMadWindow(token, data, setSuccess, setError, setCreating);
        }

    }


    const deleteMdawindow = (id, title) => {

        if(window.confirm(`Are you sure you want to remove ${title} revenue window from this MDA?`)){

            mdaWindowRemove(token, id, setSuccess, setError);

        }

    }


    if(success !== null){
        alert(success);
        setAssignStatus(Date.now());
        setSuccess(null);
        setError(null);
    }


    useEffect(() => {
        const data = {
            mda_id : mdaid
        }

        getMdaWindows(token, data, setMdawindows, setError);
    }, [token, assignStatus, mdaid])

    useEffect(() => {
        
        getWindows(token, setWindows, setError);
    }, [token])
    


    return (
        <div className='md:pl-8'>
            <div>
                <div className='my-8 flex'>
                    <select
                        className="p-3 flex w-full bg-transparent rounded-l-md text-gray-400 border border-[#00df9a]"
                        required
                        onChange={(e) => setWndow(e.target.value)}
                    >
                        {windows !== null && (windows !== undefined ? (
                            <Fragment>
                                <option value="">select revenue window</option>
                                {windows.map((win) => {
                                        return <option key={win.id} value={win.id}>{win.revenue_window}</option>
                                })}
                            </Fragment>
                            )  : logout()     )
                        }
                    
                    </select>
                        <button
                            className='p-3 bg-[#00df9a] rounded-r-md text-gray-900'
                            onClick={assignWindow}
                        >
                            {creating ? 'Assigning...' : 'Assign'}
                        </button>
                </div>
                <div className='px-3 pb-2 text-sm text-[red]'>{error}</div>

            </div>
            <div className='px-3'>
                {mdaWindows === null ? <Spinner w={135} /> :
                    (mdaWindows === undefined ? logout() : 
                        mdaWindows.length === 0 ? <span className='text-[red] text-sm mt-3'>No Revenue window has been assigned to this MDA yet!</span> :
                        (
                            mdaWindows.map((mdawin) => {
                                return (<div className='flex justify-between p-3 border border-[#00df9a] text-[#00df9a] rounded-md mb-6' key={mdawin.id}>
                                    <span>{mdawin.window}</span>
                                    <span 
                                        className='px-2 pt-1 text-[red]'
                                        onClick={(e) => deleteMdawindow(mdawin.id, mdawin.window)}
                                    >
                                        <HiOutlineTrash size={15} />
                                    </span>
                                </div>)
                            })
                        )
                    )
                }
            </div>
        </div>
    )
}

export default AssignWindow
