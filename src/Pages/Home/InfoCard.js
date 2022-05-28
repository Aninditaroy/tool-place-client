import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = () => {
    return (

        <div className="" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)" }}>
            <div className="relative min-h-screen flex flex-col items-center justify-center " >
                <p className="text-4xl font-bold sm:text-5xl text-white mx-10 mt-5 lg:mx-0 ">Tools Place Shop Support</p>
                <div className="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                    <div className="flex flex-col mx-10 lg:mx-0 my-5">
                        <div className="bg-white shadow-md  rounded-3xl p-4">
                            <div className="flex-none lg:flex">
                                <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                                    <img src="https://i.ibb.co/Vm5b6h6/blog1.png"
                                        alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                                </div>
                                <div className="flex-auto ml-3 justify-evenly py-2">
                                    <div className="flex flex-wrap ">
                                        <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                            Tools Place
                                        </div>
                                        <h2 className="flex-auto text-lg font-medium">Mechanic Support</h2>
                                    </div>
                                    <p className="mt-3"></p>
                                    <div className="flex py-4  text-sm text-gray-500">
                                        <div className="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <p className="">Newyork,USA</p>
                                        </div>
                                        <div className="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="">8AM-10PM</p>
                                        </div>
                                    </div>
                                    <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                                    <div className="flex space-x-3 text-sm font-medium">
                                        <div className="flex-auto flex space-x-3">
                                            <button
                                                className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                                <span className="text-green-400 hover:text-green-500 rounded-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </span>
                                                <span>88 Workers</span>
                                            </button>
                                        </div>
                                        <Link to='/tools'>
                                            <button
                                                className="mb-2 md:mb-0 bg-gray-900 px-5 py-3 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                                type="button" aria-label="like">Shop Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-10 lg:mx-0 my-5">
                        <div className="bg-white shadow-md  rounded-3xl p-4">
                            <div className="flex-none lg:flex">
                                <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                                    <img src="https://i.ibb.co/Tt5tYBk/blog2.png"
                                        alt="Just a flower" className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl" />
                                </div>
                                <div className="flex-auto ml-3 justify-evenly py-2">
                                    <div className="flex flex-wrap ">
                                        <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                                            Tools Place
                                        </div>
                                        <h2 className="flex-auto text-lg font-medium">Tools Repair</h2>
                                    </div>
                                    <p className="mt-3"></p>
                                    <div className="flex py-4  text-sm text-gray-500">
                                        <div className="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <p className="">Sylhet,BD</p>
                                        </div>
                                        <div className="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="">8AM-10PM</p>
                                        </div>
                                    </div>
                                    <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                                    <div className="flex space-x-3 text-sm font-medium">
                                        <div className="flex-auto flex space-x-3">
                                            <button
                                                className="mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                                <span className="text-green-400 hover:text-green-500 rounded-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </span>
                                                <span>60 Workers</span>
                                            </button>
                                        </div>
                                        <Link to='/tools'>
                                            <button
                                                className="mb-2 md:mb-0 bg-gray-900 px-5 py-3 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                                type="button" aria-label="like">Shop Now</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default InfoCard;