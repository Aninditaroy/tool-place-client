import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useToolDetails from '../../hooks/useToolDetails';


const ToolDetails = () => {
    const { toolId } = useParams();
    const [tool] = useToolDetails(toolId);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [user] = useAuthState(auth);
    let minOrder;
    minOrder = tool.min_order_quantity;
    const available = tool.available_quantity;
    console.log(tool);

    const onSubmit = (data, e) => {
        // console.log(data)
        if (minOrder <= data.min_order_quantity) {
            minOrder = data.min_order_quantity
        }
        console.log(minOrder)

        const order = {
            img: tool.img,
            userName: data.name,
            toolName: tool.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            minQuantity: data.min_order_quantity,
            price: tool.price * minOrder

        }
        console.log(data.min_order_quantity)

        //send to  database
        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(added => {
                if (added) {
                    toast.success("Your order is added to your cart")
                    reset();
                }
                else {
                    toast.error("Sorry,failed to add your order!")
                }
            })


    }

    return (
        <div className='min-h-screen my-16'>
            <div class="min-w-screen   flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div class="md:flex items-center -mx-10">
                        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div class="relative">
                                <img src={tool.img} class="w-80 relative z-10 rounded" alt="" />
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-10">
                            <div class="mb-10">
                                <h1 class="font-bold uppercase text-2xl mb-5">{tool.name}</h1>
                                <p class="text-sm mb-4">{tool.description}</p>


                                <div class="flex border-t border-gray-200 py-2">
                                    <span class="text-gray-500">Minimum Order Quantity</span>
                                    <span class="ml-auto text-gray-900">{tool.min_order_quantity}</span>
                                </div>

                                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                                    <span class="text-gray-500">Available Quantity</span>
                                    <span class="ml-auto text-gray-900">{tool.available_quantity}</span>
                                </div>


                            </div>
                            <div className=' flex flex-col md:flex-row lg:flex-row justify-between items-center justify-items-center'>
                                <div class="inline-block align-bottom ">
                                    <span class="text-2xl leading-none align-baseline">$</span>
                                    <span class="font-bold text-5xl leading-none align-baseline">{tool.price}</span>
                                </div>
                                <div class="inline-block align-bottom">
                                    <button class="bg-orange-300 opacity-75 hover:opacity-100 text-orange-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="text-gray-600 body-font px-5 lg:px-48 mt-16">
                <div class="lg:w-2/5 xl:w-2/5 md:w-2/3 bg-white rounded-lg p-8 flex flex-col lg:ml-auto mt-10 lg:mt-0 mx-auto shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="relative form-control w-full mb-2">
                            <label for="full-name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={user.displayName} type="text" {...register("name")} />
                        </div>


                        <div class="relative form-control w-full mb-2">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input className="title  p-2  w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" value={user.email} type="text" {...register("email")} />
                        </div>


                        <div class="relative form-control w-full mb-0">
                            <label for="order" class="leading-7 text-sm text-gray-600">Order Quantity</label>
                            <input className="title title  p-2  w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" defaultValue={minOrder} type="number" {...register("min_order_quantity", {

                                min: {
                                    value: minOrder,
                                    message: `Minimum order quantity must be greater than ${minOrder}`
                                },
                                max: {
                                    value: available,
                                    message: `Maximum order quantity must be smaller than or equal ${available}`
                                }

                            })} />
                            <label className="label">
                                {errors.min_order_quantity?.type === 'min' && <span className="label-text-alt text-red-500">{errors.min_order_quantity.message}</span>}
                                {errors.min_order_quantity?.type === 'max' && <span className="label-text-alt text-red-500">{errors.min_order_quantity.message}</span>}
                            </label>
                        </div>



                        <div class="relative form-control w-full mb-0">
                            <label for="phone" class="leading-7 text-sm text-gray-600">phone</label>
                            <input className="title p- w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Phone Number" type="number" {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Please provide your phone number!"
                                }
                            })} />
                            <label className="label">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                            </label>
                        </div>


                        <div class="relative form-control w-full mb-0">
                            <label for="address" class="leading-7 text-sm text-gray-600">Address</label>
                            <textarea className="title p-2 w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" spellCheck="false" placeholder="Your address" {...register("address", {
                                required: {
                                    value: true,
                                    message: "Please provide your address!"
                                },
                            })
                            }  ></textarea>
                            <label className="label">
                                {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                            </label>
                        </div>




                        <div className="buttons flex">
                            {
                                errors.min_order_quantity ?
                                    <button
                                        disabled
                                        type='submit' className="text-white  w-auto bg-orange-400 h-10 cursor-not-allowed hover:bg-orange-300  hover:opacity-.5 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none rounded-full px-10">Add</button>
                                    :
                                    <button
                                        type='submit' className="text-white w-auto h-10 bg-primary  hover:bg-orange-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none rounded-full px-10">Add</button>
                            }
                        </div>

                    </form>
                </div>

            </section>
        </div>
    );
};

export default ToolDetails;

