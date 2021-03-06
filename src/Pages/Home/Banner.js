import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero" style={{
            backgroundImage: "url(https://i.ibb.co/Cm2J32y/banner2.png)",
            height: '750px'
        }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className='lg:mr-auto lg:ml-24'>
                <div className="hero-content text-center  text-white">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase text-primary">Power Drill</h1>
                        <p className='text-xl font-normal'>Hand Tools
                            Power Saw Machine. <br /> Everything for your Construction needs!</p>
                        <p className="mb-5"></p>
                        <Link to='/tools'><button className="btn btn-primary rounded-full">Shop Now</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;