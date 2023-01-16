import Sidebar from '../common/Sidebar';
import { HiOutlineReceiptTax, HiOutlinePlus } from 'react-icons/hi'
import { PageTitle } from '../../widgets/PageTitle';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import DataRows from '../../widgets/DataRows';
import Pagination from '../../widgets/Pagination';
import Search from '../../widgets/Search';
import Spinner from '../../widgets/Spinner';
import TableHeader from '../../widgets/TableHeader';
import TaxesRecord from './TaxesRecord';
import { getTaxes } from '../../../actions/taxesAction';

const columns = [
    {
        name:'Revenue window',
        field:'window',
        sortable:true
    }, 
    {
        name:'Tax',
        field:'title',
        sortable: true
    },
    {
        name:'Renewable?',
        field: 'name',
        sortable: false
    }, 
    {
        name:'Period',
        field:'period',
        sortable:true
    }, 
    {
        name:'Amount',
        field:'amount',
        sortable:true
    }, 
    {
        name:'Item code',
        field:'itemcode',
        sortable:true
    }, 
    {
        name:'Created by',
        field:'created_by',
        sortable:true
    },
    {
        name:'...',
        field:'',
        sortable:false
    }
]

export const Taxes = () => {

    const { token, logout } = useContext(AuthContext);

    const [taxes, setTaxes] = useState(null);
    const [error, setError] = useState(null);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    let ITEMS_PER_PAGE = itemsPerPage;

    const [deleteStatus, setDeleteStatus] = useState();

    const taxesData = useMemo(() => {

        if(taxes !== null && taxes !== undefined){

            let computedTaxes = taxes;

            if(search) {
                computedTaxes = computedTaxes.filter(
                    taxes => taxes.window.toLowerCase().includes(search.toLowerCase()) ||
                            taxes.title.toLowerCase().includes(search.toLowerCase()) ||
                            taxes.period.toLowerCase().includes(search.toLowerCase()) ||
                            taxes.itemcode.toLowerCase().includes(search.toLowerCase()) ||
                            taxes.created_by.toLowerCase().includes(search.toLowerCase())
                )
            }

            setTotalItems(computedTaxes.length);

            //Sorting users
            if( sorting.field ){
                const reversed = sorting.order === "asc" ? 1 : -1;
                computedTaxes = computedTaxes.sort(
                    (a, b) =>
                        reversed * a[sorting.field].localeCompare(b[sorting.field])
                );
            }

            return computedTaxes.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
            );
        }

    }, [taxes, currentPage, search, sorting, ITEMS_PER_PAGE])


    useEffect(() => {

        getTaxes(token, setTaxes, setError);
    }, [token, itemsPerPage, deleteStatus])

    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-6 col-span-10'>
                <PageTitle icon={<HiOutlineReceiptTax size={25} />}/>

                <div className='grid grid-cols-1 md:grid-cols-8 py-8 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                        <HiOutlineReceiptTax size={20} className="text-[#00df9a]" />
                        <h1 className='text-md'>List of Taxes</h1>
                    </div>
                    <Link to="/create-tax" className='w-full font-medium bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                        <HiOutlinePlus size={20} className="mx-auto" />
                    </Link>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-8 py-2 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 mt-1 ml-1 md:col-span-1 pr-2'>
                        {taxes !== null && (
                            <DataRows data={taxes} setItemsPerPage={setItemsPerPage} />
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
                       { taxes !== null && <Search onSearch={ (value) => {
                            setSearch(value);
                            setCurrentPage(1);
                       }} />}
                    </div>
                </div>

                <div className='w-full overflow-auto px-4'>
                    {error && <p className='text-sm font-medium text-red-700'>{error}</p>}
                    {taxes === null ? <Spinner w='250' /> : 
                        taxes === undefined ? 
                            logout() : 
                            taxes.length === 0 ? <span className='p-2 text-[red]'>No record found!</span> :
                            <div className='w-full overflow-auto'>
                                <table className="w-full">
                                    <TableHeader
                                        columns={columns} 
                                        onSorting={(field, order) => 
                                            setSorting({ field, order })
                                        } 
                                    />
                                    <TaxesRecord taxes={taxesData} setDeleteStatus={setDeleteStatus} />
                                </table>
                            </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Taxes
