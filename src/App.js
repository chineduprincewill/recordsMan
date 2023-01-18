import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/common/Layout";
import ForgotPassword from "./components/ForgotPassword";
import Landing from "./components/Landing";
import Footer from "./components/landing/Footer";
import Login from "./components/Login";
import SelfService from "./components/SelfService";
import Dashboard from "./components/protected/dashboard/Dashboard";
import Header from "./components/protected/common/Header";
import AuthContextProvider from "./context/AuthContext";
import { PrivateRoute } from "./components/protected/PrivateRoute";
import Users from "./components/protected/users/Users";
import Windows from "./components/protected/windows/Windows";
import Mdas from "./components/protected/mdas/Mdas";
import Utilities from "./components/protected/utilities/Utilities";
import Taxes from "./components/protected/taxes/Taxes";
import Taxpayers from "./components/protected/taxpayers/Taxpayers";
import CreateUser from "./components/protected/users/CreateUser";
import CreateMda from "./components/protected/mdas/CreateMda";
import Edituser from "./components/protected/users/EditUser";
import EditMda from "./components/protected/mdas/EditMda";
import CreateUtility from "./components/protected/utilities/CreateUtility";
import EditUtility from "./components/protected/utilities/EditUtility";
import CreateWindow from "./components/protected/windows/CreateWindow";
import EditWindow from "./components/protected/windows/EditWindow";
import DataContextProvider from "./context/DataContext";
import CreateTaxpayer from "./components/protected/taxpayers/CreateTaxpayer";
import EditTaxpayer from "./components/protected/taxpayers/EditTaxpayer";
import CreateTax from "./components/protected/taxes/CreateTax";
import MdaWindows from "./components/protected/mdawindows/MdaWindows";

const App = () => {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <Router>
            <Fragment>
              <Layout />
              <Header />
            </Fragment>
              <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/forgot-password" element={<ForgotPassword />} />
                <Route exact path="/self-service" element={<SelfService />} />
                <Route exact path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> 
                <Route exact path="/revenue-windows" element={<PrivateRoute><Windows /></PrivateRoute>} /> 
                <Route exact path="/users" element={<PrivateRoute><Users /></PrivateRoute>} />
                <Route exact path="/MDAs" element={<PrivateRoute><Mdas /></PrivateRoute>} />
                <Route exact path="/utilities" element={<PrivateRoute><Utilities /></PrivateRoute>} />
                <Route exact path="/taxes" element={<PrivateRoute><Taxes /></PrivateRoute>} />
                <Route exact path="/taxpayers" element={<PrivateRoute><Taxpayers /></PrivateRoute>} />
                <Route exact path="/create-user" element={<PrivateRoute><CreateUser /></PrivateRoute>} />
                <Route exact path="/create-mda" element={<PrivateRoute><CreateMda /></PrivateRoute>} />
                <Route exact path="/edit-user" element={<PrivateRoute><Edituser /></PrivateRoute>} />
                <Route exact path="/edit-mda" element={<PrivateRoute><EditMda /></PrivateRoute>} />
                <Route exact path="/create-utility" element={<PrivateRoute><CreateUtility /></PrivateRoute>} />
                <Route exact path="/edit-utility" element={<PrivateRoute><EditUtility /></PrivateRoute>} />
                <Route exact path="/create-revenue-window" element={<PrivateRoute><CreateWindow /></PrivateRoute>} />
                <Route exact path="/edit-revenue-window" element={<PrivateRoute><EditWindow /></PrivateRoute>} />
                <Route exact path="/create-taxpayer" element={<PrivateRoute><CreateTaxpayer /></PrivateRoute>} />
                <Route exact path="/edit-taxpayer" element={<PrivateRoute><EditTaxpayer /></PrivateRoute>} />
                <Route exact path="/create-tax" element={<PrivateRoute><CreateTax /></PrivateRoute>} />
                <Route exact path="/mda-windows" element={<PrivateRoute><MdaWindows /></PrivateRoute>} />
              </Routes>
            
            <Fragment>
              <Footer />
            </Fragment>
        </Router>
      </DataContextProvider>
    </AuthContextProvider>
    
  );
}

export default App;
