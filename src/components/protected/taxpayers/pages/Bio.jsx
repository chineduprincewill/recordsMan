import React from 'react'

const Bio = (
  { 
    category,
    setName,
    name,
    setLastname,
    lstname,
    setFirstname,
    firstname,
    setOthernames,
    othernames,
    setMaidenname,
    maidenname,
    setMobile,
    mobile,
    setEmail,
    email,
    setGender,
    setMaritalstatus,
    maritalstatus,
    setDob,
    setStartdate,
    setSpouseUID,
    setNoOfChildren
  }
) => {
  return (
    <div className='p-3'>
          <div className='text-white text-xl mb-2'>Personal Information</div>
          <div className='grid md:grid-cols-3'>
              {category === 'organization' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Name"
                          required
                          onChange={(e) => setName(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Last name"
                          required
                          onChange={(e) => setLastname(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="First name"
                          required
                          onChange={(e) => setFirstname(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Other names"
                          onChange={(e) => setOthernames(e.target.value)}
                      />
                  </div>
              </div>}
              <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Mobile"
                          required
                          onChange={(e) => setMobile(e.target.value)}
                      />
                  </div>
              </div>
              <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
              </div>
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="date" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Date of Birth"
                          onChange={(e) => setDob(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'organization' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Start date"
                          onChange={(e) => setStartdate(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Gender"
                          onChange={(e) => setGender(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                    <select
                        className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                        onChange={(e) => setMaritalstatus(e.target.value)}
                    >
                        {maritalstatus !== '' && <option value={maritalstatus}>{maritalstatus}</option>}
                        <option value="">select marital status</option>
                        <option value="single">single</option>
                        <option value="married">married</option>
                        <option value="divorced">divorced</option>
                    </select>
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Maiden name"
                          onChange={(e) => setMaidenname(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="Spouse UID"
                          onChange={(e) => setSpouseUID(e.target.value)}
                      />
                  </div>
              </div>}
              {category === 'individual' && <div className='md:my-4 md:px-4'>
                  <div className='my-8'>
                      <input 
                          type="text" 
                          className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                          placeholder="No of Children"
                          onChange={(e) => setNoOfChildren(e.target.value)}
                      />
                  </div>
              </div>}
          </div>
    </div>
  )
}

export default Bio
