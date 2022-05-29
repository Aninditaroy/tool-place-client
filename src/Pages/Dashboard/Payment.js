import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3QUsDxGuRg5LiuXqrLLOn7UNc2ZdwdhkxBSrdKRUY95Py6ps486A8lWDu1AmFt5s1286v7oQ3wmoAdNwC3o9Bu00NBvxShbB');

const Payment = () => {
    const { id } = useParams();
    const url = `https://secret-peak-21813.herokuapp.com/orders/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='flex flex-col lg:flex-row gap-8  justify-center'>
            <div className="card w-full max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success' >Hello, {order.userName}</p>
                    <h2 className="card-title">Pay for {order.toolName}</h2>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card w-full max-w-md shadow-2xl bg-base-100 my-12">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;