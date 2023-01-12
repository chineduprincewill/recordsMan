import React, { useContext, useState } from 'react'
import { HiOutlinePlus } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { createUtility } from '../../../actions/utilitiesAction';
import { AuthContext } from '../../../context/AuthContext'
import Spinner from '../../widgets/Spinner';

const NewutilitiesForm = () => {

    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const [title, setTitle] = useState();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [creating, setCreating] = useState(false);
    const [newItem, setNewItem] = useState('');


    const handleAddItem = () => {

        if(newItem === ''){
            alert('No item was entered');
        }
        else{
            setItems(items => [
                ...items,
                newItem
            ]);
    
            setNewItem('');
        }

    }

    const removeItem = (e, item) => {
        if(window.confirm(`Are you sure you want to remove ${item} from the utility?`)){

            let filteredArray = items.filter(itm => itm !== item)
            setItems(filteredArray);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title,
            items
        }

        createUtility(token, data, setSuccess, setError, setCreating);

    }

    if(success !== null){

        alert(success);
        navigate('/utilities');

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
                                placeholder="Title"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className='md:my-8'>
                            <div className='grid grid-cols-5'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full rounded-l-md text-black border border-gray-900 col-span-4" 
                                    placeholder="Enter item and click + button"
                                    value={newItem}
                                    onChange={(e) => setNewItem(e.target.value)}
                                />
                                <span 
                                    className='bg-transparent text-white w-full rounded-r-md border border-white font-medium md:mx-0 py-2 cursor-pointer'
                                    onClick={handleAddItem}
                                >
                                    <HiOutlinePlus size={20} className="m-auto mt-2" />
                                </span>   
                            </div>
                        </div>
                        <div className='my-8'>
                            {creating ? <Spinner w={135} /> :
                                <button className="bg-transparent text-white w-full rounded-md border border-white font-medium md:mx-0 py-3">Create</button>
                            }
                        </div>
                    </div>
                    <div className='md:p-4'> 
                        <div className='md:my-8'>
                            <p className='p-1 bg-gray-900 text-orange-500 text-sm'>
                                Items added to utility appear here. Only click <strong>Create</strong> button when you must have added all the items for the utility
                            </p>
                            {items.length !== 0 && <p className="p-1 mt-1 bg-gray-900 text-green-500 text-sm">Click on any of the items to delete it</p> }
                            <div className='grid grid-cols-1 md:grid-cols-4 mt-2'>
                                {items.length !== 0 && (
                                    <>
                                    {items.map((item, index) => {
                                        return (
                                            <span key={index} onClick={(e) => removeItem(e,item)} className="text-gray-400 p-2 cursor-pointer">{item}</span>
                                        )
                                    })}
                                    </>
                                )}
                            </div>  
                        </div>

                    </div> 
                </div>
            </form>
        </div>
    )
}

export default NewutilitiesForm
