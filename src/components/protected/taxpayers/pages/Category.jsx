import React from 'react'

const Category = ({ setCategory, category }) => {
    return (
      <div className='p-3'>
          <div className='text-white text-xl mb-2'>Category</div>
          <div className='flex justify-around'>
              <div className='md:my-4 md:w-[40%]'>
                  <select
                      className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                      required
                      onChange={(e) => setCategory(e.target.value)}
                  >
                      {category !== '' && <option value={category}>{category}</option>}
                      <option value="">select category</option>
                      <option value="individual">individual</option>
                      <option value="organization">organization</option>
                  </select>
              </div>
          </div>
      </div>
      
    )
  }

export default Category
