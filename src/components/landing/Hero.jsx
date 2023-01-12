import React from "react";
import { Link } from "react-router-dom";
import Typed from 'react-typed'
import IGR from '../../assets/hero3.png'

const Hero = () => {

    return (
        <div className="text-white">
            <div className="max-w-[1240px] w-full mx-auto grid md:grid-cols-2 pt-8 pb-32">
                <div className="md:w-[600px] pl-8 md:p-3 my-8 md:my-18">
                    <p className="text-xl text-[#00df9a]">IGR MANAGEMENT SOLUTION</p>
                    <h1 className="md:text-7xl text-6xl font-bold py-6">Collect and Manage...</h1>
                    <div className="flex justify-left items-left">
                        <Typed 
                            className="md:text-4xl sm:text-3xl text-xl text-[#ff8539] font-bold"
                            strings={[
                                'Informal Sector Taxes', 
                                'Property and Land Taxes', 
                                'Educational institution licensing',
                                'Radio and TV License',
                                'Signage and advertising fees',
                                'And lots more...'
                            ]}
                            typeSpeed={120}
                            backSpeed={35}
                            loop
                        />
                    </div>
                    <p className="text-xl font-bold text-gray-500 my-4">A one stop shop seamless solution with ease of access</p>

                    <p className="my-8"><Link to="/login" className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto py-4 px-8 text-black">Get Started</Link></p>
                </div>
                <img className="hidden md:block md:w-[500px] mx-auto md:my-6" src={IGR} alt="/" />
                
            </div>
        </div>
    )
}

export default Hero