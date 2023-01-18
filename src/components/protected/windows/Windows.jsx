import Sidebar from '../common/Sidebar';
import { AiOutlineWindows } from 'react-icons/ai';
import { HiOutlinePlus } from 'react-icons/hi';
import { PageTitle } from '../../widgets/PageTitle';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { getWindows } from '../../../actions/windowsAction';
import Search from '../../widgets/Search';
import Pagination from '../../widgets/Pagination';
import WindowsRecord from './WindowsRecord';
import Spinner from '../../widgets/Spinner';
import DataRows from '../../widgets/DataRows';

export const Windows = () => {

    const { token, logout, user } = useContext(AuthContext);

    const [windows, setWindows] = useState(null);
    const [error, setError] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    let ITEMS_PER_PAGE = itemsPerPage;

    const [deleteStatus, setDeleteStatus] = useState();

    const windowsData = useMemo(() => {

        //let computedUsers = users;
        if(windows !== null && windows !== undefined){

            let computedWindows = windows;

            if(search) {
                computedWindows = computedWindows.filter(
                    window => window.revenue_window.toLowerCase().includes(search.toLowerCase()) ||
                                window.created_by.toLowerCase().includes(search.toLowerCase())
                )
            }

            setTotalItems(computedWindows.length);

            return computedWindows.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
            );
        }

    }, [windows, currentPage, search, ITEMS_PER_PAGE])


    useEffect(() => {

        getWindows(token, setWindows, setError);
    }, [token, itemsPerPage, deleteStatus])

    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-6 col-span-10'>
                <PageTitle icon={<AiOutlineWindows size={25} />}/>
                <div className='grid grid-cols-1 md:grid-cols-8 py-8 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                        <AiOutlineWindows size={20} className="text-[#00df9a]" />
                        <h1 className='text-md'>List of Revenue Windows</h1>
                    </div>
                    {user && user.role === 'admin' ? (
                        <Link to="/create-revenue-window" className='w-full font-medium bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                            <HiOutlinePlus size={20} className="mx-auto" />
                        </Link>) : ''
                    }
                </div>

                <div className='col-span-2 border-r-1 border-gray-400'>
                    <div className='grid grid-cols-1 md:grid-cols-8 py-2 px-4 border-t-1 border-gray-900'>
                        <div className='py-2 mt-1 ml-1 md:col-span-1 pr-2'>
                            {windows !== null && (
                                <DataRows data={windows} setItemsPerPage={setItemsPerPage} />
                            )}
                        </div>
                        <div className='py-2 flex text-gray-400 space-x-4 md:col-span-5'>
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={page => setCurrentPage(page)}
                            />
                        </div>
                        <div className='py-2 md:col-span-2'>
                        { windows !== null && <Search onSearch={ (value) => {
                                setSearch(value);
                                setCurrentPage(1);
                        }} />}
                        </div>
                    </div>

                    <div className={`w-full overflow-auto px-4 ${error === null && 'mt-2'}`}>
                        {error && <p className='text-sm font-medium text-red-700'>Sorry! {error}</p>}
                        {windows === null ? <Spinner w='250' /> : 
                            windows === undefined ? 
                                logout() : 
                                <div className='grid grid-cols-1 md:grid-cols-3'>
                                    <WindowsRecord windows={windowsData} setDeleteStatus={setDeleteStatus} />
                                </div>
                        }
                    </div>
                </div>  
                
                
            </div>
        </div>
    )
}

export default Windows
