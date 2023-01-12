import React from 'react'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'

const ShowDivControl = ({ div, showDiv }) => {

  return (
    <span 
        className='cursor-pointer'
        onClick={showDiv}
    >
        {div ? 
            <BiDownArrow 
                className='mt-1 mr-4' 
                size={15} 
            /> 
            :
            <BiUpArrow 
                className='mt-1 mr-4' 
                size={15} 
            />
        }
    </span>
    
  )
}

export default ShowDivControl
