import React, { Fragment, useContext } from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai'
import Logo from '../../assets/logoUpdt2.png'
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {

    const { isLoggedin } = useContext(AuthContext);


    return (
        <Fragment>
            {!isLoggedin &&
            <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 border-t border-t-gray-900">
                <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]"><img src={Logo} alt="/" width="50px" /></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium beatae, earum minus inventore possimus, sapiente excepturi expedita, illo perferendis mollitia est? Cumque repellendus iste nemo enim odit beatae error!</p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>

                <div className="lg:col-span-2 mt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                        <button className="bg-[#00df9a] text-black rounded-md font-medium w-full md:w-[400px] md:ml-4 my-6 px-6 py-3">Subscribe to our newsletter</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy</span>.</p>
                    <div className="flex md:w-[75%] mt-4">
                        <AiFillPhone size={20} />
                        <span className="mx-4">+2348064481852</span>
                    </div>
                    <div className="flex md:w-[75%] mt-2">
                        <AiTwotoneMail size={20} />
                        <span className="mx-4">support@rimstechnologies.com</span>
                    </div>
                </div>
            </div>}
            <div className="w-full border-t border-t-gray-900 py-6 text-gray-700 text-center">
                <p className="hover:text-gray-500">2022 | All RIghts Reserved</p>
            </div>
        </Fragment>
    )
}

export default Footer