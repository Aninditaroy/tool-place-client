import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="py-4 bg-orange-300 text-white">
                <div class="container mx-auto flex flex-col md:flex-row my-12 md:my-36">
                    <div class="flex flex-col w-full lg:w-2/5 p-8">
                        <p class="text-3xl md:text-5xl text-accent my-4 font-bold">Get In Touch</p>
                        <p class="font-sans text-sm md:text-lg my-2 md:my-4 text-accent"><svg class="inline-block fill-current mr-2"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                        </svg>Newyork, USA & Sylhet BD</p>
                        <p class="font-sans text-sm md:text-lg my-2 md:my-4 text-accent"><svg class="inline-block fill-current mr-2"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" />
                        </svg> toolsplace@gmail.com</p>
                        <p class="font-sans text-sm md:text-lg my-2 md:my-4 text-accent"><svg class="inline-block fill-current mr-2"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                        </svg>+8569845669</p>
                        <form class="p-1 flex flex-col justify-center">
                            <div class="flex flex-col">
                                <label for="name" class="hidden">Full Name</label>
                                <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary focus:outline-none" />
                            </div>

                            <div class="flex flex-col mt-2">
                                <label for="email" class="hidden">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary focus:outline-none" />
                            </div>

                            <div class="flex flex-col mt-2">
                                <label for="tel" class="hidden">Number</label>
                                <input type="tel" name="tel" id="tel" placeholder="Phone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-primary focus:outline-none" />
                            </div>

                            <button type="submit" class="md:w-32 bg-accent hover:bg-ornage-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-white hover:border-black hover:text-black transition ease-in-out duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div class=" flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div class="container">
                            <div class="relative flex flex-col min-w-0 break-words w-full">
                                <div class="flex-auto p-5 lg:p-10">
                                    <img src="https://user-images.githubusercontent.com/54521023/152731049-cc744a56-1d6f-4945-9566-0fa3b7ad1d24.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;