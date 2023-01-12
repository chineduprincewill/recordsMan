import Sidebar from '../common/Sidebar';
import { HiOutlineCog } from 'react-icons/hi'
import { PageTitle } from '../../widgets/PageTitle';
import { Link } from 'react-router-dom';
import NewutilitiesForm from './NewutilitiesForm';

const CreateUtility = () => {


    return (
            <div className='w-full grid grid-cols-12'>
                <Sidebar />
                <div className='mt-6 px-6 col-span-10'>
                    <PageTitle icon={<HiOutlineCog size={25} />}/>
                    
                    <div className='grid grid-cols-1 md:grid-cols-8 pt-8 px-8 border-t-1 border-gray-900'>
                        <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                            <HiOutlineCog size={20} className="text-[#00df9a]" />
                            <h1 className='text-md'>Utility information</h1>
                        </div>
                        <Link to="/utilities" className='w-full flex bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                            <HiOutlineCog size={20} className="mx-auto" />
                        </Link>
                    </div>
                    <NewutilitiesForm />
                    
                </div>
            </div>
    )
}

export default CreateUtility
