import React, { Fragment, useContext, useEffect, useState } from 'react'
import { getUtilities } from '../../actions/utilitiesAction';
import { AuthContext } from '../../context/AuthContext';

const UtilityList = () => {

    const { token } = useContext(AuthContext);

    const [utilities, setUtilities] = useState(null);
    const [error, setError] = useState('');


    useEffect(() => {
        getUtilities(token, setUtilities, setError)
    }, [token])

    return (
        <Fragment>
            {error}
            {utilities === null || utilities === undefined ? '' : (
                utilities.map((utility) => {
                    return(
                        <option key={utility.id} value={utility.title}>{utility.title}</option>
                    )
                })
            )}
        </Fragment>
    )
}

export default UtilityList
