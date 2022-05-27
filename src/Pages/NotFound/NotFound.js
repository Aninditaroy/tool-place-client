import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div class="min-w-screen min-h-screen bg-orange-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div class="w-full md:w-1/2 mt-48">
                    <div class="col-sm-8 offset-sm-2 text-primary text-center -mt-52">
                        <div class="relative ">
                            <h1 class="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
                                <span>4</span><span>0</span><span>4</span></h1>
                            <span class="absolute  top-0   -ml-12  text-gray-400 font-semibold">Oops!</span>
                        </div>
                        <h5 class="text-primary font-semibold -mr-10 -mt-3">Page not found</h5>
                        <p class="text-primary mt-2 mb-6">We are sorry, but the page you requested was not found!!</p>
                        <Link to='/'
                            class="bg-primary  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg">
                            Go to Home
                        </Link>
                    </div>

                </div>
                <div class="w-full md:w-1/2 text-center">
                    <img src="https://static.vecteezy.com/system/resources/previews/003/854/982/original/hand-holding-cordless-drill-color-icon-portable-electric-screwdriver-isolated-illustration-vector.jpg" class="w-64 h-64" alt="" />
                </div>
            </div>
            <div class="w-64 md:w-96 h-96 md:h-full bg-orange-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
            <div class="w-96 h-full bg-orange-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
        </div>

    );
};

export default NotFound;