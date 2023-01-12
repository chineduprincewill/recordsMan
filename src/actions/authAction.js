import axios from "../api/axios"

export const loginUser = async ( data, setSuccess, setError, setLoggingin ) => {

    setLoggingin(true);

    console.log(data);

    try{
        const response = await axios.post('login',
            data,
            {
                headers: { 'Accept' : 'application/json', 'Content-Type' : 'application/json' }
            }
        );
        
        setError(null);
        setSuccess(response.data);

    }
    catch (err) {
        if (!err?.response) {
            setError('No Response from Server');
        } else {
            console.log(err.response.data);
            setError(err.response.data.error);
            setSuccess(null);
        }
    }

    setLoggingin(false);
    
}