import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../actions/authAction";
import Laptop from '../assets/laptop.jpg'
import { AuthContext } from "../context/AuthContext";
import Spinner from "./widgets/Spinner";

const Login = () => {

    const navigate = useNavigate();

    const { isLoggedin, authenticate, setAuthenticatedUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggingin, setLoggingin] = useState(false);

    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);


    const handleSubmit = (e) => {

        e.preventDefault();

        const body = {
            email, password
        }

        loginUser(body, setSuccess, setError, setLoggingin);

    }


    useEffect(() => {

        if(isLoggedin){
            navigate("/dashboard");
        }
    }, [isLoggedin, navigate])


    useEffect(() => {
        if(success !== null){

            authenticate(success.token, success.role);
            setAuthenticatedUser(success.user);
            navigate("/dashboard");
            window.location.reload();
        }
    }, [authenticate, setAuthenticatedUser, navigate, success, isLoggedin]);


    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <h1 className="md:text-4xl text-3xl text-center md:text-left font-bold my-2 py-2">Login</h1>
                    <p className="font-medium w-full py-3 mx-auto"><span className="text-[red]">{error !== null && error}</span></p>
                    
                    <form onSubmit={handleSubmit}>
                        <p className="mb-8">
                            <input 
                                className="p-3 flex w-full rounded-md text-black border border-gray-900" 
                                type="email" 
                                placeholder="Enter email" 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </p>
                        <p className="mt-4">
                            <input 
                                className="p-3 flex w-full shadow rounded-md text-black border border-gray-900" 
                                type="password" 
                                placeholder="Enter password" 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </p>
                        <p className="text-sm pb-2 text-right text-gray-500 mt-1">Forgot password?<Link to="/forgot-password"><span className="text-[#00df9a]"> Click here</span></Link></p>
                        {loggingin ? <Spinner w='135' /> : 
                            <button 
                                className="bg-black text-[#00df9a] w-full rounded-md font-medium my-2 md:mx-0 py-3"
                                type="submit"
                            >
                                Sign in
                            </button>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login