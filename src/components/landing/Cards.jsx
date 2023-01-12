import React from "react";
import Payments from '../../assets/payments.png'
import Enforcement from '../../assets/enforcement.png'
import Unique from '../../assets/unique.png'

const Cards = () => {

    return(
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-tranparent" src={Payments} alt="/" />
                    <h2 className="text-xl font-bold text-center text-[#ff8539] py-6">Multiple Payment Options</h2>
                    <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum delectus quia sed excepturi eligendi ex, provident impedit quibusdam distinctio dolore? Odit, ipsum in? Vero iusto similique eligendi? Itaque, temporibus!</p>
                    
                    <button className="bg-[#00df9a] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Read more...</button>
                </div>

                <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Unique} alt="/" />
                    <h2 className="text-xl font-bold text-center text-[#ff8539] py-6">Unique Taxpayer ID</h2>
                    <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum delectus quia sed excepturi eligendi ex, provident impedit quibusdam distinctio dolore? Odit, ipsum in? Vero iusto similique eligendi? Itaque, temporibus!</p>
                    
                    <button className="bg-black text-[#00df9a] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Read more...</button>
                </div>

                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Enforcement} alt="/" />
                    <h2 className="text-xl font-bold text-center text-[#ff8539] py-6">Efficient Payment Enforcement</h2>
                    <p className="text-center text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur earum delectus quia sed excepturi eligendi ex, provident impedit quibusdam distinctio dolore? Odit, ipsum in? Vero iusto similique eligendi? Itaque, temporibus!</p>
                    
                    <button className="bg-[#00df9a] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Read more...</button>
                </div>
            </div>
        </div>
    )
}

export default Cards