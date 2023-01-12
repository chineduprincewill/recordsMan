import axios from "../api/axios";

export const getTaxpayers = async ( token, setTaxpayers, setError ) => {

    try{
        const response = await axios.get('taxpayers',
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setTaxpayers(response.data.taxpayers);
        console.log(response.data.taxpayers);

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data.error);
        }
    }
    
}


export const taxpayerDelete = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        console.log(id);

        const response = await axios.post('delete-taxpayer',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );

        setSuccess(response.data.success);

    } catch (err) {
        if (!err?.response) {
            setError('No Server Response');
        } else {
            setError(err.response.data.status);
        }
    }
}


export const setOnbardingStage = (stages, setShowphase, currstage) => {

    stages.map((stage, index) => {
        index === currstage && setShowphase(stage);
        return '';
    })

}


export const checkRequiredFields = (name, lastname, firstname, mobile, address, city, lga, occupation) => {

    const errors = [];

    if(name === '' && lastname === ''){
        errors.push('Name field is required');
    }
    if(name === '' && firstname === ''){
        errors.push('First name field is required');
    }
    if(mobile === ''){
        errors.push('Mobile number field is required');
    }
    if(address === ''){
        errors.push('Address field is required');
    }
    if(city === ''){
        errors.push('City field is required');
    }
    if(lga === ''){
        errors.push('L. G. A field is required');
    }
    if(name === '' && occupation === ''){
        errors.push('Occupation field is required');
    }

    return errors;

}


export const createTaxpayer = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('add-taxpayer',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setSuccess(response.data.success);

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data.message);
            setError(err.response.data.message);
        }

        
        setCreating(false);
    }

}


export const updateTaxpayer = async ( token, data, setSuccess, setError, setUpdating) => {

    setUpdating(true);

    try{
        const response = await axios.post('update-taxpayer',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setSuccess(response.data.success);

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data.message);
            setError(err.response.data.message);
        }

        
        setUpdating(false);
    }

}