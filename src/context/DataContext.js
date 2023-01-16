import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [revenueField, setRevenueField] = useState(null);
    const [taxfields, setTaxfields] = useState(null);

    const editRevenueFields = (fieldObject) => {
        setRevenueField(fieldObject);
    }

    const editTaxfields = (taxObject) => {
        setTaxfields(taxObject);
    }

    useEffect(() => {
        
        editRevenueFields();
    }, [])

    useEffect(() => {

        editTaxfields();
    }, [])

    return(
        <DataContext.Provider value={{editRevenueFields, revenueField, editTaxfields, taxfields}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;