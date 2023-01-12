import Sidebar from '../common/Sidebar';
import { HiOutlineReceiptTax } from 'react-icons/hi'
import { PageTitle } from '../../widgets/PageTitle';

export const Taxes = () => {

    //const { user } = useContext(AuthContext);

    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-12 col-span-10'>
                <PageTitle icon={<HiOutlineReceiptTax size={25} />}/>
                <div className='grid grid-cols-1 md:grid-cols-3 py-4'>
                    <div className='text-gray-400 border-r-2 border-gray-400 md:col-span-2'>
                        <HiOutlineReceiptTax size={20} />
                    </div>
                    <div className=' text-gray-400'>
                        <HiOutlineReceiptTax size={20} />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Taxes
