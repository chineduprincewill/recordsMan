import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineWindows } from 'react-icons/ai'
import { AuthContext } from '../../../context/AuthContext'
import { PageTitle } from '../../widgets/PageTitle'
import Sidebar from '../common/Sidebar'
import { getMdaWindows } from '../../../actions/mdasAction'
import Spinner from '../../widgets/Spinner'

const MdaWindows = () => {

    const { token, user, logout } = useContext(AuthContext);

    const [mdawindows, setMdawindows] = useState(null);
    const [error, setError] = useState(null);

    let mda_id = user && user.group;

    useEffect(() => {

        const data = {
            mda_id
        } 
     
        getMdaWindows(token, data, setMdawindows, setError);

    }, [token, mda_id])
    

    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-6 col-span-10'>
                <PageTitle icon={<AiOutlineWindows size={25} />}/>

                <div className='grid grid-cols-1 md:grid-cols-8 py-8 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                        <AiOutlineWindows size={20} className="text-[#00df9a]" />
                        <h1 className='text-md'>Assigned Revenue Windows</h1>
                    </div>
                </div>

                <div className='w-full overflow-auto px-4'>
                    <div className='border border-[#00df9a] text-[#00df9a] rounded-md p-3'>
                        Shown below are the Revenue Windows assigned to be managed by your organization: <strong className='text-[orange]'>{user && user.groupname}</strong>. Click on any to view the assets registered under each.
                    </div>
                </div>

                <div className='w-full overflow-auto px-4 my-16'>
                    {error && <p className='text-sm font-medium text-red-700'>Sorry! {error}</p>}
                    {mdawindows === null ? <Spinner w="250" /> : (
                        mdawindows === undefined ? logout() : (
                            mdawindows.length === 0 ? <div className='text-sm text-[red] py-6'>Sorry! No Revenue Window has been assigned to your organization.</div> :
                            (
                                <div className='grid md:grid-cols-3 md:space-x-3'>
                                    {mdawindows.map((mwin) => {
                                        return(
                                            <div key={mwin.id} className="border border-[#00df9a] text-[#00df9a] rounded-md p-3 mb-4 flex justify-between">
                                                <span className='text-lg'>{mwin.window}</span>
                                                <span
                                                    className='cursor-pointer pt-2'
                                                >
                                                    <AiOutlineSearch w={20} />
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default MdaWindows
