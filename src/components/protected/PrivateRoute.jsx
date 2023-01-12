import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

export const PrivateRoute = ({ children }) => {

    const { isLoggedin } = useContext(AuthContext)

    const navigate = useNavigate();

    useEffect(() => {

        if(!isLoggedin){
            navigate('/login');
        }

    }, [isLoggedin, navigate])

 
    return children;
};
