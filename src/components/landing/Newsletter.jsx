import React from "react";
import { Link } from "react-router-dom";
import Taxpayer from '../../assets/taxpayer.png'

const Newsletter = () => {

    return (
        <div className="w-full py-8 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="text-[#ff8539] text-3xl md:text-4xl md:text-right font-bold py-2">Self service module for taxpayers</h1>
                    <p className="md:text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa adipisci aliquid officia harum voluptate in et minus facere, quod impedit totam corrupti ut rerum voluptatibus dicta cupiditate, quaerat deleniti odio architecto laboriosam saepe. Rerum vero quod soluta sunt quis. Neque.</p>
                    <Link to="/self-service" className="bg-[#00df9a] text-black text-center rounded-md font-medium w-full md:w-[200px] float-right my-4 px-6 py-3">Click to Access</Link>
                </div>
                <div className="my-2">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <img className="w-[250px] mx-auto" src={Taxpayer} alt="/" />
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Newsletter