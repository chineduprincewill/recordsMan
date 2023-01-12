import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi';
import { AiOutlineEdit } from 'react-icons/ai';

const TableBody = ({ records }) => {

  return (
    <tbody>
        {records.map((record) => {
            return (
                <tr key={record.id} className="w-full text-gray-400 px-1 text-sm even:bg-gray-900 odd:bg-[#0c0c0c]">
                    {Object.entries(record).forEach( prop => {
                          return(<td>{prop[1]}</td>)
                        }  
                      )
                    }
                    <td className='py-3 px-3 whitespace-nowrap flex'>
                        <span className='px-2 pt-2 text-[#00df9a]'><AiOutlineEdit size={15} /></span>
                        <span className='px-2 pt-2 text-[red]'><HiOutlineTrash size={15} /></span>
                    </td>
                </tr>
            )
        })}
    </tbody>
  )
}

export default TableBody
