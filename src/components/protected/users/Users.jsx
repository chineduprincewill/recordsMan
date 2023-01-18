import Sidebar from '../common/Sidebar';
import { HiOutlineUserGroup, HiUserAdd } from 'react-icons/hi';
import { PageTitle } from '../../widgets/PageTitle';
import { useContext, useEffect, useMemo, useState } from 'react';
import Spinner from '../../widgets/Spinner';
import { getUsers } from '../../../actions/usersAction';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import TableHeader from '../../widgets/TableHeader';
import UsersRecord from './UsersRecord';
import Pagination from '../../widgets/Pagination';
import Search from '../../widgets/Search';
import DataRows from '../../widgets/DataRows';

const columns = [
    {
        name:'Last name',
        field: 'lastname',
        sortable: true
    }, 
    {
        name:'First name',
        field:'firstname',
        sortable:true
    }, 
    {
        name:'Email',
        field:'email',
        sortable:true
    }, 
    {
        name:'Account',
        field:'account',
        sortable:true
    }, 
    {
        name:'Group',
        field:'groupname',
    },
    {
        name:'Role',
        field:'role',
        sortable:true
    }, 
    {
        name:'...',
        field:'',
        sortable:false
    }
]


export const Users = () => {

    const { token, logout, user } = useContext(AuthContext);

    const [users, setUsers] = useState(null);
    const [error, setError] = useState();
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    let ITEMS_PER_PAGE = itemsPerPage;

    const [deleteStatus, setDeleteStatus] = useState();

    const usersData = useMemo(() => {

        //let computedUsers = users;
        if(users !== null && users !== undefined){

            let computedUsers = users;

            if(search) {
                computedUsers = computedUsers.filter(
                    user => user.lastname.toLowerCase().includes(search.toLowerCase()) ||
                            user.firstname.toLowerCase().includes(search.toLowerCase()) ||
                            user.email.toLowerCase().includes(search.toLowerCase()) ||
                            user.account.toLowerCase().includes(search.toLowerCase()) ||
                            user.role.toLowerCase().includes(search.toLowerCase()) ||
                            user.groupname.toLowerCase().includes(search.toLowerCase())
                )
            }

            setTotalItems(computedUsers.length);

            //Sorting users
            if( sorting.field ){
                const reversed = sorting.order === "asc" ? 1 : -1;
                computedUsers = computedUsers.sort(
                    (a, b) =>
                        reversed * a[sorting.field].localeCompare(b[sorting.field])
                );
            }

            return computedUsers.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
            );
        }

    }, [users, currentPage, search, sorting, ITEMS_PER_PAGE])

    useEffect(() => {
        
        getUsers(token, setUsers, setError);

    }, [token, itemsPerPage, deleteStatus])



    return (
        <div className='w-full grid grid-cols-12'>
            <Sidebar />
            <div className='mt-6 px-6 col-span-10'>

                <PageTitle icon={<HiOutlineUserGroup size={25} />}/>

                <div className='grid grid-cols-1 md:grid-cols-8 py-8 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 flex text-gray-400 space-x-4 md:col-span-7'>
                        <HiOutlineUserGroup size={20} className="text-[#00df9a]" />
                        <h1 className='text-md'>List of Users</h1>
                    </div>
                    {user && user.role === 'admin' ? (
                        <Link to="/create-user" className='w-full font-medium bg-transparent border border-[#00df9a] rounded-lg text-[#00df9a] py-3 mt-3 md:mt-0'>
                            <HiUserAdd size={20} className="mx-auto" />
                        </Link>
                    ) : ''}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-8 py-2 px-4 border-t-1 border-gray-900'>
                    <div className='py-2 mt-1 ml-1 md:col-span-1 pr-2'>
                        {users !== null && (
                            <DataRows data={users} setItemsPerPage={setItemsPerPage} />
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
                       { users !== null && <Search onSearch={ (value) => {
                            setSearch(value);
                            setCurrentPage(1);
                       }} />}
                    </div>
                </div>

                <div className='w-full overflow-auto px-4'>
                    {error && <p className='text-sm font-medium text-red-700'>{error}</p>}
                    {users === null ? <Spinner w='250' /> : 
                            users === undefined ? 
                                logout() : 
                                <div className='w-full overflow-auto'>
                                    <table className="w-full">
                                        <TableHeader 
                                            columns={columns} 
                                            onSorting={(field, order) => 
                                                setSorting({ field, order })
                                            } 
                                        />
                                        <UsersRecord users={usersData} setDeleteStatus={setDeleteStatus} />
                                    </table>
                                </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Users
