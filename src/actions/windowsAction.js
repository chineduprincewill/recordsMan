import axios from "../api/axios";

export const getWindows = async ( token, setWindows, setError ) => {

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
    
}


export const createWindow = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('create-window',
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


export const updateWindow = async ( token, data, setSuccess, setError, setUpdating) => {

    setUpdating(true);

    try{
        const response = await axios.post('update-window',
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


export const windowDelete = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        console.log(id);

        const response = await axios.post('delete-window',
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


export const getWindowFields = async ( token, data, setFields, setError ) => {

    try{
        const response = await axios.post('window-fields',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setFields(response.data.fields);
        console.log(response.data.fields);

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


export const createWindowField = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('add-field',
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
    }

    setCreating(false);

}



export const updateWindowField = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('update-field',
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
    }

    setCreating(false);

}


export const fieldDelete = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        console.log(id);

        const response = await axios.post('delete-field',
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


