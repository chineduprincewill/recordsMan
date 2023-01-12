import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [revenueField, setRevenueField] = useState(null);

    const editRevenueFields = (fieldObject) => {
        setRevenueField(fieldObject);
    }

    useEffect(() => {
        
        editRevenueFields();
    }, [])

    return(
        <DataContext.Provider value={{editRevenueFields, revenueField}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;