import axios from "../api/axios"

export const getUsers = async ( token, setUsers, setError ) => {

    try{
        const response = await axios.get('users',
            {
                headers: { 'Accept' : 'application/json', 'Authorization' : `Bearer ${token}` }
            }
        );
        
        setUsers(response.data.users);

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

export const createUser = async ( token, data, setSuccess, setError, setCreating) => {

    setCreating(true);

    try{
        const response = await axios.post('create-user',
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


export const updateUser = async ( token, data, setSuccess, setError, setUpdating) => {

    setUpdating(true);

    try{
        const response = await axios.post('update-user',
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


export const userDelete = async (token, id, setSuccess, setError ) => {

    try{

        const data = {
            id
        }

        console.log(id);

        const response = await axios.post('delete-user',
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
            setError(err.response.data.error);
        }
    }
}