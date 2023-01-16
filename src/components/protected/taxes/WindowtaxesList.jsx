import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { fetchWindowTaxes, taxDelete } from '../../../actions/taxesAction'
import { AuthContext } from '../../../context/AuthContext'
import { DataContext } from '../../../context/DataContext'
import Spinner from '../../widgets/Spinner'

const WindowtaxesList = ({ windw, added, setEdit }) => {

    const { token } = useContext(AuthContext);

    const { editTaxfields } = useContext(DataContext);

    const [windowtaxes, setWindowtaxes] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [delstatus, setDelstatus] = useState(null);

    const deleteTaxpayer = (id, title) => {
        
        if(window.confirm(`Are you sure you want to delete ${title}?`)){
           taxDelete(token, id, setSuccess, setError);
        }
    }


    const getTaxDetail = (taxdata) => {

        editTaxfields(taxdata);
        setEdit(Date.now());
        
    }

    if(success !== null){
        alert(success);
        setDelstatus(Date.now());
        setEdit(null);
        setSuccess(null);
    }

    useEffect(() => {

        const data = {
            window : windw
        }

        windw !== null && fetchWindowTaxes(data, setWindowtaxes, setError, setFetching);

    }, [windw, added, delstatus])

    return (
        fetching ? 
            (
                windowtaxes === null ? <Spinner w={135} /> : 
                (
                    windowtaxes.length === 0 ? <div className="text-[red] text-sm p-2">No tax has been assigned to the selected revenue window!</div> :
                    (
                        windowtaxes.map((wt) => {
                            return (<div key={wt.id} className="grid grid-cols-6 border border-[#00df9a] rounded-md px-4 mb-4">
                                <div className='col-span-5 py-2 text-white'>
                                    <h1 className='text-xl'>{wt.title}</h1>
                                    <p className='py-1 text-sm'>{wt.frequency} {wt.period} @ &#8358;{wt.amount}</p>
                                    {error}
                                </div>
                                <div className='flex justify-around my-auto'>
                                    <span
                                        onClick={(e) => getTaxDetail(wt)}
                                    >    
                                        <AiOutlineEdit size={20} className='text-[#00df9a] cursor-pointer' />
                                    </span>
                                    <span 
                                        onClick={(e) => deleteTaxpayer(wt.id, wt.title)}
                                    >
                                        <HiOutlineTrash size={20} className='text-[red] cursor-pointer' />
                                    </span>
                                </div>
                            </div>)
                        })
                    )
                ))
            :
            <div className='border border-white text-[orange] text-sm rounded-sm p-2'>
                Selected revenue window taxes appear hear. You can edit or delete any by clicking the appropriate icon.
            </div>
        
    )
}

export default WindowtaxesList
