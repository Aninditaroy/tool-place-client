import React from 'react';

const Portfolio = () => {
    return (
        <div class="font-sans bg-white">
            <div className=' border-t-4 border-orange-400'>
                <h1 class="text-4xl font-bold sm:text-6xl text-center my-5">My Portfolio</h1>
            </div>

            <div>
                <header class="bg-white shadow border-t-4 border-orange-400">
                    <div class="container mx-auto px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <span class="flex items-center text-gray-800 hover:text-primary" href="#">
                                    <svg class="h-6 w-6 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span class="mx-3 font-medium text-sm md:text-base">Anindita Roy</span>
                                </span>
                            </div>
                            <div class="flex items-center -mx-2">
                                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100009160197997">
                                    <span class="flex items-center mx-2 text-gray-800">
                                        <img class="h-6 w-6 sm:h-6 sm:w-6" src="https://i.ibb.co/vYBLPhj/icons8-facebook-24.png" alt="" />
                                    </span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/16162638/anindita-roy">
                                    <span class="flex items-center mx-2 text-gray-800" >
                                        <img class="h-6 w-6 sm:h-6 sm:w-6" src="https://i.ibb.co/xHYX5S9/icons8-stack-overflow-24.png" alt="" />
                                    </span>
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Aninditaroy">
                                    <span class="flex items-center mx-2 text-gray-800">
                                        <svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                            <path d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z' />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="bg-white mt-20">
                    <div class="max-w-2xl px-6 text-center mx-auto">
                        <h2 class="text-3xl font-semibold text-gray-800">Hi, <span class="bg-primary text-white rounded px-1">I’m Anindita</span> . Nice to meet you.</h2>
                        <p class="text-gray-600 mt-4">Currently i am a student.I want to be a web developer and want to learn many things.I always try to think out of the box and through this i want to develop key soft skills.I want to see myself doing an intership or a job.So far,that's my main goal.</p>

                        <div class="flex items-end justify-center mt-16">
                            <img src="https://i.ibb.co/z68hthG/profile.png" alt="" width="189" height="188" />
                        </div>
                    </div>
                </section>

                <section class="bg-accent pattern py-16">
                    <div class="max-w-5xl px-6 mx-auto text-center">
                        <h2 class="text-2xl font-semibold text-white">About Me</h2>
                        <p class="text-gray-400 mt-4">I'm very passionate about web developing.I try to develop website applications though i'm still learning. My core skill is based on JavaScript,HTML,React,CSS and I love to do most of the things using these. I love to make the web more open to the world.I am currently studed in Metropolitan University with a bachelor's degree in Computer Science Engineering.</p>
                        <p class="text-gray-400 text-center font-bold mt-3">Email: <span className='text-primary font-normal'>anindita.roy.mu@gmail.com</span> </p>
                    </div>
                </section>

                <section class="bg-white py-20">
                    <div class="max-w-5xl px-6 mx-auto text-center">
                        <h2 class="text-2xl font-semibold text-gray-800">My Skills</h2>

                        <div class="flex flex-col items-center justify-center mt-6">
                            <span class="max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-orange-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div class="flex items-center justify-between px-4 py-2">
                                    <h3 class="text-lg font-medium text-gray-700">React</h3>
                                </div>
                            </span>

                            <span class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-orange-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div class="flex items-center justify-between px-4 py-2">
                                    <h3 class="text-lg font-medium text-gray-700">Javascript</h3>
                                </div>
                            </span>

                            <span class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-orange-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div class="flex items-center justify-between px-4 py-2">
                                    <h3 class="text-lg font-medium text-gray-700">MongoDB</h3>
                                </div>
                            </span>

                            <span class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-orange-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div class="flex items-center justify-between px-4 py-2">
                                    <h3 class="text-lg font-medium text-gray-700">HTML</h3>
                                </div>
                            </span>
                            <span class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-orange-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div class="flex items-center justify-between px-4 py-2">
                                    <h3 class="text-lg font-medium text-gray-700">CSS</h3>
                                </div>
                            </span>
                            <span class="mt-8 max-w-2xl w-full block bg-white shadow-md rounded-md border-t-4 border-orange-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" href="#">
                                <div class="flex items-center justify-between px-4 py-2">
                                    <h3 class="text-lg font-medium text-gray-700">Node JS</h3>
                                </div>
                            </span>
                        </div>


                    </div>
                </section>

                <section class="bg-accent pattern py-20">
                    <div class="max-w-5xl px-6 mx-auto text-center">
                        <h2 class="text-3xl font-semibold text-white">My Projects</h2>

                        <div class="flex items-center justify-center mt-10">
                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                <div class="max-w-xs w-full">
                                    <div class="card lg:card-side bg-base-100 shadow-xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-5">
                                        <figure><img src="https://i.ibb.co/Ky7Phqr/bottled-heaven1.png" alt="Album" /></figure>
                                    </div>
                                    <span href="#" class="block bg-white shadow-2xl text-black mt-10 rounded-md overflow-hidden">
                                        <div class="py-2 px-3 text-center text-sm">
                                            <p class="font-bold text-xl">Bottled Heaven</p>
                                            <a target="_blank" rel="noreferrer" href='https://bottled-heaven.web.app/'>
                                                <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-primary px-5 py-2  tracking-wider text-white rounded-full hover:bg-primary my-2">
                                                    <span>Visit Live Site</span>
                                                </button>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                                <div class="max-w-xs w-full">
                                    <div class="card lg:card-side bg-base-100 shadow-xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-5">
                                        <figure><img src="https://i.ibb.co/2Zhd71g/wedding-hire.png" alt="Album" /></figure>
                                    </div>
                                    <span href="#" class="block bg-white shadow-2xl text-black mt-10 rounded-md overflow-hidden">
                                        <div class="py-2 px-3 text-center text-sm">
                                            <p class="font-bold text-xl">Wedding Hire</p>
                                            <a target="_blank" rel="noreferrer" href='https://pedantic-pike-580b0b.netlify.app/'>
                                                <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-primary px-5 py-2  tracking-wider text-white rounded-full hover:bg-primary my-2">
                                                    <span>Visit Live Site</span>
                                                </button>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                                <div class="max-w-xs w-full">
                                    <div class="card lg:card-side bg-base-100 shadow-xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-5">
                                        <figure className='flex flex-col'><img src="https://i.ibb.co/ZWGNgC7/tutor-school.png" alt="Album" />
                                            <img src="https://i.ibb.co/86Hxxs4/tutor-school1.png" alt="Album" /></figure>
                                    </div>
                                    <span href="#" class="block bg-white shadow-2xl text-black mt-7 rounded-md overflow-hidden">
                                        <div class="py-2 px-3 text-center text-sm">
                                            <p class="font-bold text-xl">Tutor School</p>
                                            <a target="_blank" rel="noreferrer" href='https://tutor-school.web.app/'>
                                                <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-primary px-5 py-2  tracking-wider text-white rounded-full hover:bg-primary my-2">
                                                    <span>Visit Live Site</span>
                                                </button>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center mt-12">
                            <span class="flex items-center text-white hover:underline hover:text-gray-200" href="#">
                                <a target="_blank" rel="noreferrer" href="https://github.com/Aninditaroy"><span>View More On Github</span></a>

                                <svg class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </section >

            </div >
            <div class="mx-auto py-4  border-t-4 border-orange-400 px-28"></div>
        </div >
    );
};

export default Portfolio;