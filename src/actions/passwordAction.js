import axios from "../api/axios";

export const forgotPassword = async(email, setSuccess, setError, setSubmitting) => {

    setSubmitting(true);

    try{

        const body = {
            email
        }

        const response = await axios.post('forgot-password',
            body,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );
        
        console.log(response);
        setSuccess(response.data.status);

    } catch (err) {
        if (!err?.response) {
            setError('No Server Response');
        } else {
            setError(err.response.data.error);
        }
    }

    setSubmitting(false);
}



export const resetPassword = async(body, setSuccess, setError, setSubmitting) => {

    setSubmitting(true);

    try{

        const response = await axios.post('reset-password',
            body,
            {
                headers: { 'Accept' : 'application/json' }
            }
        );
        
        console.log(response);
        setSuccess(response.data.status);

    } catch (err) {
        if (!err?.response) {
            setError('No Server Response');
        } else {
            setError(err.response.data.error);
        }
    }

    setSubmitting(false);
}