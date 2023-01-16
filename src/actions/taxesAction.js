import axios from "../api/axios";

export const getTaxes = async ( token, setTaxes, setError ) => {

    try{
        const response = await axios.get('taxes',
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setTaxes(response.data.taxes);
        console.log(response.data.taxes);

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


export const getTax = async ( token, data, setTax, setError ) => {

    try{
        const response = await axios.post('tax',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setTax(response.data.tax);
        console.log(response.data.tax);

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


export const createTax = async ( token, data, setSuccess, setError, setCreating, setAdded) => {

    setCreating(true);

    try{
        const response = await axios.post('add-tax',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setSuccess(response.data.success);
        setAdded(Date.now());

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data.message);
            setError(err.response.data.message);
        } 
    }

    setCreating(false);

}


export const updateTax = async ( token, data, setSuccess, setError, setUpdating, setAdded) => {

    setUpdating(true);

    try{
        const response = await axios.post('update-tax',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setSuccess(response.data.success);
        setAdded(Date.now());

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data.message);
            setError(err.response.data.message);
        } 
    }

    setUpdating(false);

}


export const taxDelete = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        console.log(id);

        const response = await axios.post('delete-tax',
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


export const fetchWindowTaxes = async ( data, setWindowtaxes, setError, setFetching) => {

    setFetching(true);

    try{
        const response = await axios.post('window-taxes',
            data,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );
        
        setWindowtaxes(response.data.windowtaxes);

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data.message);
            setError(err.response.data.message);
        }

        
        setFetching(false);
    }

}


export const listWindows = async ( token, setWindows, setError, setFetching ) => {

    setFetching(true);

    try{
        const response = await axios.get('windows',
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setWindows(response.data.windows);
        console.log(response.data.windows);

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data.error);
        }
    }

    setFetching(false);
    
}


export const checkRequiredTaxfields = (requiredFields) => {

    let errCount = 0;

    requiredFields.forEach((field) => {
        if(field === '' || field === null || field === undefined)
        errCount += 1;
    })

    return errCount;

}