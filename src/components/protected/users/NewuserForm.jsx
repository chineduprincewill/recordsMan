import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../actions/usersAction';
import { getMdas } from '../../../actions/mdasAction';
import { AuthContext } from '../../../context/AuthContext';
import Spinner from '../../widgets/Spinner';

const NewuserForm = () => {

    const navigate = useNavigate();

    const { token, user } = useContext(AuthContext);

    const [lastname, setLastname] = useState();
    const [firstname, setFirstname] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [gender, setGender] = useState();
    const [account, setAccount] = useState();
    const [group, setGroup] = useState();
    const [role, setRole] = useState();
    const [mdas, setMdas] = useState(null);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [creating, setCreating] = useState(false);

    
    const handleSubmit = (e) => {

        e.preventDefault();

        const data = {
            lastname,
            firstname,
            email,
            mobile,
            gender,
            account,
            group,
            role
        }

        console.log(data);

        createUser(token, data, setSuccess, setError, setCreating);

    }

    
    if(success !== null){

        alert(success);
        navigate('/users');

    }

    useEffect(() => {

        getMdas(token, setMdas, setError);

    }, [token])

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
                                placeholder="Last name"
                                required
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </div>
                        <div className='my-8'>
                            <input 
                                type="text" 
                                className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                placeholder="First name"
                                required
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </div>
                        <div className='my-8'>
                            <input 
                                type="text" 
                                className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                placeholder="Email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='mb-8 md:my-8'>
                            <input 
                                type="text" 
                                className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                placeholder="Mobile"
                                required
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='md:p-4'>
                        <div className='mb-8 md:my-8'>
                            <select
                                className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                required
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <option value="">select gender</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                            </select>
                        </div>
                        <div className='my-8'>
                            <select
                                className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                required
                                onChange={(e) => setAccount(e.target.value)}
                            >
                                <option value="">select account type</option>
                                {user.account === 'mda' ? 
                                    <Fragment>
                                        <option value="mda">mda</option>
                                    </Fragment>
                                    :
                                    <Fragment>
                                        <option value="system">system</option>
                                        <option value="mda">mda</option>
                                        <option value="agent">agent</option>
                                        <option value="taxpayer">taxpayer</option>
                                    </Fragment>
                                }
                            </select>
                        </div>
                        
                        <div className='my-8'>
                            <select
                                className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                required
                                onChange={(e) => setGroup(e.target.value)}
                            >
                                {account === 'mda' && (
                                    mdas !== null && (
                                        <Fragment>
                                        <option value="">select mda</option>
                                        {mdas.map((mda) => {
                                                return <option key={mda.id} value={mda.id}>{mda.title}</option>
                                        })}
                                        </Fragment>
                                    )
                                )     
                            }
                            {account === 'system' && 
                                <Fragment>
                                    <option value="">select</option>
                                    <option value="0">{account}</option>
                                </Fragment> 
                            }
                            {account === 'agent' && 
                                <Fragment>
                                    <option value="">select</option>
                                    <option value="-1">{account}</option>
                                </Fragment> 
                            }
                            {account === 'taxpayer' && 
                                <Fragment>
                                    <option value="">select</option>
                                    <option value="-2">{account}</option>
                                </Fragment> 
                            }
                            
                            </select>
                        </div>  
                        
                        <div className='my-8'>
                            <select
                                className="p-3 flex w-full rounded-md text-gray-600 border border-gray-900"
                                required
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">select role</option>
                                {(account === 'system' || account === 'mda') && 
                                <Fragment>
                                <option value="admin">admin</option>
                                <option value="auditor">auditor</option>
                                </Fragment>
                                }
                                <option value="processor">processor</option>
                            </select>
                        </div> 
                        <div className='my-4'>
                            {creating ? <Spinner w={135} /> :
                                <button className="bg-transparent text-white w-full rounded-md border border-white font-medium md:mx-0 py-3">Create</button>
                            }
                        </div>
                    </div> 
                </div>
            </form>
        </div>
    
    )
}

export default NewuserForm
