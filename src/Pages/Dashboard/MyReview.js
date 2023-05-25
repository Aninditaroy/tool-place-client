import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { signOut } from 'firebase/auth';

const MyReview = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    // console.log(user)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        const review = {
            rate: data.rate,
            reviews: data.reviews,
            email: user?.email,
            name: user?.displayName
        }

        //send to  database
        fetch('https://tool-place-server-side.vercel.app/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken')
                    navigate('/')
                }
                navigate('/')
                return res.json()

            })
            .then(added => {
                if (added) {
                    toast.success(`Thank you ${user.displayName} for your review`)
                    reset();
                }
                else {
                    toast.error("Sorry,failed to add your review")
                }
            })

    }
    return (
        <div>
            <div className='my-5 text-center'>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse py-10 mx-auto">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100 order-last  lg:order-first xl:order-first">
                    <div className="card-body py-4">
                        <div className="px-12 ">
                            <h2 className='text-2xl font-bold text-center my-10 '><span className='border-b-2 border-gray-200'>Add A Review</span></h2>
                        </div>
                        <div className="bg-white w-full flex flex-col items-center rounded">
                            <div className="flex flex-col items-center  space-y-3">

                                <div className="flex space-x-3">
                                    <svg className="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-8 h-8 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-3/4 flex flex-col pt-2">
                                <form onSubmit={handleSubmit(onSubmit)} >

                                    <div className="form-control w-full max-w-xs">

                                        <select  {...register('rate', {
                                            required: {
                                                value: true,
                                                message: "Rate is required"
                                            }
                                        })
                                        } className="select w-full max-w-xs border-2 border-black text-gray-700 rounded-xl resize-none" required>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>

                                        </select>


                                        <label className="label">
                                            {errors.rate?.type === 'required' && <span className=" text-red-500">{errors.rate.message}</span>}


                                        </label>

                                    </div>


                                    <div className="form-control w-full max-w-xs">

                                        <textarea rows="2"
                                            placeholder="Write review message here"
                                            className=" input-bordered border-2 border-black w-full max-w-xs p-4 text-gray-700 rounded-xl resize-none"

                                            {...register("reviews", {
                                                required: {
                                                    value: true,
                                                    message: "Adding review is required"
                                                }
                                            })}
                                        >
                                        </textarea>
                                        <label className="label">
                                            {errors.reviews?.type === 'required' && <span className=" text-red-500 text-sm">{errors.reviews.message}</span>}

                                        </label>
                                    </div>
                                    <button className="py-2 px-4 mb-6 text-lg bg-primary rounded-xl text-white mx-auto w-full">Rate now</button>
                                </form>

                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Link to='/' className="text-gray-600 underline">Maybe later</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyReview;