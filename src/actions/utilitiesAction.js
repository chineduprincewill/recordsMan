import axios from "../api/axios";

export const getUtilities = async ( token, setUtilities, setError ) => {

    try{
        const response = await axios.get('utilities',
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setUtilities(response.data.utilities);
        console.log(response.data.utilities);

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


export const createUtility = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('create-utility',
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


export const updateUtility = async ( token, data, setSuccess, setError, setUpdating) => {

    setUpdating(true);

    try{
        const response = await axios.post('update-utility',
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


export const utilityDelete = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        console.log(id);

        const response = await axios.post('delete-utility',
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
