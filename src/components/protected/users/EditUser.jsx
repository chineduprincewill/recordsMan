import Sidebar from '../common/Sidebar';
import { HiOutlineUser, HiOutlineUserGroup } from 'react-icons/hi'
import { PageTitle } from '../../widgets/PageTitle';
import { Link, useLocation } from 'react-router-dom';
import EdituserForm from './EdituserForm';

const Edituser = () => {

    const u_location = useLocation();

    const usObj = u_location.state?.userObject;

    return (
            <div className='w-full grid grid-cols-12'>
                <Sidebar />
                <div className='mt-6 px-6 col-span-10'>
                    <PageTitle icon={<HiOutlineUser size={25} />}/>
                    
                    <div className='grid grid-cols-1 md:grid-cols-8 pt-8 px-8 border-t-1 border-gray-900'>
                        <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                            <HiOutlineUser size={20} className="text-[#00df9a]" />
                            <h1 className='text-md'>User information</h1>
                        </div>
                        <Link to="/users" className='w-full flex bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                            <HiOutlineUserGroup size={20} className="mx-auto" />
                        </Link>
                    </div>
                    <EdituserForm usObj={usObj} />
                    
                </div>
            </div>
    )
}

export default Edituser
