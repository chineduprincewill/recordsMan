import React, { useEffect, useMemo, useState } from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

const Pagination = ({ total=0, itemsPerPage=10, currentPage=1, onPageChange }) => {

    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        if(total > 0 && itemsPerPage > 0){
            setTotalPages(Math.ceil(total / itemsPerPage))
        }

    }, [total, itemsPerPage])

    const paginationItems = useMemo(() => {
        const pages = [];

        for (let i = 1; i <= totalPages; i++){
            pages.push(<span 
                className={`p-1 px-2 text-xs border border-gray-900 cursor-pointer text-gray-900 ${i === currentPage ? 'bg-[#00df9a]' : 'bg-gray-400'}`} 
                key={i}
                onClick={() => onPageChange(i)}
            >
                {i}
            </span>);
        }

        return pages

    }, [totalPages, currentPage, onPageChange])

    if( totalPages === 0 ) return null;

    return (
        <div>
            <div className='flex px-1 py-2'>
                <span 
                    className='py-0 pt-1 px-2 cursor-pointer bg-gray-400 border border-gray-900 text-gray-900 text-sm'
                    onClick={() => currentPage !== 1 && onPageChange(currentPage - 1)}
                >
                    <GrFormPrevious size={15} />
                </span>
                {paginationItems}
                <span 
                    className='py-0 pt-1 px-2 cursor-pointer bg-gray-400 border border-gray-900 text-gray-900 text-sm'
                    onClick={() => currentPage !== totalPages && onPageChange(currentPage + 1)}
                >
                    <GrFormNext size={15} />
                </span> 
            </div>
        </div>
    )
}

export default Pagination
