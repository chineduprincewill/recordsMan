import React, { Fragment, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { checkRequiredFields, updateTaxpayer } from '../../../actions/taxpayerAction';
import { AuthContext } from '../../../context/AuthContext';
import ItemsList from '../../widgets/ItemsList';
import ShowDivControl from '../../widgets/ShowDivControl';
import Spinner from '../../widgets/Spinner';
import TaxpayerPagesControl from '../../widgets/TaxpayerPagesControl';
import TaxpayerPagesHeader from '../../widgets/TaxpayerPagesHeader';

const EditTaxpayerForm = ({ tpObj }) => {

    const navigate = useNavigate();

    const { token } = useContext(AuthContext);

    const [category, setCategory] = useState(tpObj.category);
    const [name, setName] = useState(tpObj.name);
    const [title, setTitle] = useState(tpObj.title);
    const [lastname, setLastname] = useState(tpObj.lastname);
    const [firstname, setFirstname] = useState(tpObj.firstname);
    const [othernames, setOthernames] = useState(tpObj.othernames);
    const [maidenname, setMaidenname] = useState(tpObj.maidenname);
    const [mobile, setMobile] = useState(tpObj.mobile);
    const [email, setEmail] = useState(tpObj.email);
    const [gender, setGender] = useState(tpObj.gender);
    const [maritalstatus, setMaritalstatus] = useState(tpObj.maritalstatus);
    const [dob, setDob] = useState(tpObj.dob);
    const [startdate, setStartdate] = useState(tpObj.startdate);
    const [spouseUID, setSpouseUID] = useState(tpObj.spouseUID);
    const [noOfChildren, setNoOfChildren] = useState(tpObj.noOfChildren);
    const [address, setAddress] = useState(tpObj.address);
    const [city, setCity] = useState(tpObj.city);
    const [lga, setLga] = useState(tpObj.lga);
    const [state, setState] = useState(tpObj.state);
    const [homeaddress, setHomeaddress] = useState(tpObj.homeaddress);
    const [hometown, setHometown] = useState(tpObj.hometown);
    const [lgaOfOrigin, setLgaOfOrigin] = useState(tpObj.lgaOfOrigin);
    const [stateOfOrigin, setStateOfOrigin] = useState(tpObj.stateOfOrigin);
    const [occupation, setOccupation] = useState(tpObj.occupation);
    const [designation, setDesignation] = useState(tpObj.designation);
    const [companyUID, setCompanyUID] = useState(tpObj.companyUID);
    const [salary, setSalary] = useState(tpObj.salary);
    const [sector, setSector] = useState(tpObj.sector);
    const [averageMonthlyIncome, setAverageMonthlyIncome] = useState(tpObj.averageMonthlyIncome);
    const [nin, setNin] = useState(tpObj.nin);
    const [vin, setVin] = useState(tpObj.vin);
    const [bvn, setBvn] = useState(tpObj.bvn);
    const [dln, setDln] = useState(tpObj.dln);
    const [ipn, setIpn] = useState(tpObj.ipn);
    const [rcn, setRcn] = useState(tpObj.rcn);
    const [ownerUID, setOwnerUID] = useState(tpObj.ownerUID);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const [updating, setUpdating] = useState(false);

    const [active, setActive] = useState('category');

    const [catDiv, setCatDiv] = useState(true);
    const [bioDiv, setBioDiv] = useState(false);
    const [addDiv, setAddDiv] = useState(false);
    const [occDiv, setOccDiv] = useState(false);
    const [idnDiv, setIdnDiv] = useState(false);

    const showCatDiv = () => {
        setCatDiv(!catDiv);
    }

    const showBioDiv = () => {
        setBioDiv(!bioDiv);
    }

    const showAddDiv = () => {
        setAddDiv(!addDiv);
    }

    const showOccDiv = () => {
        setOccDiv(!occDiv);
    }

    const showIdnDiv = () => {
        setIdnDiv(!idnDiv);
    }


    const handleSubmit = () => {
        
        let result = checkRequiredFields(name, lastname, firstname, mobile, address, city, lga, occupation);

        if(result.length === 0){

            const data = {
                id : tpObj.id,category, name, title, lastname, firstname, othernames, maidenname, mobile, email, gender, maritalstatus, dob, startdate, spouseUID, noOfChildren,
                address, city, lga, state, homeaddress, hometown, lgaOfOrigin, stateOfOrigin, occupation, designation, companyUID, salary, sector, averageMonthlyIncome,
                nin, vin, bvn, dln, ipn, rcn, ownerUID
            }

            updateTaxpayer(token, data, setSuccess, setError, setUpdating);
        }
        else{
            setError('Some required fields are not filled! Please fill them');
        } 
    }


    if(success !== null){

        alert(success);
        navigate('/taxpayers');

    }
    

    return (
        <Fragment>
            <div className='px-4 pt-8'>
                <TaxpayerPagesControl setActive={setActive} active={active} category={category} />
                <TaxpayerPagesHeader active={active} />
                {error === null ? <span className='w-full text-[white] text-sm pt-1 md:mx-3' >
                    Please ensure you fill in the fields with asterisk <span className='text-[red]'>*</span> sign beneath
                </span> : <span className='w-full text-[red] text-sm pt-1 md:mx-3'>{error}</span>}
                {/* Category sectiion */}
                <div className={`p-3 ${active === 'category' ? 'block' : 'hidden'}`}>
                    <div className='grid md:grid-cols-3'>
                        <div className='md:my-4 md:px-4'>
                            <div className='my-8'>
                                <select
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    required
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    {category !== '' && <option value={category}>{category}</option>}
                                    <option value="">select category</option>
                                    <option value="individual">individual</option>
                                    <option value="organization">organization</option>
                                </select>
                                <span className='w-full text-sm text-[red]'>*</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Personal information sectiion */}
                <div className={`p-3 ${active === 'bio' ? 'block' : 'hidden'}`}>
                    <div className='grid md:grid-cols-3'>
                        {category === 'organization' && <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Name"
                                    value={name}
                                    required
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <span className='w-full text-sm text-[red]'>*</span>
                            </div>
                        </div>}
                        {category === 'individual' && 
                            <Fragment>
                                <div className='md:my-2 md:px-4'>
                                    <div className='my-2'>
                                        <select
                                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                            onChange={(e) => setTitle(e.target.value)}
                                            value={title}
                                        >
                                            {title !== '' && <option value={title}>{title}</option>}
                                            <option value="">select title</option>
                                            <ItemsList items={'Title'} />
                                        </select>
                                    </div>
                                </div>
                                <div className='md:my-2 md:px-4'>
                                    <div className='my-2'>
                                        <input 
                                            type="text" 
                                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                            placeholder="Last name"
                                            required
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                        />
                                        <span className='w-full text-sm text-[red]'>*</span>
                                    </div>
                                </div>
                                <div className='md:my-2 md:px-4'>
                                    <div className='my-2'>
                                        <input 
                                            type="text" 
                                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                            placeholder="First name"
                                            required
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                        />
                                        <span className='w-full text-sm text-[red]'>*</span>
                                    </div>
                                </div>
                                <div className='md:my-2 md:px-4'>
                                    <div className='my-2'>
                                        <input 
                                            type="text" 
                                            className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                            placeholder="Other names"
                                            value={othernames}
                                            onChange={(e) => setOthernames(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </Fragment>}
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Mobile"
                                    required
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                <span className='w-full text-sm text-[red]'>*</span>
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        {category === 'individual' && <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="date" 
                                    className="p-3 flex w-full bg-white rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Date of Birth"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                />
                                <p className='text-gray-400 text-xs my-1'>Date of Birth</p>
                            </div>
                        </div>}
                        {category === 'organization' && <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="date" 
                                    className="p-3 flex w-full bg-white rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Start date"
                                    value={startdate}
                                    onChange={(e) => setStartdate(e.target.value)}
                                />
                                <p className='text-gray-400 text-xs my-1'>Start Date</p>
                            </div>
                        </div>}
                        {category === 'individual' && <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <select
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    {gender !== '' && <option value={gender}>{gender}</option>}
                                    <option value="">select gender</option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                        </div>}
                        {category === 'individual' && <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <select
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    value={maritalstatus}
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
                        {category === 'individual' && 
                        (maritalstatus === 'married' && 
                        (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <input 
                                        type="text" 
                                        className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                        placeholder="Maiden name"
                                        value={maidenname}
                                        onChange={(e) => setMaidenname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <input 
                                        type="text" 
                                        className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                        placeholder="Spouse UID"
                                        value={spouseUID}
                                        onChange={(e) => setSpouseUID(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <input 
                                        type="text" 
                                        className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                        placeholder="No of Children"
                                        value={noOfChildren}
                                        onChange={(e) => setNoOfChildren(e.target.value)}
                                    />
                                </div>
                            </div>
                        </Fragment>))
                        }
                    </div>
                </div>
                {/* Address section */}
                <div className={`p-3 ${active === 'address' ? 'block' : 'hidden'}`}>
                    <div className='grid md:grid-cols-3'>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Address"
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <span className='w-full text-sm text-[red]'>*</span>
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="City"
                                    required
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <span className='w-full text-sm text-[red]'>*</span>
                            </div>
                        </div>
                        
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="L. G. A"
                                    required
                                    value={lga}
                                    onChange={(e) => setLga(e.target.value)}
                                />
                                <span className='w-full text-sm text-[red]'>*</span>
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <select
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    {state !== '' && <option value={state}>{state}</option>}
                                    <option value="">select state</option>
                                    <ItemsList items={'States in Nigeria'} />
                                </select>
                            </div>
                        </div>
                        {category === 'individual' && (<Fragment>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Home address"
                                    value={homeaddress}
                                    onChange={(e) => setHomeaddress(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Home town"
                                    value={hometown}
                                    onChange={(e) => setHometown(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="LGA of Origin"
                                    value={lgaOfOrigin}
                                    onChange={(e) => setLgaOfOrigin(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <select
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    value={stateOfOrigin}
                                    onChange={(e) => setStateOfOrigin(e.target.value)}
                                >
                                    {stateOfOrigin !== '' && <option value={stateOfOrigin}>{stateOfOrigin}</option>}
                                    <option value="">select state of origin</option>
                                    <ItemsList items={'States in Nigeria'} />
                                </select>
                            </div>
                        </div></Fragment>)}
                    </div>
                </div>
                {/* Occupation section */}
                <div className={`p-3 ${active === 'occupation' ? 'block' : 'hidden'}`}>
                    <div className='grid md:grid-cols-3'>
                        {category === 'individual' && (<Fragment>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <select
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    value={occupation}
                                    onChange={(e) => setOccupation(e.target.value)}
                                >
                                    {occupation !== '' && <option value={occupation}>{occupation}</option>}
                                    <option value="">select occupation</option>
                                    <ItemsList items={'Occupations'} />
                                </select>
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Designation"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Organization UID"
                                    value={companyUID}
                                    onChange={(e) => setCompanyUID(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="number" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Salary"
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                />
                            </div>
                        </div></Fragment>)}
                        {category === 'organization' && (<Fragment>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <select
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    value={sector}
                                    onChange={(e) => setSector(e.target.value)}
                                >
                                    {sector !== '' && <option value={sector}>{sector}</option>}
                                    <option value="">select sector/industry</option>
                                    <ItemsList items={'Sectors'} />
                                </select>
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="number" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Average monthly income"
                                    value={averageMonthlyIncome}
                                    onChange={(e) => setAverageMonthlyIncome(e.target.value)}
                                />
                            </div>
                        </div></Fragment>)}
                    </div>
                </div>
                {/* Identification section */}
                <div className={`p-3 ${active === 'identification' ? 'block' : 'hidden'}`}>
                    <div className='grid md:grid-cols-3'>
                        {category === 'individual' && (<Fragment>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="National Identification Number"
                                    value={nin}
                                    onChange={(e) => setNin(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Voters Identification Number"
                                    value={vin}
                                    onChange={(e) => setVin(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Driving Licence Number"
                                    value={dln}
                                    onChange={(e) => setDln(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="number" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="International Passport Number"
                                    value={ipn}
                                    onChange={(e) => setIpn(e.target.value)}
                                />
                            </div>
                        </div></Fragment>)}
                        {category === 'organization' && (<Fragment>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="RC Number"
                                    value={rcn}
                                    onChange={(e) => setRcn(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Organization Owner UID"
                                    value={ownerUID}
                                    onChange={(e) => setOwnerUID(e.target.value)}
                                />
                            </div>
                        </div></Fragment>)}
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <input 
                                    type="text" 
                                    className="p-3 flex w-full bg-transparent rounded-md text-gray-600 border-b border-[#00fd9a]" 
                                    placeholder="Bank Verification Number"
                                    value={bvn}
                                    onChange={(e) => setBvn(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Confirmation section */}
                <div className={`p-3 ${active === 'confirmation' ? 'block' : 'hidden'}`}>

                    {/* category detail */}
                    <div className='flex justify-between text-[#00fd9a] text-md mb-2 border-b border-gray-800 py-2 md:mt-12 mt-6'>
                        <span>Category</span>
                        <ShowDivControl div={catDiv} showDiv={showCatDiv} />
                    </div>
                    <div className={`${catDiv ? 'block' : 'hidden' } grid md:grid-cols-4 text-white`}>
                        <div className='md:my-4 md:px-4'>
                            <div className='my-2'>
                                <span className='text-xs'>Category</span>
                                <p className='text-md'>{category}</p>
                            </div>
                        </div>
                    </div>

                    {/* bio detail */}
                    <div className='flex justify-between text-[#00fd9a] text-md mb-2 border-b border-gray-800 py-2'>
                        <span>Personal Information</span>
                        <ShowDivControl div={bioDiv} showDiv={showBioDiv} />
                    </div>
                    <div className={`${bioDiv ? 'block' : 'hidden' } grid md:grid-cols-4 text-white`}>
                        {category === 'individual' && (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Last name</span>
                                    <p className='text-md'>{lastname}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>First name</span>
                                    <p className='text-md'>{firstname}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Other name</span>
                                    <p className='text-md'>{othernames}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Date of birth</span>
                                    <p className='text-md'>{dob}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Gender</span>
                                    <p className='text-md'>{gender}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Maiden name</span>
                                    <p className='text-md'>{maidenname}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Marital status</span>
                                    <p className='text-md'>{maritalstatus}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Spouse UID</span>
                                    <p className='text-md'>{spouseUID}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>No of Children</span>
                                    <p className='text-md'>{noOfChildren}</p>
                                </div>
                            </div>
                        </Fragment>)}
                        {category === 'organization' && (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Name</span>
                                    <p className='text-md'>{name}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Start date</span>
                                    <p className='text-md'>{startdate}</p>
                                </div>
                            </div>
                        </Fragment>)}
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <span className='text-xs'>Mobile</span>
                                <p className='text-md'>{mobile}</p>
                            </div>
                        </div>
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <span className='text-xs'>Email</span>
                                <p className='text-md'>{email}</p>
                            </div>
                        </div>
                    </div>

                    {/* address detail */}
                    <div className='flex justify-between text-[#00fd9a] text-md mb-2 border-b border-gray-800 py-2'>
                        <span>Address</span>
                        <ShowDivControl div={addDiv} showDiv={showAddDiv} />
                    </div>
                    <div className={`${addDiv ? 'block' : 'hidden' } grid md:grid-cols-4 text-white`}>
                        
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Address</span>
                                    <p className='text-md'>{address}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>City</span>
                                    <p className='text-md'>{city}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>L. G. A.</span>
                                    <p className='text-md'>{lga}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>State</span>
                                    <p className='text-md'>{state}</p>
                                </div>
                            </div>
                        {category === 'individual' && (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Home address</span>
                                    <p className='text-md'>{homeaddress}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Home town</span>
                                    <p className='text-md'>{hometown}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>L. G. A. of Origin</span>
                                    <p className='text-md'>{lgaOfOrigin}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>State of Origin</span>
                                    <p className='text-md'>{stateOfOrigin}</p>
                                </div>
                            </div>
                        </Fragment>)}
                        
                    </div>

                    {/* occupation detail */}
                    <div className='flex justify-between text-[#00fd9a] text-md mb-2 border-b border-gray-800 py-2'>
                        <span>Occupation</span>
                        <ShowDivControl div={occDiv} showDiv={showOccDiv} />
                    </div>
                    <div className={`${occDiv ? 'block' : 'hidden' } grid md:grid-cols-4 text-white`}>
                        
                        {category === 'individual' && (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Occupation</span>
                                    <p className='text-md'>{occupation}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Designation</span>
                                    <p className='text-md'>{designation}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Organization UID</span>
                                    <p className='text-md'>{companyUID}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Salary</span>
                                    <p className='text-md'>{salary}</p>
                                </div>
                            </div>
                        </Fragment>)}

                        {category === 'organization' && (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Sector / Industry</span>
                                    <p className='text-md'>{sector}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Avrage Monthly Income</span>
                                    <p className='text-md'>{averageMonthlyIncome}</p>
                                </div>
                            </div>
                        </Fragment>)}
                        
                    </div>

                    {/* identification detail */}
                    <div className='flex justify-between text-[#00fd9a] text-md mb-2 border-b border-gray-800 py-2'>
                        <span>Identification</span>
                        <ShowDivControl div={idnDiv} showDiv={showIdnDiv} />
                    </div>
                    <div className={`${idnDiv ? 'block' : 'hidden' } grid md:grid-cols-4 text-white`}>
                        
                        {category === 'individual' && (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>National Identification Number</span>
                                    <p className='text-md'>{nin}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Voters Identification Number</span>
                                    <p className='text-md'>{vin}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Driving License Number</span>
                                    <p className='text-md'>{dln}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Internation Passport Number</span>
                                    <p className='text-md'>{ipn}</p>
                                </div>
                            </div>
                        </Fragment>)}

                        {category === 'organization' && (<Fragment>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>RC Number</span>
                                    <p className='text-md'>{rcn}</p>
                                </div>
                            </div>
                            <div className='md:my-2 md:px-4'>
                                <div className='my-2'>
                                    <span className='text-xs'>Organization Owner UID</span>
                                    <p className='text-md'>{ownerUID}</p>
                                </div>
                            </div>
                        </Fragment>)}
                        <div className='md:my-2 md:px-4'>
                            <div className='my-2'>
                                <span className='text-xs'>Bank Verification Number</span>
                                <p className='text-md'>{bvn}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <TaxpayerPagesControl setActive={setActive} active={active} category={category} />
                {active === 'confirmation' &&
                    <div className='flex justify-center'>
                        {updating ? <Spinner w={135} /> :
                        <button 
                            className='w-full md:w-[200px] bg-[#00df9a] rounded-md text-black py-3 cursor-pointer'
                            onClick={handleSubmit}
                        >
                            Update Taxpayer
                        </button>}
                    </div>
                }
            </div>
                </Fragment>
    )
}

export default EditTaxpayerForm
