import React, { Fragment, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbar from "../landing/Navbar";

const Layout = () => {

    const { isLoggedin } = useContext(AuthContext);

    let authenticatedNav;

    if(!isLoggedin){
        authenticatedNav = <Navbar />
    }

    return(
        <Fragment>
            {authenticatedNav}
        </Fragment>
    )
}

export default Layout
