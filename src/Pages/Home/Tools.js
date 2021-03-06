import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Tools = ({ tool }) => {
    const { _id, name, img, description, min_order_quantity, available_quantity, price
    } = tool;
    const navigate = useNavigate();
    const navigateToToolId = (id) => {
        navigate(`/tools/${id}`)
    }
    return (
        <div className="mb-10 mx-10 lg:mx-3 lg:mb-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <div className="max-w-sm w-full bg-slate-200 shadow-lg rounded-xl p-6">
                <div className="flex flex-col">
                    <div className="">
                        <div className="relative h-62 mb-3">
                            <div className="absolute flex flex-col top-0 right-0 p-3">
                                <button className="transition ease-in duration-300 bg-gray-100 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-black rounded-full w-9 h-9 text-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>

                            <img src={img} alt="" className=" w-96 h-96 object-fill rounded-2xl" />
                        </div>
                        <div className="flex-auto justify-evenly">
                            <div className="flex flex-wrap ">
                                <h2 className="text-xl mr-auto cursor-pointer text-black font-semibold hover:text-primary my-2">{name}</h2>
                                <div className="flex items-center w-full justify-between min-w-0 ">
                                    <p className="mr-auto cursor-pointer text-black hover:text-primary text-sm ">{description}</p>
                                    <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                                        INSTOCK</div>
                                </div>
                            </div>
                            <div className="text-xl text-black font-semibold mt-1">$<span className='text-3xl text-gray-600'>{price}</span></div>

                            <div className="flex-1 inline-flex items-center  mb-3 text-sm text-black">
                                <div className="w-full flex-none text-sm flex items-center mr-1">
                                    <span className="text-gray-500 whitespace-nowrap mr-1">Order Quantity: </span>
                                    <div className="cursor-pointer text-primary ">
                                        <span className="hover:text-primary py-0 badge badge-md badge-accent">{min_order_quantity}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 inline-flex items-center mb-3 text-sm text-black">
                                <span className="text-gray-500 whitespace-nowrap mr-1">Available Qunatity: </span>
                                <div className="cursor-pointer text-primary ">
                                    <span className="hover:text-primary py-0 badge badge-md badge-accent">{available_quantity}</span>
                                </div>
                            </div>
                            <div className="flex space-x-2 text-sm font-medium justify-start">
                                <button onClick={() => navigateToToolId(_id)} className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-primary px-5 py-3 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-primary ">
                                    <span>Add Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;