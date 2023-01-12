import Sidebar from '../common/Sidebar';
import { HiOutlineOfficeBuilding, HiOutlinePlus } from 'react-icons/hi'
import { PageTitle } from '../../widgets/PageTitle';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Pagination from '../../widgets/Pagination';
import Search from '../../widgets/Search';
import Spinner from '../../widgets/Spinner';
import TableHeader from '../../widgets/TableHeader';
import MdasRecord from './MdasRecord';
import { getMdas } from '../../../actions/mdasAction';
import DataRows from '../../widgets/DataRows';

const columns = [
    {
        name:'Name',
        field: 'title',
        sortable: true
    }, 
    {
        name:'Initial',
        field:'initial',
        sortable:true
    }, 
    {
        name:'Created by',
        field:'created_by',
        sortable:true
    }, 
    {
        name:'Status',
        field:'status',
        sortable:true
    }, 
    {
        name:'...',
        field:'',
        sortable:false
    }
]

export const Mdas = () => {

    const { token, logout } = useContext(AuthContext);

    const [mdas, setMdas] = useState(null);
    const [error, setError] = useState();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    let ITEMS_PER_PAGE = itemsPerPage;

    const [deleteStatus, setDeleteStatus] = useState();

    const mdasData = useMemo(() => {

        //let computedUsers = users;
        if(mdas !== null && mdas !== undefined){

            let computedMdas = mdas;

            if(search) {
                computedMdas = computedMdas.filter(
                    mda => mda.title.toLowerCase().includes(search.toLowerCase()) ||
                            mda.initial.toLowerCase().includes(search.toLowerCase()) ||
                            mda.created_by.toLowerCase().includes(search.toLowerCase())
                )
            }

            setTotalItems(computedMdas.length);

            //Sorting users
            if( sorting.field ){
                const reversed = sorting.order === "asc" ? 1 : -1;
                computedMdas = computedMdas.sort(
                    (a, b) =>
                        reversed * a[sorting.field].localeCompare(b[sorting.field])
                );
            }

            return computedMdas.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
            );
        }

    }, [mdas, currentPage, search, sorting, ITEMS_PER_PAGE])


    useEffect(() => {
        
        getMdas(token, setMdas, setError);

    }, [token, itemsPerPage, deleteStatus])

    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-6 col-span-10'>
                <PageTitle icon={<HiOutlineOfficeBuilding size={25} />}/>

                <div className='grid grid-cols-1 md:grid-cols-8 py-8 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                        <HiOutlineOfficeBuilding size={20} className="text-[#00df9a]" />
                        <h1 className='text-md'>List of MDAs</h1>
                    </div>
                    <Link to="/create-mda" className='w-full font-medium bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                        <HiOutlinePlus size={20} className="mx-auto" />
                    </Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-8 py-2 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 mt-1 ml-1 md:col-span-1 pr-2'>
                        {mdas !== null && (
                            <DataRows data={mdas} setItemsPerPage={setItemsPerPage} />
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
                       { mdas !== null && <Search onSearch={ (value) => {
                            setSearch(value);
                            setCurrentPage(1);
                       }} />}
                    </div>
                </div>

                <div className='w-full overflow-auto px-4'>
                    {error && <p className='text-sm font-medium text-red-700'>{error}</p>}
                    {mdas === null ? <Spinner w='250' /> : 
                            mdas === undefined ? 
                                logout() : 
                                <div className='w-full overflow-auto'>
                                    <table className="w-full">
                                        <TableHeader 
                                            columns={columns} 
                                            onSorting={(field, order) => 
                                                setSorting({ field, order })
                                            } 
                                        />
                                        <MdasRecord mdas={mdasData} setDeleteStatus={setDeleteStatus} />
                                    </table>
                                </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Mdas
