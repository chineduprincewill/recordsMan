import React, { Fragment, useContext, useEffect, useMemo, useState } from 'react'
import { getUtilities } from '../../actions/utilitiesAction';
import { AuthContext } from '../../context/AuthContext'

const ItemsList = ( {items} ) => {

    const { token } = useContext(AuthContext);

    const [utilities, setUtilities] = useState(null);
    const [error, setError] = useState('');

    const itemsData = useMemo(() => {

        if(utilities !== null){

            let itemsList;

            itemsList = utilities.filter(
                state => state.title === items
            )
            
            return itemsList[0].items;
        }
    }, [utilities, items])

    useEffect(() => {

        getUtilities(token, setUtilities, setError);
    }, [token])

    return (
        <Fragment>
            {error}
            {utilities === null ? '' : (
                JSON.parse(itemsData).map((item, index) => {
                    return(
                        <option key={index} value={item}>{item}</option>
                    )
                })
            )}
        </Fragment>
    )
}

export default ItemsList
