import axios from "../api/axios"

export const getMdas = async ( token, setMdas, setError ) => {

    try{
        const response = await axios.get('mdas',
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setMdas(response.data.mdas);
        console.log(response.data.mdas);

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

export const createMda = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('create-mda',
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


export const updateMda = async ( token, data, setSuccess, setError, setUpdating) => {

    setUpdating(true);

    try{
        const response = await axios.post('update-mda',
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



export const mdaDelete = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        console.log(id);

        const response = await axios.post('delete-mda',
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


export const getMdaWindows = async ( token, data, setMdawindows, setError ) => {

    try{
        const response = await axios.post('mda-windows',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setMdawindows(response.data.mdawindows);
        console.log(response.data.mdawindows);

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


export const assignMadWindow = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('assign-window',
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


export const mdaWindowRemove = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        const response = await axios.post('remove-window',
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