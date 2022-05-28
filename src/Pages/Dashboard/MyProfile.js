import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user/${users?.email}`)
        .then(res => res.json())
    )

    console.log(user.displayName)

    // if (isLoading) {
    //     return <Loading />
    // }
    const onSubmit = (data, e) => {
        const user = {
            userId: users._id,
            city: data.city,
            district: data.district,
            education: data.education,
            linkedin: data.linkedin,

            phone: data.phone

        }
        console.log("USER", user)

        const url = `http://localhost:5000/user/${users._id}`
        fetch(url, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },


            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Updated your information")
                    reset();
                }
                else {
                    toast.error("Sorry,failed to update")
                }
                console.log(data)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="my-3">
                <h2 className='text-2xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Edit Profile</span></h2>
                <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 bg-white p-4 shadow-2xl max-w-2xl justify-center my-16 rounded">

                    {/* name feild */}
                    <div className='form-control w-full '>
                        <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input className="title bg-gray-100 border  p-2  outline-none" spellCheck="false" placeholder="Tool Name" type="text" defaultValue={user.displayName} {...register("name", {
                            required: {
                                value: true,
                                message: "Please provide tool name ! its required"
                            },
                        })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        </label>
                    </div>

                    {/* email */}

                    <div className="form-control w-full ">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input className="title bg-gray-100 p-2 w-full  rounded border border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={user.email} type="text" {...register("email")} />
                    </div>

                    {/* education */}
                    <div className="relative form-control w-full mb-0 mt-3">
                        <label for="education" className="leading-7 text-sm text-gray-600">Education</label>
                        <input type='text' className="title bg-gray-100 p-2 w-full  rounded border border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your education" {...register("education", {
                            required: {
                                value: true,
                                message: "Please provide your education ! its required"
                            },
                        })
                        }  ></input>
                        <label className="label">
                            {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                        </label>
                    </div>

                    {/* linkedin */}
                    <div className="relative form-control w-full mb-0">
                        <label for="linkedin" className="leading-7 text-sm text-gray-600">Linkedin</label>
                        <input type='text' className="title bg-gray-100 p-2 w-full  rounded border border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your linkedin Profile Link" {...register("linkedinProfileLink", {
                            required: {
                                value: true,
                                message: "Please provide your linkedin ! its required"
                            },
                        })
                        }  ></input>
                        <label className="label">
                            {errors.linkedinProfileLink?.type === 'required' && <span className="label-text-alt text-red-500">{errors.linkedinProfileLink.message}</span>}
                        </label>
                    </div>

                    {/* Phone  */}
                    <div className="relative form-control w-full mb-0">
                        <label for="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                        <input className="title bg-gray-100 p-2 w-full  rounded border border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Phone Number" type="number" {...register("phoneNumber", {
                            required: {
                                value: true,
                                message: "Please provide your phone number ! its required"
                            }
                        })} />
                        <label className="label">
                            {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                        </label>
                    </div>

                    {/*  city & district */}
                    <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-3'>
                        <div className="relative form-control w-full mb-0">
                            <label for="city" className="leading-7 text-sm text-gray-600">City</label>
                            <input type='text' className="title bg-gray-100 p-2 w-full  rounded border border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your city" {...register("city", {
                                required: {
                                    value: true,
                                    message: "Please provide your city ! its required"
                                },
                            })
                            }  ></input>
                            <label className="label">
                                {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                            </label>
                        </div>
                        <div className="relative form-control w-full mb-0">
                            <label for="district" className="leading-7 text-sm text-gray-600">District</label>
                            <input type='text' className="title bg-gray-100 p-2 w-full  rounded border border-gray-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your district" {...register("district", {
                                required: {
                                    value: true,
                                    message: "Please provide your district ! its required"
                                },
                            })
                            }  ></input>
                            <label className="label">
                                {errors.district?.type === 'required' && <span className="label-text-alt text-red-500">{errors.district.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div className="buttons flex">
                        <button type='submit' className="btn max-w-xs block  text-white  bg-orange-400 h-10  hover:bg-orange-300  hover:opacity-.5 active:shadow-lg shadow transition ease-in duration-200 focus:outline-none rounded-full px-10 mx-auto">Update</button>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default MyProfile;