import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useEffect } from 'react';

const CheckoutForm = ({ order }) => {
    const { _id, price, toolName, email, userName } = order
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    useEffect(() => {
        fetch("https://tool-place-server-1bxqf488v-aninditaroy.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: ` Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });



        setPaymentError(error?.message || '')
        setPaymentSuccess('')
        setProcessing(true)


        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setPaymentError(intentError?.message);
            setProcessing(false)
        }
        else {
            setPaymentError('')
            setTransactionId(paymentIntent.id)
            setPaymentSuccess(`Your payment is completed for ${toolName}`)



            const payment = {
                order: _id,
                transactionId: paymentIntent.id
            }

            const url = `https://tool-place-server-1bxqf488v-aninditaroy.vercel.app/orders/${_id}`
            fetch(url, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: ` Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                    console.log(data)
                })
        }
    }

    return (

        <div className="h-full text-center sm:text-left bg-blue-100 rounded-lg p-4">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || paymentSuccess || !clientSecret}>
                    Pay
                </button>

            </form>
            {
                paymentError && <p className='font-bold text-red-700'>{paymentError}</p>
            }
            {
                paymentSuccess && <div className='font-bold text-green-700'>
                    <p>{paymentSuccess}</p>
                    <p>Your Transaction id <span className="text-orange-500 font-bold">{transactionId}</span></p>
                </div>
            }
        </div>
    );
};

export default CheckoutForm;