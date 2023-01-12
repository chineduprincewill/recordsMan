import React from 'react'

const DataRows = ({ data, setItemsPerPage}) => {
  return (
    <select 
        className='w-[110px] p-1 rounded-md text-black text-sm'
        onChange={(e) => data !== undefined && setItemsPerPage(e.target.value)}
    >
        <option value="5">No. of rows</option>
        <option value='2'>2</option>
        <option value='5'>5</option>
        <option value='7'>7</option>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='50'>50</option>
        <option value='100'>100</option>
    </select>
  )
}

export default DataRows
