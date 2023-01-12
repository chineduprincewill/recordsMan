import Sidebar from '../common/Sidebar';
import { HiOutlineUser, HiOutlinePlus } from 'react-icons/hi'
import { PageTitle } from '../../widgets/PageTitle';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import TableHeader from '../../widgets/TableHeader';
import Spinner from '../../widgets/Spinner';
import { getTaxpayers } from '../../../actions/taxpayerAction';
import Pagination from '../../widgets/Pagination';
import Search from '../../widgets/Search';
import TaxpayersRecord from './TaxpayersRecord';
import DataRows from '../../widgets/DataRows';

const columns = [
    {
        name:'UID',
        field:'uid',
        sortable:true
    }, 
    {
        name:'Category',
        field:'category',
        sortable: true
    },
    {
        name:'Name',
        field: 'name',
        sortable: true
    }, 
    {
        name:'Mobile No.',
        field:'mobile',
        sortable:true
    }, 
    {
        name:'Address',
        field:'address',
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

export const Taxpayers = () => {

    const { token, logout } = useContext(AuthContext);

    const [taxpayers, setTaxpayers] = useState(null);
    const [error, setError] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    let ITEMS_PER_PAGE = itemsPerPage;

    const [deleteStatus, setDeleteStatus] = useState();

    const taxpayersData = useMemo(() => {

        //let computedUsers = users;
        if(taxpayers !== null && taxpayers !== undefined){

            let computedTaxpayers = taxpayers;

            if(search) {
                computedTaxpayers = computedTaxpayers.filter(
                    taxpayer => taxpayer.uid.toLowerCase().includes(search.toLowerCase()) ||
                            taxpayer.category.toLowerCase().includes(search.toLowerCase()) ||
                            taxpayer.name.toLowerCase().includes(search.toLowerCase()) ||
                            taxpayer.mobile.toLowerCase().includes(search.toLowerCase()) ||
                            taxpayer.address.toLowerCase().includes(search.toLowerCase()) ||
                            taxpayer.city.toLowerCase().includes(search.toLowerCase()) ||
                            taxpayer.lga.toLowerCase().includes(search.toLowerCase()) ||
                            taxpayer.created_by.toLowerCase().includes(search.toLowerCase())
                )
            }

            setTotalItems(computedTaxpayers.length);

            //Sorting users
            if( sorting.field ){
                const reversed = sorting.order === "asc" ? 1 : -1;
                computedTaxpayers = computedTaxpayers.sort(
                    (a, b) =>
                        reversed * a[sorting.field].localeCompare(b[sorting.field])
                );
            }

            return computedTaxpayers.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
            );
        }

    }, [taxpayers, currentPage, search, sorting, ITEMS_PER_PAGE])


    useEffect(() => {

        getTaxpayers(token, setTaxpayers, setError);
    }, [token, itemsPerPage, deleteStatus])

    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-6 col-span-10'>
                <PageTitle icon={<HiOutlineUser size={25} />}/>

                <div className='grid grid-cols-1 md:grid-cols-8 py-8 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                        <HiOutlineUser size={20} className="text-[#00df9a]" />
                        <h1 className='text-md'>List of Taxpayers</h1>
                    </div>
                    <Link to="/create-taxpayer" className='w-full font-medium bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                        <HiOutlinePlus size={20} className="mx-auto" />
                    </Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-8 py-2 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 mt-1 ml-1 md:col-span-1 pr-2'>
                        {taxpayers !== null && (
                            <DataRows data={taxpayers} setItemsPerPage={setItemsPerPage} />
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
                       { taxpayers !== null && <Search onSearch={ (value) => {
                            setSearch(value);
                            setCurrentPage(1);
                       }} />}
                    </div>
                </div>

                <div className='w-full overflow-auto px-4'>
                    {error && <p className='text-sm font-medium text-red-700'>{error}</p>}
                    {taxpayers === null ? <Spinner w='250' /> : 
                            taxpayers === undefined ? 
                                logout() : 
                                taxpayers.length === 0 ? <span className='p-2 text-[red]'>No record found!</span> :
                                <div className='w-full overflow-auto'>
                                    <table className="w-full">
                                        <TableHeader
                                            columns={columns} 
                                            onSorting={(field, order) => 
                                                setSorting({ field, order })
                                            } 
                                        />
                                        <TaxpayersRecord taxpayers={taxpayersData} setDeleteStatus={setDeleteStatus} />
                                    </table>
                                </div>
                    }
                </div>
        
            </div>
        </div>
    )
}

export default Taxpayers
