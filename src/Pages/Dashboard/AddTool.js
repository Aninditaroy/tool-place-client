import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddTool = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: tools, isLoading } = useQuery('tools', () => fetch('https://tool-place-server-1bxqf488v-aninditaroy.vercel.app/tool').then(res => res.json()))

    const imageStorageKey = '897f17e2399bad4621116b5130fd571a';
    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tool = {
                        name: data.name,
                        description: data.description,
                        min_order_quantity: data.min_order_quantity,
                        available_quantity: data.available_quantity,
                        price: data.price,
                        img: img,
                    }
                    //send to database
                    fetch('https://tool-place-server-1bxqf488v-aninditaroy.vercel.app/tool', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Tool added successfully!');
                                reset();
                            }
                            else {
                                toast.error('Failed to add a tool.');
                            }
                        })
                }
                console.log('imgbb', result);
            })
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg bg-white w-96 rounded p-10 mx-auto m-5'>
                <h2 className='text-2xl text-center'><span className='border-b-2 border-orange-200 font-semibold'>Add a tool</span></h2>
                {/* tool */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Tool"
                        className="input input-bordered w-full max-w-xs"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Tool is required'
                            }
                        })}
                    />
                </div>

                {/* image */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Tool Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register('image', {
                            required: {
                                value: true,
                                message: 'Image is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                    </label>
                </div>

                {/* description */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register('description', {
                            required: {
                                value: true,
                                message: 'Description is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                    </label>
                </div>

                {/* min order quantity */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Minimum Order Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Minimum Order Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register('min_order_quantity', {
                            required: {
                                value: true,
                                message: 'Minimum Order Quantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.min_order_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.min_order_quantity.message}</span>}
                    </label>
                </div>

                {/* available quantity */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Available Quantity"
                        className="input input-bordered w-full max-w-xs"
                        {...register('available_quantity', {
                            required: {
                                value: true,
                                message: 'Available Quantity is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.available_quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available_quantity.message}</span>}
                    </label>
                </div>

                {/* price */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Price"
                        className="input input-bordered w-full max-w-xs"
                        {...register('price', {
                            required: {
                                value: true,
                                message: 'Price is required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                    </label>
                </div>

                <input className="btn max-w-xs w-full  text-white  bg-orange-400 h-10  hover:bg-orange-300  hover:opacity-.5 active:shadow-lg shadow transition ease-in duration-200 focus:outline-none rounded-full px-10" type="submit" value="Add Tool" />
            </form>
        </div>
    );
};

export default AddTool;