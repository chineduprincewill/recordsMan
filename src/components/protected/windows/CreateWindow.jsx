import Sidebar from '../common/Sidebar';
import { AiOutlineWindows } from 'react-icons/ai'
import { PageTitle } from '../../widgets/PageTitle';
import { Link } from 'react-router-dom';
import NewwindowForm from './NewwindowForm';

const CreateWindow = () => {


    return (
            <div className='w-full grid grid-cols-12'>
                <Sidebar />
                <div className='mt-6 px-6 col-span-10'>
                    <PageTitle icon={<AiOutlineWindows size={25} />}/>
                    
                    <div className='grid grid-cols-1 md:grid-cols-8 pt-8 px-4 border-t-1 border-gray-900'>
                        <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                            <AiOutlineWindows size={20} className="text-[#00df9a]" />
                            <h1 className='text-md'>Revenue Window information</h1>
                        </div>
                        <Link to="/revenue-windows" className='w-full flex bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                            <AiOutlineWindows size={20} className="mx-auto" />
                        </Link>
                    </div>
                    <NewwindowForm />
                    
                </div>
            </div>
    )
}

export default CreateWindow
